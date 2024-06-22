import React, { useEffect, useState } from "react";
import "../styles/Filter.scss";
import checkIcon from "../assets/images/check-icon.svg";
import dropDown from "../assets/images/dropdown.svg";
import dropUp from "../assets/images/dropup.svg";
import Footer from "../components/Footer";

// dropdown 클릭 시 동작되야 하는거
// 1. filter-dropbox height 변경
// 2. filter-media-companys display-none class 추가
// 3. img.dropdown의 src를 dropUp으로 변경

function Filter({ categoryList }) {
  const [openedCategory, setOpenedCategory] = useState([]);

  useEffect(() => {
    setOpenedCategory(categoryList.map((category) => category.title));
  }, [categoryList]);

  return (
    <div className="filter-container">
      {categoryList.map((category) => (
        <div className="filter-dropbox">
          <div
            className="filter-title"
            onClick={() => {
              setOpenedCategory(
                openedCategory.includes(category.title)
                  ? openedCategory.filter((title) => title !== category.title)
                  : [...openedCategory, category.title]
              );
            }}
          >
            {category.alias}{" "}
            <img
              className="dropdown"
              src={openedCategory.includes(category.title) ? dropUp : dropDown}
              alt="dropdown icon"
            />
          </div>
          <div
            className={`filter-media-companys ${
              openedCategory.includes(category.title) ? "show" : ""
            }`}
          >
            <div className="company" id="companyAll">
              <img src={checkIcon} alt="check icon" />
              {category.alias.split(" ")[1]} 전체 보기
            </div>
            {category.publishers.map((publisher) => (
              <div className="company">
                <div
                  className="dots"
                  style={{ background: publisher.color }}
                ></div>
                {publisher.alias}
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer className="footer" />
    </div>
  );
}

export default Filter;
