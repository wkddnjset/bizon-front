import React, { Component, Fragment } from 'react';
import MediaSubLnb from './unit/MediaSubLnb';
import "../../../www/css/slick.scss";
import "../../../www/css/slick-theme.scss";
import { Scrollbar } from "react-scrollbars-custom";
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol';
import VideoPopup from './popup/VideoPopup';

// 영상콘텐츠
export default class MediaSub03 extends Component {
    constructor(props) {
        super(props);

        // 세미나 쪽 infinite 를 위한 ref
        this.SEMINAR_REF = React.createRef();

        // CEO인터뷰 쪽 infinite 를 위한 ref
        this.CEO_REF = React.createRef();

        // 주요기능 쪽 infinite 를 위한 ref
        this.FEATURE_REF = React.createRef();

        // 홍보 쪽 infinite 를 위한 ref
        this.PROMOTION_REF = React.createRef();

        this.PAGE_CNT = 3;
        this.state = {
            modal01: false,
            modal02: false,
            modal03: false,
            modal04: false,
            type: '',
            seq: '',

            ceoPage: 1,
            ceoIsLastPage: false,
            ceoDataList: [],
            ceoPopupList: [],          // CEO인터뷰 팝업 목록

            seminarPage: 1,
            seminarIsLastPage: false,
            seminarDataList: [],
            seminarPopupList: [],      // 세미나 팝업 목록

            promotionPage: 1,
            promotionIsLastPage: false,
            promotionDataList: [],
            promotionPopupList: [],    // 홍보 팝업 목록

            featurePage: 1,
            featureIsLastPage: false,
            featureDataList: [],
            featurePopupList: []       // 주요기능 팝업 목록
        }
    }

    componentDidMount() {
        //전체 목록 조회
        this.getMediaList();
    }

    getMediaList = () => {
        const param = {
            searchPage: 1,
            pageSize: this.PAGE_CNT
        };

        HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETMEDIALIST, param).then((jsonObj) => {
            this.setState({
                ceoPage: jsonObj.cmediaList.currentPage,
                ceoDataList: jsonObj.cmediaList.dataList,
                ceoIsLastPage: jsonObj.cmediaList.lastPage,

                seminarPage: jsonObj.smediaList.currentPage,
                seminarDataList: jsonObj.smediaList.dataList,
                seminarIsLastPage: jsonObj.smediaList.lastPage,

                promotionPage: jsonObj.pmediaList.currentPage,
                promotionDataList: jsonObj.pmediaList.dataList,
                promotionIsLastPage: jsonObj.pmediaList.lastPage,

                featurePage: jsonObj.fmediaList.currentPage,
                featureDataList: jsonObj.fmediaList.dataList,
                featureIsLastPage: jsonObj.fmediaList.lastPage,

                ceoPopupList: this.getVideoPopupList(jsonObj.cmediaList.dataList),          // CEO인터뷰 팝업 목록
                seminarPopupList: this.getVideoPopupList(jsonObj.smediaList.dataList),      // 세미나 팝업 목록
                promotionPopupList: this.getVideoPopupList(jsonObj.pmediaList.dataList),    // 홍보 팝업 목록
                featurePopupList: this.getVideoPopupList(jsonObj.fmediaList.dataList)       // 주요기능 팝업 목록
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
            popupInfo.seq = item.mediaSeq;
            popupInfo.thumnail = item.uploadFileInfo;
            popupInfo.videoType = item.mediaType;
            popupInfo.videoUrl = item.mediaUrl;

            returnArr.push(popupInfo);
        });

        return returnArr;
    }

    registerObserver = () => {
        // CEO인터뷰
        if (this.state.ceoDataList.length > 0) {
            const ceoObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.ceoIsLastPage === false) {
                    const param = {
                        searchPage: this.state.ceoPage + 1,
                        pageSize: this.PAGE_CNT
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETMEDIACEOLIST, param).then((jsonObj) => {
                        this.setState({
                            ceoPage: jsonObj.currentPage,
                            ceoDataList: [...this.state.ceoDataList, ...jsonObj.dataList],
                            ceoIsLastPage: jsonObj.lastPage,
                            ceoPopupList: [...this.state.ceoPopupList, ...this.getVideoPopupList(jsonObj.dataList)]
                        });
                    }).catch(e => console.log(e));
                }
            }, {
                root: document.querySelector('#ceoViewPort'),
                rootMargin: '10px',
                threshold: 0
            });

            if (this.CEO_REF.current) {
                ceoObserver.observe(this.CEO_REF.current);
            }
        }

        // 세미나
        if (this.state.seminarDataList.length > 0) {
            const seminarObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.seminarIsLastPage === false) {
                    const param = {
                        searchPage: this.state.seminarPage + 1,
                        pageSize: this.PAGE_CNT
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETMEDIASEMINARLIST, param).then((jsonObj) => {
                        this.setState({
                            seminarPage: jsonObj.currentPage,
                            seminarDataList: [...this.state.seminarDataList, ...jsonObj.dataList],
                            seminarIsLastPage: jsonObj.lastPage,
                            seminarPopupList: [...this.state.seminarPopupList, ...this.getVideoPopupList(jsonObj.dataList)]
                        });
                    }).catch(e => console.log(e));
                }

            }, {
                root: document.querySelector('#seminarViewPort'),
                rootMargin: '10px',
                threshold: 0
            });

            if (this.SEMINAR_REF.current) {
                seminarObserver.observe(this.SEMINAR_REF.current);
            }
        }

        // 홍보
        if (this.state.promotionDataList.length > 0) {
            const promotionObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.promotionIsLastPage === false) {
                    const param = {
                        searchPage: this.state.promotionPage + 1,
                        pageSize: this.PAGE_CNT
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETMEDIAPROMOTIONLIST, param).then((jsonObj) => {
                        this.setState({
                            promotionPage: jsonObj.currentPage,
                            promotionDataList: [...this.state.promotionDataList, ...jsonObj.dataList],
                            promotionIsLastPage: jsonObj.lastPage,
                            promotionPopupList: [...this.state.promotionPopupList, ...this.getVideoPopupList(jsonObj.dataList)]
                        });

                    }).catch(e => console.log(e));
                }
            }, {
                root: document.querySelector('#promotionViewPort'),
                rootMargin: '10px',
                threshold: 0
            });

            if (this.PROMOTION_REF.current) {
                promotionObserver.observe(this.PROMOTION_REF.current);
            }
        }

        // 주요기능
        if (this.state.featureDataList.length > 0) {
            const featureObserver = new IntersectionObserver((entries, observer) => {
                const target = entries[0];
                if (target.isIntersecting && this.state.featureIsLastPage === false) {
                    const param = {
                        searchPage: this.state.featurePage + 1,
                        pageSize: this.PAGE_CNT
                    };

                    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETMEDIAFEATURELIST, param).then((jsonObj) => {
                        this.setState({
                            featurePage: jsonObj.currentPage,
                            featureDataList: [...this.state.featureDataList, ...jsonObj.dataList],
                            featureIsLastPage: jsonObj.lastPage,
                            featurePopupList: [...this.state.featurePopupList, ...this.getVideoPopupList(jsonObj.dataList)]
                        });
                    }).catch(e => console.log(e));
                }
            }, {
                root: document.querySelector('#featureViewPort'),
                rootMargin: '10px',
                threshold: 0

            });

            if (this.FEATURE_REF.current) {
                featureObserver.observe(this.FEATURE_REF.current);
            }
        }
    }

    // 모달 팝업 호출 (slickGoTo로 맨 처음 화면 변경)
    handleMediaClick = (content, seq) => {
        this.handleModalClose();

        this.setState({
            modal01: content === 'Seminar'
            , modal02: content === 'CEO'
            , modal03: content === 'Feature'
            , modal04: content === 'Ad'
            , type: content
            , seq: seq
        });
    }

    // 모달 팝업 끄기
    handleModalClose = () => {
        this.setState({
            modal01: false
            , modal02: false
            , modal03: false
            , modal04: false
        });
    }

    render() {
        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub03">
                    {/*********** 세미나 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG01" />
                        <div className="MediaTitle">세미나</div>
                        <Scrollbar id="seminarViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '640px' }}>
                            <div className='h-box'>
                                {this.state.seminarDataList && this.state.seminarDataList.map((data, idx) => (
                                    <div className="videoAllBox v-box" key={'userSeminar_' + data.mediaSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thun01" className="video01" />
                                        <div className="play" onClick={() => { this.handleMediaClick('Seminar', data.mediaSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.mediaTitle}</div>
                                            <div className="text2">{data.mediaContents}</div>
                                            <div className="day">{data.mediaRegDt}</div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={this.SEMINAR_REF} style={{ width: '50px', visibility: 'hidden', minWidth: '50px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 세미나 팝업영역 ***********/}
                    {this.state.modal01 && (
                        <VideoPopup
                            popupList={this.state.seminarPopupList}
                            open={this.state.modal01}
                            type={this.state.type}
                            seq={this.state.seq}
                            handleModalClose={this.handleModalClose}
                        />
                    )}

                    {/*********** CEO 인터뷰 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG02" />
                        <div className="MediaTitle">CEO 인터뷰</div>
                        <Scrollbar id="ceoViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '640px' }}>
                            <div className='h-box'>
                                {this.state.ceoDataList && this.state.ceoDataList.map((data, idx) => (
                                    <div className="videoAllBox v-box" key={'userCeo_' + data.mediaSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thun01" className="video01" />
                                        <div className="play" onClick={() => { this.handleMediaClick('CEO', data.mediaSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.mediaTitle}</div>
                                            <div className="text2">{data.mediaContents}</div>
                                            <div className="day">{data.mediaRegDt}</div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={this.CEO_REF} style={{ width: '50px', visibility: 'hidden', minWidth: '50px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** CEO 인터뷰 팝업영역 ***********/}
                    {this.state.modal02 && (
                        <VideoPopup
                            popupList={this.state.ceoPopupList}
                            open={this.state.modal02}
                            type={this.state.type}
                            seq={this.state.seq}
                            handleModalClose={this.handleModalClose}
                        />
                    )}

                    {/*********** 주요기능 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG03" />
                        <div className="MediaTitle flex-1">주요기능</div>
                        <Scrollbar id="featureViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '640px' }}>
                            <div className='h-box'>
                                {this.state.featureDataList && this.state.featureDataList.map((data, idx) => (
                                    <div className="videoAllBox v-box" key={'userFeature_' + data.mediaSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thun01" className="video01" />
                                        <div className="play" onClick={() => { this.handleMediaClick('Feature', data.mediaSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.mediaTitle}</div>
                                            <div className="text2">{data.mediaContents}</div>
                                            <div className="day">{data.mediaRegDt}</div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={this.FEATURE_REF} style={{ width: '50px', visibility: 'hidden', minWidth: '50px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 주요기능 팝업영역 ***********/}
                    {this.state.modal03 && (
                        <VideoPopup
                            popupList={this.state.featurePopupList}
                            open={this.state.modal03}
                            type={this.state.type}
                            seq={this.state.seq}
                            handleModalClose={this.handleModalClose}
                        />
                    )}

                    {/*********** 홍보 영역 ***********/}
                    <div className='mediaBox'>
                        <div className="BG03" />
                        <div className="MediaTitle">홍보</div>
                        <Scrollbar id="promotionViewPort" minimalThumbXSize={350} maximalThumbXSize={350} className="scrollList mediaScroll" style={{ width: '100%', height: '640px' }}>
                            <div className='h-box'>
                                {this.state.promotionDataList && this.state.promotionDataList.map((data, idx) => (
                                    <div className="videoAllBox v-box" key={'userPromotion_' + data.mediaSeq}>
                                        <img src={ApiUrl.COMMON_RESOURCE + data.uploadFileInfo.serverSaveFileFullPath} alt="Thun01" className="video01" />
                                        <div className="play" onClick={() => { this.handleMediaClick('Ad', data.mediaSeq); }} />
                                        <div className="textBox">
                                            <div className="text">{data.mediaTitle}</div>
                                            <div className="text2">{data.mediaContents}</div>
                                            <div className="day">{data.mediaRegDt}</div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={this.PROMOTION_REF} style={{ width: '50px', visibility: 'hidden', minWidth: '50px' }}></div>
                            </div>
                        </Scrollbar>
                    </div>

                    {/*********** 홍보 팝업영역 ***********/}
                    {this.state.modal04 && (
                        <VideoPopup
                            popupList={this.state.promotionPopupList}
                            open={this.state.modal04}
                            type={this.state.type}
                            seq={this.state.seq}
                            handleModalClose={this.handleModalClose}
                        />
                    )}
                </div>
            </Fragment >
        );
    }
}