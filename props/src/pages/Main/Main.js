import React from "react";
import Head from "../../components/Header/Header";
import "./Main.css"; // 메인

const Main = () => {
  return (
    <div id="wrap">
      <Head />
      <main id="main" className="d-flex">
        <div className="settings">
          <ul>
            <li>
              <span>시나리오 관리</span>
              <ul>
                <li>시나리오저작</li>
              </ul>
            </li>
            <li>
              <span>CYBER SCHOOL</span>
              <ul>
                <li>훈련시나리오 작성</li>
                <li>훈련관리</li>
                <li>배틀룸</li>
                <li>훈련결과</li>
              </ul>
            </li>
            <li>
              <span>ASSESSMENT</span>
              <ul>
                <li>평가 및 리워드</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="worldMap"></div>
        <div className="notice"></div>
      </main>
    </div>
  );
};

export default Main;