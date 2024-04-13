import sampleImg from "../assets/images/samepl-img.jpg";
import "../styles/News.css"
import sample from "../assets/sample-json/sample.json"
import axios from 'axios'


function NewsBoard() {

    let data = sample;
    let postYear = data.map((row) => row.date.substring(2, 4));
    let postMonth = data.map((row) => row.date.substring(5, 7));
    let postDay = data.map((row) => row.date.substring(8, 10));
    let postTime = data.map((row) => row.date.substring(11, 16));


    axios.get(data.map((row) => row.thumbnailUrl)).then((asd)=>{console.log(asd.data)})
    .catch(()=>{
      console.log('망했음')
    })

    
    

    return (
      <div className="newsboard-area">
        {data.map(function (a, i) {
          return (
            <div className="news-contents radius">
              {/* 좌측 텍스트 영역 */}
              <div className="news-contents-left">
                <div className="news-contents-left-info">
                  {/* class -company, -time은 현재 css에서 미사용 */}
                  <div className="news-contents-left-info-company font-s font-c-green font-lh-20">
                    {a.publisher}
                  </div>
                  <div className="news-contents-left-info-time font-s font-c-b3 font-lh-20">
                    {
                      
                    postYear[i] + "/" + postMonth[i] + "/" + postDay[i] + " " + postTime[i]
                    }
                  </div>
                </div>
  
                <div className="news-contents-left-title">
                {a.title}
                </div>
                <div className="news-contents-left-text font-s font-c-b3">
                  {a.description}
                </div>
              </div>
              {/* 우측 이미지 */}
              <div className="news-contents-right radius">
                <img src={sampleImg} className="news-contents-right-img" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  export default NewsBoard;