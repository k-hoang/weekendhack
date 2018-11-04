import firebase from "./firebase";
import * as storeApi from "./firestore";

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = () => {
  try {
    auth.signInWithRedirect(provider);
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

const handleLogin = async user => {
  const { uid: userId, displayName } = user;
  const userDoc = await storeApi.getUser(userId);
  console.log(userDoc.data());

  if (!userDoc.exists) {
    await storeApi.createUser(userId, displayName);
    return { userId, displayName };
  }
  return userDoc.data();
};

export const listenForAuthChange = (onLogin, onLogout) => {
  auth.onAuthStateChanged(async user => {
    if (user) {
      const userData = await handleLogin(user);
      onLogin(userData);
    } else {
      onLogout();
    }
  });
};
