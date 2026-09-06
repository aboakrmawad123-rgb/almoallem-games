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
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        error: "Missing token"
      });
    }

    // اشترك الجهاز بالإشعارات العامة
    await admin.messaging().subscribeToTopic(token, "all-users");

    // اختبار مباشر لنفس الجهاز
    const testMessageId = await admin.messaging().send({
      token: token,
      data: {
        title: "اختبار الإشعارات",
        body: "إذا ظهر هذا الإشعار فالجهاز يستقبل Firebase بشكل صحيح.",
        url: "/"
      },
      webpush: {
        headers: {
          Urgency: "high"
        }
      }
    });

    return res.status(200).json({
      success: true,
      subscribed: true,
      directTestSent: true,
      messageId: testMessageId
    });

  } catch (error) {
    console.error("Subscribe/test error:", error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
