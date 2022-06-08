import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// ERP(편의기능)
export default class ServiceSub05 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                <div id="ServiceSub05">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">프로세스갤러리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">프로세스갤러리로</div>
                                <div className="Title02">복잡한 업무의 흐름을</div>
                                <div className="Title02">한눈에 직관적으로</div>
                            </div>
                            <div className="ServiceText">
                                직관적인 도식화를 통해 누구나 쉽고 빠르게<br/>
                                업무 프로세스를 이해할 수 있습니다.
                            </div>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">사이드바</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">어려운 내용까지</div>
                                    <div className="Title01">명쾌하게,</div>
                                    <div className="Title02">사이드바 어시스던트</div>
                                </div>
                                <div className="ServiceText">
                                    누구나 쉽게 ERP를 사용할 수 있도록<br/>
                                    메뉴, 화면 설명, 작성 요령, 정보 등의<br/>
                                    운영 및 작성 방법 가이드를 제공합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                        <div className="TextBox">
                            <div className="SmallTitle">엑셀 임포트</div>
                            <div className="ServiceTitle">
                                <div className="Title01">다량의 데이터 작업은</div>
                                <div className="Title02">엑셀 일괄 업로드로 끝.</div>
                            </div>
                            <div className="ServiceText">
                                엑셀로 작성한 데이터를 일괄 업로드하여<br/>
                                다량의 데이터 작업을 쉽고 편리하게 할 수 있습니다.
                            </div>
                        </div>
                        <div className="FormeImg03"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">R-Click</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">우클릭으로 완성되는</div>
                                    <div className="Title02">사용자 편의성</div>
                                </div>
                                <div className="ServiceText">
                                    ERP 데이터에서 별도의 버튼을 누르거나 이동 할 필요 없이<br/>
                                    R-Click(마우스 우클릭)으로 엑셀 변환하기, 컬럼 표시,<br/>
                                    찾기 기능을 사용할 수 있습니다.
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


