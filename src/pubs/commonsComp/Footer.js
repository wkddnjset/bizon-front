import React, { Component, Fragment } from 'react';

// 이미지
import footerMainLogo from '../../www/images/temp/lg-footer-gray@2x.png'
import footerSubLogo from '../../www/images/temp/lg-footer-color@2x.png'
import ScrollDown from './jsonComp/ScrollDown';

// 푸터
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comboBoxOpen:false,
        }
    }

    handleComboBoxToggle = () => {
        this.setState({comboBoxOpen:!this.state.comboBoxOpen})
    }
    handleComboBoxClose = () => {
        this.setState({comboBoxOpen:false})
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handleComboBoxClose);
    }
    
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleComboBoxClose);
    }

    render() {
        // 탑 스크롤 버튼을 컨트롤하기 위해 설정
        let footerRec = this.props.footerRec;
        let scrollNow = this.props.scrollNow;
        let intWindowHeight = this.props.intWindowHeight;

        return (
            <Fragment>
                <div id="footer" ref={this.props.footerRef} className={`footerWrap v-box ${this.props.pageType}`}>
                    {/* 코드 임시숨김 */}
                    <div className="footerTop">
                        <div className="footerTopIn h-box">
                            <ul className="footerNav flex-1 h-box">
                                <li className="fLink01">
                                    <dt title="브랜드">브랜드</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('brand','1');}} title="새롭게 정의하다">새롭게 정의하다</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('brand','2');}} title="브랜드 스토리">브랜드 스토리</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('brand','3');}} title="BI">BI</dd>
                                </li>
                                <li className="fLink02">
                                    <dt title="서비스 소개">서비스 소개</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','1');}} title="Forme(임직원업무관리)">Forme(임직원업무관리)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','2');}} title="그룹웨어">그룹웨어</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','3');}} title="ERP(회계관리)">ERP(회계관리)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','4');}} title="ERP(인사관리)">ERP(인사관리)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','5');}} title="ERP(편의기능)">ERP(편의기능)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','6');}} title="문서관리(ONEFFICE)">문서관리(ONEFFICE)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','7');}} title="문서관리(ONECHAMBER)">문서관리(ONECHAMBER)</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('service','8');}} title="모바일">모바일</dd>
                                </li>
                                <li className="fLink03">
                                    <dt title="도입안내">도입안내</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('introduction','1');}} title="서비스 유형">서비스 유형</dd>
                                    {/* <dd onClick={()=>{this.props.handleClickAlert();}} title="요금안내">요금안내</dd> */}
                                    <dd onClick={()=>{window.open('https://help.douzone.com/counsel/counsel_write_pop.jsp?areaName=dt&eaddperson2=17');}} title="도입문의">도입문의</dd>
                                </li>
                                <li className="fLink04">
                                    <dt title="PR센터">PR센터</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('media','1');}} title="광고">광고</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('media','2');}} title="보도자료">보도자료</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('media','3');}} title="영상콘텐츠">영상콘텐츠</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('media','4');}} title="공지사항">공지사항</dd>
                                </li>
                                <li className="fLink05">
                                    <dt title="가상체험관">가상체험관</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('virtual','1');}} title="가상체험관">가상체험관</dd>
                                </li>
                                <li className="fLink06">
                                    <dt title="CEO 인사이트">CEO 인사이트</dt>
                                    <dd onClick={()=>{this.props.handleGnbMenu('ceo','1');}} title="DX Insight">DX Insight</dd>
                                    <dd onClick={()=>{this.props.handleGnbMenu('ceo','2');}} title="DX 리더스포럼">DX 리더스포럼</dd>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 코드 임시숨김 */}
                    <div className="footerMid">
                        <div className="footerMidIn h-box">
                            <div className="linkBox h-box">
                                <div className="text01" onClick={()=>{this.props.handleGnbMenu('terms','1');}} title="개인정보처리방침">개인정보처리방침</div>
                                <div className="text02" onClick={()=>{this.props.handleGnbMenu('terms','2');}} title="이용약관">이용약관</div>
                                <div className="text02" onClick={()=>{this.props.handleGnbMenu('terms','3');}} title="마케팅 수신동의">마케팅 수신동의</div>
                                <div className="text02" onClick={()=>{this.props.handleGnbMenu('admin');}} title="관리자(임시링크)">관리자(임시링크)</div>
                            </div>
                            <div className="comboBox flex-1">
                                <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxToggle()}}>Family Site</div>
                                <div className="list animated03s fadeIn" style={{display:this.state.comboBoxOpen ? '':'none'}}>
                                    <ul>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxClose();window.open('http://www.douzone.com/');}}>더존 ICT 그룹사</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxClose();window.open('https://dtec.douzone.com/');}}>DOUZONE DTEC</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxClose();window.open('https://dtecplex.com/');}}>FoEX 교육센터</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxClose();window.open('https://helpdesk.douzone.com');}}>온라인 고객센터</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleComboBoxClose();window.open('https://mv.amaranth10.co.kr/');}}>가상체험관</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.comboBoxOpen ? 'down':'up'}`} />
                            </div>
                        </div>
                    </div>
                    <div className="footerBot h-box">
                        <div className="footerLogo">
                            <img src={footerMainLogo} alt='DOUZONE 더존비즈온' style={{display:this.props.pageType === 'main' ? '':'none'}} />
                            <img src={footerSubLogo} alt='DOUZONE 더존비즈온' style={{display:this.props.pageType === 'sub' ? '':'none'}} />
                        </div>
                        <div className="footerInfo">
                            <div className="infoBox v-box">
                                <div className="h-box">
                                    <div className="text">(주)더존비즈온 대표 김용우</div>
                                    <div className="line" />
                                    <div className="text">사업자등록번호 : 134-81-08473</div>
                                    <div className="line" />
                                    <div className="text">통신판매신고번호 : 제2011-강원춘천-0039호</div>
                                </div>
                                <div className="h-box">
                                    <div className="text">더존을지타워 : 서울특별시 중구 을지로1가 87 (도로명 : 중구 을지로 29)</div>
                                </div>
                                <div className="h-box">
                                    <div className="text">더존강촌캠퍼스 : 강원도 춘천시 남산면 수동리 749 (도로명 : 춘천시 남산면 버들1길 130)</div>
                                </div>
                                <div className="h-box">
                                    <div className="text">TEL : 02.6233.3000</div>
                                    <div className="line" />
                                    <div className="text">FAX : 02.6233.3030</div>
                                    <div className="line" />
                                    <div className="text">구입상담문의 : 1688-5000</div>
                                    <div className="line" />
                                    <div className="text">고객센터 : 1688-6000</div>
                                    <div className="line" />
                                    <div className="text">블루멤버십 : 1688-8090</div>
                                </div>
                            </div>
                            <div className="copyright">Copyright &copy; DOUZONE BIZON. All rights reserved.</div>
                        </div>
                    </div>
                    <div className="footerFnBox h-box" style={{display:scrollNow > 80 ? '':'none', transform: `translateX(593px) translateY(${intWindowHeight > (footerRec.top) ? -(intWindowHeight-(footerRec.top)):'0'}px)`}}>
                        <div className="fnScroll h-box">
                            <div className="indicScroll h-box" style={{display:intWindowHeight-(footerRec.top) < 0 ? '':'none'}}>
                                <div className='ico'><ScrollDown /></div>
                                <div className="text">Scroll Down</div>
                                <div className="text_num" style={{display:this.props.pageType === 'main' ? '':'none'}}><span className='b'>{this.props.intPage === 0 ? this.props.intPage:this.props.intPage-1}</span> / 18</div>
                            </div>
                            <div className="line" style={{display:this.props.pageType === 'main' ? '':'none'}}/> 
                            <div 
                                className={`downScroll ${this.props.isScrolling ? this.props.intPage < 19 ? 'disabled':'' : this.props.intPage === 19 ? 'disabled':''}`} 
                                title="다음" 
                                onTouchEnd={(e)=>{e.stopPropagation();e.preventDefault();this.props.setClickMoveBtn('next')}} 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.setClickMoveBtn('next')}} 
                                style={{display:this.props.pageType === 'main' ? intWindowHeight-(footerRec.top) < 0 ? '':'none':'none'}}
                            />
                            <div className="line" style={{display:this.props.pageType === 'main' ? '':'none'}}/> 
                            <div 
                                className={`upScroll ${this.props.isScrolling ? this.props.intPage === 19 ? '':'disabled':''}`} 
                                title="이전" 
                                onTouchEnd={(e)=>{e.stopPropagation();e.preventDefault();this.props.setClickMoveBtn('prev')}} 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.setClickMoveBtn('prev')}} 
                                style={{display:this.props.pageType === 'main' ? '':'none'}}
                            />
                            <div className="line"/> 
                        </div>
                        <div 
                            className="topScroll" title="맨 위로" 
                            onTouchEnd={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleScrollTop()}} 
                            onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleScrollTop()}}
                        >TOP</div>
                    </div>
                    {/* floating banner */}
                    <div 
                        className='floatingBannerBox' 
                        style={{
                            display:this.props.pageType === 'main' ? scrollNow > 80 ? '':'none':'', 
                            transform: `translateX(608px) translateY(${this.props.pageType === 'main' ? intWindowHeight > (footerRec.top) ? -(intWindowHeight-(footerRec.top-60)):'-60':intWindowHeight > (footerRec.top) ? -(intWindowHeight-(footerRec.top-60)):scrollNow > 80 ? '-60':'0'}px)`,
                            transition:intWindowHeight > (footerRec.top) ? '0s':'0.3s'
                        }}
                        onClick={()=>{this.props.handleGnbMenu('introduction','1');}}
                    />
                </div>
            </Fragment>

        );
    }
}
