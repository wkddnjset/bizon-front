import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import Fold from '../jsonComp/Fold';
import Watch from '../jsonComp/Watch';
import CircleBackGround from '../jsonComp/CircleBackGround';

export default class Section06 extends Component {
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
        sectionStyle = utils.getTopScrollFadeOut(position, sectionStyle, 400);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 600, 0);

        return (
            <Fragment>
                <div id="section06" className="section06" style={sectionStyle}>
                    {/* 텍스트영역  */}
                    <div className="item-01 v-box" style={{ transform: 'translateX(-50%) translateY(calc(-50% - 444px))'}}>
                        <span className="txt01" style={{opacity: utils.getViewOpacity(position, 0, 200, position, 0) }}>
                            업무의 속도는<br />비교할 수 없이 빠르게
                        </span>
                        <span className="txt02" style={{opacity: utils.getViewOpacity(position, 100, 200, position, 0) }}>
                            <span className="txblack">데이터 패턴분석 및 자동입력으로 업무 속도는 향상</span>되고, <span className="txblack">스마트 검증으로</span> <br />
                            <span className="txblack">데이터 검증에 소요되는 시간을 단축</span> 시켰습니다. 또한, <span className="txblack">사용자에 환경에 맞춰</span> <br />
                            <span className="txblack">기기별 가장 중요한 정보를 한 눈에 확인</span> 할 수 있는 화면으로만 구성하였습니다.
                        </span>
                    </div>
                    <div className="item-02" style={{ transform: 'translateX(-50%) translateY(-47%)', opacity: '1' }}>
                        <Fold />
                    </div>
                    <div className="item-03" style={{ transform: 'translateX(50%) translateY(20%)', opacity: '1' }}>
                        <Watch />
                    </div>
                    <div className="item-04" style={{ transform: 'translateX(-50%) translateY(-47%)', opacity: '1' }}>
                        <CircleBackGround />
                    </div>
                </div>
            </Fragment>
        );
    }
}


