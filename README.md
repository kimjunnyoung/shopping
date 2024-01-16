# Razer는

> 이번 항저우 아시안게임에 e-sport 게임이 채택 되면서 게임에 대한 인기 상승 및 게이밍 장비 에 대한 관심도가 높아질 것으로 예상되어 게이밍 전문 웹 사이트 개발을 추진


 ## 대표화면
<table>
  <tr>
    <td><b>메인 페이지</b></td>
  </tr> 
  <tr>
    <td style="width: 100%"><img src="razer client/public/images/readmeimg/main.png" alt="메인 페이지"></td>
  </tr>
</table>

## 어떤 서비스인가요?

- Razer 홈페이지를 모방한 게이밍 장비 및 전자기기 판매 쇼핑몰 사이트
  
 [Razer 홈페이지](https://www.razer.com/kr-kr)
## Contents

Click to scroll to that page

1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개

- ​Project intention : 프로젝트 기획 의도
- Service : 서비스
- How can use this project?

3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조

- Page Image 페이지 구성
- 기능 소개
- ERD

5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드

For building and running the application you need :

- [Node.js 18.16.1](https://nodejs.org/en)
- [npm 9.7.2](https://www.npmjs.com/)

Installation

```bash
git clone https://github.com/kimjunnyoung/shopping
cd razer
```

Front

```
cd razer client
npm install
npm start
```

Back

```
cd razer server
npm install
npm start
```

## 💻 2. Project Info : 프로젝트 소개

### ✔️개발 기간

- 2023.10.04 ~ 2023.10.18 (2주)

<table>
  <tr>
    <td><b>진행도</b></td>
  </tr> 
  <tr>
    <td style="width: 100%"><img src="razer client/public/date.png" alt="메인 페이지"></td>
  </tr>
</table>


### ✔️ 배포 서버

- 

### ✔️ 프로젝트 기획 의도

서비스 소개

- 각 장비별 원하는 상품을 빠르고 정확하게 구매할 수 있는 쇼핑몰

기능 소개

- 메인 페이지
- 카테고리별 상품 페이지
- 상품 상세 페이지
- 로그인
- 로그아웃
- 회원가입
- 마이페이지
- 장바구니
- 결제 페이지
- 결제 완료 페이지
- 상품 등록 페이지

### ✔️ 서비스

#### 서비스 설명
1. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명

    1. 메인 페이지
      - 상품 목록을 보여주는 메인 페이지

    2. 카테고리별 상품 페이지
        - 필터 함수를 사용하여 카테고리별 상품 조회 가능
        - 동적으로 업데이트되어 새로운 상품 등록 시 실시간으로 제공
        - 시각 및 매력적인 디자인을 갖추어 쾌적한 쇼핑 가능
        - 이미지와 이름, 가격 등을 통해 직관적으로 파악 가능

    3. 상품 상세 페이지
        - 상품의 자세한 정보 확인 페이지
        - 조회 및 수정, 삭제 기능
        - 구매 및 장바구니 추가
    
    4. 로그인/로그아웃/마이페이지
        - 가입된 아이디와 비밀번호를 통해 로그인
        - 입력된 비밀번호는 저장된 비크립트 암호화 비밀번호와 비교하여 인증
        - 로그인 성공 시 세션 스토리지에 사용자 정보가 저장되고 로그인 상태
        - 로그아웃 기능
        - 로그아웃 시 세션 스토리지에서 정보가 삭제되고 로그아웃 상태
        - 로그인된 사용자의 정보를 마이페이지에서 확인 가능
        - 마이페이지에서 사용자의 개인 정보 등이 표시
    
    5. 회원가입
        - 아이디, 이메일, 비밀번호 등을 작성하여 회원가입 진행
        - 입력된 비밀번호는 비크립트를 사용하여 암호화
    
    6. 장바구니
        - 원하는 상품을 장바구니에 추가 가능
        - 장바구니에서 담긴 상품 목록과 수량을 수정
        - 특정 상품 삭제 가능
        - 상품의 이미지, 이름, 가격, 수량, 총 가격을 통해 직관적으로 파악 가능
    
    7. 결제 페이지 및 결제 완료 페이지
        - 장바구니에서 선택한 상품 결제 가능
        - 결제 후 결제 완료 페이지에서 구매한 상품 확인 가능
    
    8. 상품 등록 페이지
        - ant design을 사용한 깔끔한 UI
        - 목록 작성 후 추가 버튼을 클릭 시 선택한 카테고리에 상품 추가
      
4. 유저 시나리오
  - WHO 
    - 게이머 혹은 게임 장비에 관심이 많은 사람
  - WHAT
    - 원하는 장비를 구입하고 싶을 때
  - WHEN
    - 고장나거나 바꾸고 싶을 때
  - WHERE
    - 언제 어디서든 사이트 접속 시
  - WHY
    - 더 좋은 장비를 원할 때
    - 업그레이드 하고자 할 때


### ✔️ 프로젝트 구조

#### 🧩 front-end

> 페이지별 구조

- Main 페이지 기반으로 구현된 서비스.
* Main : 처음 / 경로로 접속시 라우팅되는 페이지
* login : 로그인 페이지
* register : 회원가입 페이지
* audio : 오디오 상품 페이지
* clothes : 의류 상품 페이지
* console : 콘솔 상품 페이지
* gear : 가방 및 기타 상품 페이지
* keyboard : 키보드 상품 페이지
* mouse : 마우스 상품 페이지
* product : 상품 상세 페이지
* cart : 장바구니 페이지
* buy : 결제 및 결제완료 페이지
  
#### 🧩 back-end

> 로직 구조

- config : 환경변수 설정
- model : Sequelize 사용해 DB 연동
- routes : 요청받은 정보를 알맞게 가공하고 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- upload : 상품등록에 첨부한 이미지 저장하는 디렉터리

### ✔️ 페이지 구성

## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="Sequelize" src ="https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white"/> <img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> <img alt="antd" src ="https://img.shields.io/badge/antd-111111.svg?&style=for-the-badge&logo=antd&logoColor=White"/>

### 🔗 Cooperation

<img alt="github" src ="https://img.shields.io/badge/github-000000.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="discord" src ="https://img.shields.io/badge/discord-5662F6.svg?&style=for-the-badge&logo=discord&logoColor=white"/>

### 💻 Dependencies

<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/> <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/> <img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/>

## 5. 트러블 슈팅

 ### 1. Express, DB 기본 이해 부족
 
  - 문제: Express 구조 및 DB 구조 설계에 대한 이해 부족
  - 해결책: Express 공식 문서 및 튜토리얼을 참고하여 기본 개념을 이해하고, 간단한 서버부터 시작하여 익숙해지도록 함
  - 기본적인 CRUD 작업을 통해 사용법을 익힘

 ### 2. 프론트엔드와 통합
 
  - 문제: Frontend와 Backend 간의 통합
  - 해결책: CORS 설정에 대해 이해하고 허용하는 법을 익힘
  - 서로 어떻게 통신하는지에 대해 기본적인 이해


## 6. END

- 한국정보교육원 웹 프론트엔드 클라우드 콘솔 개발자 양성과정 3회차 3조 

## ✔️프로젝트 멤버 구성

|  front-end   | back-end |
| :----------: | :------- |
| 김준녕(팀장) | 김준녕    |
|    임헌성    | 임헌성    |
|    차하민    | 차하민    |
|    차정헌    | 차정헌    |
## 팀원별 역할

### 김준녕(팀장)

- 파일 구조 및 프로젝트 관리
- 메인 서버 구축 및 관리
- 데이터베이스 설계
- 카트 라우터 구현
- 하드코딩된 코드 컴포넌트화
- 장바구니 페이지 구현
- 결제 페이지 구현
- 업로드 페이지 구현
- 상품 등록 시 카테고리에 맞게 추가 기능

### 임헌성

- 헤더, 푸터 구현
- 메인 페이지 구현
- 상품 카드 컴포넌트 구현
- 오디오, 장비, 키보드 상품 페이지 구현
- 전반적인 웹 사이트 디자인 및 스타일링
- 상품 라우터 구현

### 차하민

- 로그인 페이지
- 회원가입 페이지
- 상품 상세 페이지 구현
- 콘솔, 기타, 마우스 상품 페이지 구현
- 전반적인 웹 사이트 디자인 및 스타일링
- 회원가입 및 로그인 라우터 구현

### 차정헌

- 프로젝트 목표에 따라 필요한 데이터 수집
- 다양한 소스에서 필요한 정보 및 자료 조사

  
