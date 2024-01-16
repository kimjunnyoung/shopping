import React, { useState, useEffect } from "react";
import "./upload.scss"; // 업로드 페이지에 적용될 스타일 파일을 가져옴
import "antd/dist/antd.css"; // Ant Design 컴포넌트의 기본 스타일을 가져옴
import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  Select,
  Radio,
  message,
} from "antd"; // Ant Design 컴포넌트들을 가져옴
import axios from "axios"; // HTTP 요청을 보내기 위한 axios 라이브러리를 가져옴
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅을 가져옴
import { API_URL } from "../config/contansts"; // API 엔드포인트의 기본 URL을 가져옴

const { Option } = Select; // Ant Design의 Select 컴포넌트에서 Option 컴포넌트를 사용할 수 있도록 가져옴

// 각 카테고리에 속하는 세부 카테고리를 정의한 객체
const categories = {
  mouse: [
    "RAZER VIPER 제품군",
    "RAZER BASILISK 제품군",
    "RAZER NAGA 제품군",
    "RAZER DEATHADDER 제품군",
    "기타",
  ],
  keyboard: [
    "RAZER BLACKWIDOW 제품군",
    "RAZER HUNTSMAN 제품군",
    "RAZER DEATHSTALKER 제품군",
    "기타",
  ],
  audio: [
    "RAZER BLACKSHARK 제품군",
    "RAZER BARRACUDA 제품군",
    "RAZER 스피커",
    "RAZER KRAKEN 제품군",
  ],
  console: [
    "올 버튼 아케이드 컨트롤러",
    "이어폰",
    "헤드셋",
    "컨트롤러",
    "콜라보레이션",
    "급속 충전 스탠드 & 번들",
  ],
  clothes: [
    "상의",
    "하의",
    "외투",
  ],
  gear: [
    "가방",
    "SNEKI SNEK ",
    "기타 ",
  ],
};

const UploadPage = () => {
  const navigate = useNavigate(); // React Router의 네비게이션 훅을 사용하여 페이지 이동을 제어할 수 있도록 선언
  
  // 상품 등록에 필요한 상태 변수들을 useState 훅을 사용하여 선언
  const [imageUrl, setImageUrl] = useState(null); // 업로드된 이미지 URL을 저장하는 상태 변수
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 값을 저장하는 상태 변수
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // 선택된 세부 카테고리 값을 저장하는 상태 변수
  const [end, setEnd] = useState(""); // 애니메이션 클래스를 조절하는 상태 변수

  // 페이지가 로드된 후 100ms 이후에 애니메이션 클래스를 추가하고, 언마운트 시 초기화
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return () => setEnd("");
  }, []);

  // 이미지 업로드가 완료되었을 때 호출되는 함수
  const onChangeImage = (info) => {
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    } else if (info.file.status === "error") {
      message.error("이미지 업로드에 실패했습니다.");
    }
  };

  // 카테고리 선택 시 호출되는 함수
  const onCategoryChange = (value) => {
    setSelectedCategory(value); // 선택된 카테고리 값을 업데이트
    setSelectedSubCategory(null); // 세부 카테고리 값을 초기화
  };

  // 세부 카테고리 선택 시 호출되는 함수
  const onSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value); // 선택된 세부 카테고리 값을 업데이트
  };

  // 상품 등록 폼 제출 시 호출되는 함수
  const onSubmit = (values) => {
    // 서버에 상품 등록 요청을 보냄
    axios
      .post(`${API_URL}/products`, {
        category: selectedCategory,
        subCategory: selectedSubCategory,
        name: values.name,
        seller: values.seller,
        price: values.price,
        imageUrl: imageUrl,
        description: values.description,
        mainDescription: values.mainDescription,
      })
      .then((result) => {
        console.log(result);
        message.success("상품이 성공적으로 등록되었습니다."); // 성공 메시지를 띄움
        navigate(`/${selectedCategory.toLowerCase()}`); // 해당 카테고리 페이지로 이동
      })
      .catch((error) => {
        console.error(error);
        message.error("상품 등록에 실패했습니다."); // 실패 메시지를 띄움
      });
  };

  // 업로드 페이지 컴포넌트의 렌더링 결과를 반환
  return (
    <div id="upload-container" className="inner">
      <div className={'uploadbg start ' + end}>
        <h1>상품등록</h1>
        {/* 상품 등록 폼 */}
        <Form name="productUpload" onFinish={onSubmit}>
          {/* 상품 이미지 업로드 부분 */}
          <Form.Item
            name="imgUpload"
            label={<div className="upload-label">상품사진</div>}
          >
            {/* 이미지 업로드를 위한 Upload 컴포넌트 */}
            <Upload
              name="image"
              action={`${API_URL}/image`}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              {/* 이미지가 업로드된 경우 이미지를 보여줌 */}
              {imageUrl ? (
                <img src={imageUrl} alt="" width="300px" height="300px" />
              ) : (
                <div id="upload-img-placeholder"> {/* 이미지가 업로드되지 않은 경우 이미지 업로드 버튼을 보여줌 */}
                  <img src="images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Divider />

          {/* 카테고리 선택 부분 */}
          <Form.Item
            name="category"
            label={<div className="upload-label">카테고리</div>}
          >
            {/* 카테고리를 선택할 수 있는 Select 컴포넌트 */}
            <Select placeholder="카테고리 선택" onChange={onCategoryChange}>
              {/* 카테고리 목록을 옵션으로 추가 */}
              {Object.keys(categories).map((category) => (
                <Option key={category}>{category}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* 세부 카테고리 선택 부분 */}
          {selectedCategory && (
            <Form.Item
              name="subCategory"
              label={
                <div className="upload-label detailcategory">세부 카테고리</div>
              }
            >
              {/* 세부 카테고리를 선택할 수 있는 Radio 컴포넌트 */}
              <Radio.Group onChange={onSubCategoryChange}>
                {/* 세부 카테고리 목록을 라디오 버튼으로 추가 */}
                {categories[selectedCategory].map((subCategory) => (
                  <Radio key={subCategory} value={subCategory} style={{ color: 'white' }}>
                    {subCategory}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          )}
          <Divider />

          {/* 판매자명 입력 부분 */}
          <Form.Item
            name="seller"
            label={<div className="upload-label">판매자명</div>}
          >
            {/* 판매자명을 입력할 수 있는 Input 컴포넌트 */}
            <Input className="nameUpload" size="large" />
          </Form.Item>
          <Divider />

          {/* 상품명 입력 부분 */}
          <Form.Item
            name="name"
            label={<div className="upload-label">상품이름</div>}
          >
            {/* 상품명을 입력할 수 있는 Input 컴포넌트 */}
            <Input className="upload-name" size="large" />
          </Form.Item>
          <Divider />

          {/* 상품가격 입력 부분 */}
          <Form.Item
            name="price"
            label={<div className="upload-label">상품가격</div>}
          >
            {/* 상품가격을 입력할 수 있는 InputNumber 컴포넌트 */}
            <InputNumber defaultValue={0} size="large" />
          </Form.Item>
          <Divider />

          {/* 상품소개 입력 부분 */}
          <Form.Item
            name="description"
            label={<div className="upload-label">상품소개</div>}
          >
            {/* 상품소개를 입력할 수 있는 TextArea 컴포넌트 */}
            <Input.TextArea
              size="large"
              id="product-description"
              maxLength={300}
              placeholder="상품 소개를 적어주세요"
            />
          </Form.Item>

          {/* 기술사양 입력 부분 */}
          <Form.Item
            name="mainDescription"
            label={<div className="upload-label">기술사양</div>}
          >
            {/* 기술사양을 입력할 수 있는 TextArea 컴포넌트 */}
            <Input.TextArea
              size="large"
              id="product-mainDescription"
              maxLength={300}
              placeholder="상품 소개를 적어주세요"
            />
          </Form.Item>

          {/* 상품 등록 버튼 */}
          <div className='uploadbtnBox'>
            <Form.Item>
              <Button id="submit-button" size="large" htmlType="submit">
                상품등록하기
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UploadPage;
