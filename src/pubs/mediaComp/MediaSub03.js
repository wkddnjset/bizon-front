import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import MediaSubLnb from './unit/MediaSubLnb';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import "../../www/css/slick.scss";
import "../../www/css/slick-theme.scss";
import { Scrollbar } from "react-scrollbars-custom";

//이미지
import Thum01 from '../../www/images/sub/media/media-ceo-thumbnail-01@3x.png';
import Thum02 from '../../www/images/sub/media/media-ceo-thumbnail-02@3x.png';
import Thum03 from '../../www/images/sub/media/media-ceo-thumbnail-03@3x.png';
import Thum04 from '../../www/images/sub/media/media-amaranth-thumbnail-01@3x.png';
import Thum05 from '../../www/images/sub/media/media-amaranth-thumbnail-02@3x.png';
import Thum06 from '../../www/images/sub/media/media-amaranth-thumbnail-03@3x.png';
import Thum07 from '../../www/images/sub/media/media-seminar-thumbnail-01@3x.png';
import Thum08 from '../../www/images/sub/media/media-seminar-thumbnail-02@2x.jpg';
import Thum09 from '../../www/images/sub/media/media-seminar-thumbnail-03@3x.png';
import Thum10 from '../../www/images/sub/media/media-ad-thumbnail-01@3x.png';
import Thum11 from '../../www/images/sub/media/media-ad-thumbnail-02@3x.png';
import Thum12 from '../../www/images/sub/media/media-ad-thumbnail-03@3x.png';

// 영상콘텐츠
export default class MediaSub03 extends Component {
    constructor(props) {
        super(props);

        // ref
        this.video01 = React.createRef();
        this.video02 = React.createRef();
        this.video03 = React.createRef();
        this.video04 = React.createRef();
        this.video05 = React.createRef();
        this.video06 = React.createRef();
        this.video07 = React.createRef();
        this.video08 = React.createRef();
        this.video09 = React.createRef();

        this.state = {

            modal01:false,
            modal02:false,
            modal03:false,

            video01:false,
            video02:false,
            video03:false,
            video04:false,
            video05:false,
            video06:false,
            video07:false,
            video08:false,
            video09:false,

            // 주요기능 드롭다운
            SelectBoxOpen01:false,
            inTxt01:'전체',

            // 비디오
            videoSrc01: {
                // video01: require('../../www/images/sub/temp/1.똑똑하게 일하는 방법.mp4').default,
                // video02: require('../../www/images/sub/temp/2.D파이오니어를 만나다.mp4').default,
                // video03: require('../../www/images/sub/temp/3.기업에 시간을 팝니다.mp4').default,
                // video04: require('../../www/images/sub/temp/1.혁신소프트웨어가 디지털 대전환을 이끈다.mp4').default,
                // video05: require('../../www/images/sub/temp/2.Amaranth 10이 제안하는 혁신세미나.mp4').default,
                // video06: require('../../www/images/sub/temp/3.Amaranth 10 Live설명회.mp4').default,
                // video07: require('../../www/images/sub/temp/1.DTEC 세미나 홍보.mp4').default,
                // video08: require('../../www/images/sub/temp/2.Amaranth 10 런칭 영상.mp4').default,
                // video09: require('../../www/images/sub/temp/3.Amaranth 10 제품 철학.mp4').default,
            },
        }
    }

    componentDidMount() {
        // 슬라이드 좌우 버튼 클릭시 비디오 초기화
        $(".slick-next").on("click",this.handleVideoClose);
        $(".slick-prev").on("click",this.handleVideoClose);

        // 드롭다운리스트 목록 보일때 바디 클릭시 닫히기
        document.body.addEventListener("click", this.handleSelectBoxClose);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    // 모달 팝업 호출 (slickGoTo로 맨 처음 화면 변경)
    handleMediaClick = (content,type) => {
        this.handleModalClose();

        if (content === 'CEO') {
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
        }else if (content === 'Seminar') {
            if (type === '1'){
                this.slider02.slickGoTo(0, true)
                this.setState ({modal02:true})
            }else if (type === '2'){
                this.slider02.slickGoTo(1, true)
                this.setState ({modal02:true})
            }else if (type === '3'){
                this.slider02.slickGoTo(2, true)
                this.setState ({modal02:true})
            }
        }else if (content === 'Ad') {
            if (type === '1'){
                this.slider03.slickGoTo(0, true)
                this.setState ({modal03:true})
            }else if (type === '2'){
                this.slider03.slickGoTo(1, true)
                this.setState ({modal03:true})
            }else if (type === '3'){
                this.slider03.slickGoTo(2, true)
                this.setState ({modal03:true})
            }
        }
    }

    // 모달 팝업 끄기
    handleModalClose = () => {
        this.setState ({
            modal01:false, modal02:false, modal03:false, modal04:false,
            video01:false, video02:false, video03:false, video04:false,
            video05:false, video06:false, video07:false, video08:false, video09:false,
        })
    }

    // 비디오 끄기
    handleVideoClose = () => {
        this.setState ({
            video01:false, video02:false, video03:false, video04:false,
            video05:false, video06:false, video07:false, video08:false, video09:false,
        })
    }

    // 비디오 플레이
    handleVideoPlay = (num) => {
        if (num === '1') {
            this.setState({
                video01:true, video02:false, video03:false, video04:false,
                video05:false, video06:false, video07:false, video08:false, video09:false,
            });
            this.video01.current.seekTo(0);
        } else if (num === '2') {
            this.setState({ 
                video01:false, video02:true, video03:false, video04:false,
                video05:false, video06:false, video07:false, video08:false, video09:false,
             });
             this.video02.current.seekTo(0);
        } else if (num === '3') {
            this.setState({ 
                video01:false, video02:false, video03:true, video04:false,
                video05:false, video06:false, video07:false, video08:false, video09:false,
             });
             this.video03.current.seekTo(0);
        } else if (num === '4') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:true,
                video05:false, video06:false, video07:false, video08:false, video09:false,
            });
            this.video04.current.seekTo(0);
        } else if (num === '5') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:false,
                video05:true, video06:false, video07:false, video08:false, video09:false,
            });
            this.video05.current.seekTo(0);
        } else if (num === '6') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:false,
                video05:false, video06:true, video07:false, video08:false, video09:false,
             });
             this.video06.current.seekTo(0);
        } else if (num === '7') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:false,
                video05:false, video06:false, video07:true, video08:false, video09:false,
             });
             this.video07.current.seekTo(0);
        } else if (num === '8') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:false,
                video05:false, video06:false, video07:false, video08:true, video09:false,
             });
             this.video08.current.seekTo(0);
        } else if (num === '9') {
            this.setState({ 
                video01:false, video02:false, video03:false, video04:false,
                video05:false, video06:false, video07:false, video08:false, video09:true,
             });
             this.video09.current.seekTo(0);
        }
    }

    // 드롭다운리스트
    handleSelectBoxToggle = () => {
        this.setState({SelectBoxOpen01:!this.state.SelectBoxOpen01});
    }

    handleSelectBoxClose = () => {
        this.setState({SelectBoxOpen01:false});
    }

    handleSelectValue = (txt) => {
        this.setState({inTxt01:txt});
    }

    render() {

        const settings = {
            centerMode:true,
            centerPadding: "0px",
            dots: false,
            infinite: false,
            speed: 300,
            swipe:false,
            accessibility:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <button type='button' className='slick-next'/>,
            prevArrow: <button type='button' className='slick-prev'/>,
        };

        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    mediaSub04={this.props.mediaSub04}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub03">
                    {/*********** 세미나 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG01"/>
                        <div className="MediaTitle">세미나</div>
                        <Scrollbar className="scrollList mediaScroll">
                            <div className="h-box">
                                <div className="videoAllBox v-box">
                                    <img src={Thum07} alt="Thun01" className="video01"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Seminar','1');}}/>
                                    <div className="textBox">
                                        <div className="text">혁신 소프트웨어가 디지털 대전환을 이끈다</div>
                                        <div className="text2">
                                            ‘일하는 방식의 변화’를 하나의 솔루션에 담았다! 기업의 생산성과
                                            업무 효율성을 높여줄 스마트한 ICT기술 도구를 만나보자.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <img src={Thum08} alt="Thun03" className="video02"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Seminar','2');}}/>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10이 제안하는 비즈니스 혁신 세미나</div>
                                        <div className="text2">
                                            네트워크 속도가 빨라지고 플랫폼 경제로 발전하는 시기에는 <br/>
                                            구분이 아닌 융합이 필수다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box" style={{display:"none"}}>  
                                    <img src={Thum09} alt="Thun03" className="video03"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Seminar','3');}}/>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10 Live 설명회-포털, 일정/자원, KISS</div>
                                        <div className="text2">
                                            모든 업무 현황을 한눈에! Amaranth 10은 실시간 업무 현황
                                            공유로 효율적인 협업 체계를 구현한다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 세미나 팝업영역 ***********/}
                    <div className="modal" style={{display: this.state.modal02 ? '':'none'}}>
                        <div className='closeBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider02 = slider)} {...settings} className='modalBox'>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video04 ? 'none' : ''}}>
                                    <img src={Thum07} alt="" className="video01"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('4'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video04 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video04}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video04}
                                        playing={this.state.video04}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video05 ? 'none' : ''}}>
                                    <img src={Thum08} alt="" className="video02"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('5'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video05 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video05}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video05}
                                        playing={this.state.video05}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            {/* <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video06 ? 'none' : ''}}>
                                    <img src={Thum09} alt="" className="video03"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('6'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video06 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video06}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video06}
                                        playing={this.state.video06}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div> */}
                        </Slider>
                    </div>

                    {/*********** CEO 인터뷰 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG02"/>
                        <div className="MediaTitle">CEO 인터뷰</div>
                        <Scrollbar className="scrollList mediaScroll">
                            <div className="h-box">
                                <div className="videoAllBox v-box">
                                    <img src={Thum01} alt="Thun01" className="video01"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('CEO','1');}}/>
                                    <div className="textBox">
                                        <div className="text">더존이 말하는 ‘똑똑하게 일하는 방법’</div>
                                        <div className="text2">
                                            경비 입력 및 검증 업무 자동화로 업무 프로세스 41% 축소! 데이터 패턴 분석으로<br/>
                                            자동 입력 및 검증이 가능하고 실시간으로 업무진행 상태 확인이 가능하다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <img src={Thum02} alt="Thun03" className="video02"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('CEO','2');}}/>
                                    <div className="textBox">
                                        <div className="text">
                                            [D파이오니어를 만나다] “주요 기업용 솔루션 하나로 통합…<br/>
                                            업무혁신 쓰면서 체험하세요”
                                        </div>
                                        <div className="text2">
                                            근태신청서 자동화로 작성 시간을 단축하여 시간 비용 70% 절감!<br/>
                                            근태 프로세스 간소화와 자동화를 통해 편리한 근태관리를 지원힌다.
                                        </div>
                                        <div className="day mt10">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box" style={{display:"none"}}>  
                                    <img src={Thum03} alt="Thun03" className="video03"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('CEO','3');}}/>
                                    <div className="textBox">
                                        <div className="text">“기업에 시간을 팝니다” 더존비즈온 지용구 대표</div>
                                        <div className="text2">
                                            기업에게 시간은 가장 큰 비용이기에 만약, 시간을 살 수 있다면<br/>
                                            사야 한다. 아마란스 10은 시간을 사는 도구다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>
                    
                    {/*********** CEO 인터뷰 팝업영역 ***********/}
                    <div className="modal" style={{display: this.state.modal01 ? '':'none'}}>
                        <div className='closeBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider01 = slider)} {...settings} className='modalBox'>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video01 ? 'none' : ''}}>
                                    <img src={Thum01} alt="" className="video01"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('1'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video01 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video01}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video01}
                                        playing={this.state.video01}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video02 ? 'none' : ''}}>
                                    <img src={Thum02} alt="" className="video02"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('2'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video02 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video02}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video02}
                                        playing={this.state.video02}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            {/* <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video03 ? 'none' : ''}}>
                                    <img src={Thum03} alt="" className="video03"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('3'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video03 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video03}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video03}
                                        playing={this.state.video03}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div> */}
                        </Slider>
                    </div>

                    {/*********** 주요기능 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="SelectNtitle h-box">
                            <div className="MediaTitle flex-1">주요기능</div>
                            
                            {/* 드롭다운리스트 */}
                            <div className="MediaSelect h-box" style={{display:"none"}}>
                                <div className="SelectBox flex-1">
                                    <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                    <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                        <ul>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('For Me (임직원 업무관리)');}}>For Me (임직원 업무관리)</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('그룹웨어');}}>그룹웨어</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('ERP (회계관리)');}}>ERP (회계관리)</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('ERP (인사관리)');}}>ERP (인사관리)</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('ERP (편의기능)');}}>ERP (편의기능)</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('문서관리 (ONEFFICE)');}}>문서관리 (ONEFFICE)</li>                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('문서관리 (ONECHAMBER)');}}>문서관리 (ONECHAMBER)</li>
                                            <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('모바일');}}>모바일</li>
                                        </ul>
                                    </div>
                                    <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                                </div>
                            </div>
                        </div>

                        <Scrollbar className="scrollList mediaScroll">
                            <div className="h-box">
                                <div className="videoAllBox v-box">
                                    <img src={Thum04} alt="Thun01" className="video01"/>
                                    <div className="play" onClick={()=>{this.props.handleClickAlert();}}/>
                                    <div className="textBox">
                                        <div className="text">임직원업무관리-경비청구</div>
                                        <div className="text2">
                                            경비 입력 및 검증 업무 자동화로 업무 프로세스 41% 축소! 데이터 패턴 분석으로
                                            자동 입력 및 검증이 가능하고 실시간으로 업무진행 상태 확인이 가능하다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <img src={Thum05} alt="Thun03" className="video02"/>
                                    <div className="play" onClick={()=>{this.props.handleClickAlert();}}/>
                                    <div className="textBox">
                                        <div className="text">임직원업무관리-근태관리</div>
                                        <div className="text2">
                                            근태신청서 자동화로 작성 시간을 단축하여 시간 비용 70% 절감!
                                            근태 프로세스 간소화와 자동화를 통해 편리한 근태관리를 지원힌다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box" style={{display:"none"}}>  
                                    <img src={Thum06} alt="Thun03" className="video03"/>
                                    <div className="play" onClick={()=>{this.props.handleClickAlert();}}/>
                                    <div className="textBox">
                                        <div className="text">임직원업무관리-주52시간관리</div>
                                        <div className="text2">
                                            근태신청 데이터가 전자결재 문서 및 일정 캘린더에 자동 반영되어
                                            데이터 입력 소요 시간이 줄어든다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 홍보 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG03"/>
                        <div className="MediaTitle">홍보</div>
                        <Scrollbar className="scrollList mediaScroll">
                            <div className="h-box">
                                <div className="videoAllBox v-box">
                                    <img src={Thum10} alt="Thun01" className="video01"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Ad','1');}}/>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10 DTEC 세미나 홍보</div>
                                        <div className="text2">
                                            기업 성장의 과제, 디지털 전환은 프로세스 혁신이 핵심이다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <img src={Thum11} alt="Thun03" className="video02"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Ad','2');}}/>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10 런칭 영상</div>
                                        <div className="text2">
                                            영원히 시들지 않는 꽃 ‘아마란스’
                                            하나의 솔루션, 그 이상의 가치 ‘아마란스 10’
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box" style={{display:"none"}}>  
                                    <img src={Thum12} alt="Thun03" className="video03"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('Ad','3');}}/>
                                    <div className="textBox">
                                        <div className="text">Amaranth 10 제품 철학</div>
                                        <div className="text2">
                                            디지털 전환을 넘어서 융합이 필요한 시대, Amaranth 10은
                                            기업의 자산과 업무를 연결하는 핵심 플랫폼이다.
                                        </div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 홍보 팝업영역 ***********/}
                    <div className="modal" style={{display: this.state.modal03 ? '':'none'}}>
                        <div className='closeBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider03 = slider)} {...settings} className='modalBox'>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video07 ? 'none' : ''}}>
                                    <img src={Thum10} alt="" className="video01"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('7'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video07 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video07}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video07}
                                        playing={this.state.video07}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video08 ? 'none' : ''}}>
                                    <img src={Thum11} alt="" className="video02"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('8'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video08 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video08}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video08}
                                        playing={this.state.video08}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div>
                            {/* <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video09 ? 'none' : ''}}>
                                    <img src={Thum12} alt="" className="video03"/>
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('9'); }}/>
                                </div>
                                <div className="videoBox" style={{display:this.state.video09 ? '':'none'}}>
                                    <ReactPlayer
                                        ref={this.video09}
                                        width="100%" height="100%"
                                        url={this.state.videoSrc01.video09}
                                        playing={this.state.video09}
                                        loop={true}
                                        playsInline={true}
                                        controls={true}
                                    />
                                </div>
                            </div> */}
                        </Slider>
                    </div>

                </div>
            </Fragment>
        );
    }
}


