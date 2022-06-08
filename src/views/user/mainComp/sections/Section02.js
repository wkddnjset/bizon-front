import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import Combination from '../jsonComp/Combination';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../../context/url'; 
export default class Section02 extends Component {
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
        sectionStyle = utils.getTopFadeOut(position, sectionStyle, 500);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 550, 0);

        // 텍스트 페이드 아웃
        let intOpacity01 = utils.getZeroToOne(position, 500, 100);
        let intOpacity02 = utils.getZeroToOne(position, 600, 100);
        let intOpacity03 = utils.getZeroToOne(position, 700, 100);

        // 텍스트 이동
        let intTransText = 50 * utils.getOneToZero(position, 0, 500);
        
        return (
            <Fragment>
                <div id="section02" className="section02" style={sectionStyle}>
                    <div className="item-01 v-box" style={{ transform: `translateX(0) translateY(${-60 + intTransText}%)`}}>
                        <span className="txt01" style={{opacity: intOpacity01}}>
                            물리적 통합이 아닌 <br />
                            <span className="color">화학적 결합</span>으로 만들어진 <br />
                            새로운 탄생.
                        </span>
                        <span className="txt02" style={{opacity: intOpacity02}}>
                            더존은 도전과 연구 끝에 혼재되어있고 한계가 많았던 <br />
                            솔루션들의 수 많은 경계선들을 허물고 결합하여 <br />
                            하나의 비즈니스 솔루션으로 새롭게 재정의하였습니다.
                        </span>
                        <Link to={MenuUrl.BRAND_B001} onClick={()=>{this.props.handleGnbMenu('brand', '1')}}>
                            <div className="txt03" style={{opacity: intOpacity03}}>솔루션의 정의 자세히보기</div>
                        </Link> 
                    </div>
                    <div className="item-02">
                        <Combination />
                    </div>
                </div>
            </Fragment>
        );
    }
}


