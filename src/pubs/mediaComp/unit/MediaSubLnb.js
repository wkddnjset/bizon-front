import React, { Component, Fragment } from 'react';

// Sub LNB
export default class MediaSubLnb extends Component {
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
                                <div className="MenuIcon" onClick={()=>{this.props.handleGnbMenu('main');}}/>
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
                                <li className={`OutMenuLi02 ${this.props.mediaSub01 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('media','1');}}>광고</li>
                                <li className={`OutMenuLi02 ${this.props.mediaSub02 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('media','2');}}>보도자료</li>
                                <li className={`OutMenuLi02 ${this.props.mediaSub03 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('media','3');}}>영상콘텐츠</li>
                                <li className={`OutMenuLi02 ${this.props.mediaSub04 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('media','4');}}>공지사항</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


