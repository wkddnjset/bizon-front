import React, { Component, Fragment } from 'react';
import utils from '../utils/utils';
import Section01 from './sections/Section01';
import Section02 from './sections/Section02';
import Section03 from './sections/Section03';
import Section04 from './sections/Section04';
import Section05 from './sections/Section05';
import Section06 from './sections/Section06';
import Section07 from './sections/Section07';
import Section08 from './sections/Section08';
import Section09 from './sections/Section09';
import Section10 from './sections/Section10';

import NewWindow from 'react-new-window';
import UserPopup from '../commonsComp/UserPopup';

import { Cookies } from "react-cookie";
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol'
import MainPopup from './MainPopup';

import $ from 'jquery'

// 메인
export default class MainComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAllOpen: false,
            mainHeight: 22800,
            popInfoArr: []
        }
    }

    componentDidMount() {

        if (this.props.history) {
            this.props.handleGnbMenu('main');
        }

        HttpUtils.callNonAuthGetMethod(ApiUrl.USER_GETPOPUPLIST).then((jsonObj) => {
            if (jsonObj.length > 0) {
                let resultData = [];
                jsonObj.map((data, idx) => {
                    if (this.checkCookie(data.popSeq)) {
                        const testTime = Date.now();
                        data.imgStr = ApiUrl.COMMON_RESOURCE + data.imgStr;
                        data.key = testTime + '_' + data.popSeq;
                        data.name = idx + '_' + testTime;
                        data.isOpen = true;
                        resultData.push(data);
                    }

                    return data;
                });

                this.setState({
                    isAllOpen: resultData.length > 0
                    , popInfoArr: resultData
                }, () => {
                    if (resultData.length > 0) {
                        $('html, body').on("scroll touchmove mousewheel", function (event) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        });
                    }
                });
            }
        });
    }

    checkCookie = (cookieKey) => {
        let returnValue = true;
        const cookies = new Cookies();
        if (cookies.get('isPopUpOnce_' + cookieKey)) {
            returnValue = false;
        }
        return returnValue;
    }

    // 메인 팝업창 끄기
    handleClickMainPopClose = (seq) => {

        let isAllOpen = false;
        let data = this.state.popInfoArr.map((item) => {
            if (item.popSeq === seq) {
                item.isOpen = false;
            }
            return item;
        });

        // 닫힌 팝업 리스트만 추출
        let openList = data.filter(item => item.isOpen === false);
        // 전체 팝업이 닫혔는지 확인
        isAllOpen = openList.length !== this.state.popInfoArr.length;

        this.setState({
            isAllOpen: isAllOpen
            , popInfoArr: data
        }, () => {
            // 전체 팝업이 닫혔다면 스크롤 풀기
            if (!isAllOpen) {
                $('html, body').off("scroll touchmove mousewheel");
            }
        });
    }

    render() {
        let position = Math.round(this.props.scrollPercent * this.props.intTotScrollHeight / 100);
        let fadeLength02 = 400;
        let fadeLength03 = 100;
        let fadeLength04 = 300;
        let fadeLength05 = 200;
        let fadeLength06 = 100;
        let fadeLength07 = 300;
        let fadeLength08 = 200;
        let fadeLength09 = 300;
        let fadeLength10 = 100;

        return (
            <Fragment>
                <div className="mainIn" style={{ height: this.state.mainHeight + 'px' }}>
                    {utils.getPositionCheck(position, 0, 1300) ? <Section01 position={position} heightLength={1300} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 1300 - fadeLength02, 2300) ? <Section02 position={position - (1300 - fadeLength02)} heightLength={1000 + fadeLength02} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 2300 - fadeLength03, 6700) ? <Section03 position={position - (2300 - fadeLength03)} heightLength={4400 + fadeLength03} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 6700 - fadeLength04, 8700) ? <Section04 position={position - (6700 - fadeLength04)} heightLength={2000 + fadeLength04} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 8700 - fadeLength05, 11700) ? <Section05 position={position - (8700 - fadeLength05)} heightLength={3000 + fadeLength05} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 11700 - fadeLength06, 12800) ? <Section06 position={position - (11700 - fadeLength06)} heightLength={1100 + fadeLength06} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 12800 - fadeLength07, 14800) ? <Section07 position={position - (12800 - fadeLength07)} heightLength={2000 + fadeLength07} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 14800 - fadeLength08, 16800) ? <Section08 position={position - (14800 - fadeLength08)} heightLength={2000 + fadeLength08} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {utils.getPositionCheck(position, 16800 - fadeLength09, 19800) ? <Section09 position={position - (16800 - fadeLength09)} heightLength={3000 + fadeLength09} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                    {/* 01 ~ 09까지 구간이 아닐 시 마지막 Section10 노출 */}
                    {!utils.getPositionCheck(position, 0, 19800 - fadeLength10) ? <Section10 position={position - (19800 - fadeLength10)} heightLength={3000 + fadeLength10} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu} /> : null}
                </div>
                {this.state.popInfoArr.map((data, index) => (
                    <MainPopup
                        key={data.key}
                        name={data.name}
                        isAllOpen={this.state.isAllOpen}
                        popOpen={data.isOpen}
                        handleClickMainPopClose={this.handleClickMainPopClose}
                        popDetail={data}
                        PositionReset={this.state.popInfoArr.length > 1}
                        Top={this.state.popInfoArr.length === 1 ? null : 100}
                        Left={this.state.popInfoArr.length === 1 ? null : (index % 2 === 0 ? 100 : 750)}
                    />
                ))}

                {/* {this.props.mainPopOpen &&
                    this.props.popInfoArr.map((data, index) => (
                        <MainPopup
                            key={data.key}
                            name={data.name}
                            mainPopOpen={data.isOpen}
                            handleClickMainPopClose={this.props.handleClickMainPopClose}
                            popDetail={data}
                            Top={100 * (index + 1)}
                            Left={100 * (index + 1)}
                        />
                    ))
                } */}

                {/* <NewWindow
                            key={data.key}
                            name={data.name}
                            features={{ width: 600, height: 720 }}
                        >
                            <UserPopup popDetail={data} />
                        </NewWindow> */}
            </Fragment>
        );
    }
}