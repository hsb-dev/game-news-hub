import "./reset.css";
import logos from "./logo.svg";
import downArrow from "./img/down-arrow.svg";
import searchIcon from "./img/search.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Subnavbar></Subnavbar>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <img src={logos} width="32" height="32" />
      <div className="Navbar-right-area">
        <div className="Search-area"></div>
        <div className="Login">로그인</div>
        <div className="Regist">회원가입</div>
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
        <img src={downArrow} width="16" height="16" style={{margin: "auto"}}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
