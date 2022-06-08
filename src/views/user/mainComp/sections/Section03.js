import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import Tango from '../jsonComp/Tango'
export default class Section03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        let sectionStyle = {
            height: `${intWindowHeight}px`,
        };

        // 상단 페이드 아웃 
        sectionStyle = utils.getTopFadeOut(position, sectionStyle, 0);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 600, 0);

        let posiMainText = 3200;

        /**
         * Tango Asset 구간에서 왼쪽에서 오른쪽으로 이동
         */
        let intTransXTango = -65 - (300 * utils.getOneToZero(position, 0, 3400));

        /**
         * Tango Asset + 텍스트 세로값 전체 이동
         * 구간 : posiMainText ~ 
         */
        let intTransY = 0;
        intTransY = utils.getOverPosi(position, 3200);

        /**
         * 서브 텍스트 점점 사라지게 처리
         */
        let intOpacitySubText01 = 0;
        let intOpacitySubText02 = 0;
        intOpacitySubText01 = utils.getZeroToOne(position, 3400, 200);
        intOpacitySubText02 = utils.getZeroToOne(position, 3600, 200);

        return (
            <Fragment>
                <div id="section03" className="section03" style={sectionStyle}>
                    <div className="item-01" style={{ transform: `translateY(-150%) scale(${utils.getSmallScale(position, 0, 400, 5)})`, opacity: utils.getViewOpacity(position, 0, 400, 0, 0) }}>
                        <span className="txt02">Convergence</span>
                    </div>
                    <div className="item-02" style={{ transform: `translateY(${-150 - intTransY}%) scale(${utils.getSmallScale(position, 400, 400, 5)})`, opacity: utils.getViewOpacity(position, 400, 400, posiMainText - 800, 100) }}>
                        <span className="txt01">기술, 솔루션, 디바이스의 <span className="txblack">융합</span></span>
                    </div>
                    <div className="item-03" style={{ transform: `translateY(-50%) scale(${utils.getSmallScale(position, 800, 400, 5)})`, opacity: utils.getViewOpacity(position, 800, 400, 0, 0) }}>
                        <span className="txt02">Connect</span>
                    </div>
                    <div className="item-04" style={{ transform: `translateY(${-50 - intTransY}%) scale(${utils.getSmallScale(position, 1200, 400, 5)})`, opacity: utils.getViewOpacity(position, 1200, 400, posiMainText - 1600, 100) }}>
                        <span className="txt01">프로세스의 <span className="txblack">연결</span></span>
                    </div>
                    <div className="item-05" style={{ transform: `translateY(50%) scale(${utils.getSmallScale(position, 1600, 400, 5)})`, opacity: utils.getViewOpacity(position, 1600, 400, 0, 0) }}>
                        <span className="txt02">Share</span>
                    </div>
                    <div className="item-06" style={{ transform: `translateY(${50 - intTransY}%) scale(${utils.getSmallScale(position, 2000, 400, 5)})`, opacity: utils.getViewOpacity(position, 2000, 400, posiMainText - 2400, 100) }}>
                        <span className="txt01">데이터의 <span className="txblack">공유</span></span>
                    </div>

                    <div className="item-07" style={{ transform: `translateX(${intTransXTango}%) translateY(-50%)` }}>
                        <Tango width={1363} height={725} />
                    </div>
                    
                    <div className="item-08 v-box" style={{ transform: `translateX(-50%) translateY(100%)`}}>
                        <span className="txt03" style={{opacity: intOpacitySubText01 }}>
                            업무의 효율성, 속도, 편의성이<br />
                            한번에 향상되는 혁신을 위해
                        </span>
                        <span className="txt04" style={{opacity: intOpacitySubText02 }}>
                            우리는 지금까지 시스템의 분리로 인해 사내 소통 및 협업이 필요한 경우<br />
                            <span className="txblack">온/오프라인을 넘나들며 분리된 솔루션을 사용</span>해 왔습니다.<br />
                            그래서 더존은 <span className="txblack">업무생산성 혁신을 이루고자 하나의 플랫폼에서</span><br />
                            <span className="txblack">업무, 소통할 수 있는 솔루션을 탄생</span>시켰습니다.
                        </span>
                    </div>
                </div>
            </Fragment>
        );
    }
}


