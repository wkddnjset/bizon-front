import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// 모바일
export default class ServiceSub08 extends Component {
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
                <div id="ServiceSub08">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">유니버셜 앱</div>
                            <div className="ServiceTitle">
                                <div className="Title01">스마트한 업무환경</div>
                                <div className='h-box'>
                                    <div className="Title01">강화를 위한</div>
                                    <div className="Title02 ml10">최적화된</div>
                                </div>
                                <div className="Title02">커넥티드 디바이스</div>
                            </div>
                            <div className="ServiceText">
                                스마트워크에 필요한 필수 기능 중심으로 구성하여<br/>
                                도입 전 환경과는 확연히 달라진 사용자 경험과<br/>
                                한결 편리해진 사용성을 제공합니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">알파멘션</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">채팅, 쪽지, 댓글 등</div>
                                    <div className="Title02">특정인을 지정하여</div>
                                    <div className="Title02">대화하는 알파멘션</div>
                                </div>
                                <div className="ServiceText">
                                    특정인과 커뮤니케이션이 필요할 때,<br/>
                                    알파멘션으로 특정인을 지목하고 강조할 수 있어<br/>
                                    원활한 소통이 가능합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                        <div className="FormeBg06"/>
                            <div className="TextBox">
                                <div className="SmallTitle">Mullen</div>
                                <div className="ServiceTitle">
                                    <div className='h-box'>
                                        <div className="Title01">언제 어디서나</div>
                                        <div className="Title02 ml10">스마트하게</div>
                                    </div>
                                    <div className="Title02">일정관리 하는 방법은?</div>
                                </div>
                                <div className="ServiceText">
                                    알라딘의 지니, 아더왕의 책사 멀린, 아이언맨의 AI비서 자비스처럼!<br/>
                                    다양한 편의 기능 제공으로 스마트한 일정관리와 업무가 가능합니다.
                                </div>
                            </div>
                        <div className="FormeImg03"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


