import React, { Component, Fragment } from 'react';
import PopupWrap from '../commonsComp/PopupWrap';

// 메인 팝업
export default class MainPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {

            check: false,

        }
    }

    render() {
        return (
            <Fragment>
                <PopupWrap
                    Type="contents"
                    Width={600}
                    Height={745}
                    Open={this.props.mainPopOpen === true}
                    
                    // 팝업 2개 이상 쓸 때는 아래 isDim true, false로
                    // 배경이 까매지는 딤처리 조정을 할 수 있습니다.
                    isDim={true}
                    
                    // 기본 정렬은 가운데 정렬.
                    // PositionReset={true}로 설정하면 포지션 값이 0으로 되어서
                    // top, left값 조정을 할 수 있습니다.
                    
                    // Top={'100px'}
                    // Left={'100px'}
                    // PositionReset={true}
                >
                    <div className='mainPopWrap'>
                        <div className='mainPopImgBox flex-1'>
                            <img src={require('../../www/images/sub/media/media-print-01@2x.png').default} alt='이미지'/>
                        </div>

                        <div className='mainPopBtnBox h-box'>
                            <div className='mainCheckBox flex-1 h-box'>
                                <div className={`check ${this.state.check === true ? 'on':''}`} onClick={()=>{this.setState({ check: !this.state.check })}}/>
                                <em>오늘 하루 이 창을 열지 않음</em>
                            </div>
                            <button onClick={()=>{this.props.handleClickMainPopClose();}}>닫기</button>
                        </div>
                    </div>
                </PopupWrap>
            </Fragment>
        );
    }
}