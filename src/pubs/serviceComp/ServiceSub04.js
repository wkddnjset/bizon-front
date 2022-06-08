import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// ERP(인사관리)
export default class ServiceSub04 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleVideoMove = () => {
        this.props.handleGnbMenu('media','3');
        setTimeout(() => {
            this.props.conRef.current.scrollTo({ top: 2550, behavior: 'smooth' });
        }, 600);
    }

    render() {
        return (
            <Fragment>
                <SubLnb 
                    serviceSub01={this.props.serviceSub01}
                    serviceSub02={this.props.serviceSub02}
                    serviceSub03={this.props.serviceSub03}
                    serviceSub04={this.props.serviceSub04}
                    serviceSub05={this.props.serviceSub05}
                    serviceSub06={this.props.serviceSub06}
                    serviceSub07={this.props.serviceSub07}
                    serviceSub08={this.props.serviceSub08}
                    handleServiceScroll={this.props.handleServiceScroll} 
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext00={this.props.Titletext00}
                    menu01={this.props.menu01}
                    menu02={this.props.menu02}
                    menu03={this.props.menu03}
                    menu04={this.props.menu04}
                    menu05={this.props.menu05}
                    menu06={this.props.menu06}
                    menu07={this.props.menu07}
                    menu08={this.props.menu08}
                    menu09={this.props.menu09}
                    menu10={this.props.menu10}
                    menu11={this.props.menu11}
                    menu12={this.props.menu12}
                    menu13={this.props.menu13}
                    menu14={this.props.menu14}
                />
                <div id="ServiceSub04">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">인사관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">다양한 인사관리 메뉴를 통해</div>
                                <div className="Title02">편리하게 인사 자료 관리</div>
                            </div>
                            <div className="ServiceText">
                                인사 데이터의 자동화 처리와 다양한 인사관리 메뉴를 통해<br/>
                                관리가 편리하고 쉬워집니다.
                            </div>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">근태관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">관리업무 시간을 줄여주는</div>
                                    <div className="Title02">효율적인 근태관리</div>
                                </div>
                                <div className="ServiceText">
                                    근로기준법에 근거하여 사전 검증 및 자동화 처리를 통한<br/>
                                    효율적인 근태관리가 가능합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                        <div className="TextBox">
                            <div className="SmallTitle">연차관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">연차 사용 촉진</div>
                                <div className="Title02">업무 시스템화로</div>
                                <div className="Title02">업무절차 75% 축소</div>
                            </div>
                            <div className="ServiceText">
                                기존에 수작업으로 진행하던 연차 사용 촉진 업무를<br/>
                                시스템화하여 자동 처리합니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg03"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">급여관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">급여계산식 설정을 통한</div>
                                    <div className="Title02">급여 자동 산출</div>
                                </div>
                                <div className="ServiceText">
                                    다양한 형태의 급여계산식 설정을 통해 급여가 자동 계산되며,<br/>
                                    유용한 협업 기능으로 원활한 업무 소통을 지원합니다.
                                </div>
                                <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                            </div>
                        </div>
                        <div className="FormeBg04"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg05"/>
                        <div className="TextBox">
                            <div className="SmallTitle">세무관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">세무 신고의 Best Practice,</div>
                                <div className="Title02">Amaranth 10 세무관리</div>
                            </div>
                            <div className="ServiceText">
                                15년간 축적된 더존 iCUBE의 운영 노하우와<br/>
                                다양한 협업의 요구사항이 반영된 세무신고 기능을 구현했습니다.
                            </div>
                        </div>
                        <div className="FormeImg05"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


