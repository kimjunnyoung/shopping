import React, { useState, useEffect } from "react";
import MainProduct from "../main/MainProduct";
import axios from "axios";
import { API_URL } from "../config/contansts";
import "./subweb.scss";

// 마우스 페이지 컴포넌트
function Mouse() {
  // 상품 목록과 애니메이션 종료 여부를 관리하는 상태 변수 선언
  const [products, setProducts] = useState([]);
  const [end, setEnd] = useState("");

  // 페이지 로딩 시 애니메이션을 위한 타이머 설정
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    // 애니메이션이 종료되면 end 상태 초기화
    return setEnd("");
  }, []);

  // 마우스 상품 정보를 서버에서 가져와 상태 변수에 저장
  useEffect(() => {
    axios.get(`${API_URL}/products/mouse`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "RAZER VIPER 제품군",
    "RAZER BASILISK 제품군",
    "RAZER NAGA 제품군",
    "RAZER DEATHADDER 제품군",
    "기타",
  ];
  const subContent = [
    "스포츠를 위해 탄생한 초경량 고성능 게이밍 마우스 제품군",
    "풍부한 기능, 다양한 커스터마이징으로 모든 플레이스타일에 적합하게 설계된 게이밍 마우스",
    "독특한 12 버튼 썸 그리드로 최대 컨트롤을 자랑하는 MMO 및 MOBA 중심 게이밍 마우스",
    "수상 경력에 빛나는 아이코닉한 인체공학으로 경쟁력을 높이는 게이밍 마우스",
    "플래그십 제품군 외에도 모든 게이머의 요구 사항을 충족하도록 설계된 다양한 장비가 준비되어 있습니다",
  ];

  // 서브 카테고리별 상품 목록 섹션을 생성하고 반환하는 부분
  const sessions = subCategories.map((subCategory, index) => {
      // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옴
    const sessionProducts = products.filter(
      (product) => product.subCategory === subCategory
    );
      // 각 서브 카테고리의 상품 목록을 나타내는 섹션을 생성하고 반환
    return (
      <section className={"bodyse start " + end} key={index}>
        <div className="bodyheader">
          {/* 서브 카테고리 제목과 설명을 표시하는 부분 */}
          <h2>{subCategories[index]}</h2>
          <div className="pagename">{subContent[index]}</div>
        </div>
        <ul className="effect scroll">
          {/* 현재 서브 카테고리에 해당하는 각 상품을 나타내는 부분 */}
          {sessionProducts.map((product, productIndex) => (
            <li key={productIndex}>
              {/* MainProduct 컴포넌트에 각 상품 정보를 전달하여 표시 */}
              <MainProduct product={product} />
            </li>
          ))}
        </ul>
      </section>
    );
  });

    // 마우스 페이지 컴포넌트 반환
  return (
    <div id="mainpage">
      <div className="subwebtitle">
        <h1>게이밍 마우스</h1>
        <p>모든 게이머의 손에 적합하게 만들어진 고성능 유선 및 무선 마우스</p>
      </div>
      {/* 서브 카테고리별 상품 목록 섹션을 표시 */}
      {sessions}
    </div>
  );
}

export default Mouse;
