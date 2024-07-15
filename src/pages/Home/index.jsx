import "../../styles/Common.css";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import NewsBoard from "../../components/Home/NewsBoard.jsx";
import { useEffect, useState } from "react";

function Home() {
  const [categoryList, setCategoryList] = useState([]);

  const [selectedPublishers, setSelectedPublishers] = useState([]);

  // categoryList 가져오기
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categories`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res.sort((a, b) => a.sort - b.sort));

        // 초기 선택된 카테고리
        const tmpList = [];
        res.forEach((category) => {
          category.publishers.forEach((publisher) => {
            tmpList.push(publisher.title);
          });
        });
        setSelectedPublishers(tmpList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onChangeSelectedPublisher = (publishers) => {
    setSelectedPublishers(publishers);
  };

  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="content-area">
        <Filter
          categoryList={categoryList}
          selectedPublishers={selectedPublishers}
          onChangeSelectedPublisher={onChangeSelectedPublisher}
        />
        <NewsBoard
          categoryList={categoryList}
          selectedPublishers={selectedPublishers}
        />
      </div>
    </div>
  );
}

export default Home;
