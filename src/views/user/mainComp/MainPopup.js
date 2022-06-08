import React, { Component, Fragment } from 'react';
import PopupWrap from '../commonsComp/PopupWrap';
import { Cookies } from "react-cookie";

// 메인 팝업
export default class MainPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        }
    }

    setCookies(e) {
        const cookies = new Cookies();
        if (!e.target.checked) {
            cookies.set("isPopUpOnce_" + this.props.popDetail.popSeq, true, { expires: this.getCookieExpired() });
        } else {
            cookies.remove("isPopUpOnce_" + this.props.popDetail.popSeq);
        }

        this.setState({ check: !this.state.check });
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
            <Fragment>
                <PopupWrap
                    Type="contents"
                    Width={600}
                    Height={745}
                    Open={this.props.popOpen}
                    // 팝업 2개 이상 쓸 때는 아래 isDim true, false로
                    // 배경이 까매지는 딤처리 조정을 할 수 있습니다.
                    isDim={this.props.isAllOpen}

                    // 기본 정렬은 가운데 정렬.
                    // PositionReset={true}로 설정하면 포지션 값이 0으로 되어서
                    // top, left값 조정을 할 수 있습니다.
                    PositionReset={this.props.PositionReset}
                    Top={this.props.Top}
                    Left={this.props.Left}
                >
                    <div className='mainPopWrap'>
                        <div className='mainPopImgBox flex-1'>
                            {this.props.popDetail.landingUrl !== '' && (
                                <img src={this.props.popDetail.imgStr} onClick={() => { window.open(this.props.popDetail.landingUrl); }} alt="공지 팝업 이미지" />
                            )}
                            {this.props.popDetail.landingUrl === '' && (
                                <img src={this.props.popDetail.imgStr} alt="공지 팝업 이미지" />
                            )}
                        </div>

                        <div className='mainPopBtnBox h-box'>
                            <div className='mainCheckBox flex-1 h-box'>
                                <div className={`check ${this.state.check === true ? 'on' : ''}`} onClick={(e) => { this.setCookies(e); }} />
                                <em>오늘 하루 이 창을 열지 않음</em>
                            </div>
                            <button onClick={() => { this.props.handleClickMainPopClose(this.props.popDetail.popSeq); }}>닫기</button>
                        </div>
                    </div>
                </PopupWrap>
            </Fragment>
        );
    }
}