import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import Slider from 'react-slick';
import * as ApiUrl from '../../../context/BackEndProtocol';
import * as HttpUtils from "../../../common/js/HttpUtils";

import "../../../../www/css/slick.scss";
import "../../../../www/css/slick-theme.scss";

// 광고
export default class VideoPopup extends Component {
    state = {
        slideIndex: -1
    }

    constructor(props) {
        super(props);

        this.iframe = [];
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    // 슬라이드 좌우 버튼 클릭시 비디오 초기화
    componentDidMount() {
        if (this.props.popupList.length > 0) {
            let position = 0;
            this.props.popupList.forEach((item, idx) => {
                item.thumnailInfo = this.getThumnailUrl(item.thumnail);
                item.videoUrl = this.getVideoUrl(item.videoType, item.videoUrl);
                if (item.seq === this.props.seq) {
                    position = idx;
                }
            });

            this.slider.slickGoTo(position, true);
        } else {
            this.props.handleModalClose();
        }
    }

    getThumnailUrl = (fileInfo) => {
        return ApiUrl.COMMON_RESOURCE + fileInfo.serverSaveFileFullPath;
    }

    getVideoUrl = (videoType, videoUrl) => {
        let resultUrl = '';
        if (videoType === 'Y') {
            const embed = "https://www.youtube.com/embed/";
            if (videoUrl == null || videoUrl === '' || videoUrl === undefined || videoUrl.indexOf('http') < 0) {
                return videoUrl;
            }

            try {
                let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                let matchData = videoUrl.match(regExp);
                resultUrl = embed + matchData[1] + '?autoplay=0&enablejsapi=1';
            } catch (e) {
            }
        } else if (videoType === 'W') {
            const embed = "https://wehago.com/westudio/embed/";
            if (videoUrl.indexOf('http') < 0) {
                // http 또는 https 가 없으면 그대로 리턴
                return videoUrl;
            }

            try {
                let match = videoUrl.split("/");
                resultUrl = embed + match[match.length - 1];
            } catch (e) {
            }
        }
        return resultUrl;
    }

    // 비디오 플레이
    handleVideoPlay = (obj, type) => {
        // 유투브의 경우에만 자동재생이 가능, 위스튜디오는 지원안함
        let seq = this.props.popupList[this.state.slideIndex].seq;

        if (type === 'Y') {
            $('#youtubeIframe_' + seq)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        //썸네일 이미지 처리
        const imageDiv = obj.target.closest('div[class="imgBox"]');
        imageDiv.style['display'] = 'none';

        let param = {};
        let apiUrl = '';
        if (this.props.type === 'TVCF') {
            param.adSeq = seq;
            apiUrl = ApiUrl.USER_SET_AD_COUNT;
        } else {
            param.mediaSeq = seq;
            apiUrl = ApiUrl.USER_SET_MEDIA_COUNT;
        }

        HttpUtils.callNonAuthPostMethod(apiUrl, param).catch(e => console.error(e));
    }

    videoStop() {
        let seq = this.props.popupList[this.state.slideIndex].seq;
        // youtube iframe api 비디오 중지
        $('#youtubeIframe_' + seq)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        // 썸네일 재설정
        $('#imgBox_' + seq).css('display', 'block')
    }

    handleVideoStop = (e) => {
        this.videoStop();

        this.props.handleModalClose();
    }


    next() {
        this.videoStop();

        this.slider.slickNext();
    }

    previous() {
        this.videoStop();

        this.slider.slickPrev();
    }

    NextArrow = (props) => {
        return (
            <button type='button' className='slick-next' onClick={this.next} />
        );
    }

    PrevArrow = (props) => {
        return (
            <button type='button' className='slick-prev' onClick={this.previous} />
        );
    }

    render() {
        var settings = {
            centerMode: true,
            centerPadding: "0px",
            dots: false,
            infinite: false,
            speed: 300,
            swipe: false,
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <this.NextArrow />,
            prevArrow: <this.PrevArrow />,
            beforeChange: (currentSlide, nextSlide) => this.setState({ slideIndex: currentSlide === nextSlide ? currentSlide : nextSlide }, () => {
                // console.log('bf', currentSlide, nextSlide);
            }),
            afterChange: (currentSlide) => this.setState({ slideIndex: currentSlide }, () => {
                // console.log('af', currentSlide);
            })
        };

        return (
            <Fragment>
                <div className="modal">
                    <div className='closeBox h-box'>
                        <div className="closeIcon" onClick={(e) => { this.handleVideoStop(e); }} />
                    </div>
                    <Slider ref={slider => (this.slider = slider)} {...settings} className='modalBox h-box'>
                        {this.props.popupList && this.props.popupList.map((data, idx) => (
                            <div className='videoPopBox' key={'userTvPopup_' + data.seq}>
                                <div className='imgBox' id={'imgBox_' + data.seq}>
                                    <img src={data.thumnailInfo} alt="" className="video01" />
                                    <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay(e, data.videoType); }} />
                                </div>
                                <div className="videoBox">
                                    <iframe
                                        id={'youtubeIframe_' + data.seq}
                                        ref={iframeContent => this.iframe[idx] = iframeContent}
                                        title={'Title_' + data.seq}
                                        width="100%"
                                        height="100%"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                        src={data.videoUrl}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Fragment>
        );
    }
}