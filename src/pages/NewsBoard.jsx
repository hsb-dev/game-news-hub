import React, { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Contents.scss";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import colors from "../assets/colors.json";
import Skeleton from "../components/Skeleton";
import "../styles/Anchor.css";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

function NewsBoard() {
  const MoveToTop = () => {
    document
      .querySelector(".topTarget")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(12);
  const [order, setOrder] = useState("desc");
  const [inObserve, setInObserve] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const callback = (entries) => {
    if (entries[0].isIntersecting && !isLoading && inObserve) {
      setPage((prevPage) => prevPage + 1);
      console.log("관측됨");
    }
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, observer]);

  useEffect(() => {
    setIsLoading(true);
    setInObserve(false);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/news?page=${page}&pageCount=${pageCount}&order=${order}`
      )
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
        console.log("error");
      });
  }, [page]);

  return (
    <>
      <div className="topTarget"></div>
      <div className="news-container">
        {newsList.map(function (news) {
          return (
            <a
              className="contents-card"
              href={news.link}
              key={news.id}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="content-img"
                style={{
                  backgroundImage: `url("${process.env.REACT_APP_API_URL}/image?url=${news.thumbnailUrl}")`,
                }}
              >
                <div className="contents-over-bg">
                  <div className="contents-bg-dummy"></div>
                  <div className="contents-subtext">
                    <p>{news.description}</p>
                  </div>
                </div>
              </div>

              <div className="contents-tags">
                <div className="contents-tag">게임토픽</div>
              </div>
              <div className="contents-title">{news.title}</div>

              <div className="contents-info">
                <div className="contents-info-pubname">
                  <div
                    className="contents-info-pubdot"
                    style={{ backgroundColor: colors[news.publisher] }}
                  ></div>
                  {news.publisher}
                </div>
                <div className="contents-info-dates">
                  {dayjs(news.date).format("YY.MM.DD HH:mm")}
                </div>
              </div>
            </a>
          );
        })}
        {isLoading && <Skeleton />}
        {inObserve && (
          <div
            ref={target}
            style={{ height: "1px", width: "1px", backgroundColor: "red" }}
          >
            target
          </div>
        )}
        <div
          className="anchor"
          onClick={MoveToTop}
          style={{ cursor: "pointer" }}
        >
          맨 위로
        </div>
      </div>
    </>
  );
}

export default NewsBoard;
