import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// Forme
export default class ServiceSub01 extends Component {
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
                    handleServiceMenuClick={this.props.handleServiceMenuClick}
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
                <div id="ServiceSub01">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">품의/지출결의</div>
                            <div className="ServiceTitle">
                                <div className="Title01">전표 처리 자동화로</div>
                                <div className="Title02">업무 프로세스 51% 축소</div>
                            </div>
                            <div className="ServiceText">
                                지출결의서에 결재 종결과 동시에<br></br>
                                자동으로 분개 생성 및 자금수지계획에 반영합니다.<br></br>
                                또한 복잡했던 프로세스를 29단계에서 14단계로 단축하였습니다.
                            </div>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">경비청구</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">경비 입력 및 검증 업무</div>
                                    <div className='h-box'>
                                        <div className="Title01">자동화로</div>
                                        <div className="Title02 ml10">업무 프로세스</div>
                                    </div>
                                        <div className="Title02">41% 축소</div>
                                </div>
                                <div className="ServiceText">
                                    데이터 패턴 분석으로 자동 입력 및 검증이 가능하고<br></br>
                                    실시간으로 업무진행 상태 확인이 가능합니다.
                                </div>
                                <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                        <div className="TextBox">
                            <div className="SmallTitle">세금계산서 관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">세금계산서와</div>
                                <div className="Title01">수금 계획 관리로</div>
                                <div className="Title02">자금수금계획 업무 자동화</div>
                            </div>
                            <div className="ServiceText">
                                임직원이 직접 매출(세금)계산서를 발행하고<br></br>
                                수금 계획을 수랍하면 자금수금계획에 자동 반영됩니다.
                            </div>
                        </div>
                        <div className="FormeImg03"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">업무용 승용차 관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">운행기록부 작성으로</div>
                                    <div className="Title02">승용차 운행 기록 관리를</div>
                                    <div className="Title02">더욱 효율적으로</div>
                                </div>
                                <div className="ServiceText">
                                    엑셀 파일을 관리자에게 별도로 제출할 필요 없이<br></br>
                                    개인이 직접 운행기록부를 작성할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg04"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg05"/>
                        <div className="TextBox">
                            <div className="SmallTitle">근태관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">근태신청서 자동화로</div>
                                <div className="Title02">작성시간은 단축되고</div>
                                <div className="Title02">시간 비용은 70% 절감</div>
                            </div>
                            <div className="ServiceText">
                                근태 프로세스 간소화와 자동화를 통해<br></br>
                                편리한 근태관리를 지원합니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg05"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg06"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">연차관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">연차 계획 관리로</div>
                                    <div className="Title02">연차 사용은</div>
                                    <div className="Title02">더욱 체계적으로</div>
                                </div>
                                <div className="ServiceText">
                                    월별연차계획, 연차사용촉진 프로세스 단축과<br></br>
                                    자동화를 통해 연차관리가 쉬워집니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg06"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg07"/>
                        <div className="TextBox">
                            <div className="SmallTitle">인사관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">시스템 통합 및 자동화로</div>
                                <div className="Title02">인사관리 프로세스를</div>
                                <div className="Title02">단축하여 관리를 원활하게</div>
                            </div>
                            <div className="ServiceText">
                                인사 데이터의 연결과 공유로<br></br>
                                신속하고 편리한 인사관리 업무를 지원합니다.
                            </div>
                        </div>
                        <div className="FormeImg07"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg08"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">급여/퇴직관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">이제 클릭 한번으로</div>
                                    <div className="Title02">급여정보, 연말정산</div>
                                    <div className="Title02">예상 환급 세액을 간편하게</div>
                                </div>
                                <div className="ServiceText">
                                    근로자 개인이 직접 편리하게 급여명세서와<br/>
                                    예상퇴직금 확인 및 연말정산을 할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg08"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg09"/>
                        <div className="TextBox">
                            <div className="SmallTitle">주52시간관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">전자결재 문서는 자동 반영되어</div>
                                <div className='h-box'>
                                    <div className="Title02">빠르게 작성하고,</div>
                                    <div className="Title01 ml10">통합 근태관리는</div>
                                </div>
                                <div className="Title02">일정까지 연동되어 편리하게</div>
                            </div>
                            <div className="ServiceText">
                                근태신청 데이터가 전자결재 문서 및 일정 캘린더에<br/>
                                자동 반영되어 데이터 입력 소요 시간이 줄어듭니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg09"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


