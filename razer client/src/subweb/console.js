import React, { useState, useEffect } from 'react';
import MainProduct from '../main/MainProduct';
import { API_URL } from '../config/contansts';
import axios from 'axios';

// 콘솔 페이지 컴포넌트
function Console() {
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

  // 콘솔 상품 정보를 서버에서 가져와 상태 변수에 저장
  useEffect(() => {
    axios.get(`${API_URL}/products/console`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "올 버튼 아케이드 컨트롤러",
    "이어폰",
    "헤드셋",
    "컨트롤러",
    "콜라보레이션",
    "급속 충전 스탠드 & 번들",
  ];
  const subContent = [
    "쿼드 무브먼트 버튼 레이아웃과 초고속 옵티컬 스위치로 게임을 완벽하게 실행합니다",
    "콘솔용 Razer HammerHead HyperSpeed로 끊김 없는 무선 오디오를 즐기세요. ",
    "Xbox 및 PlayStation용 Razer Kaira 제품군으로 완벽한 오디오 몰입을 경험하세요. ",
    "Razer Wolverine V2 제품군으로 향상된 컨트롤 및 커스터마이징 기능을 사용해 보세요. ",
    "공식 인증된 Xbox용 무선 컨트롤러 및 급속 충전 스탠드 ",
    "Accessories and sets to round out your setup",
  ];
// 서브 카테고리별 상품 목록 섹션을 생성하고 반환하는 부분
  const subCategorySections = subCategories.map((subCategory, index) => {
      // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옵니다.
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

  // 콘솔 페이지 컴포넌트 반환
  return (
    <div id="mainpage">
      <div className='subwebtitle'>
        <h1>콘솔 게이밍</h1>
        <p>PlayStation 5, Xbox Series X|S, Nintendo Switch 등 모든 플랫폼에서 고성능 헤드셋, 컨트롤러, 액세서리를 사용하며 완벽한 우위를 제공하는 콘솔을 즐기세요.</p>
      </div>
      {/* 서브 카테고리별 상품 목록 섹션을 표시 */}
      {subCategorySections}
    </div>
  );
}

export default Console;
