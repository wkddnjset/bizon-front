import React, { Component, Fragment, useContext } from 'react';
import * as ApiUrl from '../context/BackEndProtocol';
import { Cookies } from "react-cookie";
import { useJwt, isExpired, decodeToken } from "react-jwt";
import * as HttpUtils from "../common/js/HttpUtils"
import AppContext from '../context/AppContext';

import { default as MenuUrl } from '../context/url'; 

// 이미지
import logo from '../../www/images/admin/lg-amaranth-10.png';

// 로그인 페이지
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: '',
            loginPwd: ''
        }
    }

    inputOnChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    inputOnKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.loginAction();
        }
    }

    loginAction() {

        if(this.state.loginId === '') {
            alert('아이디를 입력해주십시오');
            return;
        }
        else if(this.state.loginPwd === '') {
            alert('비밀번호를 입력해주십시오');
            return;
        }

        HttpUtils.callNonAuthPostMethod(ApiUrl.AMDIN_SIGNIN, {
            loginId: this.state.loginId,
            loginPwd: this.state.loginPwd
        }).then((jsonObj) => {
            if(jsonObj.resultCode === '1') {
                 // 쿠키값 저장
                 const cookies = new Cookies();

                 // 1. 쿠키를 존재여부 체크
                 cookies.set('aToken', jsonObj.accessToken, { 'path': '/' }); //access token 저장
                 cookies.set('rToken', jsonObj.refreshToken, { 'path': '/' }); //refresh token 저장

                 // 페이지 이동 (= 팝업관리 화면이 최초 )
                 window.location.href = window.location.protocol + '//' + window.location.host + MenuUrl.ADMIN_MGR_POPUP_LIST;
            }
            else {
                alert(jsonObj.resultMsg);
            }
        }).catch((e) => {
            alert('서버에서 알 수 없는 오류가 발생하였습니다.');
            console.log('loginAction = ', e);
        });

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
                                <input type="text" className="idBox input" name="loginId" value={this.state.loginId} onChange={this.inputOnChangeHandler.bind(this)} onKeyPress={this.inputOnKeyPress} placeholder="아이디를 입력해주세요."/>
                            </div>
                            <div className="inputBox">
                                <input type="password" className="passwordBox input" name="loginPwd" value={this.state.loginPwd} onChange={this.inputOnChangeHandler.bind(this)} onKeyPress={this.inputOnKeyPress} placeholder="비밀번호를 입력해주세요."/>
                            </div>
                        </div>
                        <div className="btnBox">
                            <button className="btn flex-1" onClick={()=>{this.loginAction() }}>로그인</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}