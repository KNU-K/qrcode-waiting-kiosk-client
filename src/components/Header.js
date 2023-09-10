// Header.js

import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo192.png" alt="로고" />
        <h1>내 앱</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/about">로그인</a>
          </li>
          {/* 다른 메뉴 항목 추가 */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
