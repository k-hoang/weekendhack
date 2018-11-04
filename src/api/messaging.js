import firebase from "./firebase";
import * as storeApi from "./firestore";

const messaging = firebase.messaging();

const initialize = async userId => {
  messaging.usePublicVapidKey(
    "BD62jb98zozTHlIL6hPAjuj06_d55UAlUby0nNX8werPLaVOtpFZx6ON5VJbKup0SDPZ_YTJu18h5nriTT015AU"
  );
  let token = null;
  try {
    await messaging.requestPermission();
    token = await messaging.getToken();
    await storeApi.setFcmToken(userId, token);
  } catch (e) {
    console.log("token not obtained", e);
  }
};

export const listenForMessages = async (userId, onMessage) => {
  await initialize(userId);
  messaging.onMessage(payload => onMessage(payload));
  console.log("listener added");
};
