import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url';
import SubLnb from "./unit/SubLnb";

// 그룹웨어
export default class ServiceSub02 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleVideoMove = () => {
        this.props.handleGnbMenu('media', '3');
        setTimeout(() => {
            this.props.onRef.current.scrollTo({ top: 2550, behavior: 'smooth' });
        }, 600);
    }

    render() {
        return (
            <Fragment>
                <SubLnb
                    serviceSub01={this.props.serviceSub01}
                    serviceSub02={this.props.serviceSub02}
                    serviceSub03={this.props.serviceSub03}
                    serviceSub04={this.props.serviceSub04}
                    serviceSub05={this.props.serviceSub05}
                    serviceSub06={this.props.serviceSub06}
                    serviceSub07={this.props.serviceSub07}
                    serviceSub08={this.props.serviceSub08}
                    handleServiceScroll={this.props.handleServiceScroll}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext00={this.props.Titletext00}
                    menu01={this.props.menu01}
                    menu02={this.props.menu02}
                    menu03={this.props.menu03}
                    menu04={this.props.menu04}
                    menu05={this.props.menu05}
                    menu06={this.props.menu06}
                    menu07={this.props.menu07}
                    menu08={this.props.menu08}
                    menu09={this.props.menu09}
                    menu10={this.props.menu10}
                    menu11={this.props.menu11}
                    menu12={this.props.menu12}
                    menu13={this.props.menu13}
                    menu14={this.props.menu14}
                />
                <div id="ServiceSub02">
                    <div className="ServiceMenu">
                        <div className="FormeBg01" />
                        <div className="TextBox">
                            <div className="SmallTitle">메인포털</div>
                            <div className="ServiceTitle">
                                <div className="Title01">나에게 필요한 정보만</div>
                                <div className='h-box'>
                                    <div className="Title01">제공하는</div>
                                    <div className="Title02 ml10">맞춤형 메인포털</div>
                                </div>
                            </div>
                            <div className="ServiceText">
                                직무별 필요한 업무와 데이터를 가장 빠르게 찾을 수 있는<br></br>
                                지능형 업무 컨시어지 서비스와 개인별 원하는 대로<br></br>
                                기능을 배치할 수 있는 포틀릿 기능을 제공합니다.
                            </div>
                            <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                <p className='ClickBox'>영상으로 확인하기</p>
                            </Link>
                        </div>
                        <div className="FormeImg01" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">통합검색</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">정보를 찾을 땐</div>
                                    <div className="Title02">통합검색으로</div>
                                    <div className="Title02">보기 쉽게, 한 번에.</div>
                                </div>
                                <div className="ServiceText">
                                    간편한 통합 검색으로 사용자에게 부여된 권한 내의 모든<br></br>
                                    데이터, 콘텐츠, 모듈을 빠르게 검색하여 활용할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03" />
                        <div className="TextBox">
                            <div className="SmallTitle">보안 로그인(2차인증)</div>
                            <div className="ServiceTitle">
                                <div className="Title01">더욱 강력한 보안을 위한</div>
                                <div className="Title02">생체인증 로그인</div>
                            </div>
                            <div className="ServiceText">
                                FIDO 인증방식을 통해 개인 정보 보호 및<br></br>
                                기업의 데이터 접근에 대한 통제와 이력관리가 가능합니다.
                            </div>
                        </div>
                        <div className="FormeImg03" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">전자결재</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">고객사의 유형별로</div>
                                    <div className='h-box'>
                                        <div className="Title01">제공되는</div>
                                        <div className="Title02 ml10">차별화된</div>
                                    </div>
                                    <div className="Title02">결재 프로세스</div>
                                </div>
                                <div className="ServiceText">
                                    고객사별 업무와 결재 문서의 유형에 따라<br></br>
                                    맞춤형 결재 프로세스를 제공하여 빠른 의사결정을 지원합니다.
                                </div>
                                <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                    <p className='ClickBox'>영상으로 확인하기</p>
                                </Link>
                            </div>
                        </div>
                        <div className="FormeBg04" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg05" />
                        <div className="TextBox">
                            <div className="SmallTitle">일정관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">나만의 똑똑한 AI비서로</div>
                                <div className="Title02">통합 일정 공유와</div>
                                <div className="Title02">중단 없는 업무 협업</div>
                            </div>
                            <div className="ServiceText">
                                개인 일정 뿐만 아니라 공유 일정까지 한 곳에서 관리하고 실시간<br></br>
                                일정 관리로 언제 어디서나 일정 변동 사항 확인이 가능합니다.
                            </div>
                            <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                <p className='ClickBox'>영상으로 확인하기</p>
                            </Link>
                        </div>
                        <div className="FormeImg05" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg06" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">자원관리</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">원하는 자원을</div>
                                    <div className="Title02">빠르고 쉽게 예약하는</div>
                                    <div className="Title02">가장 쉬운 방법</div>
                                </div>
                                <div className='ServiceText'>
                                    회사의 모든 자원을 한 곳에 모아 예약, 승인, 이력확인 등<br />
                                    체계적이고 효과적인 자원 관리가 가능합니다.
                                </div>
                                <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                    <p className='ClickBox'>영상으로 확인하기</p>
                                </Link>
                            </div>
                        </div>
                        <div className="FormeBg06" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg07" />
                        <div className="TextBox">
                            <div className="SmallTitle">전자메일</div>
                            <div className="ServiceTitle">
                                <div className="Title01">신속한 정보 교환,</div>
                                <div className="Title02">커뮤니케이션의 시작은</div>
                                <div className="Title02">전자메일로부터</div>
                            </div>
                            <div className="ServiceText">
                                손쉬운 공유, 업무의 기록, 신중한 의사소통의 시작은<br></br>
                                전자메일로 부터 시작됩니다. 신속하고 편리하게<br />
                                정보를 교환하고, 자료를 공유해 보세요.
                            </div>
                        </div>
                        <div className="FormeImg07" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg08" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">게시판</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">업무 성격에 따라</div>
                                    <div className="Title02">자유롭게 구성 가능한</div>
                                    <div className="Title02">맞춤형 게시판</div>
                                </div>
                                <div className="ServiceText">
                                    업무 유형에 맞는 다양한 게시판을 자유롭게 구성하여<br></br>
                                    효율적인 커뮤니케이션이 가능한 환경을 제공합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg08" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg09" />
                        <div className="TextBox">
                            <div className="SmallTitle">업무관리(KISS)</div>
                            <div className="ServiceTitle">
                                <div className="Title01">모든 업무 현황을</div>
                                <div className="Title02">한눈에 조망하는</div>
                                <div className="Title02">업무 협업 프로세스 관리</div>
                            </div>
                            <div className="ServiceText">
                                진행하는 프로젝트별 인원들과<br></br>
                                실시간으로 업무 진행 현황을 확인하고<br></br>
                                소통할 수 있는 효율적인 협업 체계를 구현합니다.
                            </div>
                            <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                <p className='ClickBox'>영상으로 확인하기</p>
                            </Link>
                        </div>
                        <div className="FormeImg09" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg10" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">화상회의</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">장소불문.</div>
                                    <div className="Title02">디지털 대면이 가능한</div>
                                    <div className="Title02">화상회의</div>
                                </div>
                                <div className="ServiceText">
                                    언제 어디서나 장소에 구애 받지 않고 실시간 회의에<br></br>
                                    참여하여 빠른 의사결정과 업무처리가 가능합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg10" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg11" />
                        <div className="TextBox">
                            <div className="SmallTitle">화면공유</div>
                            <div className="ServiceTitle">
                                <div className="Title01">자료를 함께 보며</div>
                                <div className="Title02">메모하고 대화하는</div>
                                <div className="Title02">스마트워크 환경</div>
                            </div>
                            <div className="ServiceText">
                                문서, 동영상 등 사용중인 모든 화면 실시간 공유가<br></br>
                                가능하고 하나의 화면을 보며 메모하고 대화하는<br />
                                스마트한 협업이 가능합니다.
                            </div>
                        </div>
                        <div className="FormeImg11" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg12" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">메신저</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">실시간 채팅 및</div>
                                    <div className="Title01">알람을 통한</div>
                                    <div className="Title02">신속한 소통과 협업</div>
                                </div>
                                <div className="ServiceText">
                                    일반 대화, 프로젝트 대화뿐 아니라<br></br>
                                    함께 공유한 자료를 검색하고, 팀원을 지정하여<br />
                                    호출할 수 있는 알파멘션 기능과<br />
                                    쪽지를 통한 신속한 업무 소통 및 협업을 지원합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg12" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg13" />
                        <div className="TextBox">
                            <div className="SmallTitle">전자팩스/SMS</div>
                            <div className="ServiceTitle">
                                <div className="Title01">별도의 프로그램</div>
                                <div className='h-box'>
                                    <div className="Title01">설치 없는</div>
                                    <div className="Title02 ml10">편리한</div>
                                </div>
                                <div className="Title02">전자팩스와 SMS</div>
                            </div>
                            <div className="ServiceText">
                                모듈별 개발 방식으로 별도의 프로그램 설치 없이<br></br>
                                전자팩스의 SMS를 발송, 수신할 수 있으며<br />
                                PC, Mobile 환경에서 언제 어디서나 열람할 수 있습니다.
                            </div>
                        </div>
                        <div className="FormeImg13" />
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg14" />
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">KEEP</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">업무 중 필요한 자료는</div>
                                    <div className="Title02">나만의 공간에 보관하고</div>
                                    <div className="Title02">언제든지 공유하고</div>
                                </div>
                                <div className="ServiceText">
                                    메일, PC에 저장했던 문서를 다시 찾을 필요 없이<br></br>
                                    중요한 자료는 쉽게 보관하고, 구성원에서 공유할 수 있으며<br />
                                    이슈별로 그룹핑하여 히스토리 파악과<br />
                                    체계적인 관리가 가능합니다.
                                </div>
                                <Link to={MenuUrl.MEDIA_M003} onClick={() => { this.handleVideoMove() }} >
                                    <p className='ClickBox'>영상으로 확인하기</p>
                                </Link>
                            </div>
                        </div>
                        <div className="FormeBg14" />
                    </div>
                </div>
            </Fragment>
        );
    }
}