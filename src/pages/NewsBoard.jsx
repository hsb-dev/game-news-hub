import React, { useEffect, useState } from "react";
import "../styles/News.css"
import axios from "axios"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import colors from "../assets/colors.json";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

function NewsBoard() {
    const [newsList, setNewsList] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPagecount] = useState(10);
    const [order, setOrder] = useState("desc");

    const [showMoreButton, setShowMoreButton] = useState(true);

    const onClickMore = () => {
      setPage(page+1);
    }


    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/news?page=${page}&pageCount=${pageCount}&order=${order}`).then((response)=>{
        setNewsList(newsList.concat(response.data));
        console.log(newsList);

        if(response.data.length < pageCount){
          setShowMoreButton(false);
        }
       })
       .catch(()=>{
         console.log('error');
       })
    },[page])
    
    
    return (
      <div className="newsboard-area">
        {newsList.map(function (news) {
          return (
            <a className="news-contents-container" href={news.link} key={news.id} target='_blank'>
            <div className="news-contents radius">
              {/* 좌측 텍스트 영역 */}
              <div className="news-contents-left">
                <div className="news-contents-left-info">
                  {/* class -company, -time은 현재 css에서 미사용 */}
                  <div className="news-contents-left-info-company font-s font-bold font-lh-20"
                    style={{
                      color: colors[news.publisher],
                    }}
                  >
                    {news.publisher}
                  </div>
                  <div className="news-contents-left-info-time font-s font-c-b3 font-lh-20">
                    {
                      dayjs(news.date).format("YY/MM/DD HH:mm")
                    } 
                  </div>
                </div>
  
                <div className="news-contents-left-title">
                {news.title}
                </div>
                <div className="news-contents-left-text font-s font-c-b3">
                  {news.description}
                </div>
              </div>
              {/* 우측 이미지 */}
              <div className="news-contents-right radius">
                <img src={`${process.env.REACT_APP_API_URL}/image?url=${news.thumbnailUrl}`} className="news-contents-right-img" />
              </div>
            </div>
            </a>
          );
        })}
        {
          showMoreButton && <button className="more-btn" onClick={onClickMore} style={{cursor : "pointer"}}>&#x1F3AE; 뉴스 더 불러오기+</button>
        }
      </div>
    );
  }

  export default NewsBoard;