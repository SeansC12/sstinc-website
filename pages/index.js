import { async } from "@firebase/util";
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
import NewsSection from "./NewsSectionComponent";

// const firebaseConfig2 = {
//   apiKey: "AIzaSyDWGekPgnwGZ9NktSDoikw7EjP4VqU4gw8",
//   authDomain: "sstinc-website-2.firebaseapp.com",
//   projectId: "sstinc-website-2",
//   storageBucket: "sstinc-website-2.appspot.com",
//   messagingSenderId: "362432292883",
//   appId: "1:362432292883:web:c68a1c2fecec57bbdb37e6"
// };
// const app2 = initializeApp(firebaseConfig2);
// const db2 = getFirestore(app2);


const dummyData = [
  {
    title: "Test 1",
    desription: "This is the first update",
    imageLink:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  },
  {
    title: "Test 2",
    desription: "This is the second update",
    imageLink:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    title: "Test 3",
    desription: "This is the third update",
    imageLink:
      "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  },
  {
    title: "Test 4",
    desription: "This is the fourth update",
    imageLink:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    title: "Test 5",
    desription: "This is the fifth update",
    imageLink:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

// const firebaseConfig = {
//   apiKey: "AIzaSyAe5UfatD1Z9jfpa7mnJV9mD-1l-j7RdE8",
//   authDomain: "sst-inc-website.firebaseapp.com",
//   databaseURL:
//     "https://sst-inc-website-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "sst-inc-website",
//   storageBucket: "sst-inc-website.appspot.com",
//   messagingSenderId: "224549318474",
//   appId: "1:224549318474:web:8534f293bcb7238f811bb3",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

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
  // async function getTestData() {
  //   // try {
  //   //   const docRef = doc(db, "news", "AllNews");
  //   //   const docSnap = await getDoc(docRef);
  //   //   setAllNews(docSnap.data()["News"]);
  //   // } catch {
  //     const docRef = doc(db2, "news", "AllNews");
  //     const docSnap = await getDoc(docRef);
  //     setAllNews(docSnap.data()["News"]);
  //   // }
  // }
  return <div>{dummyData.map((item) => NewsSection(item))}</div>;
}
