import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//헤더 컴포넌트 생성
//navlink 및 아이콘

const Header = () => {
  return (
    <div id="header">
    <div className="inner">
      <h1>
        <NavLink to="/">
          <img className="logo" src="images/banners/razer-logo.png" alt="" />
        </NavLink>
      </h1>
      <ul className="headtext nav">
        <li><NavLink to="/mouse">마우스</NavLink></li>
        <li><NavLink to="/keyboard">키보드</NavLink></li>
        <li><NavLink to="/audio">오디오</NavLink></li>
        <li><NavLink to="/console">콘솔</NavLink></li>
        <li><NavLink to="/clothes">의류</NavLink></li>
        <li><NavLink to="/gear">장비</NavLink></li>
      </ul>
      <ul className="icon">
        <li>
          <NavLink to="/login">
            <i className="fa-solid fa-circle-user fa-xl"></i>
          </NavLink>
        </li>
        <li>
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload">
              <i className="fa-solid fa-pen"></i>
            </NavLink>
          </li>
        <li>
            {/* <NavLink to="/search">
              <i className="fa-solid fa-magnifying-glass fa-xl" 
              // onClick={handleSearchIconClick}
              ></i>
            </NavLink> */}
          </li>
        </ul>
        {/* {showSearch && <Search setShowSearch={setShowSearch} />} */}
      </div>
    </div>
  );
};

export default Header;
