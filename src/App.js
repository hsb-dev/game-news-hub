import "./reset.css";
import logos from "./logo.svg";
import searchIcon from "./img/search.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Subnavbar></Subnavbar>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img alt="" src={logos} width="32" height="32" className="logo-img" />
        <div className="search-bar">
        <img alt="" src={searchIcon} width="24" height="24" className="search-icon" />
        <input className="search-area" type="text" />
        </div>
        <div className="subnavbar-link">
          <div style={{ margin: "auto" }}>
            <a href="" className="title-text-regist">
              commit test
            </a>
            <a href="" className="title-text-login">
              회원가입
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

function Subnavbar(){
  return(
    <div className="navbar" style={{borderBottom: "1px solid #000"}}>
      <div className="navbar-link">
          <div style={{ margin: "auto" }}>
            <a href="" className="title-text-news">
              News
            </a>
            <a href="" className="title-text-contents">
              Contents
            </a>
          </div>
        </div>
    </div>
  );
}

export default App;
