import "./reset.css";
import logos from "./logo.svg";
import downArrow from "./img/down-arrow.svg";
import menuIcon from "./img/menu-icon.svg";
import searchIcon from "./img/search.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Subnavbar></Subnavbar>
      <NewsBoard></NewsBoard>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <img src={logos} width="32" height="32" style={{cursor:"pointer"}} />
      <div className="Navbar-right-area">
        <div className="Search-area">
          <img src={searchIcon} className="Search-icon" width="24" height="24" />
          <input type="text" name="name" className="Search-input"></input>
        </div>
        <div className="Login">로그인</div>
        <div className="Regist">회원가입</div>
        <img src={menuIcon} className="Menu-hamburger" width="24" height="24"/>
      </div>
      </div>
    </div>
  );
}

function Subnavbar(){
  return(
    <div style={{borderBottom: "1px solid #e3e3e3", width: "100%"}}>
      <div className="Subnavbar">
        <div className="Subnavbar-left-area">
          <div className="News-tab">NEWS</div>
          <div className="Topics-tab">TOPICS</div>
          <div className="Tab-solid"></div>
        </div>

        <div className="Sort-area">
          <div className="Sort-area-text">sort by newest</div>
        <img src={downArrow} width="16" height="16" className="Sort-area-arrow"/>
        </div>
        
      </div>
    </div>
  );
}

function NewsBoard() {
  return(
    <div>
    </div>
  )
}

function Footer() {
  return(
    <div>
    </div>
  )
}

export default App;
