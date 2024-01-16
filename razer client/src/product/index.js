import React, { useState } from "react";
import "./product.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAsync from "../customHook/useAsync";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/contansts";
import { NavLink } from "react-router-dom";

// 특정 상품의 상세 페이지를 표시하는 컴포넌트
const ProductPage = (props) => {
  const navigate = useNavigate();

  // URL 파라미터에서 상품 ID를 가져옴
  const { id } = useParams();
  // useAsync 커스텀 훅을 사용하여 상품 정보를 가져옴
  const [state] = useAsync(() => getProduct(id), [id]);
  const { loading, data: product, error } = state;

  // 수정 모드 여부를 관리하는 상태와 수정할 상품 정보를 저장하는 상태를 정의함
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product ? product.name : "");
  const [seller, setSeller] = useState(product ? product.seller : "");
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );

  // 특정 ID의 상품 정보를 가져오는 비동기 함수
  async function getProduct(id) {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  }

  // 수정 버튼 클릭 시 수정 모드로 전환하는 함수
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 장바구니에 상품을 추가하는 함수
  const addToCart = () => {
    axios
      .post(`${API_URL}/cart`, { productId: id })
      .then((response) => {
        console.log("상품이 장바구니에 추가되었습니다.");
      })
      .catch((error) => {
        console.error("장바구니에 상품을 추가하는데 실패했습니다.", error);
      });
  };

  // 상품 정보를 수정하고 수정 모드를 종료하는 함수
  const handleSaveClick = () => {
    axios
      .put(`${API_URL}/products/${id}`, {
        name,
        seller,
        price,
        description,
      })
      .then((result) => {
        console.log("수정되었습니다.");
        setIsEditing(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 상품을 삭제하고 이전 페이지로 이동하는 함수
  const handleDeleteClick = () => {
    axios
      .delete(`${API_URL}/products/${id}`)
      .then((result) => {
        console.log("삭제되었습니다.");
        window.history.back();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 로딩 중일 때 로딩 메시지를, 에러가 발생한 경우 에러 메시지를, 그렇지 않은 경우 상품 정보를 표시함
  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!product) return null;

  // 상품 정보 및 수정, 삭제, 장바구니 추가 버튼을 표시함
  return (
    <>
      <div id="profile-box">
        <div className="profile-inner">
          {/* 상품 이미지 표시 */}
          <div id="image-box">
            <img src={product.imageUrl} alt="" style={{ width: "60%" }} />
          </div>
          {/* 상품 정보 표시 */}
          <div id="profile-detail">
            <div className="profile-detail-box">
              <div className="profile-name">
                {/* 수정 모드인 경우 이름을 입력할 수 있는 input, 그렇지 않은 경우 상품 이름 */}
                {isEditing ? (
                  <>
                    이름
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <h1>{product.name}</h1>
                  </>
                )}
              </div>
              <div className="profile-price">
                {/* 수정 모드인 경우 가격을 입력할 수 있는 input, 그렇지 않은 경우 상품 가격 */}
                {isEditing ? (
                  <>
                    가격
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <p>{product.price.toLocaleString()}원</p>
                  </>
                )}
              </div>
              <div className="profile-description">
                {/* 수정 모드인 경우 상세 설명을 입력할 수 있는 textarea, 그렇지 않은 경우 상품 설명 */}
                {isEditing ? (
                  <>
                    상세설명
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <p>{product.description}</p>
                  </>
                )}
              </div>
              {/* 수정 모드가 아닌 경우에만 장바구니 추가 버튼을 표시 */}
              {!isEditing ? (
                <div className="cartBtn-box">
                  {/* 장바구니 추가 버튼 클릭 시 addToCart 함수 호출 */}
                  <NavLink to="/cart">
                    <button onClick={addToCart}>장바구니 추가</button>
                  </NavLink>
                </div>
              ) : null}
            </div>
            {/* 수정 및 삭제 버튼을 표시하는 상자 */}
            <div className="profile-edit-box">
              <div className="profile-edit">
                {/* 상품의 판매자 정보와 수정, 삭제 버튼 */}
                <p>판매자: {product.seller}</p>
                {/* 수정 모드인 경우 완료 및 취소 버튼, 그렇지 않은 경우 수정 및 삭제 버튼 */}
                {isEditing ? (
                  <div>
                    {/* 완료 버튼 클릭 시 handleSaveClick 함수 호출 */}
                    <button onClick={handleSaveClick}>완료</button>
                    {/* 취소 버튼 클릭 시 수정 모드 종료 */}
                    <button onClick={() => setIsEditing(false)}>취소</button>
                  </div>
                ) : (
                  <div>
                    {/* 수정 버튼 클릭 시 handleEditClick 함수 호출 */}
                    <button onClick={handleEditClick}>수정</button>
                    {/* 삭제 버튼 클릭 시 handleDeleteClick 함수 호출 */}
                    <button onClick={handleDeleteClick}>삭제</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 상품의 기술 사양 정보를 표시하는 상자 */}
        <div className="footer-detail">
          <h1>기술 사양</h1>
          <ul>
            <li>{product.mainDescription}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
