import React, { Component, Fragment } from 'react';

// Sub LNB
export default class BrandSubLnb extends Component {
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
                                <div className="MenuIcon" onClick={()=>{this.props.handleGnbMenu('main');}}/>
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
                                <li className={`OutMenuLi02 ${this.props.brandSub01 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('brand','1');}}>새롭게 정의하다</li>
                                <li className={`OutMenuLi02 ${this.props.brandSub02 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('brand','2');}}>브랜드 스토리</li>
                                <li className={`OutMenuLi02 ${this.props.brandSub03 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('brand','3');}}>BI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


