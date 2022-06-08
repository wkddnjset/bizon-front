import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import Sliding from '../jsonComp/Sliding';

export default class Section07 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeigh = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        let sectionStyle = {
            height: `${this.props.intWindowHeight}px`,
        };
        // 상단 페이드 아웃 
        sectionStyle = utils.getTopScrollFadeOut(position, sectionStyle, 100);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 500, 0);

        return (
            <Fragment>
                <div id="section07" className="section07" style={sectionStyle}>
                    {/* 텍스트영역 */}
                    <div className="item-01 v-box" style={{ transform: `translateX(0%) translateY(${50 - (100 * utils.getZeroToOne(position, 500, 500))}%)`}}>
                        <span className="txt01" style={{opacity: utils.getZeroToOne(position, 800, 250)}}>
                            신속한 업무가<br />일상이 되는 경험
                        </span>
                        <span className="txt02" style={{opacity: utils.getZeroToOne(position, 900, 250)}}>
                            사용자에게 익숙한 유저 인터페이스로 배우지 않아도 <br />
                            쉽게 사용할 수 있는 사용성을 제공하며, <span className="txblack">업무 프로세스의</span> <br />
                            <span className="txblack">연결 및 자동화로 신속한 업무가 일상이 되는 경험을 제공</span>합니다.
                        </span>
                    </div>

                    {/* 이미지 아이템 */}
                    <div className="item-02" style={{ transform: `translateX(-53%) translateY(${40 - (115 * utils.getZeroToOne(position, 0, 1000))}%)`}}>
                        <Sliding width="1400" />
                        <div className="shadow" />
                    </div>
                </div>
            </Fragment >
        );
    }
}


