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

function Filter({
  categoryList,
  selectedPublishers,
  onChangeSelectedPublisher,
}) {
  const [openedCategory, setOpenedCategory] = useState([]);

  // 열려있는 카테고리만 리스트에 담음. 리스트에 있으면 열려있는 것
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
            {category.alias}
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
            <div
              className="company"
              id="companyAll"
              onClick={() => {
                if (
                  category.publishers.every((publisher) =>
                    selectedPublishers.includes(publisher.title)
                  )
                ) {
                  // 전체 선택 해제.
                  // 현재 category의 publisher만 삭제해야함
                  onChangeSelectedPublisher(
                    selectedPublishers.filter(
                      (publisher) =>
                        !category.publishers
                          .map((publisher) => publisher.title)
                          .includes(publisher)
                    )
                  );
                } else {
                  // 전체 선택
                  // 중복 제거 후 현재 category의 publisher 추가
                  onChangeSelectedPublisher(
                    Array.from(
                      new Set([
                        ...selectedPublishers,
                        ...category.publishers.map(
                          (publisher) => publisher.title
                        ),
                      ])
                    )
                  );
                }
              }}
            >
              {category.publishers.every((publisher) =>
                selectedPublishers.includes(publisher.title)
              ) && <img src={checkIcon} alt="check icon" />}
              {category.alias.split(" ")[1]} 전체 보기
            </div>
            {category.publishers.map((publisher) => (
              <div
                className="company"
                onClick={() => {
                  if (selectedPublishers.includes(publisher.title)) {
                    onChangeSelectedPublisher(
                      selectedPublishers.filter(
                        (selectedPublisher) =>
                          selectedPublisher !== publisher.title
                      )
                    );
                  } else {
                    onChangeSelectedPublisher([
                      ...selectedPublishers,
                      publisher.title,
                    ]);
                  }
                }}
              >
                {selectedPublishers.includes(publisher.title) && (
                  <img src={checkIcon} alt="check icon" />
                )}
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
