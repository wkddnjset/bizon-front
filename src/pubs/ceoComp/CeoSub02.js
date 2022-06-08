import React, { Component, Fragment } from 'react';
import $ from 'jquery'
import { Scrollbar } from "react-scrollbars-custom";
import CeoSubLnb from './unit/CeoSubLnb';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import "../../www/css/slick.scss";
import "../../www/css/slick-theme.scss";
import DxInsigtPopUp01 from './unit/CeoPopUp';

// DX 리더스포럼
export default class CeoSub02 extends Component {
    constructor(props) {
        super(props);

        // ref
        this.video01 = React.createRef();
        this.video02 = React.createRef();
        this.video03 = React.createRef();

        this.state = {

            // 팝업상태
            titlePop : false, // (명칭은 팝업에 따라서)

            // 드롭다운리스트
            selectBoxOpen01:false,
            inTxt01:'선택',
            
            // 체크박스
            AgreeClick01:false,
            AgreeClick02:true,
            AgreeClick03:false,
            AgreeClick04:true,

            // 인풋 비활성화
            inputDisa: true,
            btnDisa: false,

            // 더보기
            openList: false,   

            // 모발 팝업
            modal01:false,
            video01:false,
            video02:false,
            video03:false,

            // 비디오
            videoSrc: {
                // video01: require('../../www/images/sub/temp/1.Amaranth 10 TVC.mp4').default,
                // video02: require('../../www/images/sub/temp/2.Amaranth 10 미래편.mp4').default,
                // video03: require('../../www/images/sub/temp/3.Amaranth 10 기능편.mp4').default,
            },
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
        this.handleModalClose();

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

    // 모달 팝업 끄기
    handleModalClose = () => {
        this.setState ({modal01:false, video01:false, video02:false, video03:false})
    }

    // 비디오 끄기
    handleVideoClose = () => {
        this.setState ({video01:false, video02:false, video03:false})
    }
    
    // 비디오 플레이
    handleVideoPlay = (num) => {
        if (num === '1') {
            this.setState({ video01:true, video02:false, video03:false});
            this.video01.current.seekTo(0);
        } else if (num === '2') {
            this.setState({ video01:false, video02:true, video03:false});
            this.video02.current.seekTo(0);
        } else if (num === '3') {
            this.setState({ video01:false, video02:false, video03:true});
            this.video03.current.seekTo(0);
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
        // 슬라이드 좌우 버튼 클릭시 비디오 초기화
        $(".slick-next").on("click",this.handleVideoClose);
        $(".slick-prev").on("click",this.handleVideoClose);

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
                <div id="CeoSub02">
                    
                    {/* 리더스포럼 소개 화면 */}
                    <div style={{display: this.props.ForumPage01 ? '':'none'}}>
                        <div className='content'>
                            <div className='topBox'>
                                <div className='blueTxt'>디지털 전환(DX) 세미나</div>
                                <div className='topTxt'>DX 리더스포럼 소개</div>
                                <p>디지털 전환(DX)을 꿈꾸는 리더가 알아야 할 핵심 실전 전략!<br/>매달 새로운 주제로 성공적인 디지털 전환을 지원하는 DX 리더스포럼에 초대합니다.</p>
                                <button className='dxBtn' onClick={()=>{this.props.handleSectionMove();}}>DX 리더스포럼 신청하기</button>
                            </div>

                            <div className='conTitle'>DX 리더스포럼이란?</div>
                            <div className='conTxt'>디지털 전환(DX)을 꿈꾸는 리더에게 꼭 필요한 정보를 제공하여, 기업의 성공적인 디지털전환(DX)을 지원합니다.</div>
                            <div className='conBg'/>

                            <div className='conTitle'>진행 중인 DX 리더스포럼</div>
                            <div className='conTxt'>디지털 전환(DX)을 꿈꾸는 리더를 위한 DX 리더스포럼을 놓치지마세요!</div>
                            <ul className='forumBox'>
                                <li className='forum' onClick={()=>{this.props.handleClickSave('3')}}>
                                    <span className='forumLabel ok'>신청가능</span>
                                    <img className='forumImg' src={require('../../www/images/sub/ceo/img-01@2x.png').default} alt='포럼'/>
                                    <div className='txtBox'>
                                        <div className='forumTit'>제 12회 DX 리더스 포럼</div>
                                        <p>‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과 업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.</p>
                                        <div className='time'>[온&amp;오프라인] 2022.02.23(수) 12:30~14:00</div>
                                    </div>
                                </li>
                                <li className='forum'>
                                    <span className='forumLabel no'>마감</span>
                                    <img className='forumImg' src={require('../../www/images/sub/ceo/img-02@2x.png').default} alt='포럼'/>
                                    <div className='txtBox'>
                                        <div className='forumTit'>제 12회 DX 리더스 포럼</div>
                                        <p>‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과 업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.</p>
                                        <div className='time'>[온&amp;오프라인] 2022.02.23(수) 12:30~14:00</div>
                                    </div>
                                </li>
                                <li className='forum'>
                                    <span className='forumLabel no'>마감</span>
                                    <img className='forumImg' src={require('../../www/images/sub/ceo/img-03@2x.png').default} alt='포럼'/>
                                    <div className='txtBox'>
                                        <div className='forumTit'>제 12회 DX 리더스 포럼</div>
                                        <p>‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과 업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.</p>
                                        <div className='time'>[온&amp;오프라인] 2022.02.23(수) 12:30~14:00</div>
                                    </div>
                                </li>
                                <li className='forum' style={{display: this.state.openList ? '':'none'}}>
                                    <span className='forumLabel no'>마감</span>
                                    <img className='forumImg' src={require('../../www/images/sub/ceo/img-03@2x.png').default} alt='포럼'/>
                                    <div className='txtBox'>
                                        <div className='forumTit'>제 12회 DX 리더스 포럼</div>
                                        <p>‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과 업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.</p>
                                        <div className='time'>[온&amp;오프라인] 2022.02.23(수) 12:30~14:00</div>
                                    </div>
                                </li>
                                <li className='forum' style={{display: this.state.openList ? '':'none'}}>
                                    <span className='forumLabel no'>마감</span>
                                    <img className='forumImg' src={require('../../www/images/sub/ceo/img-03@2x.png').default} alt='포럼'/>
                                    <div className='txtBox'>
                                        <div className='forumTit'>제 12회 DX 리더스 포럼</div>
                                        <p>‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과 업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.</p>
                                        <div className='time'>[온&amp;오프라인] 2022.02.23(수) 12:30~14:00</div>
                                    </div>
                                </li>
                            </ul>

                            <button className='insightBtn' onClick={()=>this.setState({ openList: true })}>더보기</button>
                        
                            <div className='conTitle'>지난 DX 리더스포럼 다시보기</div>
                            <div className='conTxt'>온라인 및 오프라인으로 진행되었던 DX 리더스포럼을 다시보기로 만나보세요.</div>
                        </div>

                        {/* 가로 스크롤 부분 */}
                        <Scrollbar className="scrollList mediaScroll">
                            <div className='h-box'>
                                <div className="videoAllBox v-box">
                                    <div className='box'>
                                        <div className='hoverBtnBox'>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleMediaClick('1');}}>미리보기</button>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleClickTitlePop()}}>풀버전 보기</button>
                                        </div>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video01'/>
                                        <div className="play" onClick={()=>{this.handleMediaClick('1');}}/>
                                    </div>
                                    <div className="textBox">
                                        <div className="text">[제 11회 DX 리더스포럼] CES 2022를 통해 본 ICT 트렌드 </div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <div className='box'>
                                        <div className='hoverBtnBox'>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleMediaClick('2');}}>미리보기</button>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleClickTitlePop()}}>풀버전 보기</button>
                                        </div>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video02'/>
                                        <div className="play" onClick={()=>{this.handleMediaClick('2');}}/>
                                    </div>
                                    <div className="textBox">
                                        <div className="text">[제 09회 DX 리더스포럼] 스티브 잡스 서거 10년, 무엇을 배울 것인가</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">  
                                    <div className='box'>
                                        <div className='hoverBtnBox'>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleMediaClick('3');}}>미리보기</button>
                                            <button className='hoverBtn sightArr' onClick={()=>{this.handleClickTitlePop()}}>풀버전 보기</button>
                                        </div>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video03'/>
                                        <div className="play" onClick={()=>{this.handleMediaClick('3');}}/>
                                    </div>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10 Live 설명회-포털, 일정/자원, KISS</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/* 팝업영역 */}
                    <div className="modal" style={{display: this.state.modal01 ? '':'none'}}>
                        <div className='closeBox wd h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider01 = slider)} {...settings} className='modalBox wd h-box'>
                            <div className='videoPopBox wd'>
                                <div className='imgBox' style={{display: this.state.video01 ? 'none':''}}>
                                    <img src={require('../../www/images/sub/ceo/vide-preview@2x.png').default} alt='포럼' className='video01'/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('1'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video01 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video01}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc.video01}
                                        playing={this.state.video01}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            <div className='videoPopBox wd'>
                                <div className='imgBox' style={{display: this.state.video02 ? 'none' : ''}}>
                                    <img src={require('../../www/images/sub/ceo/vide-preview@2x.png').default} alt='포럼' className='video02'/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('2'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video02 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video02}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc.video02}
                                        playing={this.state.video02}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            <div className='videoPopBox wd'>
                                <div className='imgBox' style={{display: this.state.video03 ? 'none' : ''}}>
                                    <img src={require('../../www/images/sub/ceo/vide-preview@2x.png').default} alt='포럼' className='video03'/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('3'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video03 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video03}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc.video03}
                                        playing={this.state.video03}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                        </Slider>
                    </div>


                    {/* 리더스포럼 신청하기 화면 */}
                    <div className='content' style={{display: this.props.ForumPage02 ? '':'none'}}>
                        <div className='topBox'>
                            <div className='blueTxt'>디지털 전환(DX) 세미나</div>
                            <div className='topTxt'>제 12회 DX 리더스포럼 신청하기</div>
                            <p>디지털 전환(DX)을 꿈꾸는 리더가 알아야 할 핵심 실전 전략!<br/>매달 새로운 주제로 성공적인 디지털 전환을 지원하는 DX 리더스포럼에 초대합니다.</p>
                            <div className='btnTop h-box'>
                                {/* 비활성화 (disabled 일때) 스타일 클래스 = disa, 비활성화일 때 Alert 팝업 */}
                                <button className={`dxBtn btn2 btnVer ${this.state.btnDisa ? 'disa':''}`} onClick={()=>{this.props.handleClickSave('4');}}>온라인 신청하기</button>
                                <button className={`dxBtn btnVer ${this.state.btnDisa ? 'disa':''}`} onClick={()=>{this.props.handleClickSave('4');}}>오프라인 신청하기</button>
                            </div>
                        </div>

                        <div className='conTitle nonBd'>DX 리더스포럼 안내</div>
                        <table className='ceoTable'>
                            <tr>
                                <th className='forumTh'>장소</th>
                                <td className='forumTd'>서울시 중구 을지로 29 더존을지타워 11층 다빈치<div>* 온라인 신청자의 경우 별도의 참여 링크를 보내드립니다.</div></td>
                            </tr>
                            <tr>
                                <th>일시</th>
                                <td className='forumTd'>2022.02.23(수) 12:30~14:00</td>
                            </tr>
                            <tr>
                                <th>주제</th>
                                <td className='forumTd'>2022 기업의 IT 기술 최우선 투자분야는?</td>
                            </tr>
                            <tr>
                                <th>문의</th>
                                <td className='forumTd'>02-6233-2524 / (010-9489-2529) / 챗봇(추후)</td>
                            </tr>
                        </table>

                        <div className='forumImgBox'>
                            <img src={require('../../www/images/sub/ceo/12-dx-20220216@2x.png').default} alt='2022forun'/>
                        </div>

                        <div className='btnTop mt67 h-box'>
                            <button className={`dxBtn btn2 btnVer ${this.state.btnDisa ? 'disa':''}`} onClick={()=>{this.props.handleClickSave('4');}}>온라인 신청하기</button>
                            <button className={`dxBtn btnVer ${this.state.btnDisa ? 'disa':''}`} onClick={()=>{this.props.handleClickSave('4');}}>오프라인 신청하기</button>
                        </div>
                    </div>


                    {/* 리더스포럼 풀버전 보기 신청 화면 (온라인/오프라인 신청 화면 포함) */}
                    <div className='content' style={{display: this.props.ForumPage03 ? '':'none'}}>
                        {/* 온라인/오프라인 신청 화면일 경우, 리더스포럼 신청하기 화면의 클래스 topBox 참조 */}
                        <div className='topBox'>
                            <div className='blueTxt'>디지털 전환(DX) 세미나</div>
                            <div className='topTxt'>DX 리더스포럼 풀버전 보기</div>
                            <p>디지털 전환(DX)을 꿈꾸는 리더가 알아야 할 핵심 실전 전략!<br/>매달 새로운 주제로 성공적인 디지털 전환을 지원하는 DX 리더스포럼에 초대합니다.</p>
                        </div>
                        
                        <div className='tableBox h-box'>
                            <div className='tableTit flex-1'>신청양식</div>
                            <div className='tableTxt'><em>*</em> 표기는 필수 선택 및 입력 항목입니다.</div>
                        </div>

                        <table className='mt15 ceoTable'>

                            {/* 참석유형 : 온라인/오프라인 신청 화면일 때 활성화 */}
                            <tr>
                                <th>참석유형<em>*</em></th>
                                <td>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio" id="radio01"/><label for="radio01">온라인</label>
                                        <input type="radio" name="btnradio" id="radio02"/><label for="radio02">오프라인<em>(잔여 14석)</em></label>
                                        <input type="radio" name="btnradio" id="radio03" disabled/><label for="radio03">오프라인 마감</label>
                                    </div>
                                </td>
                            </tr>

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

                            {/* 주차등록 : 온라인/오프라인 신청 화면일 때, 오프라인 라디오 버튼 클릭시 활성화*/}
                            <tr>
                                <th>주차등록</th>
                                <td>
                                    <div className={`InputBox h-box ${this.state.inputDisa ? 'disa':''}`}>
                                        <input className={`InputText ${this.state.inputDisa ? 'disa':''}`} type="text" placeholder="차량번호 4자리를 입력해주세요." disabled={this.state.inputDisa}/>
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

                                        {/* 아래 문구 온라인/오프라인 신청 화면일 때는 삭제 */}
                                        <div className='dxAgree'>* 등록하신 이메일로 뉴스레터, 세미나 신청 안내 등 다양한 정보를 제공합니다.</div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div className='h-box mt40'>
                            {/* 풀버전 보기 화면일 때 사용 */}
                            <button className='dxBtn' onClick={()=>{this.props.handleClickSave('6');}}>DX 리더스포럼 풀버전 보기</button>
                            
                            {/* 온라인/오프라인 신청일 때 사용 */}
                            <button className='dxBtn' onClick={()=>{this.props.handleClickSave('5');}}>신청하기</button>
                        </div>
                    </div>
                    

                    {/* 리더스포럼 신청 완료 페이지 */}
                    <div style={{display: this.props.ForumPage04 ? '':'none'}}>
                        <div className='content'>
                            <div className='topBox'>
                                <div className='blueIco'/>
                                <div className='topTxt'>제 12회 DX 리더스포럼 <em>신청 완료</em></div>
                                <p>DX 리더스포럼 신청이 완료되었습니다.<br/>신청 내역은 SMS와 이메일에서 확인 가능합니다.</p>
                            </div>

                            <div className='conTitle nonBd'>신청정보</div>
                            <table className='ceoTable'>
                                <tr>
                                    <th>참석유형</th>
                                    <td className='forumTd'>온라인</td>
                                </tr>
                                <tr>
                                    <th>참석링크</th>
                                    <td className='forumTd'>DX 리더스포럼 시작 <b>20분 전에 SMS와 이메일로 링크를 발송드립니다.</b></td>
                                </tr>
                                <tr>
                                    <th>일시</th>
                                    <td className='forumTd'>2022.02.23(수) 12:30~14:00</td>
                                </tr>
                                <tr>
                                    <th>주체</th>
                                    <td className='forumTd'>2022 기업의 IT 기술 최우선 투자분야는?</td>
                                </tr>
                                <tr>
                                    <th>문의</th>
                                    <td className='forumTd'>02-6233-2524</td>
                                </tr>
                            </table>

                            <table className='mt60 ceoTable'>
                                <tr>
                                    <th>참석유형</th>
                                    <td className='forumTd'>오프라인</td>
                                </tr>
                                <tr>
                                    <th className='forumTh'>장소</th>
                                    <td className='forumTd'>서울시 중구 을지로 29 더존을지타워 11층 다빈치 <div className='blue'>* SMS로 전송된 QR코드가 있어야 현장에서 입장이 가능합니다.</div></td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    {/* 리더스포럼 전체보기(풀버전보기) 페이지 */}
                    <div style={{display: this.props.ForumPage05 ? '':'none'}}>
                        <div className='content'>
                            <div className='topBox'>
                                <div className='blueTxt'>디지털 전환(DX) 세미나</div>
                                <div className='topTxt'>지난 DX 리더스포럼을 만나보세요!</div>
                            </div>

                            <ul className='insightAll'>
                                <li className='insightBox'>
                                    <div className='box'>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video'/>
                                        <div className='play' onClick={()=>{this.handleMediaClick('1');}}/>
                                    </div>
                                    <div className='insightTxt2'>[제 11회 DX 리더스포럼]</div>
                                    <div className='insightTit mt5'>CES 2022를 통해 본 ICT 트렌드</div>
                                </li>
                                <li className='insightBox'>
                                    <div className='box'>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video'/>
                                        <div className='play' onClick={()=>{this.handleMediaClick('2');}}/>
                                    </div>
                                    <div className='insightTxt2'>[제 11회 DX 리더스포럼]</div>
                                    <div className='insightTit mt5'>CES 2022를 통해 본 ICT 트렌드</div>
                                </li>
                                <li className='insightBox'>
                                    <div className='box'>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video'/>
                                        <div className='play' onClick={()=>{this.handleMediaClick('3');}}/>
                                    </div>
                                    <div className='insightTxt2'>[제 11회 DX 리더스포럼]</div>
                                    <div className='insightTit mt5'>CES 2022를 통해 본 ICT 트렌드</div>
                                </li>
                                <li className='insightBox' style={{display: this.state.openList ? '':'none'}}>
                                    <div className='box'>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video'/>
                                        <div className='play'/>
                                    </div>
                                    <div className='insightTxt2'>[제 11회 DX 리더스포럼]</div>
                                    <div className='insightTit mt5'>CES 2022를 통해 본 ICT 트렌드</div>
                                </li>
                                <li className='insightBox' style={{display: this.state.openList ? '':'none'}}>
                                    <div className='box'>
                                        <img src={require('../../www/images/sub/ceo/ceo-insight-thumbnail-01@2x.png').default} alt='포럼' className='video'/>
                                        <div className='play'/>
                                    </div>
                                    <div className='insightTxt2'>[제 11회 DX 리더스포럼]</div>
                                    <div className='insightTit mt5'>CES 2022를 통해 본 ICT 트렌드</div>
                                </li>
                            </ul>

                            <button className='insightBtn' onClick={()=>{this.setState({ openList: true })}}>더보기</button>
                        </div>
                    </div>
                    

                    {/* 하단 배너 영역 */}
                    <div className='banner forumBg'>
                        <div className='banIn'>
                            <div className='blueTxt'>DX 리더스포럼</div>
                            <div className='banTxt'>미래를 준비하는 리더를 위한 IT 트렌드 레터<br/><em>DX Insight를 정기적으로 만나보세요</em></div>
                            <button className='banBtn' onClick={()=>this.props.handleGnbMenu('ceo','1')}>DX Insight 보러가기</button>
                        </div>
                    </div>
                </div>

                <DxInsigtPopUp01 handleClickTitlePop={this.handleClickTitlePop} handleClickPopupClose={this.handleClickPopupClose} handleClickSave={this.props.handleClickSave} ForumPage01={this.props.ForumPage01} ForumPage02={this.props.ForumPage02} ForumPage03={this.props.ForumPage03} ForumPage04={this.props.ForumPage04} ForumPage05={this.props.ForumPage05} titlePop={this.state.titlePop} intWindowHeight={this.props.intWindowHeight}/>
            </Fragment>
        );
    }
}


