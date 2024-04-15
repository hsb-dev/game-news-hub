import React, { useEffect, useState } from "react";
import "../styles/News.css"
import axios from "axios"
import dayjs from 'dayjs'

function NewsBoard() {
    const [newsList, setNewsList] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPagecount] = useState(10);
    const [order, setOrder] = useState("desc");

    const onClickMore = () => {
      setPage(page+1);
    }

    useEffect(()=>{
      axios.get(`https://asia-northeast3-gamenews-collect.cloudfunctions.net/news?page=${page}&pageCount=${pageCount}&order=${order}`).then((response)=>{
        setNewsList(newsList.concat(response.data));
       })
       .catch(()=>{
         console.log('error');
       })
    },[page])
    
    return (
      <div className="newsboard-area">
        {newsList.map(function (news) {
          return (
            <div className="news-contents radius" key={news.id}>
              {/* 좌측 텍스트 영역 */}
              <div className="news-contents-left">
                <div className="news-contents-left-info">
                  {/* class -company, -time은 현재 css에서 미사용 */}
                  <div className="news-contents-left-info-company font-s font-c-green font-lh-20">
                    {news.publisher}
                  </div>
                  <div className="news-contents-left-info-time font-s font-c-b3 font-lh-20">
                    {
                      dayjs(news.date.toDate).format('YY/MM/DD HH:mm')
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
                <img src={`https://asia-northeast3-gamenews-collect.cloudfunctions.net/image?url=${news.thumbnailUrl}`} className="news-contents-right-img" />
              </div>
            </div>
          );
        })}
        <button onClick={onClickMore}>더보기</button>
      </div>
    );
  }

  export default NewsBoard;