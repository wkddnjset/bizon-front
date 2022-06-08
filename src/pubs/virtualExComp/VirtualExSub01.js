import React, { Component, Fragment } from 'react';
import VirtualExSubLnb from './unit/VirtualExSubLnb';
import Slider from 'react-slick';
import "../../www/css/slick.scss";
import "../../www/css/slick-theme.scss";

import Dtec01 from '../../www/images/sub/virtualEx/img-dtec-01@2x.png'
import Dtec02 from '../../www/images/sub/virtualEx/img-dtec-02@2x.png'
import Dtec03 from '../../www/images/sub/virtualEx/img-dtec-03@2x.png'
import Dtec04 from '../../www/images/sub/virtualEx/img-dtec-04@2x.png'

// 가상체험관
export default class VirtualExSub01 extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {
        const settings = {
            className:"virtualSlide",
            centerMode:true,
            centerPadding: "0px",
            dots: true,
            infinite: true,
            speed: 700,
            swipe:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendDots: dots => (
                <div style={{padding: "10px"}}>
                  <ul style={{margin: "0px"}}>{dots}</ul>
                </div>
              ),
              customPaging: i => (
                <div style={{width: "56px",height:"4px",color: "transparent",backgroundColor:"#000",opacity:"0.1",fontSize:"1px"}}>{i + 1}</div>
              )
        };
        return (
            <Fragment>
                <VirtualExSubLnb handleGnbMenu={this.props.handleGnbMenu}/>
                <div id="VirtualExSub01">
                    <div className="VirtualBox">
                        <div className="TitleBox">
                            <div className="TopText">Amaranth 10</div>
                            <div className="AllTitle">가상체험관 소개</div>
                            <div className="AllText">
                                커뮤니케이션 환경의 변화와 디지털전환이 혁신이 되는 세상.<br/>
                                업무의 모든 것이 연결되는 Amaranth 10의 가상체험관으로 안내합니다.
                            </div>
                        </div>
                        <div className="BtnBox">
                            <span className="txt" onClick={()=>{window.open('https://mv.amaranth10.co.kr');}}>가상체험관 바로가기</span>
                        </div>
                        <div className="VeImg01"/>
                        <div className="Bg01"/>
                        <div className="Bg02"/>
                        <div className="Bg03"/>
                    </div>
                    <div className="VirtualBox vir01">
                        <div className="TitleBox">
                            <div className="TopText">Introduce</div>
                            <div className="AllTitle">가상체험관 둘러보기</div>
                            <div className="AllText">
                                Amaranth 10의 철학과 브랜드를 경험하고,<br/> 
                                공감할 수 있는 인터랙티브(Interactive)한 가상체험관을 구현하였습니다.
                            </div>
                        </div>
                        <div className='slideAllBox'>
                            <Slider {...settings} className='virtualSlide'>
                                <div>
                                    <img src={Dtec01} alt="홍보"/>
                                    <div className="box">
                                        <div className="text01">홍보/전시 공간 구성</div>
                                        <div className="text02">· 웰컴존</div>
                                        <div className="text02">· 모바일존</div>
                                        <div className="text02">· 디지털브랜드존</div>
                                    </div>
                                    <div className="text03">홍보/전시 - 모바일존</div>
                                </div>
                                <div>
                                    <img src={Dtec02} alt="브랜드"/>
                                    <div className="box">
                                        <div className="text01">브랜드 공간 구성</div>
                                        <div className="text02">· UI/UX존</div>
                                        <div className="text02">· 브랜드포인트존</div>
                                        <div className="text02">· 브랜드스토리존</div>
                                    </div>
                                    <div className="text03">브랜드 - UI/UX존</div>
                                </div>
                                <div>
                                    <img src={Dtec03} alt="체험"/>   
                                    <div className="box">
                                        <div className="text01">체험 공간 구성</div>
                                        <div className="text02">· 스마트워크 체험존</div>
                                        <div className="text02">· 타겟체험존</div>
                                        <div className="text02">· 시연존1, 2</div>
                                    </div>
                                    <div className="text03">체험 - 스마트워크 체험존</div>
                                </div>
                                <div>
                                    <img src={Dtec04} alt="세미나"/>
                                    <div className="box">
                                        <div className="text01">세미나 공간 구성</div>
                                        <div className="text02">· 세미나 가는 길</div>
                                        <div className="text04">더존 을지타워 포스팅/제품 철학 아카이브</div>
                                        <div className="text02">· 세미나존</div>
                                    </div>
                                    <div className="text03">세미나 - 세미나존</div>
                                </div>
                            </Slider>
                            <div className="SlideText">· 자세한 콘텐츠 확인은 하단의 바로가기를 통해 체험하실 수 있습니다.</div>
                        </div>
                    </div>
                    <div className="VirtualBox">
                        <div className="TitleBox">
                        <div className="TopText">Metaverse Map</div>
                            <div className="AllTitle">가상체험관 구조</div>
                            <div className="AllText">
                                더존을지타워 내 위치한 DTEC의 공간을 다양한 Amaranth 10 가상 체험관으로 배치하였습니다.
                            </div>
                        </div>
                        <div className="VeImg02"/>
                    </div>
                    <div className="VirtualBox vir02">
                        <div className="TitleBox">
                        <div className="TopText">User Guide</div>
                            <div className="AllTitle">가상체험관 조작법</div>
                            <div className="AllText">
                                Amaranth 10의 공간을 체험하기 쉽도록 조작 버튼과 가이드를 배치하였습니다.
                            </div>
                        </div>
                        <div className="VeImg03"/>
                        <div className="BtnBox02">
                            <span className="txt" onClick={()=>{window.open('https://mv.amaranth10.co.kr');}}>가상체험관 바로가기</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


