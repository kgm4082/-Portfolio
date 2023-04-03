import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS
import './pages/Common.css'; // 공통 CSS
import Login from './pages/Login/Login'; // 로그인 페이지
import Main from "./pages/Main/Main"; // 메인 페이지
import Jeojag from "./pages/Jeojag/Jeojag"; // 시나리오 저작 페이지
import {BattleRoom, BattleRoomDetail} from "./pages/BattleRoom/BattleRoom"; // 배틀룸 페이지
import Training from "./pages/Training/Training";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path='/' element={<Main />} />
        <Route path='/Jeojag' element={<Jeojag />} />
        <Route path='/BattleRoom' element={<BattleRoom />} />
        <Route path="/BattleRoom/:url" element={<BattleRoomDetail />} />
        <Route path='/Training' element={<Training />} />
      </Routes>
    </BrowserRouter>
  );
}

// index.html의 div#root에 <App /> 컴포넌트 출력 지정하기!
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);