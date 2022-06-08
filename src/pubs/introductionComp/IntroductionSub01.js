import React, { Component, Fragment } from 'react';
import IntroSubLnb from './unit/IntroSubLnb';

// 서비스유형
export default class IntroductionSub01 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <IntroSubLnb  
                introductionSub01={this.props.introductionSub01}
                introductionSub02={this.props.introductionSub02}
                introductionSub03={this.props.introductionSub03}
                handleGnbMenu={this.props.handleGnbMenu}
                Titletext01={this.props.Titletext01}
                handleClickAlert={this.props.handleClickAlert}
                />                
                <div id="IntroductionSub01">
                    <div className="IntroMenu101">
                        <div className="IntroTitle">서비스 유형</div>
                        <div className="IntroBox h-box"> 
                            <div className="IntroSmallBox h-box flex-1">
                                <div className="LineBlue"/>
                                <div className="SmallImg01"/>
                                <div className="SmallBox">
                                    <div className="SmallTitle">구축형</div>
                                    <div className="SmallText">
                                        기업별 독립된 서버를 구축하는 형태로 기존 시스템<br/>
                                        연동 및 기업 정책 및 업무 환경에 따른 커스터마이징이<br/>
                                        필요한 경우 적합합니다.
                                    </div>
                                </div>
                            </div>
                            <div className="IntroSmallBox h-box flex-1">
                                <div className="LineBlue"/>
                                <div className="SmallImg02"/>
                                <div className="SmallBox">
                                    <div className="SmallTitle">클라우드형</div>
                                    <div className="SmallText">
                                        기업이 서버를 공동으로 사용하는 형태로 별도의<br/>
                                        서버 구축/운영이 필요 없어 운영 효율화 및 비용 절감이<br/>
                                        필요한 경우 적합합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroBG101"/>
                    </div>
                    <div className="IntroMenu102">
                        <div className="IntroTitle">서비스 특징</div>
                        <div className="IntroBox h-box">
                            <div className="IntroSmallBox">
                                <div className="TitleBox h-box">
                                    <div className="AccImg"/>
                                    <div className="SmallTitle">구축형 특징</div>
                                </div>
                                <div className="TextBox">
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">01</div>
                                            <div className="Ctitle">커스터마이징</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                기존 시스템과의 연동 및 추가와 기업 니즈에 따른<br/>
                                                커스터마이징 가능
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">02</div>
                                            <div className="Ctitle">규모별 서버 구축</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                기업 임직원 규모에 따라 맞춤형 서버 구축 지원
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">03</div>
                                            <div className="Ctitle">맞춤형 구축 컨설팅</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                다양한 구축 사례 노하우 기반으로 기업에 최적화된 컨설팅<br/>
                                                서비스 제공
                                            </div>
                                        </dic>
                                    </div>
                                </div>
                            </div>
                            <div className="IntroSmallBox">
                                <div className="TitleBox h-box">
                                    <div className="AccImg"/>
                                    <div className="SmallTitle">클라우드형 특징</div>
                                </div>
                                <div className="TextBox">
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">01</div>
                                            <div className="Ctitle">합리적인 비용</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                실제 서비스 사용자 수 및 사용 용량에 따른<br/>
                                                사용료 지불
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">02</div>
                                            <div className="Ctitle">효율적 운영 관리</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                별도 전산 운영 관리자 없이도 효율적 서비스 운영이 가능
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">03</div>
                                            <div className="Ctitle">상시 최신버전 지원</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                별도의 업데이트 과정 없이 상시 최신버전 지원
                                            </div>
                                        </dic>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroBG102"/>
                    </div>
                    <div className="IntroMenu103">
                        <div className="IntroTitle">기업별 서비스 추천</div>
                        <div className="IntroBox h-box">
                            <div className="IntroSmallBox">
                                <div className="TitleBox h-box">
                                    <div className="AccImg"/>
                                    <div className="SmallTitle">구축형에 적합한 기업</div>
                                </div>
                                <div className="IntroLine"/>
                                <div className="TextBox">
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">01</div>
                                            <div className="Ctitle">별도 커스터마이징이 필요한 기업</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                추가적인 기능 개발이 필요한 경우
                                            </div>
                                        </dic>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                기존 사용하던 서비스와의 연동이 필요한 경우
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">02</div>
                                            <div className="Ctitle">자체적인 서버 운영이 필요한 기업</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                회사 보안 문제로 자체적인 서버 운영이 필요한 경우
                                            </div>
                                        </dic>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                내부 운영 관리 인력이 있어 자체 서버 관리가 용이한 경우
                                            </div>
                                        </dic>
                                    </div>
                                </div>
                            </div>
                            <div className="IntroSmallBox">
                                <div className="TitleBox h-box">
                                    <div className="AccImg"/>
                                    <div className="SmallTitle">클라우드형에 적합한 기업</div>
                                </div>
                                <div className="IntroLine"/>
                                <div className="TextBox">
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">01</div>
                                            <div className="Ctitle">서버 구축 비용이 부담되는 기업</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                100인 이하 기업으로 높은 구축 비용이 부담스러운 경우
                                            </div>
                                        </dic>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                일괄 비용 지급이 부담스러워 월정액 결제가 필요한 경우
                                            </div>
                                        </dic>
                                    </div>
                                    <div className="TextSmallBox">
                                        <div className="TextTitle h-box">
                                            <div className="ColorBlue">02</div>
                                            <div className="Ctitle">효율적 전산 운영관리가 필요한 기업</div>
                                        </div>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                전산 운영 관리의 고민없이 서비스를 사용하고 싶은 경우
                                            </div>
                                        </dic>
                                        <dic className="SmallTextBox h-box">
                                            <span className="Acc"/>
                                            <div className="SmallText">
                                                실시간으로 최신 기능 업데이트를 제공받고 싶은 경우
                                            </div>
                                        </dic>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroBtnBox h-box">
                            {/* <div className="IntroBtn01 h-box" onClick={()=>{this.props.handleGnbMenu('introduction','2');}}>
                                <div className="BtnText">요금안내</div>
                                <div className="IntroArrow"/>
                            </div> */}
                            <div className="IntroBtn02 h-box" onClick={()=>{window.open('https://help.douzone.com/counsel/counsel_write_pop.jsp?areaName=dt&eaddperson2=17');}}>
                                <div className="BtnText">도입문의</div>
                                <div className="IntroArrow"/>
                            </div>
                        </div>
                        <div className="IntroBG103"/>
                        <div className="BGacc"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


