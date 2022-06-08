import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { default as MenuUrl } from '../../../context/url'; 

// Sub LNB
export default class introSubLnb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="SubMainBox">
                    <div className="SubAllImg05">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <Link to={MenuUrl.MAIN} onClick={()=>{this.props.handleGnbMenu('main')}}>
                                    <div className="MenuIcon"/>
                                </Link> 
                                <div className="RightIcon"/>
                                <div>약관 및 정책</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext04}</div>
                            </div>
                            <div className="MenuTitle">약관 및 정책</div>
                            <div className="MenuText">
                                Amaranth 10 서비스 이용과 관련하여<br/>
                                약관 및 정책에 대해 안내해 드립니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox02">
                    <div className="SubInner02 v-box">
                        <div className="SubMenu02">
                            <ul className="OutMenu02 h-box">
                                <Link to={MenuUrl.TERM_T001} onClick={()=>{this.props.handleGnbMenu('terms','1')}}>
                                    <li className={`OutMenuLi02 ${this.props.termsSub01 ? 'on':''}`}>
                                        개인정보처리방침
                                    </li>
                                </Link>
                                <Link to={MenuUrl.TERM_T002} onClick={()=>{this.props.handleGnbMenu('terms','2')}}>
                                    <li className={`OutMenuLi02 ${this.props.termsSub02 ? 'on':''}`}>
                                        이용약관
                                    </li>
                                </Link>
                                <Link to={MenuUrl.TERM_T003} onClick={()=>{this.props.handleGnbMenu('terms','3')}}>
                                    <li className={`OutMenuLi02 ${this.props.termsSub03 ? 'on':''}`}>
                                        마케팅 수신동의
                                    </li>
                                </Link>
                            </ul>
                            <span className="LineW01"/>
                            <span className="LineW02"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}