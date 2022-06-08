import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';

export default class Section04 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        // let secPx = utils.getTopPx(intWindowHeight, heightLength);   // 여백값 높이 조정
        let sectionStyle = {
            height: `${intWindowHeight}px`,
        };

        // 상단 페이드 아웃 
        sectionStyle = utils.getTopFadeOut(position, sectionStyle, 100);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 600, 0);

        /**
         * 텍스트 살짝 올리기
         * 구간 : 0 ~ 300
         */
        let intTransYTextUp = - 500 + utils.getUnderPosi(position, 500);

        /**
         * 상단 나타나기
         * 구간 : 0 ~ 600
         */
        let intOpacityTop = utils.getZeroToOne(position, 0, 300);

        /**
         * 아이콘 모아지기 , 상단 그림 사라지기, 상단 텍스트 살짝 내리기
         * 구간 : posiMoveStart ~ posiMoveStop
         */
        let posiMoveStart = 500;
        let posiTopUnViewIcon = 1200;
        // 450 ~ 1200 
        // 상단 그림 사라지기
        let intOpacityTopUnView = utils.getOneToZero(position, posiMoveStart, posiTopUnViewIcon - posiMoveStart);
        let intOpacityMoveItem = utils.getZeroToOne(position, posiMoveStart, posiTopUnViewIcon - posiMoveStart);
        let intTransYTextDown = 50 * utils.getZeroToOne(position, posiMoveStart, posiTopUnViewIcon - posiMoveStart);

        return (
            <Fragment>
                <div id="section04" className="section04" style={sectionStyle}>
                    <div style={{position:'absolute',top:'50%',width:'1200px',height:'1000px',margin:'0 auto',transform:' translateY(-50%)'}}>
                        {/* 텍스트영역  */}
                        <div className="item-01 v-box" style={{ transform: `translateX(0%) translateY(${-500  - intTransYTextUp + intTransYTextDown}px)`}}>
                            <span className="txt01" style={{opacity: utils.getViewOpacity(position, 50, 100, position, 0) }}>
                                업무의 효율이<br />끊임없이 높아지도록
                            </span>
                            <span className="txt02" style={{opacity: utils.getViewOpacity(position, 100, 100, position, 0) }}>
                                ERP와 그룹웨어의 융합으로 이제 하나의 솔루션에서 모든<br />
                                업무를 해결할 수 있는 <span className="txblack">‘One-Stop’ 서비스</span> 경험을 제공합니다.
                            </span>
                        </div>

                        {/* 이미지 */}
                        <div style={{ position: 'absolute', top:'0%', width: '100%', height: '100%', transform: `translateX(0%) translateY(${-(50 * intOpacityMoveItem)}%)`, opacity: intOpacityTopUnView < 1 ? intOpacityTopUnView : intOpacityTop }}>
                            <div className="item-02" style={{ transform: `translateX(50%) translateY(${-26 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-03" style={{ transform: `translateX(150%) translateY(${-26 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-04" style={{ transform: `translateX(63%) translateY(${110 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-05" style={{ transform: `translateX(160%) translateY(${115 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-06" style={{ transform: `translateX(-70%) translateY(${461 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-07" style={{ transform: `translateX(30%) translateY(${234 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-08" style={{ transform: `translateX(140%) translateY(${246 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-09" style={{ transform: `translateX(-50%) translateY(${611 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-10" style={{ transform: `translateX(50%) translateY(${625 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                            <div className="item-11" style={{ transform: `translateX(150%) translateY(${625 - intTransYTextUp}px) scale(${intOpacityTop})` }} />
                        </div>

                        {/* 모듈 아이콘 */}
                        <div className="item-12" style={{ transform: `translateX(${98 + ((450 - 150) * intOpacityMoveItem)}%) translateY(${55 + ((715 - 178) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-13" style={{ transform: `translateX(${618 + ((137 - 670) * intOpacityMoveItem)}%) translateY(${55 + ((745 - 209) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-14" style={{ transform: `translateX(${668 + ((241 - 720) * intOpacityMoveItem)}%) translateY(${235 + ((745 - 388) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-15" style={{ transform: `translateX(${-20 + ((-439 + 20) * intOpacityMoveItem)}%) translateY(${404 + ((745 - 557) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-16" style={{ transform: `translateX(${564 + ((-125 - 564) * intOpacityMoveItem)}%) translateY(${421 + ((745 - 574) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-17" style={{ transform: `translateX(${-527 + ((-229 + 527) * intOpacityMoveItem)}%) translateY(${724 + ((745 - 877) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-18" style={{ transform: `translateX(${-423 + ((504 + 423) * intOpacityMoveItem)}%) translateY(${935 + ((745 - 1090) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-19" style={{ transform: `translateX(${96 + ((-283 - 147) * intOpacityMoveItem)}%) translateY(${953 + ((745 - 1106) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-20" style={{ transform: `translateX(${617 + ((33 - 670) * intOpacityMoveItem)}%) translateY(${953 + ((745 - 1106) * intOpacityMoveItem)}%) scale(1)`, opacity: intOpacityMoveItem }} />
                        <div className="item-21" style={{ transform: `translateX(${-1300 + ((-604 + 1300) * intOpacityMoveItem)}%) translateY(${1488 + ((829 - 1657) * intOpacityMoveItem)}%) scale(${2 * (1 / ((intOpacityMoveItem > 1 / 2 ? intOpacityMoveItem : 1 / 2) * 2))})`, opacity: intOpacityMoveItem }} />
                        <div className="item-22" style={{ transform: `translateX(${-270 + ((730 + 215) * intOpacityMoveItem)}%) translateY(${2308 + ((829 - 2478) * intOpacityMoveItem)}%) scale(${3 * (1 / ((intOpacityMoveItem > 1 / 3 ? intOpacityMoveItem : 1 / 3) * 3))})`, opacity: intOpacityMoveItem }} />
                        <div className="item-23" style={{ transform: `translateX(${1350 + ((382 - 1406) * intOpacityMoveItem)}%) translateY(${1658 + ((829 - 1828) * intOpacityMoveItem)}%) scale(${2.5 * (1 / ((intOpacityMoveItem > 2 / 5 ? intOpacityMoveItem : 1 / 2.5) * 2.5))})`, opacity: intOpacityMoveItem }} />

                        {/* 포털 배경 */}
                        <div className="item-24" style={{ transform: `translateX(-48.5%) translateY(${100 - (129 * intOpacityMoveItem)}%) scale(1)`}} />
                    </div>
                </div>
            </Fragment>
        );
    }
}


