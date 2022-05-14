import { useState } from "react";
import PostStreamCard from "../components/PostStreamCard";
import Header from "../components/header";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDoc, collection, doc } from "firebase/firestore";
import { a } from "react-spring";


// const firebaseConfig = {
//   apiKey: "AIzaSyANJ9zj5RXXvha1HAavXt-2300lK0Tyy1o",
//   authDomain: "sstincwebsite.firebaseapp.com",
//   projectId: "sstincwebsite",
//   storageBucket: "sstincwebsite.appspot.com",
//   messagingSenderId: "618289447481",
//   appId: "1:618289447481:web:c8b32a37032453f5bd83e8",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

const dummyData = [
  {
    title: "Test 1",
    desription: "This is the first update",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  },
  {
    title: "Test 2",
    desription: "This is the second update",
    image:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    title: "Test 3",
    desription: "This is the third update",
    image:
      "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  },
  {
    title: "Test 4",
    desription: "This is the fourth update",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    title: "Test 5",
    desription: "This is the fifth update",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

export default function Home() {
  const [allNews, setAllNews] = useState([]);
  // async function getNews() {
  //   const r = await getDoc(doc(db, "News", "News"))
  //   setAllNews(r.data().news)
  // }
  // getNews()
  return (
    <div>
      <Header tab="Home" />
      {dummyData.map((item) => ( //replace dummy data with allNews if firebase
        <PostStreamCard className="px-4 py-6 sm:px-0" data={item} />
      ))}
    </div>
  );
}
