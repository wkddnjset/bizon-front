import React, { Component, Fragment } from 'react';
import logo from '../../www/images/admin/lg-amaranth-10.png';

// GNB
export default class AdminGnb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            media: false,

        }
    }

    handleMenuClick = () => {
        this.setState ({ media: !this.state.media })
    }

    render() {
        return (
            <Fragment>
                <div id="AdminLnb">
                    <img className="logo" src={logo} alt="logo"/>
                    {/* 시스템 관리자 로그아웃 영역 */}
                    <div className="adminBox h-box">
                        <div className="name flex-1">시스템관리자</div>
                        <button className="btn" onClick={()=>{this.props.handleLoginClick('2')}}>로그아웃</button>
                    </div>
                    {/* 메뉴 영역 */}
                    <div className="menuBox">
                        <div className="menu" onClick={()=>{this.props.handleGnbMenu('popup','1')}}>팝업관리</div>
                        <div className="menu" onClick={()=>{this.props.handleGnbMenu('introduction','1')}}>도입문의</div>
                        <div className="menu" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleMenuClick()}}>미디어센터</div>
                        <div className="liBox" style={{display: this.state.media ? '':'none'}}>
                            <div className="li" onClick={()=>{this.props.handleGnbMenu('media','1')}}>광고</div>
                            <div className="li" onClick={()=>{this.props.handleGnbMenu('media','2')}}>보도자료</div>
                            <div className="li" onClick={()=>{this.props.handleGnbMenu('media','3')}}>영상콘텐츠</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}