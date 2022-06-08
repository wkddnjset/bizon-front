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
                    <div className="SubAllImg03">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <Link to={MenuUrl.MAIN} onClick={()=>{this.props.handleGnbMenu('main')}}>
                                    <div className="MenuIcon"/>
                                </Link> 
                                <div className="RightIcon"/>
                                <div>브랜드</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext02}</div>
                            </div>
                            <div className="MenuTitle">브랜드</div>
                            <div className="MenuText">
                                Amaranth 10으로 융합, 연결, 공유를 통해<br/>
                                기업의 디지털 전환(DX)에 새로운 방향을 제시합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox02">
                    <div className="SubInner02 v-box">
                        <div className="SubMenu02">
                            <ul className="OutMenu02 h-box">
                                <Link to={MenuUrl.BRAND_B001} onClick={()=>{this.props.handleGnbMenu('brand','1')}}> 
                                    <li className={`OutMenuLi02 ${this.props.brandSub01 ? 'on':''}`}>
                                            새롭게 정의하다
                                    </li>
                                </Link>
                                <Link to={MenuUrl.BRAND_B002} onClick={()=>{this.props.handleGnbMenu('brand','2')}}> 
                                    <li className={`OutMenuLi02 ${this.props.brandSub02 ? 'on':''}`}>
                                            브랜드 스토리
                                    </li>
                                </Link>
                                <Link to={MenuUrl.BRAND_B003} onClick={()=>{this.props.handleGnbMenu('brand','3')}}>
                                    <li className={`OutMenuLi02 ${this.props.brandSub03 ? 'on':''}`}>
                                            BI
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


