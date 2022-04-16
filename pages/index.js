import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import { useState } from "react";
import {
  GoProject,
  GoPulse,
  GoPin,
  GoPlay,
  GoRepoClone,
  GoRepo,
} from "react-icons/go";

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
const db = getFirestore(app);

const icons = {
  GoProject: GoProject,
  GoPulse: GoPulse,
  GoPin: GoPin,
  GoPlay: GoPlay,
  GoRepoClone: GoRepoClone,
  GoRepo: GoRepo,
};


export default function Home() {
  const [allNews, setAllNews] = useState([]);
  async function getTestData() {
    const docRef = doc(db, "news", "AllNews");
    const docSnap = await getDoc(docRef);
    setAllNews(docSnap.data()["News"]);
    console.log(docSnap.data()['News']);
  }
  getTestData();
  return <div>{allNews.map((item) => NewsSection(item))}</div>;
}

function NewsSection(item) {
  return (
    <div class="p-6 mb-7 max-w-7xl mx-auto bg-white rounded-xl shadow-none flex items-center hover:shadow-lg cursor-pointer">
      <div class="shrink-0">
        <img src={item.imageLink} width={200} height={150}></img>
      </div>
      <div class="pl-28 pt-2">
        <div class="text-xl font-medium text-black break-words">
          {item.title}
        </div>
        <p class="text-slate-500">{item.desription}</p>
      </div>
    </div>
  );
}
