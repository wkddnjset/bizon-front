import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import MainScrollDown from '../jsonComp/MainScrollDown';

export default class Section01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoPlay: true,
            videoView: false,
            videoPoster: require('../../../www/images/temp/img-thumbnail.png').default,
            videoSrc: {
                video01: require('../../../www/images/temp/main.mp4').default
            }
        }
    }

    myRefs = {
        sec01Video: React.createRef(),
    }

    onClickVideoPlay = () => {
        this.myRefs.sec01Video.current.play();
        this.setState({
            videoPlay: true
        })
    }

    onClickVideoPause = () => {
        this.myRefs.sec01Video.current.pause();
        this.setState({
            videoPlay: false
        })
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        let secPx = utils.getTopPx(intWindowHeight, heightLength);   // 여백값 높이 조정
        let sectionStyle = {
            height: `${intWindowHeight}px`,
        };

        // Video
        let intVideoTransY = -90 + (150 * utils.getZeroToOne(position, 0, 400)) + secPx * utils.getZeroToOne(position, 0, 0);

        // 하단 페이드 아웃 처리
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 600, 0);

        // Image 처리
        // 800 이하일 경우 20 > 0
        let intToZero = 20 * utils.getOneToZero(position, 0, 500);


        return (
            <Fragment>
                <div id="section01" className="section01" style={sectionStyle}>
                    {/* 영상 :: 스크롤에 따라 아래의 값이 변함 */}
                    <div className="videoBox" poster={this.state.videoPoster} style={{ width: `${100 * utils.getOneToZero(position, 0, 400)}%`, height: `${intWindowHeight * utils.getOneToZero(position, 0, 400)}px`, transform: `translateY(${intVideoTransY}px) scale(1.02)`, display: this.state.videoView ? '' : 'none' }}>
                        <video ref={this.myRefs.sec01Video} onCanPlay={() => { this.setState({ videoView: true }) }} width="100%" height="100%" loop autoPlay muted playsInline>
                            <source src={this.state.videoSrc.video01} type="video/mp4" />
                        </video>
                    </div>
                    
                     
                    <div className="mouseDownAnimation animated05s fadeInUp" style={{ display: position > 1 ? 'none' : '' }}>
                        <MainScrollDown />
                    </div> 
                   

                    {/* 가운데 로고 텍스트 */}
                    <div className="textBox v-box" style={{ transform: 'translateY(440px)', opacity: `${utils.getZeroToOne(position, 450, 50)}`, marginTop: `${secPx}px` }}>
                        <div className="logo" />
                        <div className="text">세상에 없던<br />디지털 비즈니스 플랫폼</div>
                    </div>

                    {/* 이미지들 */}
                    <div className="item-01" style={{ transform: `translateX(${-120 - intToZero}%) translateY(${-39 - intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-02" style={{ transform: `translateX(${-180 - intToZero}%) translateY(${-39 - intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-03" style={{ transform: `translateX(${-126 - intToZero}%) translateY(${17 - (intToZero * 5)}%) scale(1)`, marginTop: `${secPx}px` }}/>
                    <div className="item-04" style={{ transform: `translateX(${68 + intToZero}%) translateY(${-39 - intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-05" style={{ transform: `translateX(${136 + intToZero}%) translateY(${-43 - intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-06" style={{ transform: `translateX(${-139 - intToZero}%) translateY(${25 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-07" style={{ transform: `translateX(${-105 - intToZero}%) translateY(${55 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-08" style={{ transform: `translateX(${200 + intToZero}%) translateY(${73 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-09" style={{ transform: `translateX(${103 + intToZero}%) translateY(${17 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-10" style={{ transform: `translateX(${-353 - (intToZero * 5)}%) translateY(${320 + (intToZero * 5)}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-11" style={{ transform: `translateX(${-340 - (intToZero * 5)}%) translateY(${224 + (intToZero * 5)}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-12" style={{ transform: `translateX(${-60 - intToZero}%) translateY(${105 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-13" style={{ transform: `translateX(7%) translateY(${145 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-14" style={{ transform: `translateX(${85 + intToZero}%) translateY(${150 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                    <div className="item-15" style={{ transform: `translateX(${115 + intToZero}%) translateY(${110 + intToZero}%) scale(1)`, marginTop: `${secPx}px` }} />
                </div>
            </Fragment>
        );
    }
}


