import React from 'react';
import './index.scss';
import { Carousel } from 'antd'; // antd 라이브러리의 Carousel 컴포넌트를 가져옴
import { NavLink } from 'react-router-dom';

// 메인 페이지 컴포넌트
const MainPage = (props) => {
    // 슬라이드 변경 시 호출되는 함수
    const onChange = (currentSlide) => {
        console.log(currentSlide); // 현재 슬라이드의 인덱스를 콘솔에 출력함
    };

    // JSX로 메인 페이지 렌더링
    return (
        <div style={{paddingTop: "66px", background: "black"}}>
            <div id="main">
                <div id="banner">
                    <Carousel afterChange={onChange} autoplay>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/keybord.png" alt="" />
                        </div>
                        <div className='user-text'>
                            <h1>RAZER HUNTSMAN V3 PRO 제품군</h1>
                            <h3>FOR THE PRO</h3>
                            <p><NavLink to= '/keyboard'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/mobile.png" alt="" />
                        </div>
                        <div className='user-text'>
                            <h1>RAZER KISHI V2 PRO</h1>
                            <h3>MOBILE GAMING IS NOW HARDCORE</h3>
                            <p><NavLink to= '/console'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/mouse.png" alt="" />
                        </div>
                        <div className='user-text'>
                            <h1>RAZER VIPER V3 HYPERSPEED</h1>
                            <h3>FOR THE PRO</h3>
                            <p><NavLink to= '/mouse'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    </Carousel>
                </div>
                <div className='wrapper'>
                    <div className='user-warp'>
                            <div className='user-img'> 
                                <img src="images/banners/headset.png" alt="" />
                            </div>
                            <div className='user-text2 first'>
                                <h1>RAZER BLACKSHARK V1 HYPERSPEED</h1>
                                <h3>FOR THE PRO</h3>
                                <p><NavLink to= '/audio'>자세한 정보</NavLink><span>ᐳ</span></p>
                            </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/lrset.png" alt="" />
                        </div>
                        <div className='user-text2'>
                            <h1>RAZER MORAY</h1>
                            <h3>온종일 계속되는 스트리밍. 하루 종일 지속되는 편안함.</h3>
                            <p><NavLink to= '/audio'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/keybord2.png" alt="" />
                        </div>
                        <div className='user-text2'>
                            <h1>RAZER BLACKWIDOW V4 75%</h1>
                            <h3>SWAP OUT.SWAP IN. GAME ON.</h3>
                            <p><NavLink to= '/keyboard'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/gamepad.png" alt="" />
                        </div>
                        <div className='user-text2'>
                            <h1>RAZER KITSUNE</h1>
                            <h3>옵티컬 + 정확도! 최강의 조합!</h3>
                            <p><NavLink to= '/console'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/mouse2.png" alt="" />
                        </div>
                        <div className='user-text2'>
                            <h1>RAZER COBRA PRO</h1>
                            <h3>PERFECTED FOR PLAY</h3>
                            <p><NavLink to= '/mouse'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                    <div className='user-warp'>
                        <div className='user-img'> 
                            <img src="images/banners/keyset.png" alt="" />
                        </div>
                        <div className='user-text2'>
                            <h1>RAZER MECHANLCAL SWITCHES</h1>
                            <h3>ALEGACY OF INNOVATIOM</h3>
                            <p><NavLink to= '/console'>자세한 정보</NavLink><span>ᐳ</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainPage;