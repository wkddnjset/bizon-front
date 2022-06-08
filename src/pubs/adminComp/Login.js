import React, { Component, Fragment } from 'react';

// 이미지
import logo from '../../www/images/admin/lg-amaranth-10.png';

// 로그인 페이지
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div id="login">
                    <div className="inner flex-1">
                        <div className="top flex-1">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="textBox flex-1">
                            <div className="text01 h-box">
                                <div className="textBlue">Amaranth 10 홈페이지 관리자&nbsp;</div>
                                <div className="txt">사이트 입니다.</div>
                            </div>
                            <div>로그인 후 이용해 주시기 바랍니다.</div>
                        </div>
                        <div className="inputAll flex-1">
                            <div className="inputBox">
                                <input type="text" className="idBox input" placeholder="아이디를 입력해주세요."/>
                            </div>
                            <div className="inputBox">
                                <input type="text" className="passwordBox input" placeholder="비밀번호를 입력해주세요."/>
                            </div>
                        </div>
                        <div className="btnBox">
                            <button className="btn flex-1" onClick={()=>{this.props.handleLoginClick('1')}}>로그인</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}