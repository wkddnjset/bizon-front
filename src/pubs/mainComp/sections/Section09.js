import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player'
import utils from '../../utils/utils';
import PortletLoading from '../jsonComp/PortletLoading'
import PortletRoutine from '../jsonComp/PortletRoutine'

export default class Section09 extends Component {
    constructor(props) {
        super(props);
        // ref
        this.video01 = React.createRef();
        this.video02 = React.createRef();
        this.video03 = React.createRef();
        this.video04 = React.createRef();
        this.videoSlide = React.createRef();
        this.isDrag = false;
        this.intPreDrag = 0;
        this.intPreDragY = 0;
        this.intAfterDrag = 0;
        this.state = {
            slidePer: '-530',
            barState: '1',
            video01: false,
            video02: false,
            video03: false,
            video04: false,
        }
    }

    handleTouchStart=(e)=>{
        this.isDrag = true;
        this.intPreDrag = e.touches[0].pageX;
    }

    handleTouchEnd=(e)=>{
        if (this.isDrag) {
            // 마우스 이동지점 저장
            this.intAfterDrag = e.changedTouches[0].pageX;
            this.handleDragEnd(e);
        }
    }

    componentDidMount() {
        document.addEventListener('touchstart', this.handleTouchStart, true);
        document.addEventListener('touchend', this.handleTouchEnd, true);
    }

    componentWillUnmount() {
        document.removeEventListener('touchstart', this.handleTouchStart, true);
        document.removeEventListener('touchend', this.handleTouchEnd, true);
    }

    handleMoveClick = async (num) => {
        let slidePer = -530;
        switch (num) {
            case '1': slidePer = -530;
                break;
            case '2': slidePer = -1650;
                break;
            case '3': slidePer = -2770;
                break;
            case '4': slidePer = -3890;
                break;
        }

        if (this.video01.current.getCurrentTime() > 0) {
            this.video01.current.seekTo(0);
        }
        if (this.video02.current.getCurrentTime() > 0) {
            this.video02.current.seekTo(0);
        }
        if (this.video03.current.getCurrentTime() > 0) {
            this.video03.current.seekTo(0);
        }
        if (this.video04.current.getCurrentTime() > 0) {
            this.video04.current.seekTo(0);
        }

        setTimeout(() => {
            this.setState({
                barState: num,
                slidePer: slidePer,
                video01: false,
                video02: false,
                video03: false,
                video04: false
            });
        }, 0);
    }

    handleVideoPlay = (num) => {
        if (num === '1') {
            this.setState({ video01: true });
        } else if (num === '2') {
            this.setState({ video02: true });
        } else if (num === '3') {
            this.setState({ video03: true });
        } else if (num === '4') {
            this.setState({ video04: true });
        }
    }

    handleVideoPause = () => {
        setTimeout(() => {
            this.setState({ video01: false, video02: false, video03: false, video04: false });
        }, 0);
    }

    handleOnDrag = (e) => {
        // 드래그 이동 시작
        // 마우스 시작지점 저장
        this.isDrag = true;
        this.intPreDrag = e.pageX;
        this.intPreDragY = e.pageY;

    }

    handleDragMove = (e) => {
        if (this.isDrag) {
            // 마우스 이동지점 저장
            let intLengthX = this.intPreDragY - e.pageX;
            let intLengthY = this.intPreDragY - e.pageY;
            intLengthX = intLengthX > 0 ? intLengthX : intLengthX * -1; 
            intLengthY = intLengthY > 0 ? intLengthY : intLengthY * -1;
            if( intLengthX > intLengthY){
                this.intAfterDrag = e.pageX;
            }else{
                this.isDrag = false;
                this.intPreDrag = 0;
                this.intAfterDrag = 0;
            }
        }
    }

    handleDragEnd = (e) => {
        let { barState } = this.state;
        let intBarState = parseInt(barState);
        if (this.isDrag) {
            this.isDrag = false;

            // 마우스 클릭이벤트 보다 늦게 발생하도록 타임아웃 지정
            setTimeout(() => {
                // handleDragMove 이벤트 발생했을 경우만 이동
                if (this.intAfterDrag > 0) {
                    // 이동 범위 : 마우스 시작지점 - 마우스 마지막 이동지점
                    // 이동 범위가 양수일 경우 오른쪽으로 이동
                    // 이동 범위가 음수일 경우 왼쪽으로 이동
                    // 이동범위가 100 이상인 경우 오른쪽
                    if (this.intPreDrag - this.intAfterDrag > 100) {
                        if (intBarState < 4) {
                            this.handleMoveClick((intBarState + 1).toString())
                        }
                        // 이동범위가 -100 이하인 경우 왼쪽
                    } else if (this.intPreDrag - this.intAfterDrag < -100) {
                        if (intBarState > 1) {
                            this.handleMoveClick((intBarState - 1).toString())
                        }
                    }
                }
                // 값 초기화
                this.intPreDrag = 0;
                this.intAfterDrag = 0;
            }, 0);

        }
    }

    render() {
        let position = this.props.position;                 // 현재위치
        let intWindowHeight = this.props.intWindowHeight;    // 윈도우 창 높이
        let heightLength = this.props.heightLength;         // Section 높이값
        let sectionStyle = {
            height: `${intWindowHeight}px`
        };

        // 상단 페이드 아웃 
        sectionStyle = utils.getTopScrollFadeOut(position, sectionStyle, 500);
        // 하단 페이드 인
        sectionStyle = utils.getBottomFadeIn(position, heightLength, sectionStyle, 500, 0);
        
        if(position < 2500){
            this.handleVideoPause();
        }


        return (
            <Fragment>
                <div id="section09" className="section09" style={sectionStyle}>
                    {/* 내부높이 스크롤 0 ~ 1000 */}
                    <div className="areaBox01" style={{ transform: `translateX(0%) translateY(${(50 * utils.getOneToZero(position, 0, 0))}%)`, opacity: utils.getZeroToOne(position, 0, 500), height: `${this.props.intWindowHeight}px` }}>
                        {/* 텍스트영역 */}
                        <div className="item-01 h-box" style={{ transform: `translateX(-52%) translateY(-315%)`, opacity: '1' }}>
                            <div className="txt01">
                                나와 연관된 업무만<br />모아 빠짐없이
                            </div>
                            <div className="v-box" style={{ marginLeft: '80px' }}>
                                <div className="txt02">
                                    Amaranth 10은 각 <span className="txblack">직급, 직군별 연관된 업무만 메인화면에 연결하여 보여주고</span> <br />
                                    처리할 수 있도록 안내합니다. 또한 <span className="txblack">포틀릿 기능을 통해 사용자 맞춤화</span>가 가능해 <br />
                                    <span className="txblack">화면을 보고 싶은 순서, 위치로 배치</span>할 수 있습니다.
                                </div>
                                <div className="chipsBox h-box">
                                    <div className="chipBtn">CEO</div>
                                    <div className="chipBtn">General</div>
                                    <div className="chipBtn">HR Manager</div>
                                    <div className="chipBtn">Accounting Manager</div>
                                </div>
                            </div>
                        </div>
                        {/* 이미지 아이템 */}
                        <div className="item-02" style={{ transform: `translateX(-49%) translateY(-40%)`, opacity: '1', display: position < 700 ? '' : 'none' }}>
                            <PortletLoading width="1950" />
                        </div>
                        <div className="item-03" style={{ transform: `translateX(-49%) translateY(-40%)`, opacity: '1', display: position > 700 ? '' : 'none' }}>
                            <PortletRoutine width="1950" />
                        </div>
                    </div>

                    {/* 내부높이 스크롤 1001 ~ 2000 */}
                    <div className="areaBox02" style={{ transform: `translateX(0%) translateY(${0 - (100 * utils.getZeroToOne(position, 1000, 500))}%)`,width:`${100 - (100 * utils.getZeroToOne(position, 2000, 500))}%`,height: `${this.props.intWindowHeight}px`,zIndex:position < 2500 ? '3':'2'}}>
                        {/* 텍스트영역 */}
                        <div className="fixedBox">
                            <div className="item-01 v-box" style={{ transform: `translateX(0%) translateY(-50%)`, opacity: '1' }}>
                                <div className="txt01">
                                    “기민하고 민첩하고 낭비없이 일하는 게 <br />
                                    <span className="txblack">‘애자일(agile)’</span>입니다. <br />
                                    <span className="txblack">애자일 문화</span>를 만들려면 <span className="txblack">애자일 도구</span>를 써야 합니다. <br />
                                    그 도구가 바로 <span className="txblack">Amaranth 10</span>입니다.”
                                </div>
                                <div className="txt02">
                                    <span className="fwb">더존비즈온</span> <br />
                                    <span className="fwb">솔루션사업부문 대표</span> <br /> 지용구
                                </div>
                            </div>
                            <div className="item-02" style={{ transform: `translateX(-50%) translateY(-50%)` }} />
                            <div className="item-03" style={{ transform: `translateX(-15%) translateY(10%)` }} />
                            <div className="item-04" style={{ transform: `translateX(20%) translateY(20%)` }} />
                        </div>

                    </div>

                    {/* 내부높이 스크롤 2001 ~ 3000 */}
                    <div className="areaBox03" style={{ transform: `translateX(0%) translateY(${-100 - (100 * utils.getZeroToOne(position, 1300, 500))}%)`,height: `${this.props.intWindowHeight}px`}}>
                        {/* 텍스트영역 */}
                        <div className="item-01 v-box" style={{ transform: `translateX(-50%) translateY(-200%)`, opacity: '1' }}>
                            <div className="txt01">
                                세상에 없던 디지털 비스니스<br />플랫폼을 만들 수 있었던 이유.
                            </div>
                            <div className="txt02">
                                <span className="txblack">업무 능력을 극대화 할 수 있는 시스템 퍼포먼스를 재점검하고 새로운 개념 정의에서</span> <br />
                                <span className="txblack">디지털 전환을 위한 지속적인 연구</span>로 탄생한 영원히 시들지 않는 꽃 Amaranth 10. <br />
                                그 혁신을 탄생시킨 주역들이 말하는 Amaranth 10을 확인해 보세요.
                            </div>
                        </div>
                        {/* 비디오 슬라이딩 */}
                        <div className="videoSlide v-box" style={{ transform: `translateX(0%) translateY(-34%)` }}
                            ref={this.videoSlide}
                            onMouseDown={this.handleOnDrag}
                            onMouseMove={this.handleDragMove}
                            onMouseUp={this.handleDragEnd}
                            onMouseLeave={this.handleDragEnd}
                        >
                            <div className="list h-box" style={{ marginLeft: `${this.state.slidePer}px` }} >
                                <div className="video01" onClick={() => { this.handleMoveClick('1'); }} style={{opacity:this.state.barState === '1' ? '1':'0.5'}}>
                                    <div style={{ display: this.state.video01 ? 'none' : ''}}>
                                        <div className="logo" />
                                        <div className="text v-box">
                                            <div className="txt01">지용구 / 솔루션 사업부문 대표</div>
                                            <div className="txt02">아마란스 10은 시간을 사는 도구다</div>
                                        </div>
                                        <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('1'); }} />
                                    </div>
                                    <div className="videoBox v-box" style={{ display: this.state.video01 ? '' : 'none' }}>
                                        <ReactPlayer
                                            ref={this.video01}
                                            width="100%" height="100%"
                                            url='https://www.youtube.com/embed/_M3XAtZSuUM'
                                            playing={this.state.video01}
                                            loop={true}
                                            playsInline={true}
                                            controls={true}
                                            onPause={() => { this.handleVideoPause(); }}
                                            onBuffer={() => { this.setState({ video01: true }) }}
                                        />
                                    </div>
                                </div>
                                <div className="video02" onClick={() => { this.handleMoveClick('2'); }} style={{opacity:this.state.barState === '2' ? '1':'0.5'}}>
                                    <div style={{ display: this.state.video02 ? 'none' : '' }}>
                                        <div className="logo" />
                                        <div className="text v-box">
                                            <div className="txt01">정현수 / 솔루션개발부문 상무</div>
                                            <div className="txt02">기술 혁신으로 업무 효율을 높이다</div>
                                        </div>
                                        <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('2'); }} />
                                    </div>
                                    <div className="videoBox v-box" style={{ display: this.state.video02 ? '' : 'none' }}>
                                        <ReactPlayer
                                            ref={this.video02}
                                            width="100%" height="100%"
                                            url='https://www.youtube.com/embed/70FlDMmwx40'
                                            playing={this.state.video02}
                                            loop={true}
                                            playsInline={true}
                                            controls={true}
                                            onPause={() => { this.handleVideoPause(); }}
                                            onBuffer={() => { this.setState({ video02: true }) }}
                                        />
                                    </div>
                                </div>
                                <div className="video03" onClick={() => { this.handleMoveClick('3'); }} style={{opacity:this.state.barState === '3' ? '1':'0.5'}}> 
                                    <div style={{ display: this.state.video03 ? 'none' : '' }}>
                                        <div className="logo" />
                                        <div className="text v-box">
                                            <div className="txt01">이경일 / 솔루션사업부문 이사</div>
                                            <div className="txt02">아마란스 10은 디지털 전환 대표 솔루션이다</div>
                                        </div>
                                        <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('3'); }} />
                                    </div>
                                    <div className="videoBox v-box" style={{ display: this.state.video03 ? '' : 'none' }}>
                                        <ReactPlayer
                                            ref={this.video03}
                                            width="100%" height="100%"
                                            url='https://www.youtube.com/embed/ugQlAknpArA'
                                            playing={this.state.video03}
                                            loop={true}
                                            playsInline={true}
                                            controls={true}
                                            onPause={() => { this.handleVideoPause(); }}
                                            onBuffer={() => { this.setState({ video03: true }) }}
                                        />
                                    </div>
                                </div>
                                <div className="video04" onClick={() => { this.handleMoveClick('4'); }} style={{opacity:this.state.barState === '4' ? '1':'0.5'}}>
                                    <div style={{ display: this.state.video04 ? 'none' : '' }}>
                                        <div className="logo" />
                                        <div className="text v-box">
                                            <div className="txt01">배경희 / 디자인센터 이사</div>
                                            <div className="txt02">새로운 가치를 만드는 디자인을 하다</div>
                                        </div>
                                        <div className="play" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleVideoPlay('4'); }} />
                                    </div>
                                    <div className="videoBox v-box" style={{ display: this.state.video04 ? '' : 'none' }}>
                                        <ReactPlayer
                                            ref={this.video04}
                                            width="100%" height="100%"
                                            url='https://www.youtube.com/embed/VvQM9MRGYPg'
                                            playing={this.state.video04}
                                            loop={true}
                                            playsInline={true}
                                            controls={true}
                                            onPause={() => { this.handleVideoPause(); }}
                                            onBuffer={() => { this.setState({ video04: true }) }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="listBar h-box">
                                <div className="barCap" onClick={() => { this.handleMoveClick('1'); }}>
                                    <div className={`bar ${this.state.barState === '1' ? 'on' : ''}`} />
                                </div>
                                <div className="barCap" onClick={() => { this.handleMoveClick('2'); }}>
                                    <div className={`bar ${this.state.barState === '2' ? 'on' : ''}`} />
                                </div>
                                <div className="barCap" onClick={() => { this.handleMoveClick('3'); }}>
                                    <div className={`bar ${this.state.barState === '3' ? 'on' : ''}`} />
                                </div>
                                <div className="barCap" onClick={() => { this.handleMoveClick('4'); }}>
                                    <div className={`bar ${this.state.barState === '4' ? 'on' : ''}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


