import firebase from "./firebase";

const firestore = firebase.firestore();

const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

export const setFcmToken = (userId, token) =>
  firestore
    .collection(`users`)
    .doc(userId)
    .update({
      fcmToken: token
    });

export const getUser = userId =>
  firestore
    .collection(`users`)
    .doc(userId)
    .get();

export const createUser = (userId, displayName) =>
  firestore
    .collection(`users`)
    .doc(userId)
    .set({
      userId,
      displayName
    });
