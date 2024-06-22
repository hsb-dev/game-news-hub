import "../styles/reset.css";
import "../styles/Common.css";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import NewsBoard from "./NewsBoard";
import { useEffect, useState } from "react";

function Home() {
  const [categoryList, setCategoryList] = useState([]);

  // categoryList 가져오기
  useEffect(() => {
    fetch(
      "https://asia-northeast3-gamenews-collect.cloudfunctions.net/categories"
    )
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res.sort((a, b) => a.sort - b.sort));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="content-area">
        <Filter categoryList={categoryList} />
        <NewsBoard categoryList={categoryList} />
      </div>
    </div>
  );
}

export default Home;
