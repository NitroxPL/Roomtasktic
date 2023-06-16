import { doc, setDoc } from "firebase/firestore";
import { testCollection } from "../firebase/firebase";

export const f = async () => {
  const userRef = doc(testCollection, "test1");
  await setDoc(userRef, {
    name: "test1name",
    id: "test1id",
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error: Error) => {
      console.error("Error writing document: ", error);  // without error handling, there will be runtime error shown. Currently only authorized users can write to the database.
    });
};
