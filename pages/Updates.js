import { useState } from "react";
import Header from "../components/Header";
import LargePostStreamCard from "../components/LargePostStreamCard";
import SmallPostStreamCard from "../components/SmallPostStreamCard";

const postStream = [
  {
    genre: "Social Media",
    title: "SST Inc. is back on Instagram! Check it out!",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    date: "28 June, 2022",
  },
  {
    genre: "Curriculum",
    title: "Lessons for the Secondary 1 are starting after the holidays!",
    image:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
    date: "28 June, 2022",
  },
  {
    genre: "Management",
    title: "The new EXCO's have been elected. Congratulations!",
    image:
      "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    date: "28 June, 2022",
  },
  {
    genre: "Management",
    title: "The President and Vice-President have been elected!",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    date: "28 June, 2022",
  },
];

const latestNews = {
  genre: "Events",
  title:
    "ProjectSF is making a comeback, in 2023! Start forming your companies, and by September, showcase an app that benefits the community!",
  image:
    "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  date: "28 June, 2022",
};

export default function Home() {
  return (
    <div>
      <Header tab="Updates" />
      <div className="flex items-center justify-center flex-col bg-[#001220] text-white">
        <div className="mt-8 mb-8 text-3xl">Latest News</div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-8 m-auto mx-5 max-w-4xl">
          <div className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1">
            <LargePostStreamCard data={latestNews} />
          </div>
          {postStream.map((item, key) => (
            <SmallPostStreamCard
              key={key}
              className="px-4 py-6 sm:px-0"
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
