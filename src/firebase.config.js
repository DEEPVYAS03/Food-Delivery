import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADVJuWM81gapOcjLTd0punLL_hOx-Qp5M",
  authDomain: "restaurantapp-90739.firebaseapp.com",
  databaseURL: "https://restaurantapp-90739-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-90739",
  storageBucket: "restaurantapp-90739.appspot.com",
  messagingSenderId: "163015258761",
  appId: "1:163015258761:web:cee50251c4e0501c2fcc58"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
