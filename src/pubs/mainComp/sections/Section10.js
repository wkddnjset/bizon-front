import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';

export default class Section10 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        // let heightLength = this.props.heightLength;         // Section 높이값
        // let secPx = utils.getTopPx(intWindowHeight, heightLength);   // 여백값 높이 조정
        let sectionStyle = { height: `${intWindowHeight > 2500 ? this.props.intWindowHeight : 2500}px` };

        // section 전환 시 부드럽게 전환 테스트 
        // 상단 페이드 아웃 
        sectionStyle = utils.getTopScrollFadeOut(position, sectionStyle, 100);
        let posiImagesView = 1000;

        return (
            <Fragment>
                <div id="section10" className="section10" style={sectionStyle}>
                    {/* 
                        item-01 / item-02 / item-03 ::
                        scale 5 -> 1 로 순차적으로 변경
                     */}
                    <div className="textItem v-box" style={{ transform: `translateY(${(intWindowHeight/2.5) + (-300 * utils.getZeroToOne(position, 1300, 500))}px)` }}>
                        <div className="item-01" style={{ transform: `scale(${utils.getSmallScale(position, 0, 400, 5)})`, opacity: utils.getZeroToOne(position, 0, 400) }}><span className="txt01">이제 업무는 <span className="txblack">더 쉬워지고</span></span></div>
                        <div className="item-02" style={{ transform: `scale(${utils.getSmallScale(position, 400, 400, 5)})`, opacity: utils.getZeroToOne(position, 400, 400) }}><span className="txt01">시간은 놀랍게 <span className="txblack">단축되며</span></span></div>
                        <div className="item-03" style={{ transform: `scale(${utils.getSmallScale(position, 800, 400, 5)})`, opacity: utils.getZeroToOne(position, 800, 400) }}><span className="txt01">업무 오류는 <span className="txblack">사라집니다</span></span></div>
                    </div>

                    {/* 이미지들 */}
                    <div className="item-04" style={{ transform: `translateX(-143%) translateY(${385 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />
                    <div className="item-05" style={{ transform: `translateX(-118%) translateY(${523 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />
                    <div className="item-06" style={{ transform: `translateX(-42%) translateY(${349 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />
                    <div className="item-07" style={{ transform: `translateX(-7%) translateY(${205 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />
                    <div className="item-08" style={{ transform: `translateX(-112%) translateY(${633 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />
                    <div className="item-09" style={{ transform: `translateX(41%) translateY(${1032 + (posiImagesView - posiImagesView * utils.getZeroToOne(position, 500, 1300))}px)` }} />


                    {/* 가운데 로고 텍스트 ::
                        logoText -> opacity 값 변하면서 아래서 위로 서서히 이동
                    */}
                    <div className="logoText v-box" style={{ transform: `translateX(-50%) translateY(400%)`, opacity: utils.getZeroToOne(position, 2000, 300) }}>
                        {/* 
                            각각 시차를 주어 translateY(50%) -> translateY(0%) 으로 이동
                        */}
                        <div className="v-box" style={{ transform: `translateY(${-50 + (50 * utils.getOneToZero(position, 1800, 300))}px)` }}>
                            <div className="logo" />
                            <div className="text">기업의 미래를 바꿀 디지털 혁신<br />지금 시작하세요</div>
                        </div>
                        <div className="btn" style={{ transform: `translateY(${-50 + (50 * utils.getOneToZero(position, 2100, 300))}px)`, opacity: utils.getZeroToOne(position, 2200, 200) }} >
                            <span className="txt" onClick={()=>{this.props.handleGnbMenu('service','1');}}>서비스 소개 자세히보기</span>
                        </div>
                    </div>

                    {/* 고정 배경영역 */}
                    <div className="fixedBg">
                        <div className="logo" />
                        <div className="text">혁신 세미나로 초대합니다</div>
                        <div className="btn">
                            <span className="txt" onClick={()=>{window.open('https://mv.amaranth10.co.kr');}}>가상체험관 바로가기</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


