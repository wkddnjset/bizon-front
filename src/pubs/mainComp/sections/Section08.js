import React, { Component, Fragment } from 'react';
import utils from '../../utils/utils';
import Mobile from '../jsonComp/Mobile'
export default class Section08 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeigh = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        let secPx = utils.getTopPx(intWindowHeigh, heightLength);   // 여백값 높이 조정
        let sectionStyle = {
            height: `${this.props.intWindowHeight}px`,
        };
        // 상단 페이드 아웃 
        sectionStyle = utils.getTopScrollFadeOut(position, sectionStyle, 100);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 500, 0);

        return (
            <Fragment>
                <div id="section08" className="section08" style={sectionStyle}>
                    {/* 텍스트영역 */}
                    <div className="item-01" style={{ transform: `translateX(0%) translateY(-50%)` }}>
                        <div className="txt01" style={{opacity: utils.getZeroToOne(position, 100, 200)}}>
                            공간에 제약 없는<br />데이터 공유
                        </div>
                        <div className="txt02" style={{opacity: utils.getZeroToOne(position, 100, 200)}}>
                            <span className="txblack">통합 공유 시스템으로 모든 앱, 솔루션,</span> <br />
                            <span className="txblack">데이터가 연결</span>되어 업무 편의성은 향상되고, <br />
                            <span className="txblack">클라우드 문서 기반으로 보안</span>은 물론, <br />
                            언제 어디서나 정보를 <span className="txblack">편리하고 안전하게</span> <br />
                            <span className="txblack">공유</span>할 수 있습니다. 이제 스마트폰, 태블릿PC, <br />
                            웨어러블 기기를 통해 소통하고 협업하는 <br />
                            스마트워크를 경험해 보세요.
                        </div>
                        <div className="h-box" style={{opacity: utils.getZeroToOne(position, 200, 200)}}>
                            <div className="flex-1 v-box">
                                <div className="ico01" />
                                <div className="icoTxt01">Mullen</div>
                                <div className="icoTxt03">일정관리</div>
                            </div>
                            <div className="flex-1 v-box">
                                <div className="ico02" />
                                <div className="icoTxt02">ONECHAMBER</div>
                                <div className="icoTxt03">문서보관</div>
                            </div>
                            <div className="flex-1 v-box">
                                <div className="ico03" />
                                <div className="icoTxt01">ONEFFICE</div>
                                <div className="icoTxt03">문서작성</div>
                            </div>
                        </div>
                    </div>
                    {/* 이미지 아이템 */}
                    <div className="item-02 animated1s fadeIn" style={{ transform: `translateX(35%) translateY(5%)`, display: position < 1500 ? '' : 'none'}}>
                        <Mobile />
                    </div>
                    <div className="item-03" style={{ transform: `translateX(-5%) translateY(-45%)`, display: position > 1500 ? '' : 'none'}}>
                        <div className="h-box">
                            <div className="img01 animated1s slideInRight" />
                            <div className="img02 animated15s slideInRight" />
                            <div className="img03 animated2s slideInRight" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


