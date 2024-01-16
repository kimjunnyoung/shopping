import React, { useState, useEffect } from 'react';
import MainProduct from '../main/MainProduct';
import axios from 'axios';
import { API_URL } from '../config/contansts';

// 키보드 페이지 컴포넌트
function Keyboard() {
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

  // 키보드 상품 정보를 서버에서 가져와 상태 변수에 저장
  useEffect(() => {
    axios.get(`${API_URL}/products/keyboard`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "RAZER BLACKWIDOW 제품군",
    "RAZER HUNTSMAN 제품군",
    "RAZER DEATHSTALKER 제품군",
    "기타",
  ];
  const subContent = [
    "Razer Chroma™ RGB가 탑재된 기계식 게이밍 키보드",
    "탁월한 속도와 반응성을 자랑하는 E스포츠 옵티컬 키보드",
    "업무 및 플레이 모두에 적합한 인체공학적 로우 프로파일 옵티컬 키보드",
    "플래그십 제품군 외에도 모든 게이머의 요구 사항을 충족하도록 설계된 다양한 장비가 준비되어 있습니다",
  ];

  // 서브 카테고리별 상품 목록 섹션을 생성하고 반환하는 부분
  const subCategorySections = subCategories.map((subCategory, index) => {
    // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옴
    const subCategoryProducts = products.filter(product => product.subCategory === subCategory);
    return (
      <section className={'bodyse start ' + end} key={index}>
        <div className='bodyheader'>
           {/* 서브 카테고리 제목과 설명을 표시하는 부분 */}
          <h2>{subCategories[index]}</h2>
          <div className='pagename'>{subContent[index]}</div>
        </div>
        <ul className='effect scroll'>
           {/* 현재 서브 카테고리에 해당하는 각 상품을 나타내는 부분 */}
          {subCategoryProducts.map((product, productIndex) => (
            <li key={productIndex}>
              {/* MainProduct 컴포넌트에 각 상품 정보를 전달하여 표시 */}
              <MainProduct product={product} />
            </li>
          ))}
        </ul>
      </section>
    );
  });

    // 키보드 페이지 컴포넌트 반환
  return (
    <div id="mainpage">
      <div className='subwebtitle'>
        <h1>게이밍 키보드</h1>
        <p>풀 사이즈, 텐키리스 및 60% 키보드</p>
      </div>
      {/* 서브 카테고리별 상품 목록 섹션을 표시 */}
      {subCategorySections}
    </div>
  );
}

export default Keyboard;
