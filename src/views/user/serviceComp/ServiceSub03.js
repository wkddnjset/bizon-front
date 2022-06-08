import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url';
import SubLnb from "./unit/SubLnb";

// ERP(회계관리)
export default class ServiceSub03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleVideoMove = () => {
        this.props.handleGnbMenu('media', '3');
        setTimeout(() => {
            this.props.onRef.current.scrollTo({ top: 2550, behavior: 'smooth' });
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
                <div id="ServiceSub03">
                    <div className="ServiceMenu">
                        <div className="FormeBg01" />
                        <div className="TextBox">
                            <div className="SmallTitle">자동전표처리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">자동으로 수집된</div>
                                <div className="Title02">기관별 증빙 데이터의</div>
                                <div className="Title02">자동 분개</div>
                            </div>
                            <div className="ServiceText">
                                회계담당자는 수집된 자료와 분개를 확인만 하고<br />
                                바로 전표 처리를 진행할 수 있습니다.
                            </div>
                            <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                <p className='ClickBox'>영상으로 확인하기</p>
                            </Link>
                        </div>
                        <div className="FormeImg01" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">전표/장부처리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">체계적인 구조로</div>
                                    <div className="Title02">원천 데이터까지</div>
                                    <div className="Title02">추적 가능한 전표관리</div>
                                </div>
                                <div className="ServiceText">
                                    전표가 발생된 원천 데이터 추적 외에도<br />
                                    다양한 관리항목들을 통해 더욱 쉽고 편리한<br />
                                    사용이 가능해집니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03" />
                        <div className="TextBox">
                            <div className="SmallTitle">결산/재무제표관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">자동결산 기능과</div>
                                <div className="Title01">관리항목별로 작성된</div>
                                <div className="Title02">주요 재무제표 지원</div>
                            </div>
                            <div className="ServiceText">
                                임직원이 직접 매출(세금)계산서를 발행하고<br />
                                수금 계획을 수립하면 자금수금계획에 자동 반영되는<br />
                                편의성을 경험해 보세요.
                            </div>
                        </div>
                        <div className="FormeImg03" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">사용자정의 재무제표관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">의료법인, 금융업,</div>
                                    <div className='h-box'>
                                        <div className="Title01">보험업 등</div>
                                        <div className="Title02 ml10">직접 제작하는</div>
                                    </div>
                                    <div className="Title02">다양한 업종별 재무제표</div>
                                </div>
                                <div className="ServiceText">
                                    재무제표를 원하는 형태로 만들 수 있어<br />
                                    관리 목적에 따라 다양한 재무제표 제작이 가능합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg04" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg05" />
                        <div className="TextBox">
                            <div className="SmallTitle">고정자산관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">유/무형자산</div>
                                <div className="Title02">상각비 계산과</div>
                                <div className="Title02">결산 지원은 자동으로</div>
                            </div>
                            <div className="ServiceText">
                                고정자산 등록과 동시에 상각비를 계산하고 기말 결산 시 감가상각비를<br />
                                자동 분개하여 결산 업무를 더욱 효율적으로 지원합니다.
                            </div>
                        </div>
                        <div className="FormeImg05" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg06" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">자금관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">한눈에 파악하고 예측하는</div>
                                    <div className="Title02">기업의 가용자금 흐름과</div>
                                    <div className="Title02">자금손익</div>
                                </div>
                                <div className="ServiceText">
                                    기업의 모든 자금 업무를 하나의 시스템으로 통합하여<br />
                                    정확하게 자금흐름을 파악하고 의사결정에 필요한<br />
                                    지표를 제공합니다.
                                </div>
                                <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                    <p className='ClickBox'>영상으로 확인하기</p>
                                </Link>
                            </div>
                        </div>
                        <div className="FormeBg06" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg07" />
                        <div className="TextBox">
                            <div className="SmallTitle">금융서비스 연동</div>
                            <div className="ServiceTitle">
                                <div className="Title01">한 곳에서</div>
                                <div className="Title02">일괄 관리할 수 있는</div>
                                <div className="Title02">통합 금융자금관리</div>
                            </div>
                            <div className="ServiceText">
                                여러 금융 기관의 금융정보를 연계하여<br />
                                한 번에 확인 및 전표처리해주는 더존 금융서비스입니다.
                            </div>
                        </div>
                        <div className="FormeImg07" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg08" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">세무신고자동화</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">신고서 작성, 검증에서</div>
                                    <div className="Title02">전자신고까지 자동화시킨</div>
                                    <div className="Title02">Amaranth 10</div>
                                </div>
                                <div className="ServiceText">
                                    홈택스에 접속하지 않아도 클릭 한 번으로<br />
                                    전자신고 파일 자동 검증 및 제출이 가능하여<br />
                                    업무 프로세스 단계를 획기적으로 단축시켰습니다.
                                </div>
                                <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                    <p className='ClickBox'>영상으로 확인하기</p>
                                </Link>
                            </div>
                        </div>
                        <div className="FormeBg08" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg09" />
                        <div className="TextBox">
                            <div className="SmallTitle">예산관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">예산과목 기준으로</div>
                                <div className="Title02">프로젝트/부서별</div>
                                <div className="Title02">예산편성 관리</div>
                            </div>
                            <div className="ServiceText">
                                예산과목을 기준으로 프로젝트/부서별 통제<br />
                                편성기능을 지원합니다.<br />
                            </div>
                        </div>
                        <div className="FormeImg09" />
                    </div>
                </div>
            </Fragment>
        );
    }
}