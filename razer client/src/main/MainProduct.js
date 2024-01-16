import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
import { API_URL } from '../config/contansts'
import { NavLink } from "react-router-dom";

// 업로드된 상품을 화면에 표시하는 카드 컴포넌트
const MainProduct = ({ product }) => {
  // 상품 정보를 props로 받아옴
  const { id, imageUrl, name, description, price } = product;

  // 장바구니에 상품을 추가하는 함수
  const addToCart = () => {
    // 상품 ID를 이용해 서버에 POST 요청을 보내 장바구니에 상품을 추가함
    axios.post(`${API_URL}/cart`, { productId: id })
      .then(response => {
        console.log("상품이 장바구니에 추가되었습니다.");
      })
      .catch(error => {
        console.error("장바구니에 상품을 추가하는데 실패했습니다.", error);
      });
  };

  // JSX로 상품 카드를 렌더링
  return(
    <>
      <Link to={`/category/${id}`}>
        <img src={imageUrl} alt={name} className="product-image" width="300px" height="300px"/>
      </Link>
      <div className="product-card effectbody">
        <div className="effectfooter">
          <h2 className="product-name">{name}</h2>
          <p className="product-description" style={{ color: "gray" }}>
            {description}
          </p>
        </div>
        <div className="effectbodyse">
          <div className="product-price effectbodyfo" style={{ color: "white" }}>
            {price.toLocaleString()}원
          </div>
          <NavLink to="/cart">
          <button className="product-buy-button" onClick={addToCart}>
            장바구니에 담기
          </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
