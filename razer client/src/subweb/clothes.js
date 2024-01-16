import React, { useState, useEffect } from 'react';
import MainProduct from '../main/MainProduct';
import { API_URL } from '../config/contansts';
import axios from 'axios';

function Clothes() {
  // 의류 상품 목록과 애니메이션 상태를 관리하는 상태 변수들을 선언
  const [products, setProducts] = useState([]); // 의류 상품 목록을 저장할 상태 변수
  const [end, setEnd] = useState(""); // 애니메이션 클래스를 조절하는 상태 변수

  // 컴포넌트가 마운트된 후 일정 시간 뒤에 애니메이션 클래스를 추가하는 효과를 주기 위한 useEffect
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return () => setEnd(""); // 언마운트될 때 애니메이션 클래스를 초기화
  }, []);

  // 서버에서 의류 상품 데이터를 가져와서 상태 변수에 저장하는 useEffect
  useEffect(() => {
    // API를 호출하여 의류 상품 목록을 가져옴
    axios.get(`${API_URL}/products/clothes`)
      .then((response) => {
        setProducts(response.data); // 응답 데이터를 상태 변수에 저장
      })
      .catch((error) => {
        console.error(error); // 에러가 발생하면 콘솔에 에러 메시지를 출력
      });
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 마운트될 때 한 번만 실행

  // 서브 카테고리와 카테고리에 대한 설명을 담은 배열 선언
  const subCategories = [
    "상의",
    "하의",
    "외투",
  ];
  const subContent = [
    "티셔츠, 나시, 셔츠",
    "반바지, 카고 반바지, 청바지, 레깅스",
    "후드티, 봄버 재킷, 트랙 재킷",
  ];

  // 의류 카테고리와 해당 카테고리에 속하는 상품들을 보여주는 컴포넌트를 반환
  return (
    <div id='mainpage'>
      <div className='subwebtitle'>
        <h1>의류</h1>
        <p>게이밍 커뮤니티를 위한 라이프스타일 액세서리 및 의류</p>
      </div>
      {/* 의류 카테고리별 상품 섹션을 나타내는 부분 */}
      {subCategories.map((subCategory, index) => {
        // 현재 서브 카테고리에 해당하는 상품들만 필터링하여 가져옴
        const subCategoryProducts = products.filter(product => product.subCategory === subCategory);
        // 각 서브 카테고리별 상품 목록을 나타내는 섹션을 반환
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
      })}
    </div>
  );
}

export default Clothes;
