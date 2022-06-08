import React, { Component, Fragment } from 'react';
import $ from 'jquery'
import { BrowserRouter, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import utils from './utils/utils';
import '../../www/css/common.scss';
import '../../www/css/animate.scss';
import '../../www/css/amaranth.scss';
import '../../www/css/main.scss';
import Header from './commonsComp/Header';
import Footer from './commonsComp/Footer';
import MainComp from './mainComp/MainComp';
import BrandSub01 from './brandComp/BrandSub01';
import BrandSub02 from './brandComp/BrandSub02';
import BrandSub03 from './brandComp/BrandSub03';
import ServiceSub01 from './serviceComp/ServiceSub01';
import ServiceSub02 from './serviceComp/ServiceSub02';
import ServiceSub03 from './serviceComp/ServiceSub03';
import ServiceSub04 from './serviceComp/ServiceSub04';
import ServiceSub05 from './serviceComp/ServiceSub05';
import ServiceSub06 from './serviceComp/ServiceSub06';
import ServiceSub07 from './serviceComp/ServiceSub07';
import ServiceSub08 from './serviceComp/ServiceSub08';
import IntroductionSub01 from './introductionComp/IntroductionSub01';
import IntroductionSub02 from './introductionComp/IntroductionSub02';
import IntroductionSub03 from './introductionComp/IntroductionSub03';
import MediaSub01 from './mediaComp/MediaSub01';
import MediaSub02 from './mediaComp/MediaSub02';
import MediaSub03 from './mediaComp/MediaSub03';
import VirtualExSub01 from './virtualExComp/VirtualExSub01';
import TermsSub01 from './termsComp/TermsSub01';
import TermsSub02 from './termsComp/TermsSub02';
import TermsSub03 from './termsComp/TermsSub03';
import AdminLayout from '../admin/AdminLayout';
import MobileRedirectGuide from './commonsComp/MobileRedirectGuide';
import TabletPortraitGuide from './commonsComp/TabletPortraitGuide';

import { default as MenuUrl } from '../context/url';
import { default as jsUtils } from './utils/common';

import { Cookies } from "react-cookie";

import Analytics from 'react-router-ga';

// 레이아웃
export default class HomeLayout extends Component {

    intScrollCheck = 0;
    intPage = 1;
    isScroll = true;
    isTouchStartValueX = 0;
    isTouchStartValueY = 0;
    isTouchEndValue = 0;

    constructor(props) {
        super(props);

        // ref
        this.conRef = React.createRef();
        this.footerRef = React.createRef();

        this.state = {
            // 관리자화면
            admin: this.isShowCompLayout('adm'),
            // 모바일 접속 시 리다이렉트 안내
            mobileRedirect: this.isShowCompLayout('mredirect'),

            // 세로모드 여부
            isPortraitOrient: this.checkPortraitView(),

            // 현재 스크롤값
            scrollNow: 0,
            scrollPercent: 0,
            intWindowHeight: 0,
            intTotScrollHeight: 0,
            isScrolling: false,

            // 공통
            pageType: this.getPageTypeByURL(),
            pageAgent: '',
            hideHeader: false,
            lastScroll: 0,
            rangeValue: 50,
            footerRec: 0,

            // 메뉴별 레이아웃
            mainLayout: this.isShowCompLayout('main'),                // 메인화면

            brandLayout: this.isShowCompLayout('brand'),              // 브랜드
            brandSub01: false,
            brandSub02: false,
            brandSub03: false,

            serviceLayout: this.isShowCompLayout('service'),            // 서비스소개
            serviceSub01: false,
            serviceSub02: false,
            serviceSub03: false,
            serviceSub04: false,
            serviceSub05: false,
            serviceSub06: false,
            serviceSub07: false,
            serviceSub08: false,

            introductionLayout: this.isShowCompLayout('introduction'),      // 도입안내
            introductionSub01: true,
            introductionSub02: false,
            introductionSub03: false,

            mediaLayout: this.isShowCompLayout('media'),              // 미디어센터
            mediaSub01: false,
            mediaSub02: false,
            mediaSub03: false,

            virtualExLayout: this.isShowCompLayout('virtual'),          // 가상체험관
            virtualExSub01: false,

            termsLayout: this.isShowCompLayout('terms'),         // 약관 및 정책
            termsSub01: false,
            termsSub02: false,
            termsSub03: false,

            // 서브 타이틀
            Titletext00: 'For Me (임직원업무관리)',
            Titletext01: '서비스유형',
            Titletext02: '새롭게 정의하다',
            Titletext03: '광고',
            Titletext04: '개인정보처리방침',

            // 서비스소개 메뉴 상태
            menu01: true,
            menu02: false,
            menu03: false,
            menu04: false,
            menu05: false,
            menu06: false,
            menu07: false,
            menu08: false,
            menu09: false,
            menu10: false,
            menu11: false,
            menu12: false,
            menu13: false,
            menu14: false,
        }
    }

    //태블릿에서 가로 & 세로 모드 변경에 대한 이벤트 감지
    checkPortraitView = () => {
        const orientation = window.orientation;
        if (orientation !== undefined) {
            if (orientation === 0) {
                // 세로 모드
                this.setState({ isPortraitOrient: true });
                document.querySelector("meta[name='viewport']").setAttribute("content", "width=1000");
                return true;
            } else if (orientation === -90 || orientation === 90) {
                // 가로 모드
                this.setState({ isPortraitOrient: false });
                document.querySelector("meta[name='viewport']").setAttribute("content", "width=1920");
                return false;
            }
        }
        else {
            return false;
        }
    }

    isShowCompLayout = (matchURL) => {

        const urlPath = window.location.pathname;
        if (matchURL === 'main' && urlPath === MenuUrl.MAIN) {
            return true;
        }

        return urlPath.indexOf(matchURL) > 0 ? true : false;
    }

    getPageTypeByURL = () => {

        const urlPath = window.location.pathname;
        if (urlPath === MenuUrl.MAIN) {
            return 'main';
        }
        return 'sub';
    }

    // 메인 클릭이동
    setClickMoveBtn = async (deltaY) => {
        if (this.state.pageType === 'main') {
            await new Promise((resolve) => this.setState({ isScrolling: true }, () => resolve('')));
            this.handleWheelMove(false);
            if (deltaY === 'next') {
                if (this.intPage === 19) {
                    this.handleWheelMove(true);
                    return
                }
                this.setState({ hideHeader: true });
                this.intPage++;
            } else if (deltaY === 'prev') {
                if (this.intPage === 1) return;
                this.setState({ hideHeader: false });
                this.intPage--;
                if (this.intPage === 19) {
                    this.intPage = 18;
                }
            }
            switch (this.intPage) {
                case 1:
                    await utils.setScroll(this.getPosi(0), 2000);
                    break;
                case 2:
                    await utils.setScroll(this.getPosi(629), 2000);
                    break;
                case 3:
                    await utils.setScroll(this.getPosi(1719), 3000);
                    break;
                case 4:
                    await utils.setScroll(this.getPosi(4523), 4500);
                    break;
                case 5:
                    await utils.setScroll(this.getPosi(6163), 2500);
                    break;
                case 6:
                    await utils.setScroll(this.getPosi(6771), 2000);
                    break;
                case 7:
                    await utils.setScroll(this.getPosi(8071), 3000);
                    break;
                case 8:
                    await utils.setScroll(this.getPosi(8699), 1500);
                    break;
                case 9:
                    await utils.setScroll(this.getPosi(11404), 4000);
                    break;
                case 10:
                    await utils.setScroll(this.getPosi(12158), 2000);
                    break;
                case 11:
                    await utils.setScroll(this.getPosi(14255), 3000);
                    break;
                case 12:
                    await utils.setScroll(this.getPosi(15722), 3000);
                    break;
                case 13:
                    await utils.setScroll(this.getPosi(16246), 1500);
                    break;
                case 14:
                    await utils.setScroll(this.getPosi(17451), 3000);
                    break;
                case 15:
                    await utils.setScroll(this.getPosi(18447), 3000);
                    break;
                case 16:
                    await utils.setScroll(this.getPosi(19275), 3000);
                    break;
                case 17:
                    await utils.setScroll(this.getPosi(20900), 3000);
                    break;
                case 18:
                    await utils.setScroll(this.getPosi(22147), 2000);
                    break;
                case 19:
                    await utils.setScroll(this.getPosi(23519), 2000);
                    break;
            }

            await new Promise((resolve) => this.setState({ isScrolling: false }, () => resolve('')));
        }
    }

    // 스크롤 위치에 따라 스크롤 이동
    setScrollMovePage = async (e) => {
        // 메인 화면 일 경우만 사용
        // 1~19페이지로 나누어 진행
        // 19 페이지일 경우 사용자 스크롤 이벤트 제어 삭제
        // 19 페이지에서 스크롤을 올릴 경우, 스크롤 이벤트 제어 다시 추가 및 18 페이지로 이동
        if (this.state.pageType === 'main') {
            await new Promise((resolve) => this.setState({ isScrolling: true }, () => resolve('')));
            if (e.originalEvent.deltaY > 0) {
                if (this.intPage === 19) {
                    this.handleWheelMove(true);
                    return
                }
                this.setState({ hideHeader: true });
                this.intPage++;
            } else if (e.originalEvent.deltaY < 0) {
                if (this.intPage === 1) return;
                if (this.intPage === 19) {
                    this.handleWheelMove(false);
                }
                this.setState({ hideHeader: false });
                this.intPage--;
            }
            switch (this.intPage) {
                case 1:
                    await utils.setScroll(this.getPosi(0), 2000);
                    break;
                case 2:
                    await utils.setScroll(this.getPosi(629), 2000);
                    break;
                case 3:
                    await utils.setScroll(this.getPosi(1719), 3000);
                    break;
                case 4:
                    await utils.setScroll(this.getPosi(4523), 4500);
                    break;
                case 5:
                    await utils.setScroll(this.getPosi(6163), 2500);
                    break;
                case 6:
                    await utils.setScroll(this.getPosi(6771), 2000);
                    break;
                case 7:
                    await utils.setScroll(this.getPosi(8071), 3000);
                    break;
                case 8:
                    await utils.setScroll(this.getPosi(8699), 1500);
                    break;
                case 9:
                    await utils.setScroll(this.getPosi(11404), 4000);
                    break;
                case 10:
                    await utils.setScroll(this.getPosi(12158), 2000);
                    break;
                case 11:
                    await utils.setScroll(this.getPosi(14255), 3000);
                    break;
                case 12:
                    await utils.setScroll(this.getPosi(15722), 3000);
                    break;
                case 13:
                    await utils.setScroll(this.getPosi(16246), 1500);
                    break;
                case 14:
                    await utils.setScroll(this.getPosi(17451), 3000);
                    break;
                case 15:
                    await utils.setScroll(this.getPosi(18447), 3000);
                    break;
                case 16:
                    await utils.setScroll(this.getPosi(19275), 3000);
                    break;
                case 17:
                    await utils.setScroll(this.getPosi(20900), 3000);
                    break;
                case 18:
                    await utils.setScroll(this.getPosi(22147), 2000);
                    break;
                case 19:
                    this.handleWheelMove(true);
                    break;
            }

            await new Promise((resolve) => this.setState({ isScrolling: false }, () => resolve('')));
        }
    };

    // 스크롤 터치 스타트
    setScrollTouchStart = (e) => {
        let className = e.target.getAttribute('class') || '';
        this.isTouchStartValueX = e.originalEvent.touches[0].screenX
        this.isTouchStartValueY = e.originalEvent.touches[0].screenY
    }
    // 스크롤 터치에 따라 스크롤 이동
    setScrollTouchEnd = async (e) => {
        let className = e.target.getAttribute('class') || '';
        // 메인 화면 일 경우만 사용
        // 1~19페이지로 나누어 진행
        // 19 페이지일 경우 사용자 스크롤 이벤트 제어 삭제
        // 19 페이지에서 스크롤을 올릴 경우, 스크롤 이벤트 제어 다시 추가 및 18 페이지로 이동
        if (this.state.pageType === 'main') {
            if (className.indexOf('video0') > -1) {
                let intLengthX = e.originalEvent.changedTouches[0].screenX - this.isTouchStartValueX;
                intLengthX = intLengthX > 0 ? intLengthX : intLengthX * -1;
                let intLengthY = e.originalEvent.changedTouches[0].screenY - this.isTouchStartValueY;
                intLengthY = intLengthY > 0 ? intLengthY : intLengthY * -1;
                if (intLengthX > intLengthY) {
                    return;
                }
            }
            await new Promise((resolve) => this.setState({ isScrolling: true }, () => resolve('')));
            this.isTouchEndValue = e.originalEvent.changedTouches[0].screenY
            let isMove = utils.getScrollMoveY(this.isTouchStartValueY, this.isTouchEndValue);
            if (isMove < 0) { // 아래로 이동
                if (this.intPage === 19) {
                    return
                }
                this.setState({ hideHeader: true });
                this.intPage++;
            } else if (isMove > 0) {  // 위로 이동
                if (this.intPage === 1) return;
                this.setState({ hideHeader: false });
                this.intPage--;
            }
            switch (this.intPage) {
                case 1:
                    await utils.setScroll(this.getPosi(0), 2000);
                    break;
                case 2:
                    await utils.setScroll(this.getPosi(629), 2000);
                    break;
                case 3:
                    await utils.setScroll(this.getPosi(1719), 3000);
                    break;
                case 4:
                    await utils.setScroll(this.getPosi(4523), 4500);
                    break;
                case 5:
                    await utils.setScroll(this.getPosi(6163), 2500);
                    break;
                case 6:
                    await utils.setScroll(this.getPosi(6771), 2000);
                    break;
                case 7:
                    await utils.setScroll(this.getPosi(8071), 3000);
                    break;
                case 8:
                    await utils.setScroll(this.getPosi(8699), 1500);
                    break;
                case 9:
                    await utils.setScroll(this.getPosi(11404), 4000);
                    break;
                case 10:
                    await utils.setScroll(this.getPosi(12158), 2000);
                    break;
                case 11:
                    await utils.setScroll(this.getPosi(14255), 3000);
                    break;
                case 12:
                    await utils.setScroll(this.getPosi(15722), 3000);
                    break;
                case 13:
                    await utils.setScroll(this.getPosi(16246), 1500);
                    break;
                case 14:
                    await utils.setScroll(this.getPosi(17451), 3000);
                    break;
                case 15:
                    await utils.setScroll(this.getPosi(18447), 3000);
                    break;
                case 16:
                    await utils.setScroll(this.getPosi(19275), 3000);
                    break;
                case 17:
                    await utils.setScroll(this.getPosi(20900), 3000);
                    break;
                case 18:
                    await utils.setScroll(this.getPosi(22147), 2000);
                    break;
                case 19:
                    await utils.setScroll(this.getPosi(23519), 2000);
                    break;
            }
            await new Promise((resolve) => this.setState({ isScrolling: false }, () => resolve('')));

        }
    };

    handleResize = () => this.setState({
        intWindowHeight: document.body.clientHeight,
    });

    // 메인화면 사용자 스크롤 사용 중단
    isStopWheel = (e) => {
        // 메인 일 경우만 사용 중단
        if (this.state.pageType === 'main') {
            if (!this.isScroll) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    }

    // 메인화면 사용자 스크롤 이벤트 제어
    handleWheelMove = (bool) => {
        // 메인 일 경우만 사용 중단
        if (this.state.pageType === 'main') {
            if (bool && !this.isScroll) {
                if (!this.isScroll) {
                    this.isScroll = true;
                }
            } else {
                if (this.isScroll) {
                    this.isScroll = false;
                }
            }
        }
    }

    componentDidMount() {
        this.handleResize();
        smoothscroll.polyfill();

        // 메인화면 사용자 스크롤 이벤트 제어
        $(window).on("wheel", this.setScrollMovePage);
        $(window).on("touchstart", this.setScrollTouchStart);
        $(window).on("touchend", this.setScrollTouchEnd);
        $(window).on("orientationchange", this.checkPortraitView);
        window.addEventListener("wheel", this.isStopWheel, { passive: false });
        // 메인화면 사용자 스크롤 이벤트 사용 중단
        this.handleWheelMove(false);

        window.addEventListener('resize', this.handleResize);

        // 푸터 업데이트 ----------------------------- //
        this.setState({
            footerRec: document.getElementById("footer").getBoundingClientRect(),
        });
    }

    checkCookie = (cookieKey) => {
        let returnValue = true;
        const cookies = new Cookies();
        if (cookies.get('isPopUpOnce_' + cookieKey)) {
            returnValue = false;
        }
        return returnValue;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    // 스크롤값 0으로 초기화
    handleScrollTop = () => {
        setTimeout(async () => {
            if (this.state.pageType === 'main') {
                await utils.setMainScrollTop();
                this.conRef.current.scrollTo(0, 0);
                this.intPage = 1;
                this.handleWheelMove(false);
            } else {
                await utils.setSubScrollTop();
                this.conRef.current.scrollTo(0, 0);
                this.intPage = 1;
                this.handleWheelMove(true);
            }
            setTimeout(() => {
                this.setState({ hideHeader: false });
                this.handleServiceMenuClick();
            }, 100);
        }, 10);
    }

    // 사파리 브라우저 체크를 위한 함수
    handleCheckAgent = () => {
        const agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf('chrome') > -1) {
            this.setState({ pageAgent: '' })
        } else if (agent.indexOf('safari') > -1) {
            this.setState({ pageAgent: 'safari' })
        }
    }

    // 메뉴전환
    handleGnbMenu = (menuType, num) => {
        // 사파리 브라우저 체크
        this.handleCheckAgent();

        if (menuType === 'main') {
            this.setState({
                mainLayout: true, brandLayout: false, serviceLayout: false, introductionLayout: false, mediaLayout: false, virtualExLayout: false, termsLayout: false,
                pageType: 'main', hideHeader: false
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'brand') {
            this.setState({
                mainLayout: false, brandLayout: true, serviceLayout: false, introductionLayout: false, mediaLayout: false, virtualExLayout: false, termsLayout: false,
                pageType: 'sub', hideHeader: false, Titletext02: jsUtils.getSubMenuText(menuType, num)
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'service') {
            this.setState({
                mainLayout: false, brandLayout: false, serviceLayout: true, introductionLayout: false, mediaLayout: false, virtualExLayout: false, termsLayout: false,
                pageType: 'sub', hideHeader: false, Titletext00: jsUtils.getSubMenuText(menuType, num)
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'introduction') {
            this.setState({
                mainLayout: false
                , brandLayout: false
                , serviceLayout: false
                , introductionLayout: true
                , mediaLayout: false
                , virtualExLayout: false
                , termsLayout: false
                , pageType: 'sub'
                , hideHeader: false
                , Titletext01: jsUtils.getSubMenuText(menuType, num)
                , introductionSub01: num === '1'
                , introductionSub02: num === '2'
                , introductionSub03: num === '3'
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'media') {

            this.setState({
                mainLayout: false, brandLayout: false, serviceLayout: false, introductionLayout: false, mediaLayout: true, virtualExLayout: false, termsLayout: false,
                pageType: 'sub', hideHeader: false, Titletext03: jsUtils.getSubMenuText(menuType, num)
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'virtual') {
            this.setState({
                mainLayout: false, brandLayout: false, serviceLayout: false, introductionLayout: false, mediaLayout: false, virtualExLayout: true, termsLayout: false,
                pageType: 'sub', hideHeader: false, virtualExSub01: true
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'terms') {
            this.setState({
                mainLayout: false, brandLayout: false, serviceLayout: false, introductionLayout: false, mediaLayout: false, virtualExLayout: false, termsLayout: true,
                pageType: 'sub', hideHeader: false, Titletext04: jsUtils.getSubMenuText(menuType, num)
            }, () => {
                // scroll reset
                this.handleScrollTop();
            });
        } else if (menuType === 'admin') {
            this.setState({ admin: true });
        }
    }

    handleServiceMenuClick = () => {
        this.setState({
            menu01: true, menu02: false, menu03: false, menu04: false, menu05: false, menu06: false, menu07: false,
            menu08: false, menu09: false, menu10: false, menu11: false, menu12: false, menu13: false, menu14: false,
        })
    }

    // 컨테이너 스크롤 시
    containerScroll = (e) => {
        // 컨테이너 스크롤 값 업데이트 ----------------------------- //
        let conScTop = this.conRef.current.scrollTop;
        var conScPer = (this.conRef.current.scrollTop / (this.conRef.current.scrollHeight - window.innerHeight)) * 100;

        // 푸터 값 업데이트 ----------------------------- //
        let footerRec = document.getElementById("footer").getBoundingClientRect();
        this.setState({
            scrollNow: conScTop,
            scrollPercent: conScPer,
            intWindowHeight: document.body.clientHeight,
            intTotScrollHeight: this.conRef.current.scrollHeight,
            footerRec: footerRec,
        });
        // -------------------------------------------------- //
        // 메인일때 처리
        if (this.state.pageType === 'main') {
            let position = Math.round(this.state.scrollPercent * this.state.intTotScrollHeight / 100);
            // 구간에 따른 container 배경 변경
            utils.getPositionCheck(position, 0, 1300) ? this.conRef.current.style.backgroundColor = '#ffffff' :
                utils.getPositionCheck(position, 1300, 2300) ? this.conRef.current.style.backgroundColor = '#ffffff' :
                    utils.getPositionCheck(position, 2300, 6700) ? this.conRef.current.style.backgroundColor = '#fafafa' :
                        utils.getPositionCheck(position, 6700, 8700) ? this.conRef.current.style.backgroundColor = '#fafafa' :
                            utils.getPositionCheck(position, 8700, 11700) ? this.conRef.current.style.backgroundColor = '#fafafa' :
                                utils.getPositionCheck(position, 11700, 12800) ? this.conRef.current.style.backgroundColor = '#f7f7f7' :
                                    utils.getPositionCheck(position, 12800, 14800) ? this.conRef.current.style.backgroundColor = '#fafafa' :
                                        utils.getPositionCheck(position, 14800, 16800) ? this.conRef.current.style.backgroundColor = '#fafafa' :
                                            utils.getPositionCheck(position, 16800, 20800) ? this.conRef.current.style.backgroundColor = '#ffffff' : this.conRef.current.style.backgroundColor = '#ffffff'

        } else {
            this.conRef.current.style.backgroundColor = ''
            utils.endScroll(() => {
                // 서비스소개 처리
                this.handleServiceStateChange();
            }, 100);
        }

        // -------------------------------------------------- //
        // 서비스소개 처리
        this.handleServiceStateChange();
    }

    getPosi = (posi) => {
        let scroll = Math.round((posi / this.conRef.current.scrollHeight) * (this.conRef.current.scrollHeight - window.innerHeight));
        return scroll;
    }

    // 서비스소개 소메뉴 스크롤시 상태변경
    handleServiceStateChange = () => {
        this.setState({
            menu01: false, menu02: false, menu03: false, menu04: false,
            menu05: false, menu06: false, menu07: false, menu08: false,
            menu09: false, menu10: false, menu11: false, menu12: false,
            menu13: false, menu14: false,
        })
        let position = this.state.scrollNow;

        // 스크롤에 따른 포인터
        if (position < 958) {
            this.setState({ menu01: true })
        } else if (position < 2173) {
            this.setState({ menu02: true })
        } else if (position < 3416) {
            this.setState({ menu03: true })
        } else if (position < 4396) {
            this.setState({ menu04: true })
        } else if (position < 5376) {
            this.setState({ menu05: true })
        } else if (position < 5975) {
            this.setState({ menu06: true })
        } else if (position < 6992) {
            this.setState({ menu07: true })
        } else if (position < 8316) {
            this.setState({ menu08: true })
        } else if (position < 9296) {
            this.setState({ menu09: true })
        } else if (position < 9898) {
            this.setState({ menu10: true })
        } else if (position < 10917) {
            this.setState({ menu11: true })
        } else if (position < 11853) {
            this.setState({ menu12: true })
        } else if (position < 12867) {
            this.setState({ menu13: true })
        } else {
            this.setState({ menu14: true })
        }
    }

    // 서비스 소개 소메뉴 클릭시 이동
    handleServiceScroll = (type) => {
        if (type === '1') {
            this.conRef.current.scrollTo({ top: 643, behavior: 'smooth' });
        } else if (type === '2') {
            this.conRef.current.scrollTo({ top: 1730, behavior: 'smooth' });
        } else if (type === '3') {
            this.conRef.current.scrollTo({ top: 2593, behavior: 'smooth' });
        } else if (type === '4') {
            this.conRef.current.scrollTo({ top: 3688, behavior: 'smooth' });
        } else if (type === '5') {
            this.conRef.current.scrollTo({ top: 4564, behavior: 'smooth' });
        } else if (type === '6') {
            this.conRef.current.scrollTo({ top: 5654, behavior: 'smooth' });
        } else if (type === '7') {
            this.conRef.current.scrollTo({ top: 6504, behavior: 'smooth' });
        } else if (type === '8') {
            this.conRef.current.scrollTo({ top: 7606, behavior: 'smooth' });
        } else if (type === '9') {
            this.conRef.current.scrollTo({ top: 8477, behavior: 'smooth' });
        } else if (type === '10') {
            this.conRef.current.scrollTo({ top: 9563, behavior: 'smooth' });
        } else if (type === '11') {
            this.conRef.current.scrollTo({ top: 10446, behavior: 'smooth' });
        } else if (type === '12') {
            this.conRef.current.scrollTo({ top: 11531, behavior: 'smooth' });
        } else if (type === '13') {
            this.conRef.current.scrollTo({ top: 12397, behavior: 'smooth' });
        } else if (type === '14') {
            this.conRef.current.scrollTo({ top: 13511, behavior: 'smooth' });
        }
    }

    // 공통 알럿
    handleClickAlert = () => {
        alert("준비중입니다.")
    }

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Analytics id="UA-19590620-33">
                        <div className="flex-1 v-box" style={{ display: this.state.isPortraitOrient ? 'none' : this.state.mobileRedirect ? 'none' : this.state.admin ? 'none' : '' }}>
                            {/* :공통: 헤더 */}
                            <Header
                                pageType={this.state.pageType}
                                hideHeader={this.state.hideHeader}
                                handleGnbMenu={this.handleGnbMenu}
                                scrollPercent={this.state.scrollPercent}
                                handleClickAlert={this.handleClickAlert}

                                brandLayout={this.state.brandLayout}
                                serviceLayout={this.state.serviceLayout}
                                introductionLayout={this.state.introductionLayout}
                                mediaLayout={this.state.mediaLayout}
                                virtualExLayout={this.state.virtualExLayout}
                            />
                            <div id="container" className={`flex-1 ${this.state.pageAgent} ${"page" + this.intPage}`} ref={this.conRef} onScroll={this.containerScroll}>
                                {/* :메인: 레이아웃 --------------------------------------------------*/}
                                <Route exact path={MenuUrl.MAIN} render={(props) =>
                                    <div className="mainWrap" style={{ display: this.state.mainLayout ? '' : 'none' }}>
                                        <MainComp
                                            {...props}
                                            scrollNow={this.state.scrollNow}
                                            scrollPercent={this.state.scrollPercent}
                                            intWindowHeight={this.state.intWindowHeight}
                                            intTotScrollHeight={this.state.intTotScrollHeight}
                                            handleGnbMenu={this.handleGnbMenu}
                                            // 팝업 관련 추가 220512
                                            isStopWheel={(e) => { this.isStopWheel(e) }}
                                        />
                                    </div>
                                }
                                />

                                {/* :브랜드: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.BRAND_B001} render={(props) =>
                                    <div className="brandWrap">
                                        <BrandSub01 {...props} handleClickAlert={this.handleClickAlert} handleGnbMenu={this.handleGnbMenu} brandSub01={true} brandSub02={false} brandSub03={false} Titletext02={this.state.Titletext02} pNavInvert={this.state.pNavInvert} pNav01={this.state.pNav01} pNav02={this.state.pNav02} pNav03={this.state.pNav03} pNav04={this.state.pNav04} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} handleBrandPageNavScroll={this.handleBrandPageNavScroll} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.BRAND_B002} render={(props) =>
                                    <div className="brandWrap">
                                        <BrandSub02 {...props} handleClickAlert={this.handleClickAlert} handleGnbMenu={this.handleGnbMenu} brandSub01={false} brandSub02={true} brandSub03={false} Titletext02={this.state.Titletext02} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.BRAND_B003} render={(props) =>
                                    <div className="brandWrap">
                                        <BrandSub03 {...props} handleClickAlert={this.handleClickAlert} handleGnbMenu={this.handleGnbMenu} brandSub01={false} brandSub02={false} brandSub03={true} Titletext02={this.state.Titletext02} />
                                    </div>
                                }
                                />

                                {/* :서비스소개: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.SERVICE_S001} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub01 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={true} serviceSub02={false} serviceSub03={false} serviceSub04={false} serviceSub05={false} serviceSub06={false} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S002} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub02 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={true} serviceSub03={false} serviceSub04={false} serviceSub05={false} serviceSub06={false} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S003} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub03 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={true} serviceSub04={false} serviceSub05={false} serviceSub06={false} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S004} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub04 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={false} serviceSub04={true} serviceSub05={false} serviceSub06={false} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S005} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub05 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={false} serviceSub04={false} serviceSub05={true} serviceSub06={false} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S006} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub06 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={false} serviceSub04={false} serviceSub05={false} serviceSub06={true} serviceSub07={false} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S007} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub07 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={false} serviceSub04={false} serviceSub05={false} serviceSub06={false} serviceSub07={true} serviceSub08={false} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.SERVICE_S008} render={(props) =>
                                    <div className="serviceWrap">
                                        <ServiceSub08 {...props} onRef={this.conRef} handleClickAlert={this.handleClickAlert} handleServiceScroll={this.handleServiceScroll} Titletext00={this.state.Titletext00} handleGnbMenu={this.handleGnbMenu} serviceSub01={false} serviceSub02={false} serviceSub03={false} serviceSub04={false} serviceSub05={false} serviceSub06={false} serviceSub07={false} serviceSub08={true} scrollNow={this.state.scrollNow} intWindowHeight={this.state.intWindowHeight} menu01={this.state.menu01} menu02={this.state.menu02} menu03={this.state.menu03} menu04={this.state.menu04} menu05={this.state.menu05} menu06={this.state.menu06} menu07={this.state.menu07} menu08={this.state.menu08} menu09={this.state.menu09} menu10={this.state.menu10} menu11={this.state.menu11} menu12={this.state.menu12} menu13={this.state.menu13} menu14={this.state.menu14} />
                                    </div>
                                }
                                />

                                {/* :도입안내: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.INTRODUCTION_IN001} render={(props) =>
                                    <div className="introductionWrap">
                                        <IntroductionSub01 {...props} handleClickAlert={this.handleClickAlert} Titletext01={this.state.Titletext01} handleGnbMenu={this.handleGnbMenu} introductionSub01={this.state.introductionSub01} introductionSub02={this.state.introductionSub02} introductionSub03={this.state.introductionSub03} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.INTRODUCTION_IN002 + 'iwuerkjwher'} render={(props) =>
                                    <div className="introductionWrap">
                                        <IntroductionSub02 {...props} handleClickAlert={this.handleClickAlert} Titletext01={this.state.Titletext01} handleGnbMenu={this.handleGnbMenu} introductionSub01={this.state.introductionSub01} introductionSub02={this.state.introductionSub02} introductionSub03={this.state.introductionSub03} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.INTRODUCTION_IN003} render={(props) =>
                                    <div className="introductionWrap">
                                        <IntroductionSub03 {...props} handleClickAlert={this.handleClickAlert} Titletext01={this.state.Titletext01} handleGnbMenu={this.handleGnbMenu} introductionSub01={this.state.introductionSub01} introductionSub02={this.state.introductionSub02} introductionSub03={this.state.introductionSub03} />
                                    </div>
                                }
                                />

                                {/* :미디어센터: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.MEDIA_M001} render={(props) =>
                                    <div className="mediaWrap">
                                        <MediaSub01 {...props} onRef={this.conRef} handleGnbMenu={this.handleGnbMenu} mediaSub01={true} mediaSub02={false} mediaSub03={false} Titletext03={this.state.Titletext03} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.MEDIA_M002} render={(props) =>
                                    <div className="mediaWrap" >
                                        <MediaSub02 {...props} onRef={this.conRef} handleGnbMenu={this.handleGnbMenu} mediaSub01={false} mediaSub02={true} mediaSub03={false} Titletext03={this.state.Titletext03} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.MEDIA_M003} render={(props) =>
                                    <div className="mediaWrap">
                                        <MediaSub03 {...props} onRef={this.conRef} handleGnbMenu={this.handleGnbMenu} handleClickAlert={this.handleClickAlert} mediaSub01={false} mediaSub02={false} mediaSub03={true} Titletext03={this.state.Titletext03} />
                                    </div>
                                }
                                />

                                {/* :가상체험관: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.VIRTUALEX_V001} render={(props) =>
                                    <div className="virtualExWrap">
                                        <VirtualExSub01 {...props} handleGnbMenu={this.handleGnbMenu} />
                                    </div>
                                }
                                />

                                {/* :약관 및 정책: 레이아웃 --------------------------------------------------*/}
                                <Route path={MenuUrl.TERM_T001} render={(props) =>
                                    <div className="termsWrap">
                                        <TermsSub01 {...props} handleGnbMenu={this.handleGnbMenu} termsSub01={true} termsSub02={false} termsSub03={false} Titletext04={this.state.Titletext04} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.TERM_T002} render={(props) =>
                                    <div className="termsWrap">
                                        <TermsSub02 {...props} handleGnbMenu={this.handleGnbMenu} termsSub01={false} termsSub02={true} termsSub03={false} Titletext04={this.state.Titletext04} />
                                    </div>
                                }
                                />
                                <Route path={MenuUrl.TERM_T003} render={(props) =>
                                    <div className="termsWrap">
                                        <TermsSub03 {...props} handleGnbMenu={this.handleGnbMenu} termsSub01={false} termsSub02={false} termsSub03={true} Titletext04={this.state.Titletext04} />
                                    </div>
                                }
                                />

                                {/* :공통: 푸터 */}
                                <Footer
                                    footerRef={this.footerRef}
                                    pageType={this.state.pageType}
                                    handleGnbMenu={this.handleGnbMenu}
                                    handleScrollTop={this.handleScrollTop}
                                    scrollNow={this.state.scrollNow}
                                    intWindowHeight={this.state.intWindowHeight}
                                    footerRec={this.state.footerRec}
                                    handleClickAlert={this.handleClickAlert}
                                    intPage={this.intPage}
                                    isScrolling={this.state.isScrolling}
                                    setClickMoveBtn={this.setClickMoveBtn}
                                />
                            </div>
                        </div>

                        {/* 관리자 소스 전달용 */}
                        <div className="flex-1 v-box" style={{ display: this.state.isPortraitOrient ? 'none' : this.state.mobileRedirect ? 'none' : this.state.admin ? '' : 'none' }}>
                            <AdminLayout />
                        </div>
                        {/* 모바일 접속 시 리다이렉트 안내페이지 */}
                        <Route path={MenuUrl.MOBILE_REDIRECT} render={(props) =>
                            <div className="mobileRedirectGuide">
                                <MobileRedirectGuide />
                            </div>
                        }
                        />
                        {/* 태블릿 세로변환 시 안내페이지 */}
                        <div className="tabletPortraitGuide" style={{ display: this.state.mobileRedirect ? 'none' : this.state.isPortraitOrient ? '' : 'none' }}>
                            <TabletPortraitGuide />
                        </div>
                    </Analytics>
                </BrowserRouter>
            </Fragment>
        );
    }
}