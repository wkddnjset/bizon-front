import React, { Component, Fragment } from 'react';

// Sub LNB
export default class CeoSubLnb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="SubMainBox">
                    <div className="SubAllImg07">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <div className="MenuIcon" onClick={()=>{this.props.handleGnbMenu('main');}}/>
                                <div className="RightIcon"/>
                                <div>CEO 인사이트</div>
                                <div className="RightIcon"/>
                                <div>{this.props.Titletext05}</div>
                            </div>
                            <div className="MenuTitle">CEO 인사이트</div>
                            <div className="MenuText">
                                변화와 혁신을 꿈꾸는 리더를 위한<br/>
                                디지털 전환(DX) 인사이트를 만나보세요!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SubLnbBox02">
                    <div className="SubInner02 v-box">
                        <div className="SubMenu02">
                            <ul className="OutMenu02 h-box">
                                <li className={`OutMenuLi02 flex-1 ${this.props.ceoSub01 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('ceo','1');this.props.handleClickSave('7');}}>DX Insight</li>
                                <li className={`OutMenuLi02 flex-1 ${this.props.ceoSub02 ? 'on':''}`} onClick={()=>{this.props.handleGnbMenu('ceo','2');this.props.handleClickSave('7');}}>DX 리더스포럼</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}