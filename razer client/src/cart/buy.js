import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/contansts";
import "./cart.css";

function Buy() {
  // 장바구니 아이템, 사용자 정보, 동의 여부 및 결제 완료 여부를 관리하기 위한 상태 변수
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  
  // 장바구니 아이템의 총 금액을 계산하는 함수
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  // 컴포넌트가 마운트될 때 API에서 장바구니 아이템을 가져오기 위한 useEffect 훅
  useEffect(() => {
    axios
      .get(`${API_URL}/cart`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("장바구니를 불러오는데 실패했습니다.", error);
      });
  }, []);
// 사용자 정보 입력 시 상태를 업데이트하는 핸들러 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

// 동의 여부를 토글하는 핸들러 함수
  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  // 결제를 처리하는 핸들러 함수
  const handlePayment = () => {
    if (agreed) {
      const userConfirmed = window.confirm("결제 하시겠습니까?");
      if (userConfirmed) {
        setIsPaymentCompleted(true);
        console.log("결제가 완료되었습니다.");
      }
    } else {
      alert("약관에 동의해야 결제가 가능합니다.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://prodigits.co.uk/thumbs/wallpapers/p2ls/patterns/45/a204c28512301720.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "100px",
        paddingLeft: "100px",
        paddingRight: "100px",
        height: "100%",
      }}
    >
      <div style={{ padding: "20px", height: "100%" }}>
        {!isPaymentCompleted ? (
           // 결제가 완료되지 않은 경우의 화면
          <>
            <h1
              style={{
                color: "rgb(28, 194, 28",
                fontSize: "40px",
                fontWeight: "900",
              }}
            >
              결제페이지
            </h1>
            <div className="payment-container">
              <div>
                <div className="buyList">
                  <h1>구매리스트</h1>
                  {cartItems.map((item) => (
                    <div key={item.id} className="product-item">
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>상품명</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>수량</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.quantity}</p>
                        </div>
                      </div>
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>총가격</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.price * item.quantity}원</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="infoList">
                <div>
                  <div className="eachInfo">
                    <h1>정보입력</h1>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>이름</label>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="이름을 입력하세요"
                        name="name"
                        value={userInfo.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>주소</label>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="주소를 입력하세요"
                        name="address"
                        value={userInfo.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>전화번호</label>
                      </div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="전화번호를 입력하세요"
                        name="phoneNumber"
                        value={userInfo.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>이메일</label>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="이메일을 입력하세요"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="infoAgree">
                      <label>
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={handleAgreementChange}
                        />
                        개인정보 수집 약관에 동의합니다.
                      </label>
                    </div>
                  </div>
                  <div className="eachInfo">
                    <h1>결제수단</h1>
                    <div className="payment-method">
                      <p>무통장입금 계좌번호 937702-00-902086</p>
                    </div>
                  </div>
                  <div className="eachInfo">
                    <h1>최종 결제 금액</h1>
                    <div className="resultPrice">
                      <p>{calculateTotalPrice()}원</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="eachInfo payment-buttonBox">
                    <button className="payment-button" onClick={handlePayment}>
                      $결제하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // 결제가 완료된 경우의 화면
          <>
            <h1
              style={{
                color: "rgb(28, 194, 28",
                fontSize: "40px",
                fontWeight: "900",
              }}
            >
              구매완료!
            </h1>
            <div className="payment-container">
              <div>
                <div className="buyList">
                  <h1>상품내역</h1>
                  {cartItems.map((item) => (
                    <div key={item.id} className="product-item">
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>상품명</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>수량</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.quantity}</p>
                        </div>
                      </div>
                      <div className="itemGrid">
                        <div className="itemTitle">
                          <p>가격</p>
                        </div>
                        <div className="itemContent">
                          <p>{item.quantity * item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="infoList">
                <div>
                  <div className="eachInfo">
                    <h1>정보입력</h1>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>이름: </label>
                      </div>
                      <div className="infoTitle2">
                        <label>{userInfo.name}</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>주소: </label>
                      </div>
                      <div className="infoTitle2">
                        <label>{userInfo.address}</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>전화번호: </label>
                      </div>
                      <div className="infoTitle2">
                        <label>{userInfo.phoneNumber}</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="infoTitle">
                        <label>이메일: </label>
                      </div>
                      <div className="infoTitle2">
                        <label>{userInfo.email}</label>
                      </div>
                    </div>
                  </div>
                  <div className="eachInfo eachInfo2">
                    <h1>결제 완료 금액</h1>
                    <div className="resultPrice">
                      <p>{calculateTotalPrice()}원</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Buy;
