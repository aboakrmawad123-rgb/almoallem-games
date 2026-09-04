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

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Missing token" });
    }

    await admin.messaging().subscribeToTopic(token, "all-users");

    return res.status(200).json({
      success: true,
      message: "Subscribed to all-users",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
