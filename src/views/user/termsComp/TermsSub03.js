import React, { Component, Fragment } from 'react';
import TermsSubLnb from './unit/TermsSubLnb';

// 마케팅 수신동의
export default class TermsSub03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectBoxOpen01:false,

            inTxt01:'2021년 10월 19일',
        }
    }

    handleSelectBoxToggle = () => {
        this.setState({
            SelectBoxOpen01:!this.state.SelectBoxOpen01
        });
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01:false,
        });
    }

    handleSelectValue = (txt) => {
        this.setState({
            inTxt01:txt
        });
    }

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);

        if(this.props.history) {
            this.props.handleGnbMenu('terms', '3');
        }
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
        }

    render() {
        return (
            <Fragment>
                <TermsSubLnb
                    termsSub01={this.props.termsSub01}
                    termsSub02={this.props.termsSub02}
                    termsSub03={this.props.termsSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext04={this.props.Titletext04}
                />
                <div id="TermsSub03">
                    <div className="TermsTopBox h-box">
                        <div className="TermsTilte flex-1">마케팅 정보 수신동의</div>
                            <div className="TermsSelect h-box">
                                <div className="SelectBox flex-1">
                                    <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                    <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                    <ul></ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                            </div>
                        </div>
                    </div>
                    <div className="TermsText">광고성 정보 수신동의 사항을 규정합니다.</div>
                    <div className="TextBox">
                        <div className="Text01">(주)더존비즈온은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조 제1항에 따라 아래와 같이 더존Amaranth 10 서비스 관련 마케팅(광고)정보를 전송하는 것에 관한 귀하의 명시적인 사전동의를 받고자 합니다.</div>
                        <table>
                            <tr>
                                <th>전송정보</th>
                                <th>전송수단</th>
                                <th>전송시기</th>
                            </tr>
                            <tr>
                                <td>세미나 정보안내</td>
                                <td>Email, SMS</td>
                                <td>비정기적</td>
                            </tr>
                            <tr>
                                <td>지원사업 정보안내</td>
                                <td>Email, SMS</td>
                                <td>비정기적</td>
                            </tr>
                            <tr>
                                <td>프로그램 정보안내</td>
                                <td>Email, SMS</td>
                                <td>비정기적</td>
                            </tr>
                        </table>
                        <div className="ATbox h-box">
                            <div className="Acc">•</div>
                            <div className="Txt02">
                                본인은 상기와 같이 ㈜더존비즈온이 본인에게 마케팅(광고)성 정보를 전송하는데 동의합니다. 수신 동의 이후에라도 의사에 따라 동의를 철회하실 수 있으나,<br/>
                                당사의 마케팅 정보를 수신하지 못할 수 있습니다. 수신동의 철회시, ㈜더존비즈온(이메일, 전화번호)으로 연락주시기 바랍니다.
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}