import "../styles/Navbar.css"
import "../styles/Common.css"
import logos from "../assets/images/logo.svg"
import searchIcon from "../assets/images/search.svg";
import menuIcon from "../assets/images/menu-icon.svg";

const comingSoon = () => {
  window.alert("🔧 서비스 준비 중 입니다. 🔧")
}

function Navbar() {
    return (
      <div>
        <div className="navbar">
          <img src={logos} width="32" height="32" style={{ cursor: "pointer" }} />
          <div className="navbar-right-area">
            <div className="search-area radius" onClick={comingSoon}>
              <img
                src={searchIcon}
                className="search-icon"
                width="24"
                height="24"
              />
              <input type="text" name="name" className="search-input"></input>
            </div>
            <a className="login font-s" onClick={comingSoon}>로그인</a>
            <a className="regist font-s radius" onClick={comingSoon}>회원가입</a>
            <img
              src={menuIcon}
              className="menu-hamburger"
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Navbar;

  