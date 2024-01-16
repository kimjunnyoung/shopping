import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { API_URL } from "../config/contansts";
import "./cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]); // 카트 항목 상태 및 상태 업데이트 함수 정의
  const [totalPrice, setTotalPrice] = useState(0); // 총 상품 가격 상태 및 상태 업데이트 함수 정의
  
  // 카트 항목의 총 가격을 계산하는 함수 정의
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  // 컴포넌트가 마운트될 때 카트 항목을 가져오기 위해 useEffect 훅 사용
  useEffect(() => {
    fetchCartItems();
  }, []);

  // 서버에서 카트 항목을 가져오는 함수 정의
  const fetchCartItems = () => {
    axios
      .get(`${API_URL}/cart`)
      .then((response) => {
        setCartItems(response.data);  // 서버에서 받은 카트 항목으로 상태 업데이트
        calculateTotalPrice(response.data); // 총 가격 업데이트를 위해 calculateTotalPrice 함수 호출
      })
      .catch((error) => {
        console.error("장바구니를 불러오는데 실패했습니다.", error);
      });
  };

  // 카트 항목 삭제를 처리하는 함수 정의
  const handleDelete = (cartItemId) => {
    axios
      .delete(`${API_URL}/cart/${cartItemId}`)
      .then((response) => {
        fetchCartItems(); // 항목 삭제 후 카트 항목을 다시 불러와서 업데이트
      })
      .catch((error) => {
        console.error("삭제에 실패했습니다.", error);
      });
  };

   // 카트 항목 수량 변경을 처리하는 함수 정의
  const handleQuantityChange = (cartItemId, newQuantity) => {
    axios
      .put(`${API_URL}/cart/${cartItemId}`, { quantity: newQuantity })
      .then((response) => {
        fetchCartItems(); // 수량 변경 후 카트 항목을 다시 불러와서 업데이트
      })
      .catch((error) => {
        console.error("수량 업데이트에 실패했습니다.", error);
      });
  };

  // 카트 항목을 새로고침하는 함수 정의
  const handleRefresh = () => {
    fetchCartItems();
  };

  return (
    <div
      style={{
        background: "rgb(32, 32, 32)",
        paddingTop: "65px",
        minHeight: '40vh',
        height: "100%",
      }}
    >
      <h1 className='cartTitle'>장바구니</h1>
      <div className="cart">
        <div className="container head">
          <div className="cartId">id</div>
          <div className="cartItem">상품명</div>
          <div className="cartCount">수량</div>
          <div className="cartPrice">상품금액</div>
          <div className="cartDel">삭제</div>
        </div>
        {/* 카트 항목을 나타내는 리스트 */}
        {cartItems.map((item) => (
          <div className="container list" key={item.id}>
            <div className="cartId">{item.id}</div>
            <div className="cartItem">{item.name}</div>
            <div className="cartCount">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
            </div>
            <div className="cartPrice">{item.price * item.quantity}원</div>
            <div className="cartDel" onClick={() => handleDelete(item.id)}>
              X
            </div>
          </div>
        ))}
        <div className="buyBtnBox">
          <NavLink to="/buy">
            <button className="buyBtn">결제하기</button>
          </NavLink>
          <button className="refreshBtn" onClick={handleRefresh}>
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
