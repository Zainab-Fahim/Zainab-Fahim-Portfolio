// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinrzHJoLA5vch4A8B-V2ljmAKo6_yXi4",
  authDomain: "zainab-fahim.firebaseapp.com",
  databaseURL: "https://zainab-fahim-default-rtdb.firebaseio.com",
  projectId: "zainab-fahim",
  storageBucket: "zainab-fahim.appspot.com",
  messagingSenderId: "773088135132",
  appId: "1:773088135132:web:4c42d85adc9a4391f4f119",
  measurementId: "G-V82KQ2DMZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);