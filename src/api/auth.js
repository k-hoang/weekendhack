import firebase from "./firebase";

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

export const listenForAuthChange = (onLogin, onLogout) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      onLogin(user);
    } else onLogout();
  });
};
