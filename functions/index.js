const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.alertUser = functions.firestore
  .document(`messages/{messageId}`)
  .onCreate((snap, context) => {
    const registrationToken =
      "ddyDcUXgNi0:APA91bGGBQQDcLWw1YdQIbZ15tbmbGI0b-m_KBERWwJ_8k6nNox2XQU2C3mFktu7KLpjNJ9iDnRaoAi4yPu_1uIVMwsBx-_bJcJ13eH_-iddFrGPWUObKyW0AYI7sCC47oE4oZo02DLe";

    const message = {
      data: {
        text: "hello"
      },
      token: registrationToken
    };

    admin
      .messaging()
      .send(message)
      .then(response => console.log("sent message", response))
      .catch(e => console.log(e));
  });
