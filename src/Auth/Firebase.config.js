import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVeNXVaQDUUmdu4sZ5bxD9zS7dhxK6IkQ",
  authDomain: "job-task-c3cc1.firebaseapp.com",
  projectId: "job-task-c3cc1",
  storageBucket: "job-task-c3cc1.appspot.com",
  messagingSenderId: "87881232522",
  appId: "1:87881232522:web:4269b855b07c1612657d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth