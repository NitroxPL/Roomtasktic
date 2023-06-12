import { doc, setDoc } from "firebase/firestore";
import { testCollection } from "../firebase/firebase";


export const f = async () => {
    const userRef = doc(testCollection, 'test1')
    await setDoc(userRef, {
        name: 'test1name',
        id: 'test1id'
    })
}