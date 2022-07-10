import Header from "../components/Header";
import Footer from "../components/Footer";
import LargePostStreamCard from "../components/LargePostStreamCard";
import SmallPostStreamCard from "../components/SmallPostStreamCard";
import { Updates } from "../public/data";

export default function Home() {
  const postStream = Updates.PostStream;
  const latestNews = Updates.LatestNews;

  return (
    <div>
      <Header tab="Updates" />
      <div className="flex items-center justify-center flex-col bg-[#001220] text-white pb-28">
        <div className="mt-8 mb-8 text-3xl font-lato">Latest News</div>
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
      <Footer />
    </div>
  );
}
