import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";
import "firebase/firestore";
import config from "./config";

firebase.initializeApp(config);

export default firebase;
