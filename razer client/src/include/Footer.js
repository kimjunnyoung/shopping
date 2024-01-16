import React from "react";
//푸터 컴포넌트 생성 및 html 작성
//아이콘
const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-info">
        <div className="footer-inner">
          <div>
            <h4>쇼핑</h4>
            <ul>
              <li>RazerStores</li>
              <li>RazerCafe</li>
              <li>매장 찾기 서비스</li>
              <li>구매 프로그램</li>
              <li>Excluslves</li>
            </ul>
          </div>
          <div>
            <h4>둘러보기</h4>
            <ul>
              <li>기술</li>
              <li>Chroma RGB</li>
              <li>콘셉트</li>
              <li>e스포츠</li>
              <li>컬래버레이션</li>
            </ul>
          </div>
          <div>
            <h4>지원</h4>
            <ul>
              <li>도움 받기</li>
              <li>등록 및 보증</li>
              <li>RazerStore 지원</li>
              <li>Razer ID 관리</li>
              <li>Support Videos</li>
            </ul>
          </div>
          <div>
            <h4>만든이</h4>
            <ul>
              <li>3Teams</li>
              <li>김준녕</li>
              <li>차하민</li>
              <li>임헌성</li>
              <li>차정헌</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <i class="fa-brands fa-facebook fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-tiktok fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-discord fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube fa-lg"></i>
              </li>
              <li>
                <i class="fa-brands fa-github fa-lg"></i>
              </li>
              <li>
                <i class="fa-solid fa-camera fa-lg"></i>
              </li>
            </ul>
          </div>
          <div>
            <h3>FOR GAMERS. BY GAMERS.™</h3>
          </div>
        </div>
      </div>
      <div id="footer-copy">
        <div className="footer-copy-inner">
          <ul>
            <li>법적 약관</li>
            <li>개인정보 보호정책</li>
            <li>쿠키설정</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
        <div id="copyright">
          <div className="copyright-inner">
            상호 : 3Team 쇼핑몰 주소 : 평택 남구 삼산중로 100번길 대표전화 :
            국번없이 052-1234-4223 대표이사 : 3Team 개인정보관리자 : 국제대학교
            사업자 등록번호 : 102-12-12345 copyright(c) Green Lamp,.LTD all
            rights reserved. Korea
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
