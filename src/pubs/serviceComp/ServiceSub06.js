import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// 문서관리(ONEFFICE)
export default class ServiceSub06 extends Component {
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
                <div id="ServiceSub06">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">문서작성</div>
                            <div className="ServiceTitle">
                                <div className="Title01">다양한 서식과</div>
                                <div className="Title02">문서 관련 모든 작업을</div>
                                <div className="Title02">웹에서 편리하고 쉽게</div>
                            </div>
                            <div className="ServiceText">
                                문서 작성에 꼭 필요한 필수 기능을 중심으로<br/>
                                웹과 PC에서 문서를 쉽게 작성하고 공유할 수 있습니다.
                            </div>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">문서공유</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">문서를 조직 구성원과</div>
                                    <div className='h-box'>
                                        <div className="Title01">공유하는</div>
                                        <div className="Title02 ml10">유연하고</div>
                                    </div>
                                    <div className="Title02">신속한 협업</div>
                                </div>
                                <div className="ServiceText">
                                    Amaranth 10 커뮤니케이션 툴과의 융합을 통해<br/>
                                    문서를 조직 구성원과 빠르게 공유하여<br/>
                                    더욱 전문적이고 완성도 높은 협업을 경험할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                        <div className="TextBox">
                            <div className="SmallTitle">문서댓글</div>
                            <div className="ServiceTitle">
                                <div className="Title01">문서와 의견을 함께</div>
                                <div className="Title01">나누면서 편집하는</div>
                                <div className="Title02">실시간 소통과 협업</div>
                            </div>
                            <div className="ServiceText">
                                문서 내 댓글, 알파멘션 기능을 통해 문서 기반의<br/>
                                실시간 소통 및 협업이 가능합니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg03"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">연관문서</div>
                                <div className="ServiceTitle">
                                    <div className="Title02">찾기 어렵고 비슷한</div>
                                    <div className="Title02">연관 문서 열람은</div>
                                    <div className="Title02">이제 그만</div>
                                </div>
                                <div className="ServiceText">
                                    서로 관련된 문서들을 하나의 문서 안에서<br/>
                                    연관 문서로 등록하여 관리하고<br/>
                                    간편하게 Best-Practice를 참조할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg04"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


