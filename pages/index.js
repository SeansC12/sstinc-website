import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import {useState} from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyAe5UfatD1Z9jfpa7mnJV9mD-1l-j7RdE8",
  authDomain: "sst-inc-website.firebaseapp.com",
  databaseURL:
    "https://sst-inc-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sst-inc-website",
  storageBucket: "sst-inc-website.appspot.com",
  messagingSenderId: "224549318474",
  appId: "1:224549318474:web:8534f293bcb7238f811bb3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export default function Home() {
  const [data, setData] = useState(null)
  async function getTestData() {
    const docRef = doc(db, "attendance", "10-02-22");
    const docSnap = await getDoc(docRef);
    setData(docSnap.data()["Rick Astley"])
  }
  getTestData()
  return (
    <div>
      <h1 className="bg-lime-500">Hello World</h1>
      <h2>data from firebase: {data}</h2>
    </div>
  );
}
