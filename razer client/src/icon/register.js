import React, { useState } from "react"; 
import axios from "axios";
import { NavLink } from "react-router-dom";
import { API_URL } from "../config/contansts";

// 컴포넌트 생성
const Register = () => {
  const [username, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [repassword, setRepassword] = useState(""); // 비밀번호 재입력 상태
  const [email, setEmail] = useState(""); // 이메일 상태
  const [gender, setGender] = useState(""); // 성별 상태
  const [phoneNumber, setPhoneNumber] = useState(""); // 전화번호 상태
  const [address, setAddress] = useState(""); // 주소 상태
  const [message, setMessage] = useState(""); // 서버로부터의 메시지 상태
  const [regist, setRegist] = useState(false); // 회원가입 완료 여부 상태


  //registerroutes 서버와의 통신
  const handleRegister = async () => {
    try {
      if (password !== repassword) { // 비밀번호와 재입력 비밀번호 일치 여부 확인
        setMessage("비밀번호와 비밀번호 재입력이 일치하지 않습니다.");
        return;
      }
      // 서버로 회원가입 정보 전송
      const response = await axios.post(`${API_URL}/register`, {
        username,
        password,
        email,
        gender,
        phoneNumber,
        address,
      });
      const data = response.data; // 서버로부터 받은 데이터
      if (response.status === 200) {
        setMessage(data.message); // 회원가입 성공 메시지 설정
        setRegist(true); // 회원가입 완료 상태를 true로 설정하여 완료 화면을 보여줌
      } else {
        setMessage(data.error); // 회원가입 실패 시 에러 메시지 설정
      }
    } catch (error) {
      console.error("회원가입 실패:", error); // 오류 발생 시 콘솔에 오류 메시지 출력
    }
  };
  

  //html 구현
  if (regist) {
    // 회원가입이 완료되면 완료 화면을 보여줌
    return (
      //완료 화면 UI 구현
      <div className="register-container">
        <div className="register-resultBox">
          <h2>회원가입 완료</h2>
          <div className="register-result-iconBox">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="register-result-message">
            <p>회원가입이 성공적으로 완료되었습니다.</p>
          </div>

          <div className="registerBtnBox">
            <NavLink to="/login">
              <p className="registerBtn">로그인하기 &gt;</p>
            </NavLink>
          </div>
        </div>
      </div>
    );
  } 
// 회원가입이 완료되지 않았을 경우 회원가입 폼을 보여줌
  return (
    // 회원가입 폼 UI 구현
    <div className="register-container">
      <div className="registerBox">
        <h2>회원가입</h2>
        <div className="inputBox">
          <label>아이디</label>
          <br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label>비밀번호</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='inputBox'>
          <label>비밀번호 재입력</label>
          <br></br>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label>이메일</label>
          <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="sexBox">
          <label>성별</label>
          <div className="sexInput">
            <label>
              <input
                type="radio"
                value="남자"
                checked={gender === "남자"}
                onChange={() => setGender("남자")}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                value="여자"
                checked={gender === "코자"}
                onChange={() => setGender("코자")}
              />
              코자
            </label>
          </div>
        </div>
        <div className="inputBox">
          <label>전화번호</label>
          <br></br>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label>주소</label>
          <br></br>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="registerBtnBox">
          <button className="registerBtn" onClick={handleRegister}>
            회원가입
          </button>
        </div>

        <div className='login-result'>
            {message && <p>{ message }</p>}
            </div>
        <div className="helperBox">
          <NavLink to="/login">
            <p className="helper">이미 회원이신가요? 로그인하러 가기 &gt;</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
