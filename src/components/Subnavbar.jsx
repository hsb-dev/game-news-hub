import "../styles/Subnavbar.css"
import "../styles/Common.css"
import downArrow from "../assets/images/down-arrow.svg";

function Subnavbar() {
    return (
      <div style={{ borderBottom: "1px solid #e3e3e3", width: "100%" }}>
        <div className="subnavbar">
          <div className="subnavbar-left-area">
            <a className="news-tab font-s">NEWS</a>
            <a className="topics-tab font-s">TOPICS</a>
            <div className="tab-solid"></div>
          </div>
  
          <div className="sort-area">
            <a className="sort-area-text font-s">sort by newest</a>
            <img
              src={downArrow}
              width="16"
              height="16"
              className="sort-area-arrow"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Subnavbar;