import React, { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Filter.scss";
import checkIcon from "../assets/images/check-icon.svg";
import dropDown from "../assets/images/dropdown.svg";
import dropUp from "../assets/images/dropup.svg";
import Footer from "../components/Footer";

import { useAtom } from "jotai";
import { filterAtom } from "../hooks/atoms";
import { Dropdown } from "bootstrap";

// dropdown 클릭 시 동작되야 하는거
// 1. filter-dropbox height 변경
// 2. filter-media-companys display-none class 추가
// 3. img.dropdown의 src를 dropUp으로 변경

function Filter() {
  const comingSoon = () => {
    window.alert("🔧 서비스 준비 중 입니다.");
  };

  const [mediaC, setMediaC] = useState(true);
  const [gameC, setGameC] = useState(false);
  const [topics, setTopics] = useState(false);


  return (
    <div className="filter-container">
      <div className="filter-dropbox">
        <div
          className="filter-title"
          onClick={() => {
            setMediaC(!mediaC);
          }}
        >
          📰 언론 <img className="dropdown" src={mediaC ? dropUp : dropDown} />
        </div>
          <div className={`filter-media-companys ${mediaC ? 'show' : ''}`}>
            <div className="company" id="companyAll">
              <img src={checkIcon} />
              언론 전체 보기
            </div>
            <div className="company">
              <div className="dots" style={{ background: "#2B65BC" }}></div>
              Ruliweb
            </div>
            <div className="company">
              <div className="dots" style={{ background: "#66A500" }}></div>
              Inven
            </div>
            <div className="company">
              <div className="dots" style={{ background: "#921D1D" }}></div>
              GameMeca
            </div>
            <div className="company">
              <div className="dots" style={{ background: "#E5D648" }}></div>
              ThisIsGame
            </div>
          </div>
      </div>
      <div className="filter-dropbox" style={{ height: "140px" }}>
        <div className="filter-title"
        onClick={() => {
          setGameC(!gameC);
        }}>
          🏢 게임사 <img src={gameC ? dropUp : dropDown} />
        </div>
          <div className={`filter-media-companys ${gameC ? 'show' : ''}`}>
            <div className="company" id="companyAll">
              <img src={checkIcon} />
              언론 전체 보기
            </div>
            <div className="company">
              <div className="dots" style={{ background: "#2B65BC" }}></div>넥슨
            </div>
          </div>
      </div>
      <div
        className="filter-dropbox"
        style={{ height: "52px" }}
        onClick={comingSoon}
      >
        <div className="filter-title">
          ✒ 토픽 <img src={dropDown} />
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Filter;
