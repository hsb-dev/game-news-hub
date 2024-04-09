import "./reset.css";
import logos from "./logo.svg";
import downArrow from "./img/down-arrow.svg";
import menuIcon from "./img/menu-icon.svg";
import searchIcon from "./img/search.svg";
import sampleImg from "./img/samepl-img.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <Subnavbar />
      </div>
      <NewsBoard />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <img src={logos} width="32" height="32" style={{ cursor: "pointer" }} />
        <div className="Navbar-right-area">
          <div className="Search-area radius">
            <img
              src={searchIcon}
              className="Search-icon"
              width="24"
              height="24"
            />
            <input type="text" name="name" className="Search-input"></input>
          </div>
          <a className="Login font-s">로그인</a>
          <a className="Regist font-s radius">회원가입</a>
          <img
            src={menuIcon}
            className="Menu-hamburger"
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
  );
}

function Subnavbar() {
  return (
    <div style={{ borderBottom: "1px solid #e3e3e3", width: "100%" }}>
      <div className="Subnavbar">
        <div className="Subnavbar-left-area">
          <a className="News-tab font-s">NEWS</a>
          <a className="Topics-tab font-s">TOPICS</a>
          <div className="Tab-solid"></div>
        </div>

        <div className="Sort-area">
          <a className="Sort-area-text font-s">sort by newest</a>
          <img
            src={downArrow}
            width="16"
            height="16"
            className="Sort-area-arrow"
          />
        </div>
      </div>
    </div>
  );
}

function NewsBoard() {
  let dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="Newsboard-area">
      {dummy.map(function () {
        return (
          <div className="News-contents radius">
            {/* 좌측 텍스트 영역 */}
            <div className="News-contents-left">
              <div className="News-contents-left-info">
                {/* class -company, -time은 현재 css에서 미사용 */}
                <div className="News-contents-left-info-company font-s font-c-green font-lh-20">
                  Inven
                </div>
                <div className="News-contents-left-info-time font-s font-c-b3 font-lh-20">
                  24/04/07 08:44
                </div>
              </div>

              <div className="News-contents-left-title">
                [LCK PO] 스스로도 인정한 단독 POG '쵸비', "완벽에 가까운
                경기력이었다”
              </div>
              <div className="News-contents-left-text font-s font-c-b3">
                디플러스 기아가 7일 종각 롤파크에서 열린 '2024 LoL 챔피언스
                코리아(이하 LCK)' 스프링 스플릿 플레이오프 3라운드 패자조
              </div>
            </div>
            {/* 우측 이미지 */}
            <div className="News-contents-right radius">
              <img src={sampleImg} className="News-contents-right-img" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content font-s">© 2024 Romanbros</div>
    </div>
  );
}

export default App;
