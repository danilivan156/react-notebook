import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAW6cQqCQvgXN7HQFTTndCm2F4yh-3XMN4",
  authDomain: "notebook-d1148.firebaseapp.com",
  projectId: "notebook-d1148",
  storageBucket: "notebook-d1148.appspot.com",
  messagingSenderId: "1078568584557",
  appId: "1:1078568584557:web:8cec21cf9756bdea2d8664",
  measurementId: "G-4603ELZJYD"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
