import React, { Component, Fragment } from 'react';

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
                    <div className="SubAllImg02">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <div className="MenuIcon" onClick={()=>{this.props.handleGnbMenu('main');}}/>
                                <div className="RightIcon"/>
                                <div>도입안내</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext01}</div>
                            </div>
                            <div className="MenuTitle">도입안내</div>
                            <div className="MenuText">
                                Amaranth 10으로 완성되는 기업의 디지털 전환,<br/>
                                합리적인 비용으로 경험해보세요!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox02">
                    <div className="SubInner02 v-box">
                        <div className="SubMenu02">
                            <ul className="OutMenu02 h-box">
                                <li className={`OutMenuLi02 flex-1 ${this.props.introductionSub01 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('introduction','1');}}>서비스유형</li>
                                {/* <li className={`OutMenuLi02 ${this.props.introductionSub02 ? 'on':''}`} onClick={()=>{this.props.handleClickAlert();}}>요금안내</li> */}
                                <li className={`OutMenuLi02 flex-1 ${this.props.introductionSub03 ? 'on':''}`} onClick={()=>{window.open('https://help.douzone.com/counsel/counsel_write_pop.jsp?areaName=dt&eaddperson2=17');}}>도입문의</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


