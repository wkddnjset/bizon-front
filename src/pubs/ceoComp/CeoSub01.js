import React, { Component, Fragment } from 'react';
import DxInsigtPopUp01 from './unit/CeoPopUp';
import CeoSubLnb from './unit/CeoSubLnb';
import Slider from 'react-slick';
import "../../www/css/slick.scss";
import "../../www/css/slick-theme.scss";

// DX Insight
export default class CeoSub01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 팝업상태
            titlePop : false, // (명칭은 팝업에 따라서)
            
            // 모달팝업
            modal01: false,

            // 드롭다운리스트
            selectBoxOpen01:false,
            inTxt01:'선택',

            // 체크박스
            AgreeClick01:false,
            AgreeClick02:true,
            AgreeClick03:false,
            AgreeClick04:true,
            
            // 더보기
            openList:false,
        }
    }

    // 팝업 호출
    handleClickTitlePop = () => { this.setState({ titlePop : true }); }
    
    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            titlePop : false,
        });
    }

    // 모달 팝업 호출 (slickGoTo로 맨 처음 화면 변경)
    handleMediaClick = (type) => {

        if (type === '1'){
            this.slider01.slickGoTo(0, true)
            this.setState ({modal01:true})
        }else if (type === '2'){
            this.slider01.slickGoTo(1, true)
            this.setState ({modal01:true})
        }else if (type === '3'){
            this.slider01.slickGoTo(2, true)
            this.setState ({modal01:true})
        }
        
    }

    // 드롭다운리스트
    handleSelectValue = (txt) => {
        this.setState({ inTxt01:txt, });
    }

    // 체크박스
    handleAgreeCheck = (type) => {
        if(type ==='1'){
            this.setState({
                AgreeClick01:!this.state.AgreeClick01,AgreeClick02:false,
            })
        }else if(type ==='2'){
            this.setState({
                AgreeClick01:false,AgreeClick02:!this.state.AgreeClick02,
            })
        }else if(type ==='3'){
            this.setState({
                AgreeClick03:!this.state.AgreeClick03,AgreeClick04:false,
            })
        }else if(type ==='4'){
            this.setState({
                AgreeClick03:false,AgreeClick04:!this.state.AgreeClick04,
            })
        }
    }

    componentDidMount(){
        document.body.addEventListener("click", this.setState({ selectBoxOpen01: false }));
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.setState({ selectBoxOpen01: false }));
    }

    render() {

        const settings = {
            centerMode:true,
            centerPadding: "0px",
            dots: false,
            infinite: false,
            speed: 300,
            swipe:false,
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <button type='button' className='slick-next'/>,
            prevArrow: <button type='button' className='slick-prev'/>,
        };

        return (
            <Fragment>
                <CeoSubLnb
                    ceoSub01={this.props.ceoSub01}
                    ceoSub02={this.props.ceoSub02}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext05={this.props.Titletext05}
                    handleClickSave={this.props.handleClickSave}
                />
                <div id="CeoSub01">

                    {/* 첫 화면 */}
                    <div className='content' style={{display: this.props.insightPage01 === true ? '':'none'}}>
                        <div className='topBox'>
                            <div className='blueTxt'>디지털 전환(DX) 트렌드레터</div>
                            <div className='topTxt'>DX Insight 바로보기</div>
                            <p>디지털 전환(DX)이 선택이 아닌 필수가 되어버린 세상!<br/>
                            미래를 준비하는 리더를 위한 디지털 전환(DX) 인사이트를 정기적으로 만나보세요.</p>
                            <button className='dxBtn' onClick={()=>{this.handleClickTitlePop();}}>DX Insight 바로보기</button>
                        </div>

                        <div className='conTitle'>DX Insight란?</div>
                        <p className='conTxt'>DX 전략 및 IT 트렌드 분석 등 리더에게 필요한 유익한 정보를 제공하여, 기업의 성공적인 <em>디지털 전환(DX)을 지원하는 트렌드레터</em>입니다.</p>
                        
                        <div className='dxBox h-box'>
                            <div className='dx'>
                                <img src={require("../../www/images/sub/ceo/ceo-img-01@2x.png").default} alt='story' onClick={()=>{this.handleMediaClick('1')}}/>
                                <div className='tit'>DX STORY</div>
                                <div className='txt'>미래를 준비하는 리더를 위한 DX 전략</div>
                            </div>
                            <div className='dx'>
                                <img src={require("../../www/images/sub/ceo/ceo-img-02@2x.png").default} alt='report' onClick={()=>{this.handleMediaClick('2')}}/>
                                <div className='tit'>SPECIAL REPORT</div>
                                <div className='txt'>새로운 IT 기술 및 성공적인 DX 분석 리포트</div>
                            </div>
                            <div className='dx'>
                                <img src={require("../../www/images/sub/ceo/ceo-img-03@2x.png").default} alt='inside' onClick={()=>{this.handleMediaClick('3')}}/>
                                <div className='tit'>SEMINAR INSIDE</div>
                                <div className='txt'>DX 리더스포럼 핵심 요약 &amp; 신청 안내</div>
                            </div>
                        </div>

                        <div className='btBox'>
                            <span className='arr'/>
                            <span className='dxCon'/>
                            <button className='dxBtn' onClick={()=>{this.handleClickTitlePop();}}>DX Insight 바로보기</button>
                        </div>
                    </div>

                    {/* DX Insight란? 이미지 팝업 영역 */}
                    <div className="modal" style={{display: this.state.modal01 ? '':'none'}}>
                        <div className='closePrintBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.setState({ modal01:false });}} />
                        </div>
                        <Slider ref={slider => (this.slider01 = slider)} {...settings} className='modalPrintBox'>
                            <div className="printPopBox">
                                <img src={require("../../www/images/sub/ceo/ceo-img-01@2x.png").default} alt='story' className="dxImg"/>
                            </div>
                            <div className="printPopBox">
                                <img src={require("../../www/images/sub/ceo/ceo-img-02@2x.png").default} alt='report' className="dxImg"/>
                            </div>
                            <div className="printPopBox">
                                <img src={require("../../www/images/sub/ceo/ceo-img-03@2x.png").default} alt='inside' className="dxImg"/>
                            </div>
                        </Slider>
                    </div>


                    {/* 바로보기 화면 */}
                    <div className='content' style={{display: this.props.insightPage02 === true ? '':'none'}}>
                        <div className='topBox'>
                            <div className='blueTxt'>디지털 전환(DX) 트렌드레터</div>
                            <div className='topTxt'>DX Insight 바로보기</div>
                            <p>디지털 전환(DX)이 선택이 아닌 필수가 되어버린 세상!<br/>
                            미래를 준비하는 리더를 위한 디지털 전환(DX) 인사이트를 정기적으로 만나보세요.</p>
                        </div>

                        <div className='tableBox h-box'>
                            <div className='tableTit flex-1'>신청양식</div>
                            <div className='tableTxt'><em>*</em> 표기는 필수 선택 및 입력 항목입니다.</div>
                        </div>

                        <table className='mt15 ceoTable'>
                            <tr>
                                <th>회사명<em>*</em></th>
                                <td>
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="회사명을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>이름<em>*</em></th>
                                <td>
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="이름을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>직책<em>*</em></th>
                                <td>
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="직책을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>연락처<em>*</em></th>
                                <td>
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="'-'없이 숫자만 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일<em>*</em></th>
                                <td>
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="예) amaranth10@douzone.com"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>유입경로</th>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:!this.state.selectBoxOpen01});}}>{this.state.inTxt01}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.selectBoxOpen01 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('잡지(DX Insight 등)');this.setState({inTxt04:'선택'});}}>잡지(DX Insight 등)</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('세미나(DX 리더스포럼 등)');this.setState({inTxt04:'선택'});}}>세미나(DX 리더스포럼 등)</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('광고/검색');this.setState({inTxt04:'선택'});}}>광고/검색</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('SNS');this.setState({inTxt04:'선택'});}}>SNS</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('뉴스/기사');this.setState({inTxt04:'선택'});}}>뉴스/기사</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('지인추천');this.setState({inTxt04:'선택'});}}>지인추천</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('이벤트');this.setState({inTxt04:'선택'});}}>이벤트</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:false});this.handleSelectValue('기타');this.setState({inTxt04:'선택'});}}>기타</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.selectBoxOpen01 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>개인정보 수집/<br/>이용동의</th>
                                <td>
                                    <div className="AgreeBox">
                                        <div className="AgreeText">
                                            더존비즈온에서 제공하는 Amaranth 10 홈페이지에서는 개인정보의 수집, 이용 등 처리에 있어 아래의<br/>
                                            사항을 정보주체에게 안내합니다.<br/><br/>
                                            1. 개인정보 수집/이용 목적<br/>
                                            - 제품소개, 컨설팅 요청 상담 등 고객문의 처리<br/>
                                            - (마케팅 정보 수신 동의 시) 더존비즈온의 제품/서비스 정보 및 이벤트, 교육을 전화, 문자, 이메일로 안내<br/><br/>
                                            2. 수집하는 개인정보 항목<br/>
                                            - 필수항목 : 이름, 연락처, 이메일<br/><br/>
                                            3. 개인정보 보유 및 이용기간<br/>
                                            - 관련법령에 따라 1년간 보관후 삭제   
                                        </div>
                                    </div>
                                    <div className="AgreeBtnBox">
                                        <div className="AgreeBtn h-box">
                                            <div className="AgreeIconOn" style={{display:this.state.AgreeClick01 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('2');}}/>
                                            <div className="AgreeIconOff" style={{display:this.state.AgreeClick02 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('1');}}/>
                                            <div className="AgreeBtnText h-box">
                                                개인정보 수집 및 이용에 대한 안내에 동의합니다.&nbsp;
                                                <div className="ColorBlue">(필수)</div>
                                            </div>
                                        </div>
                                        <div className="AgreeBtn h-box">
                                        <div className="AgreeIconOn" style={{display:this.state.AgreeClick03 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('4');}}/>
                                            <div className="AgreeIconOff" style={{display:this.state.AgreeClick04 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('3');}}/>
                                            <div className="AgreeBtnText h-box">
                                                프로모션 및 마케팅 정보 수신에 동의합니다.&nbsp;
                                                <div className="ColorGray">(선택)</div>
                                            </div>
                                        </div>
                                        <div className='dxAgree'>* 등록하신 이메일로 뉴스레터, 세미나 신청 안내 등 다양한 정보를 제공합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <button className='dxBtn mt80' onClick={()=>{this.props.handleClickSave('2');}}>DX Insight 확인</button>
                    </div>


                    {/* 확인 화면 */}
                    <div className='content' style={{display: this.props.insightPage03 === true ? '':'none'}}>
                        <div className='topBox'>
                            <div className='blueTxt'>디지털 전환(DX) 트렌드레터</div>
                            <div className='topTxt'>DX Insight를 만나보세요!</div>
                        </div>

                        <ul className='insightAll'>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='hoverBtnBox'>
                                        <button className='hoverBtn sightArr'>바로보기</button>
                                        <button className='hoverBtn down'>다운로드</button>
                                    </div>
                                    <img className='insight' src={require('../../www/images/sub/ceo/media-print-01@2x.png').default} alt='insight'/>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='hoverBtnBox'>
                                        <button className='hoverBtn sightArr'>바로보기</button>
                                        <button className='hoverBtn down'>다운로드</button>
                                    </div>
                                    <img className='insight' src={require('../../www/images/sub/ceo/media-print-01@2x.png').default} alt='insight'/>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox'>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox' style={{display: this.state.openList ? '':'none'}}>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                            <li className='insightBox' style={{display: this.state.openList ? '':'none'}}>
                                <div className='box'>
                                    <div className='nonImg'>DX Insight</div>
                                </div>
                                <div className='insightTit'>Vol.1  Jan-Mar 2022</div>
                                <div className='insightTxt'>2022.01.25</div>
                            </li>
                        </ul>

                        <button className='insightBtn' onClick={()=>{this.setState({ openList: true })}}>더보기</button>
                    </div>
                    
                    {/* 하단 배너 영역 */}
                    <div className='banner'>
                        <div className='banIn'>
                            <div className='blueTxt'>DX 리더스포럼</div>
                            <div className='banTxt'>기업의 성공적인 디지털 전환(DX)을 지원하는<br/><em>DX 리더스포럼을 매달 새로운 주제로 만나보세요</em></div>
                            <button className='banBtn' onClick={()=>this.props.handleGnbMenu('ceo','2')}>DX 리더스포럼 신청하기</button>
                        </div>
                    </div>

                </div>

                <DxInsigtPopUp01 handleClickTitlePop={this.handleClickTitlePop} handleClickPopupClose={this.handleClickPopupClose} handleClickSave={this.props.handleClickSave} page01={this.props.page01} page02={this.props.page02} page03={this.props.page03} titlePop={this.state.titlePop} intWindowHeight={this.props.intWindowHeight}/>
            </Fragment>
        );
    }
}


