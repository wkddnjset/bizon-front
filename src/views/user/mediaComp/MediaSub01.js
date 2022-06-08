import React, { Component, Fragment } from 'react';
import MediaSubLnb from './unit/MediaSubLnb';
import Slider from 'react-slick';
import "../../../www/css/slick.scss";
import "../../../www/css/slick-theme.scss";
import { Scrollbar } from "react-scrollbars-custom";
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol';


import VideoPopup from "./popup/VideoPopup";


// 광고
export default class MediaSub01 extends Component {

    constructor(props) {
        super(props);

        // ref
        this.video01 = React.createRef();
        this.video02 = React.createRef();

        // TV CF 쪽 infinite 를 위한 ref
        this.TVCF_REF = React.createRef();

        // 지면광고 쪽 infinite 를 위한 ref
        this.PAPER_REF = React.createRef();

        this.state = {
            modal01: false,
            modal02: false,

            tvcPage: 1,
            tvcDataList: [], // TVCF
            tvcIsLastPage: false,

            paperPage: 1,
            paperDataList: [], // 지면광고
            paperIsLastPage: false,

            tvVideoPopupList: [],
            paperPopupList: []
        }
    }

    // 슬라이드 좌우 버튼 클릭시 비디오 초기화
    componentDidMount() {
        //전체 목록 조회
        this.getAdTvList();
    }

    getAdTvList = () => {
        const param = {
            searchPage: 1,
            pageSize: 3
        };

        HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETADLIST, param).then((jsonObj) => {
            this.setState({
                tvcPage: jsonObj.tvAdList.currentPage,
                tvcDataList: jsonObj.tvAdList.dataList,
                tvcIsLastPage: jsonObj.tvAdList.lastPage,

                paperPage: jsonObj.paperAdList.currentPage,
                paperDataList: jsonObj.paperAdList.dataList,
                paperIsLastPage: jsonObj.paperAdList.lastPage,

                tvVideoPopupList: this.getVideoPopupList(jsonObj.tvAdList.dataList),
                paperPopupList: this.getPaperPopupList(jsonObj.paperAdList.dataList)
            }, () => {
                //인피니티 스크롤을 위한 옵저버 등록
                this.registerObserver();
            });
        }).catch(e => console.log(e));
    }

    getVideoPopupList = (lists) => {
        let returnArr = [];
        lists.forEach((item) => {

            let popupInfo = {};
            popupInfo.seq = item.adSeq;
            popupInfo.thumnail = item.uploadFileInfo;
            popupInfo.videoType = item.adMediaType;
            popupInfo.videoUrl = item.adMediaUrl;

            returnArr.push(popupInfo);
        });

        return returnArr;
    }

    getPaperPopupList = (lists) => {
        let returnArr = [];
        lists.forEach((item) => {
            let popupInfo = {};
            popupInfo.seq = item.adSeq;
            popupInfo.thumnail = ApiUrl.COMMON_RESOURCE + item.uploadFileInfo.serverSaveFileFullPath

            returnArr.push(popupInfo);
        });

        return returnArr;
    }

    registerObserver = () => {
        if (this.state.tvcDataList.length > 0) {
            const tvcObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.tvcIsLastPage === false) {
                    const param = {
                        searchPage: this.state.tvcPage + 1,
                        pageSize: 3
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETADTVLIST, param).then((jsonObj) => {
                        this.setState({
                            tvcPage: jsonObj.currentPage,
                            tvcDataList: [...this.state.tvcDataList, ...jsonObj.dataList],
                            tvcIsLastPage: jsonObj.lastPage,
                            tvVideoPopupList: this.getVideoPopupList([...this.state.tvcDataList, ...jsonObj.dataList])
                        });
                    }).catch(e => console.log(e));
                }
            }, {
                root: document.querySelector('#tvViewPort'),
                rootMargin: '10px',
                threshold: 0
            });

            if (this.TVCF_REF.current) {
                tvcObserver.observe(this.TVCF_REF.current);
            }
        }

        if (this.state.paperDataList.length > 0) {
            const paperObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.paperIsLastPage === false) {
                    const param = {
                        searchPage: this.state.paperPage + 1,
                        pageSize: 3
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETADPAPERLIST, param).then((jsonObj) => {
                        this.setState({
                            paperPage: jsonObj.currentPage,
                            paperDataList: [...this.state.paperDataList, ...jsonObj.dataList],
                            paperIsLastPage: jsonObj.lastPage,
                            paperPopupList: this.getPaperPopupList([...this.state.paperDataList, ...jsonObj.dataList])
                        });

                    }).catch(e => console.log(e));
                }
            }, {
                root: document.querySelector('#paperViewPort'),
                rootMargin: '10px',
                threshold: 0
            });

            if (this.PAPER_REF.current) {
                paperObserver.observe(this.PAPER_REF.current);
            }
        }
    }

    // 모달 팝업 호출 (slickGoTo로 맨 처음 화면 변경)
    handleMediaClick = (type, seq) => {
        this.handleModalClose();
        if (type === 'TVCF') {
            this.setState({
                modal01: true
                , type: type
                , seq: seq
            });
        } else if (type === 'Print') {
            const position = this.state.paperPopupList.findIndex(item => item.seq === seq);
            this.slider02.slickGoTo(position, true);
            this.setState({ modal02: true });

            HttpUtils.callNonAuthPostMethod(ApiUrl.USER_SET_AD_COUNT, { adSeq: seq }).catch(e => console.error(e));
        }
    }

    // 모달 팝업 끄기
    handleModalClose = () => {
        this.setState({ modal01: false, modal02: false })
    }

    render() {
        const settings = {
            centerMode: true,
            centerPadding: "0px",
            dots: false,
            infinite: false,
            speed: 300,
            swipe: false,
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
        };

        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub01">
                    {/*********** TVCF ***********/}
                    <div className='TVCF' >
                        <div className="BG01" />
                        <div className="MediaTitle">TVCF</div>
                        <Scrollbar id="tvViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '550px' }}>
                            <div className='h-box'>
                                {this.state.tvcDataList && (this.state.tvcDataList.map((data, idx) => (
                                    <div className="videoAllBox v-box" key={'userTvc_' + data.adSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thun01" className="video01" />
                                        <div className="play" onClick={() => { this.handleMediaClick('TVCF', data.adSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.adTitle}</div>
                                            <div className="day">{data.adRegDt}</div>
                                        </div>
                                    </div>
                                )))}
                                <div ref={this.TVCF_REF} style={{ width: '50px', visibility: 'hidden', minWidth: '50px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** TVCF 팝업영역 ***********/}
                    {
                        this.state.modal01 && (
                            <VideoPopup
                                popupList={this.state.tvVideoPopupList}
                                open={this.state.modal01}
                                type={this.state.type}
                                seq={this.state.seq}
                                handleModalClose={this.handleModalClose}
                            />
                        )
                    }

                    {/*********** 지면광고 ***********/}
                    <div className='AD'>
                        <div className="BG02" />
                        <div className="MediaTitle">지면광고</div>
                        <Scrollbar id="paperViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '750px' }}>
                            <div className='h-box'>
                                {this.state.paperDataList && this.state.paperDataList.map((data, idx) => (
                                    <div className="printAllBox v-box" key={'' + data.adSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thum04" className="print01" onClick={() => { this.handleMediaClick('Print', data.adSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.adTitle}</div>
                                            <div className="day">{data.adRegDt}</div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={this.PAPER_REF} style={{ width: '5px', visibility: 'hidden', minWidth: '5px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 지면광고 팝업영역 ***********/}
                    <div className="modal" style={{ display: this.state.modal02 ? '' : 'none' }}>
                        <div className='closePrintBox h-box'>
                            <div className="closeIcon" onClick={() => { this.handleModalClose(); }} />
                        </div>
                        <Slider ref={slider => (this.slider02 = slider)} {...settings} className='modalPrintBox'>
                            {this.state.paperPopupList && this.state.paperPopupList.map((data, idx) => (
                                <div className="printPopBox" key={'userPaperPopup_' + data.seq}>
                                    <img src={data.thumnail} alt="" className="print01" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Fragment >
        );
    }
}