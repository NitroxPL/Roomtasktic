import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFriJNJLYG-b6hveD-759bQxCPLv1uXjU",
  authDomain: "roomtasktic.firebaseapp.com",
  projectId: "roomtasktic",
  storageBucket: "roomtasktic.appspot.com",
  messagingSenderId: "225017633431",
  appId: "1:225017633431:web:abb02d376ad911ca5827d2",
  measurementId: "G-08X6NNX7G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);