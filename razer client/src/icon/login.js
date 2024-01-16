import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/contansts";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [end, setEnd] = useState(""); // 로그인 애니메이션 클래스를 조작하기 위한 상태 및 상태 업데이트 함수 정의
  const [username, setUsername] = useState(""); // 사용자 아이디를 저장하는 상태 및 상태 업데이트 함수 정의
  const [password, setPassword] = useState(""); // 사용자 비밀번호를 저장하는 상태 및 상태 업데이트 함수 정의
  const [message, setMessage] = useState(""); // 로그인 결과 메시지를 저장하는 상태 및 상태 업데이트 함수 정의
  const [loggedIn, setLoggedIn] = useState(false); // 사용자 로그인 상태를 저장하는 상태 및 상태 업데이트 함수 정의
  const navigate = useNavigate(); // 프로그래밍적으로 경로를 이동하기 위한 useNavigate 훅을 사용하여 navigate 함수 정의
  const [userinfo, setUserinfo] = useState({
    // 사용자 정보를 저장하는 상태 및 상태 업데이트 함수 정의
    id: "Razer",
    gender: "남자",
    phoneNumber: "010-1234-5678",
    address: "서울특별시 송파구",
  });

  // 서버에서 사용자 정보를 가져오는 함수 정의
  const users = () => {
    axios.get(`${API_URL}/login`).then((result) => {
      console.log(result.data);
      setUserinfo(result.data); // 서버에서 받은 사용자 정보로 상태 업데이트
    });
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져오기 위해 useEffect 훅 사용
  useEffect(() => {
    users();
  }, []);

  // 세션 스토리지에서 토큰을 확인하여 로그인 상태를 설정하는 useEffect 훅
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn(true); // 토큰이 존재하면 로그인 상태를 true로 설정
    }
  }, []);

  // 페이지 로딩 후 100ms 후에 로그인 애니메이션 클래스를 추가하고, 100ms 후에 클래스를 제거하는 useEffect 훅
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, []);

  // 로그인 요청을 처리하는 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        navigate("/");
        const { token, message } = response.data;
        sessionStorage.setItem("token", token);
        setMessage(message);
        setLoggedIn(true);
      } else {
        setMessage("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setMessage("로그인에 실패했습니다.");
    }
  };

  // 로그아웃을 처리하는 함수
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUsername("");
    setPassword("");
    setLoggedIn(false);
    setMessage("로그아웃되었습니다.");
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        // 로그인된 경우 마이페이지를 보여주는 부분
        <div className={"mypageBox start " + end}>
          <h1>{userinfo.id}님의 마이페이지</h1>
          <div className="mypage-profileBox">
            <div className="mypage-profile"></div>
            <div className="myinfo">
              <h2>아이디: {userinfo.id}</h2>
              <h2>성별: {userinfo.gender}</h2>
              <h2>전화번호: {userinfo.phoneNumber}</h2>
              <h2>주소: {userinfo.address}</h2>
            </div>
          </div>
          <div className="mypage-logoutBox">
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        </div>
      ) : (
        // 로그인되지 않은 경우 로그인 폼을 보여주는 부분
        <div className={"loginBox start " + end}>
          <h2>로그인</h2>
          <div className="inputBox">
            <label>아이디</label>
            <br></br>
            <input
              placeholder="ID"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label>비밀번호</label>
            <br></br>
            <input
              placeholder="PW"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginBtnBox">
            <button className="loginBtn" onClick={handleLogin}>
              로그인
            </button>
          </div>
          <div className="login-result">{message && <p>{message}</p>}</div>

          <div className="registerBtnBox">
            <NavLink to="/register">
              <p className="registerBtn">회원가입 &gt;</p>
            </NavLink>
          </div>
          <div class="hr-sect">Join us</div>
          {/* <div className="iconBox">
            <div className='goole'>
              <i class="fa-brands fa-google"></i>
              <span style={{color: 'red'}}>구</span>
              <span style={{color: 'green'}}>글</span>
            </div>
            <div className='face'>
            <i class="fa-solid fa-comment"></i>
              <span>카카오톡</span>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Login;
