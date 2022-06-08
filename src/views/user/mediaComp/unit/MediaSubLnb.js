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
                    <div className="SubAllImg06">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <Link to={MenuUrl.MAIN} onClick={()=>{this.props.handleGnbMenu('main')}}>
                                    <div className="MenuIcon"/>
                                </Link> 
                                <div className="RightIcon"/>
                                <div>미디어센터</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext03}</div>
                            </div>
                            <div className="MenuTitle">미디어센터</div>
                            <div className="MenuText">
                                비즈니스의 미래는 바로 지금부터!<br/>
                                Amaranth 10의 다양한 콘텐츠를 소개합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox02">
                    <div className="SubInner02 v-box">
                        <div className="SubMenu02">
                            <ul className="OutMenu02 h-box">
                                <Link to={MenuUrl.MEDIA_M001} onClick={()=>{this.props.handleGnbMenu('media','1')}}>
                                    <li className={`OutMenuLi02 ${this.props.mediaSub01 ? 'on':''}`}>
                                        광고
                                    </li>
                                </Link>
                                <Link to={MenuUrl.MEDIA_M002} onClick={()=>{this.props.handleGnbMenu('media','2')}}>
                                    <li className={`OutMenuLi02 ${this.props.mediaSub02 ? 'on':''}`}>
                                        보도자료
                                    </li>
                                </Link>
                                <Link to={MenuUrl.MEDIA_M003} onClick={()=>{this.props.handleGnbMenu('media','3')}}>
                                    <li className={`OutMenuLi02 ${this.props.mediaSub03 ? 'on':''}`}>
                                        영상콘텐츠
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