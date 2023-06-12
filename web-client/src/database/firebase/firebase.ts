import { Analytics, getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { CollectionReference, DocumentData, Firestore, collection, getFirestore } from "firebase/firestore";
import { f } from "../services/testService";
import { Test } from "./dto/Test";

const firebaseConfig = {
  apiKey: "AIzaSyDFriJNJLYG-b6hveD-759bQxCPLv1uXjU",
  authDomain: "roomtasktic.firebaseapp.com",
  projectId: "roomtasktic",
  storageBucket: "roomtasktic.appspot.com",
  messagingSenderId: "225017633431",
  appId: "1:225017633431:web:abb02d376ad911ca5827d2",
  measurementId: "G-08X6NNX7G1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const analytics: Analytics = getAnalytics(app);
export const db: Firestore = getFirestore(app);

export const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}
export const testCollection = createCollection<Test>('tests')
f()
