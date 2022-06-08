import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../context/url'; 

import { Cookies } from "react-cookie";
import jwt_decode from "jwt-decode";

import logo from '../../www/images/admin/lg-amaranth-10.png';

// GNB
export default class AdminGnb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: this.isOpenMediaMenu([ MenuUrl.ADMIN_MGR_AD_LIST, MenuUrl.ADMIN_MGR_REPORT_LIST, MenuUrl.ADMIN_MGR_MEDIA_LIST ]),
            adminUserName: ''
        }
    }

    isOpenMediaMenu = (arrUrls) => {
        const urlPath = window.location.pathname;
        return arrUrls.includes(urlPath);
    }

    handleMenuClick = () => {
        this.setState ({ media: !this.state.media })
    }

    componentDidMount(){
        
        const cookies = new Cookies();
        const accessToken = cookies.get('aToken');
        if(accessToken) {
            const jwtPlayLoad = jwt_decode(accessToken);
            this.setState({
                adminUserName: jwtPlayLoad.loginUserName
            });
        }
    }

    processLogOut = () => {
        // this.props.handleLoginClick('2')
        // 쿠키 삭제 및 로그인 화면으로 이동
        const cookies = new Cookies();

        cookies.remove('aToken', { 'path': '/' }); // accessToken
        cookies.remove('rToken', { 'path': '/' }); // refreshToken

        window.location.replace(MenuUrl.ADMIN_MAIN);
    }

    render() {
        return (
            <Fragment>
                <div id="AdminLnb">
                    <img className="logo" src={logo} alt="logo"/>
                   
                    {/* 시스템 관리자 로그아웃 영역 */}
                    <div className="adminBox h-box">
                        <div className="name flex-1">{this.state.adminUserName} 님</div>
                        <button className="btn" onClick={this.processLogOut.bind(this)}>로그아웃</button>
                    </div>
                    {/* 메뉴 영역 */}
                    <div className="menuBox">
                        <Link to={MenuUrl.ADMIN_MGR_POPUP_LIST} onClick={()=>{this.props.handleGnbMenu('popup','1')}}>
                            <div className="menu">팝업관리</div>
                        </Link>
                        <Link to={MenuUrl.ADMIN_MGR_INTRO_LIST} onClick={()=>{this.props.handleGnbMenu('introduction','1')}}>
                            <div className="menu">도입문의</div>
                        </Link>
                        <div className="menu" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleMenuClick()}}>미디어센터</div>
                        <div className="liBox" style={{display: this.state.media ? '':'none'}}>
                            <Link to={MenuUrl.ADMIN_MGR_AD_LIST} onClick={()=>{this.props.handleGnbMenu('media','1')}}>
                                <div className="li">광고</div>
                            </Link>
                            <Link to={MenuUrl.ADMIN_MGR_REPORT_LIST} onClick={()=>{this.props.handleGnbMenu('media','2')}}>
                                <div className="li">보도자료</div>
                            </Link>
                            <Link to={MenuUrl.ADMIN_MGR_MEDIA_LIST} onClick={()=>{this.props.handleGnbMenu('media','3')}}>
                                <div className="li">영상콘텐츠</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}