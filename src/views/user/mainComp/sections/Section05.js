import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../../context/url'; 

export default class Section05 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        // let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        // let secPx = utils.getTopPx(intWindowHeight, heightLength);   // 여백값 높이 조정
        let sectionStyle = {};
        // section 전환 시 부드럽게 전환

        // 상단 페이드 아웃
        sectionStyle = utils.getTopFadeOut(position, sectionStyle, 100);

        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 0, 0);

        // transform 재계산
        // 0~3000 까지 스크롤 이동
        // 3000 ~ 전체 높이에서 -300 지점까지 고정
        // 전체높이 -300 지점에서 마지막 까지 스크롤 이동
        sectionStyle.transform = `translateY(${- (3000 * utils.getZeroToOne(position, 300, 2700)) / 2 - 300 * utils.getZeroToOne(position, heightLength - 300, 300) * 2}px)`

        const makeBar = () => {
            const result = [];
            for (let i = 0; i < 62; i++) {
                result.push(<div key={`sec05_bar${i}`} className="bar" style={{ opacity: utils.getOneToZero(position, 300 +(i * 40), 100) }} />);
            }
            return result;
        };

        return (
            <Fragment>
                <div id="section05" className="section05" style={sectionStyle}>
                    {/* 시간 텍스트 */}
                    <div className="item-01" style={{ transform: 'translateX(-283%) translateY(0%)', opacity: utils.getOneToZero(position, 200, 100) }}>
                        <span className="txt01">16시간</span>
                    </div>

                    {/* 사라지는 바 :: 
                        bar를 스크롤값에 순차적으로 opacity를 0으로 변경
                    */}
                    <div className="item-02" style={{ transform: `translateX(-130%) translateY(${16 + (-24.8 * utils.getZeroToOne(position, 300, 2500))}%)`, opacity: '1' }}>
                        {makeBar()}
                        <div className="blueBar" style={{ opacity: '1' }} />
                        <span className="txt01" style={{ opacity: utils.getZeroToOne(position, 2800, 50) }}>10분</span>
                    </div>

                    {/* 텍스트 영역 ::
                        스크롤이 해당 위치에 왔을때 opacity 활성화
                    */}
                    <div className="item-03 v-box" style={{ transform: `translateX(0%) translateY(${-230 + (-10 * utils.getZeroToOne(position, 2900, 650))}%)`,opacity: utils.getZeroToOne(position, 2850, 50)}}>
                        <span className="txt02">
                            이것이 시간을 줄여주는<br />
                            Amaranth 10의 마법
                        </span>
                        <span className="txt03">
                            <span className="txblack">인사근태 업무의 12단계를 4단계로 축소하여, 10분 내로 업무를</span>  <br />
                            <span className="txblack">처리할 수 있는 프로세스를 개발</span>했습니다. 뿐만 아니라, <br />
                            인사, 생산, 영업, 물류, 회계 등 연계 프로세스를 통해 획기적으로 <br />
                            시간을 절약할 수 있습니다.
                        </span>
                        <Link to={MenuUrl.SERVICE_S004} onClick={()=>{this.props.handleGnbMenu('service', '4')}}>
                            <div className="txt04">인사근태 자세히보기</div>
                        </Link> 
                    </div>

                    {/* 배경요소 */}
                    <div className="bg-01 rotateLeft" style={{ top: '15%', right: '-35%', opacity: '1' }} />
                    <div className="bg-02 rotateLeft" style={{ top: '40%', left: '-1%', opacity: '1' }} />
                    <div className="bg-03" style={{ top: '55%', left: '3%', opacity: '1' }} />
                    <div className="bg-04 animated1s float infinite" style={{ top: '40%', right: '-20%', opacity: '1' }} />
                </div>
            </Fragment>
        );
    }
}


