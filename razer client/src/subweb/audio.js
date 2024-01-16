import React, { useState, useEffect } from 'react';
import MainProduct from '../main/MainProduct';
import { API_URL } from '../config/contansts';
import axios from 'axios';

// 게이밍 오디오 페이지 컴포넌트
function Audio() {
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

  // 게이밍 오디오 상품 정보를 서버에서 가져와 상태 변수에 저장
  useEffect(() => {
    axios.get(`${API_URL}/products/audio`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "RAZER BLACKSHARK 제품군",
    "RAZER BARRACUDA 제품군",
    "RAZER 스피커",
    "RAZER KRAKEN 제품군",
  ];
  const subContent = [
    "뛰어난 성능과 편안함을 선사하도록 설계되어 호평을 받고 있는 e스포츠 헤드셋",
    "홈 게이밍, 거리에서의 일상 모두에 적합한, 활용도 높은 무선 하이브리드 헤드셋",
    "엔터테인먼트 경험을 강화하는 사운드바 및 풀 레인지 스피커",
    "Razer Chroma™ RGB 및 Razer HyperSense를 지원하는 몰입감 높은 햅틱 헤드셋",
  ];

// 서브 카테고리별 상품 목록 섹션을 생성하고 반환하는 부분
const subCategorySections = subCategories.map((subCategory, index) => {
  // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옴
  const subCategoryProducts = products.filter(product => product.subCategory === subCategory);
  // 각 서브 카테고리의 상품 목록을 나타내는 섹션을 생성하고 반환
  return (
    <section className={'bodyse start ' + end } key={index}>
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

  // 게이밍 오디오 페이지 컴포넌트 반환
  return (
    <div id='mainpage'>
      <div className='subwebtitle'>
        <h1>게이밍 오디오</h1>
        <p>게이밍 및 방송용 Razer 헤드셋, 무선 헤드폰, 이어폰을 살펴보세요</p>
      </div>
      {/* 서브 카테고리별 상품 목록 섹션을 표시 */}
      {subCategorySections}
    </div>
  );
}

export default Audio;
