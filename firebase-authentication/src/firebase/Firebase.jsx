import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCODNC_gwO1y6Fji2QLMiCa_rfteAlOrrE",
  authDomain: "fir-demo-97208.firebaseapp.com",
  projectId: "fir-demo-97208",
  storageBucket: "fir-demo-97208.appspot.com",
  messagingSenderId: "178011157798",
  appId: "1:178011157798:web:d8daa5ec6c068de4583de7",
  measurementId: "G-65K6LCR7RW"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();

export {app,auth}

