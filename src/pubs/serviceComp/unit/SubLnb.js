import React, { Component, Fragment } from 'react';

// Sub LNB
export default class ServiceSubLnb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="SubMainBox">
                    <div className="SubAllImg">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <div className="MenuIcon" onClick={()=>{this.props.handleGnbMenu('main');}}/>
                                <div className="RightIcon"/>
                                <div>서비스 소개</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext00}</div>
                            </div>
                            <div className="MenuTitle">서비스 소개</div>
                            <div className="MenuText">
                                물리적 통합이 아닌 화학적 결합으로<br/>
                                기업의 지속가능한 성장을 완성하는 Amaranth 10의 기능을 소개합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox">
                    <div className="SubInner v-box">
                        <div className="SubMenu">
                            <ul className="OutMenu h-box">
                                <li className={`OutMenuLi ${this.props.serviceSub01 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','1');}}>For Me(임직원업무관리)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub02 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','2');}}>그룹웨어</li>
                                <li className={`OutMenuLi ${this.props.serviceSub03 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','3');}}>ERP(회계관리)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub04 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','4');}}>ERP(인사관리)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub05 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','5');}}>ERP(편의기능)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub06 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','6');}}>문서관리(ONEFFICE)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub07 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','7');}}>문서관리(ONECHAMBER)</li>
                                <li className={`OutMenuLi ${this.props.serviceSub08 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('service','8');}}>모바일</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub01 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>품의/지출결의</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>경비청구</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>세금계산서 관리</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>업무용승용차 관리</li>
                                <li className={`InMenuLi ${this.props.menu05 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('5');}}>근태관리</li>
                                <li className={`InMenuLi ${this.props.menu06 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('6');}}>연차관리</li>
                                <li className={`InMenuLi ${this.props.menu07 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('7');}}>인사관리</li>
                                <li className={`InMenuLi ${this.props.menu08 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('8');}}>급여/퇴직관리</li>
                                <li className={`InMenuLi ${this.props.menu09 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('9');}}>주52시간관리</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub02 ? '':'none'}}>
                                <li className={`InMenuLi many ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>메인포털</li>
                                <li className={`InMenuLi many ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>통합검색</li>
                                <li className={`InMenuLi many ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>보안로그인(2차인증)</li>
                                <li className={`InMenuLi many ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>전자결재</li>
                                <li className={`InMenuLi many ${this.props.menu05 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('5');}}>일정관리</li>
                                <li className={`InMenuLi many ${this.props.menu06 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('6');}}>자원관리</li>
                                <li className={`InMenuLi many ${this.props.menu07 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('7');}}>전자메일</li>
                                <li className={`InMenuLi many ${this.props.menu08 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('8');}}>게시판</li>
                                <li className={`InMenuLi many ${this.props.menu09 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('9');}}>업무관리(KISS)</li>
                                <li className={`InMenuLi many ${this.props.menu10 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('10');}}>화상회의</li>
                                <li className={`InMenuLi many ${this.props.menu11 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('11');}}>화면공유</li>
                                <li className={`InMenuLi many ${this.props.menu12 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('12');}}>메신저</li>
                                <li className={`InMenuLi many ${this.props.menu13 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('13');}}>팩스/SMS</li>
                                <li className={`InMenuLi many ${this.props.menu14 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('14');}}>Keep</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub03 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>자동전표처리</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>전표/장부관리</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>결산/재무제표관리</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>사용자정의 재무제표관리</li>
                                <li className={`InMenuLi ${this.props.menu05 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('5');}}>고정자산관리</li>
                                <li className={`InMenuLi ${this.props.menu06 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('6');}}>자금관리</li>
                                <li className={`InMenuLi ${this.props.menu07 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('7');}}>금융서비스연동</li>
                                <li className={`InMenuLi ${this.props.menu08 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('8');}}>세무신고자동화</li>
                                <li className={`InMenuLi ${this.props.menu09 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('9');}}>예산관리</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub04 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>인사관리</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>근태관리</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>연차관리</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>급여관리</li>
                                <li className={`InMenuLi ${this.props.menu05 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('5');}}>세무관리</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub05 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>프로세스갤러리</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>사이드바</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>엑셀임포트</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>R클릭</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub06 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>문서작성</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>문서공유</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>문서댓글</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>연관문서</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub07 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>이력관리</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>다차원 분류체계</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>폴더링크공유</li>
                                <li className={`InMenuLi ${this.props.menu04 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('4');}}>콘텐츠보안</li>
                                <li className={`InMenuLi ${this.props.menu05 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('5');}}>중복파일 삭제</li>
                                <li className={`InMenuLi ${this.props.menu06 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('6');}}>탐색기 Agent</li>
                                <li className={`InMenuLi ${this.props.menu07 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('7');}}>공유문서함</li>
                                <li className={`InMenuLi ${this.props.menu08 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('8');}}>부서문서함</li>
                            </ul>
                        </div>
                        <div className="InSubMenu">
                            <ul className={`InMenu h-box`} style={{display:this.props.serviceSub08 ? '':'none'}}>
                                <li className={`InMenuLi ${this.props.menu01 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('1');}}>유니버셜앱</li>
                                <li className={`InMenuLi ${this.props.menu02 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('2');}}>알파멘션</li>
                                <li className={`InMenuLi ${this.props.menu03 ? 'on':''}`} onClick={()=>{this.props.handleServiceScroll('3');}}>멀린</li>
                            </ul>
                        </div>
                        <span className="AccLine"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


