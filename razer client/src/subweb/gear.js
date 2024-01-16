import React, { useState, useEffect } from 'react';
import MainProduct from '../main/MainProduct';
import { API_URL } from '../config/contansts';
import axios from 'axios';

// 장비 페이지 컴포넌트
function Gear() {
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

  // 장비 상품 정보를 서버에서 가져와 상태 변수에 저장
  useEffect(() => {
    axios.get(`${API_URL}/products/gear`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "가방",
    "SNEKI SNEK ",
    "기타 ",
  ];
  const subContent = [
    "노트북 슬리브, 물병, 마스크 등 ",
    "봉제 인형, 쿠션, 후드티 및 기타 귀여운 상품 ",
    "짐이 많은 사람들을 위해 제작 ",
  ];

  // 서브 카테고리별 상품 목록 섹션을 생성하고 반환하는 부분
  const subCategorySections = subCategories.map((subCategory, index) => {
      // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옴
    const subCategoryProducts = products.filter(product => product.subCategory === subCategory);
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
  // 장비 페이지 컴포넌트 반환
  return (
    <div id="mainpage">
      <div className='subwebtitle'>
        <h1>라이프스타일 장비</h1>
        <p>누군가에게는 게임이 그저 취미이지만 Razer에게는 삶의 전부입니다. 저희와 같은 생각을 하고 계신다면 다양한 부가 제품으로 일상 생활에서 이를 표현해보세요.</p>
      </div>
      {/* 서브 카테고리별 상품 목록 섹션을 표시 */}
      {subCategorySections}
    </div>
  );
}

export default Gear;
