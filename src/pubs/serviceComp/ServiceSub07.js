import React, { Component, Fragment } from 'react';
import SubLnb from "./unit/SubLnb";

// 문서관리(ONECHAMBER)
export default class ServiceSub07 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleVideoMove = () => {
        this.props.handleGnbMenu('media','3');
        setTimeout(() => {
            this.props.conRef.current.scrollTo({ top: 2550, behavior: 'smooth' });
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
                <div id="ServiceSub07">
                    <div className="ServiceMenu">
                        <div className="FormeBg01"/>
                        <div className="TextBox">
                            <div className="SmallTitle">이력관리</div>
                            <div className="ServiceTitle">
                                <div className="Title01">작성이력이 추적되는</div>
                                <div className="Title02">문서 라이프 사이클 관리</div>
                            </div>
                            <div className="ServiceText">
                                문서의 생성부터 수정, 소멸, 유통까지 콘텐츠의 라이프 사이클<br/>
                                확인이 가능하여 더욱 쉬워지고 체계적인 관리를 지원합니다.
                            </div>
                            <p className='ClickBox' onClick={()=>{this.handleVideoMove()}}>영상으로 확인하기</p>
                        </div>
                        <div className="FormeImg01"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg02"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">다차원 분류체계</div>
                                <div className="ServiceTitle">
                                    <div className='h-box'>
                                        <div className="Title01">문서 찾는데</div>
                                        <div className="Title02 ml10">시간을</div>
                                    </div>
                                    <div className="Title02">소비할 필요 없는</div>
                                    <div className="Title02">다차원 분류체계</div>
                                </div>
                                <div className="ServiceText">
                                    문서 유형, 속성, 파일 형식 등 다양한 속성을 설정하여<br/>
                                    체계적인 관리 및 상세 검색 기능을 제공합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg02"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg03"/>
                            <div className="TextBox">
                                <div className="SmallTitle">폴더링크공유</div>
                                <div className="ServiceTitle">
                                    <div className='h-box'>
                                        <div className="Title01">첨부파일,</div>
                                        <div className="Title02 ml10">용량 제한 없이</div>
                                    </div>
                                    <div className="Title02">URL 공유로 가볍고 빠르게</div>
                                </div>
                                <div className="ServiceText">
                                    첨부파일이 아닌 고유의 URL 링크로 공유하여<br/>
                                    대용량 파일도 빠르게 공유가 가능합니다.
                                </div>
                            </div>
                        <div className="FormeImg03"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg04"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">콘텐츠 보안</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">세부적인 접근 권한 부여로</div>
                                    <div className="Title02">더욱 강력해지는 보안</div>
                                </div>
                                <div className="ServiceText">
                                    직급별/부서별 접근 범위를 제한하고,<br/>
                                    사용 권한을 세부적으로 설정할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg04"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg05"/>
                        <div className="TextBox">
                            <div className="SmallTitle">중복파일삭제</div>
                            <div className="ServiceTitle">
                                <div className="Title01">저장 용량을</div>
                                <div className="Title02">신경 쓸 필요 없는</div>
                                <div className="Title02">중복 파일 자동 삭제</div>
                            </div>
                            <div className="ServiceText">
                                시스템이 파일 중복 여부를 자동으로 확인하여,<br/>
                                하나의 파일만 중앙 서버에 저장함으로써 효율적 저장소<br/>
                                관리가 가능합니다.
                            </div>
                        </div>
                        <div className="FormeImg05"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg06"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">탐색기 Agent</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">문서를 찾거나 저장할 땐</div>
                                    <div className="Title02">브라우저 접속없이</div>
                                    <div className="Title02">내 PC에서 신속하게</div>
                                </div>
                                <div className="ServiceText">
                                    웹과 동기화된 ONECHAMBER 탐색 Agent로<br/>
                                    대량 문서 업/다운로드가 편리해지는<br/>
                                    콘텐츠 접근 편의성을 제공합니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg06"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeBg07"/>
                        <div className="TextBox">
                            <div className="SmallTitle">공유문서함</div>
                            <div className="ServiceTitle">
                                <div className="Title01">협업을 위한 문서는</div>
                                <div className="Title02">공유문서함 한 곳에서</div>
                                <div className="Title02">편리하고 효율적으로</div>
                            </div>
                            <div className="ServiceText">
                                문서 생성 및 편집, 공유까지 공유문서함 한 곳에서<br/>
                                관리가 가능하고 사용자별/직급별<br/>
                                접근 권한 설정을 할 수 있습니다.
                            </div>
                        </div>
                        <div className="FormeImg07"/>
                    </div>
                    <div className="ServiceMenu">
                        <div className="FormeImg08"/>
                        <div className="TextBox">
                            <div className="TextBoxs">
                                <div className="SmallTitle">부서문서함</div>
                                <div className="ServiceTitle">
                                    <div className="Title01">부서의 분산된</div>
                                    <div className="Title01">자료를 통합해</div>
                                    <div className="Title02">효율적인 문서 관리와</div>
                                    <div className="Title02">편리한 인수인계</div>
                                </div>
                                <div className="ServiceText">
                                    부서에서 산출되고 공유되는 문서를 통합 관리하여<br/>
                                    문서 자산화 및 재활용이 증대되고, 문서 관리 시간과<br/>
                                    비용이 절감됩니다.
                                </div>
                            </div>
                        </div>
                        <div className="FormeBg08"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


