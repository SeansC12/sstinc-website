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
import PostStreamCard from "../components/post_stream_card";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

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
const dummyData = [
  {
    title: "Test 1",
    desription: "This is the first update",
    icon: GoProject,
    imageLink:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  },
  {
    title: "Test 2",
    desription: "This is the second update",
    icon: GoPulse,
    imageLink:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    title: "Test 3",
    desription: "This is the third update",
    icon: GoPin,
    imageLink:
      "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  },
  {
    title: "Test 4",
    desription: "This is the fourth update",
    icon: GoPlay,
    imageLink:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    title: "Test 5",
    desription: "This is the fifth update",
    icon: GoRepoClone,
    imageLink:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

export default function Home() {
  const [data, setData] = useState(null);
  async function getTestData() {
    const docRef = doc(db, "attendance", "10-02-22");
    const docSnap = await getDoc(docRef);
    setData(docSnap.data()["Rick Astley"]);
  }
  getTestData();
  return (
    <div>
      {dummyData.map((item) => (
        <PostStreamCard data={dummyData} />
      ))}

    </div>
  );
}
