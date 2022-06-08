import React, { Component, Fragment } from 'react';

// 이미지
import mainLogo from '../../www/images/temp/lg-amaranth-10-w@2x.png'
import subLogo from '../../www/images/temp/lg-amaranth-10@2x.png'

// 헤더
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className={`headerWrap h-box ${this.props.pageType} ${this.props.hideHeader ? 'hide':''}`}>
                    <h1 onClick={()=>{this.props.handleGnbMenu('main');}}>
                        <img src={mainLogo} alt='Amaranth10 로고' style={{display:this.props.pageType === 'main' ? '':'none'}} />
                        <img src={subLogo} alt='Amaranth10 로고' style={{display:this.props.pageType === 'sub' ? '':'none'}} />
                    </h1>
                    <div className="flex-1" />
                    <ul className="gnbBox h-box">
                        <li className={`${this.props.brandLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('brand','1');}}>브랜드</div>
                            <div className="subBox">
                                <ul className="sub01 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('brand','1');}}>
                                        <div className="subText">새롭게 정의하다</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('brand','2');}}>
                                        <div className="subText">브랜드 스토리</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('brand','3');}}>
                                        <div className="subText">BI</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${this.props.serviceLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('service','1');}}>서비스 소개</div>
                            <div className="subBox">
                                <ul className="sub02 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('service','1');}}>
                                        <div className="subText">ForMe(임직원업무관리)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','2');}}>
                                        <div className="subText">그룹웨어</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','3');}}>
                                        <div className="subText">ERP(회계관리)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','4');}}>
                                        <div className="subText">ERP(인사관리)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','5');}}>
                                        <div className="subText">ERP(편의기능)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','6');}}>
                                        <div className="subText">문서관리(ONEFFICE)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','7');}}>
                                        <div className="subText">문서관리(ONECHAMBER)</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('service','8');}}>
                                        <div className="subText">모바일</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${this.props.introductionLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('introduction','1');}}>도입안내</div>
                            <div className="subBox">
                                <ul className="sub03 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('introduction','1');}}>
                                        <div className="subText">서비스 유형</div>
                                    </li>
                                    {/* <li onClick={()=>{this.props.handleClickAlert();}}>
                                        <div className="subText">요금안내</div>
                                    </li> */}
                                    {/* <li onClick={()=>{window.open('https://help.douzone.com/counsel/counsel_write_pop.jsp?areaName=dt&eaddperson2=17');}}>
                                        <div className="subText">도입문의</div>
                                    </li> */}
                                    <li onClick={()=>{this.props.handleGnbMenu('introduction','3');}}>
                                        <div className="subText">도입문의</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${this.props.mediaLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('media','1');}}>PR센터</div>
                            <div className="subBox">
                                <ul className="sub04 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('media','1');}}>
                                        <div className="subText">광고</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('media','2');}}>
                                        <div className="subText">보도자료</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('media','3');}}>
                                        <div className="subText">영상콘텐츠</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('media','4');}}>
                                        <div className="subText">공지사항</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${this.props.virtualExLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('virtual','1');}}>가상체험관</div>
                            <div className="subBox">
                                <ul className="sub05 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('virtual','1');}}>
                                        <div className="subText">가상체험관</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${this.props.ceoLayout ? 'on':''}`}>
                            <div className="gnbText" onClick={()=>{this.props.handleGnbMenu('ceo','1');}}>CEO 인사이트</div>
                            <div className="subBox">
                                <ul className="sub06 h-box">
                                    <li onClick={()=>{this.props.handleGnbMenu('ceo','1');}}>
                                        <div className="subText">DX Insight</div>
                                    </li>
                                    <li onClick={()=>{this.props.handleGnbMenu('ceo','2');}}>
                                        <div className="subText">DX 리더스포럼</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="scrollBar" style={{display:this.props.pageType === 'main' ? this.props.hideHeader ? '':'none':'none'}}>
                        <div className="bar" style={{width:this.props.scrollPercent+'%'}}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


