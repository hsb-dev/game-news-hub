import React, { useEffect, useState, useRef, useCallback } from "react";
import "../../styles/Contents.scss";
import axios from "axios";
import Skeleton from "../Skeleton";
import "../../styles/Anchor.css";
import { logEvent } from "firebase/analytics";
import { analytics } from "../..";
import NewsItem from "./NewsItem";

function NewsBoard({ categoryList, selectedPublishers }) {
  // News List
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(12);
  const [order, setOrder] = useState("desc");

  const [colors, setColors] = useState({});

  // Observer
  const [inObserve, setInObserve] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const onObserveTarget = (entries) => {
    if (entries[0].isIntersecting && inObserve) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const observer = new IntersectionObserver(onObserveTarget, options);

  useEffect(() => {
    const currentTarget = target.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [observer]);

  useEffect(() => {
    setInObserve(false);

    getNewsList();
  }, [page]);

  useEffect(() => {
    if (selectedPublishers.length === 0) {
      setNewsList([]);
      setIsLoading(false);
      setInObserve(false);
      return;
    }

    setNewsList([]);
    onClickMoveToTop();
    if (page === 0) {
      getNewsList();
    } else {
      setPage(0);
    }
  }, [selectedPublishers]);

  // category list 에서 컬러값만 추출
  // object 형태({})에 키값으로 publisher.title, value로 color값
  useEffect(() => {
    const tmpColors = {};
    categoryList.forEach((category) => {
      category.publishers.forEach((publisher) => {
        tmpColors[publisher.title] = publisher.color;
      });
    });
    setColors(tmpColors);
  }, [categoryList]);

  const getNewsList = () => {
    setIsLoading(true);

    let url = `${process.env.REACT_APP_API_URL}/news?page=${page}&pageCount=${pageCount}&order=${order}`;

    if (selectedPublishers.length > 0) {
      url += `&publishers=${selectedPublishers.join(",")}`;
    }

    axios
      .get(url)
      .then((response) => {
        setNewsList((prevNewsList) => [...prevNewsList, ...response.data]);
        setIsLoading(false);
        setInObserve(true);
        if (response.data.length < pageCount) {
          setInObserve(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onClickMoveToTop = () => {
    document
      .querySelector(".topTarget")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const onClickNews = (id) => {
    logEvent(analytics, "clickNews", { id: id });
  };

  return (
    <>
      <div className="topTarget"></div>
      <div className="news-container">
        {newsList.map((news) => (
          <NewsItem
            news={news}
            onClickNews={onClickNews}
            dotColor={colors[news.publisher]}
          />
        ))}
        {isLoading && <Skeleton />}
        {inObserve && (
          <div
            ref={target}
            style={{ height: "1px", width: "1px", backgroundColor: "red" }}
          ></div>
        )}
        {newsList.length === 0 && !isLoading && categoryList.length > 0 && (
          <div className="no-contents">해당하는 뉴스가 없습니다.</div>
        )}
        <div
          className="anchor"
          onClick={onClickMoveToTop}
          style={{ cursor: "pointer" }}
        >
          맨 위로
        </div>
      </div>
    </>
  );
}

export default NewsBoard;
