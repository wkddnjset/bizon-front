import React, { Component, Fragment } from 'react';
import $ from 'jquery'
import MediaSubLnb from './unit/MediaSubLnb';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import "../../www/css/slick.scss";
import "../../www/css/slick-theme.scss";
import { Scrollbar } from "react-scrollbars-custom";

import Thum01 from '../../www/images/sub/media/thumbnail-01@2x.png'
import Thum02 from '../../www/images/sub/media/thumbnail-02@2x.png'
import Thum03 from '../../www/images/sub/media/thumbnail-03@2x.png'
import Thum04 from '../../www/images/sub/media/media-print-01@2x.png'
import Thum05 from '../../www/images/sub/media/media-print-02@2x.png'

// 광고
export default class MediaSub01 extends Component {
    constructor(props) {
        super(props);
        
        // ref
        this.video01 = React.createRef();
        this.video02 = React.createRef();
        this.video03 = React.createRef();

        this.state = {

            modal01:false,
            modal02:false,

            video01:false,
            video02:false,
            video03:false,
            video04:false,
            video05:false,
            video06:false,
            video07:false,
            video08:false,
            video09:false,

            // 비디오
            videoSrc: {
                // video01: require('../../www/images/sub/temp/1.Amaranth 10 TVC.mp4').default,
                // video02: require('../../www/images/sub/temp/2.Amaranth 10 미래편.mp4').default,
                // video03: require('../../www/images/sub/temp/3.Amaranth 10 기능편.mp4').default,
            },

        }
    }

    // 슬라이드 좌우 버튼 클릭시 비디오 초기화
    componentDidMount() {
        $(".slick-next").on("click",this.handleVideoClose);
        $(".slick-prev").on("click",this.handleVideoClose);
    }

    // 모달 팝업 호출 (slickGoTo로 맨 처음 화면 변경)
    handleMediaClick = (content,type) => {
        this.handleModalClose();

        if (content === 'TVCF') {
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
        }else if (content === 'Print') {
            if (type === '1'){
                this.slider02.slickGoTo(0, true)
                this.setState ({modal02:true})
            }else if (type === '2'){
                this.slider02.slickGoTo(1, true)
                this.setState ({modal02:true})
            }
        }
    }

    // 모달 팝업 끄기
    handleModalClose = () => {
        this.setState ({modal01:false, modal02:false, video01:false, video02:false, video03:false})
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
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    mediaSub04={this.props.mediaSub04}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub01">
                    {/*********** TVCF ***********/}
                    <div className='TVCF'>
                        <div className="BG01"/>
                        <div className="MediaTitle">TVCF</div>
                        <Scrollbar className="scrollList mediaScroll">
                            <div className='h-box'>
                                <div className="videoAllBox v-box">
                                    <img src={Thum01} alt="Thun01" className="video01"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('TVCF','1');}}/>
                                    <div className="textBox">
                                        <div className="text">세상에 없던 디지털 비즈니스 플랫폼, Amaranth 10</div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">
                                    <img src={Thum02} alt="Thun03" className="video02"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('TVCF','2');}}/>
                                    <div className="textBox">
                                        <div className="text">언제부터가 미래일까? (미래편)</div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="videoAllBox v-box">  
                                    <img src={Thum03} alt="Thun03" className="video03"/>
                                    <div className="play" onClick={()=>{this.handleMediaClick('TVCF','3');}}/>
                                    <div className="textBox">
                                        <div className="text">지금은 디지털 전환의 시대! (기능편)</div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** TVCF 팝업영역 ***********/}
                    <div className="modal" style={{display: this.state.modal01 ? '':'none'}}>
                        <div className='closeBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider01 = slider)} {...settings} className='modalBox h-box'>
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video01 ? 'none':''}}>
                                    <img src={Thum01} alt="" className="video01"/>
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
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video02 ? 'none' : ''}}>
                                    <img src={Thum02} alt="" className="video02"/>
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
                            <div className='videoPopBox'>
                                <div className='imgBox' style={{display: this.state.video03 ? 'none' : ''}}>
                                    <img src={Thum03} alt="" className="video03"/>
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

                    {/*********** 지면광고 ***********/}
                    <div className='AD'>
                        <div className="BG02"/>
                        <div className="MediaTitle">지면광고</div>
                        <Scrollbar className="scrollList mediaScroll">
                            <div className="h-box">
                                <div className="printAllBox v-box">
                                    <img src={Thum04} alt="Thum04" className="print01" onClick={()=>{this.handleMediaClick('Print','1');}}/>
                                    <div className="textBox">
                                        <div className="text">비즈니스의 미래는 바로 지금부터</div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                <div className="printAllBox v-box">
                                    <img src={Thum05} alt="Thum05" className="print02" onClick={()=>{this.handleMediaClick('Print','2');}}/>
                                    <div className="textBox">
                                        <div className="text">기업의 디지털 전환, 아마란스 10이 답입니다</div>
                                        <div className="day">2021.10.13</div>
                                    </div>
                                </div>
                                {/* 사진 및 내용 없을 때 */}
                                <div className="printAllBox v-box">  
                                    <div className="print03">
                                        <div className="logo"/>
                                    </div>
                                </div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 지면광고 팝업영역 ***********/}
                    <div className="modal" style={{display: this.state.modal02 ? '':'none'}}>
                        <div className='closePrintBox h-box'>
                            <div className="closeIcon" onClick={()=>{this.handleModalClose();}} />
                        </div>
                        <Slider ref={slider => (this.slider02 = slider)} {...settings} className='modalPrintBox'>
                            <div className="printPopBox">
                                <img src={Thum04} alt="" className="print01"/>
                            </div>
                            <div className="printPopBox">
                                <img src={Thum05} alt="" className="print02"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}


