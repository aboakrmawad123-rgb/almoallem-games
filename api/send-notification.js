const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminKey = req.headers["x-admin-key"];

  if (!adminKey || adminKey !== process.env.NOTIFICATION_ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        error: "Missing title or body",
      });
    }

    const response = await admin.messaging().send({
      topic: "all-users",

      notification: {
        title: String(title),
        body: String(body),
      },

      webpush: {
        fcmOptions: {
          link: "https://almoallemmemorygame.vercel.app/",
        },
      },
    });

    return res.status(200).json({
      success: true,
      messageId: response,
    });
  } catch (error) {
    console.error("Send notification error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
