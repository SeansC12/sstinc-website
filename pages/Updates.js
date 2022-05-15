import { useState } from "react";
import PostStreamCard from "../components/PostStreamCard";
import Header from "../components/header";

const dummyData = [
  {
    title: "Test 1",
    description: "This is the first update",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  },
  {
    title: "Test 2",
    description: "This is the second update",
    image:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    title: "Test 3",
    description: "This is the third update",
    image:
      "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  },
  {
    title: "Test 4",
    description: "This is the fourth update",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    title: "Test 5",
    description: "This is the fifth update",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

export default function Home() {
  const [allNews, setAllNews] = useState([]);

  return (
    <div>
      <Header tab="Updates" />
      {dummyData.map((item) => (
        <PostStreamCard className="px-4 py-6 sm:px-0" data={item} />
      ))}
    </div>
  );
}
