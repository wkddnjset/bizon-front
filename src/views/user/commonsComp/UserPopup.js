import React, { Component } from 'react';
import { Cookies } from "react-cookie";

export default class UserPopup extends Component {

    constructor(props) {
        super(props);
    }

    setCookies(e) {

        const cookies = new Cookies();

        const isChecked = e.target.checked;
        if (isChecked) {
            cookies.set("isPopUpOnce_" + this.props.popDetail.popSeq, true, { expires: this.getCookieExpired() });
        }
        else {
            cookies.remove("isPopUpOnce_" + this.props.popDetail.popSeq);
        }
    }

    getCookieExpired() {
        const toDayDate = new Date();
        const year = toDayDate.getFullYear();
        const month = toDayDate.getMonth() + 1;
        const days = toDayDate.getDate();

        let expiredDate = new Date();
        expiredDate.setDate(new Date(year, month, days).getDate() + 1);
        const expiredYear = expiredDate.getFullYear();
        const expiredMonth = expiredDate.getMonth();
        const expiredDays = expiredDate.getDate();

        return new Date(expiredYear, expiredMonth, expiredDays);
    }

    render() {
        return (
            <React.Fragment>
                <img alt="공지 팝업 이미지" src={this.props.popDetail.imgStr} />
                {this.props.popDetail.landingUrl !== '' && (
                    <div style={{ float: 'left' }}>
                        <span onClick={() => { window.open(this.props.popDetail.landingUrl); }}>바로가기</span>
                    </div>
                )}
                <div style={{ float: 'right' }}>
                    <input type="checkbox" onClick={(e) => { this.setCookies(e); }}></input>
                    <span>오늘 하루 이 창을 열지 않음</span>
                </div>
            </React.Fragment>
        );
    }
}


