import React, { Component, Fragment } from 'react';
import BrandSubLnb from './unit/BrandSubLnb';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url';

// 브랜드 스토리
export default class BrandSub02 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            StoryMenu01: true,
            StoryMenu02: false,
            StoryMenu03: false,

        }
    }

    handleBrandMenu = (type) => {
        if (type === '1') {
            this.setState({
                StoryMenu01: true, StoryMenu02: false, StoryMenu03: false,
            });
        } else if (type === '2') {
            this.setState({
                StoryMenu01: false, StoryMenu02: true, StoryMenu03: false,
            });
        } else if (type === '3') {
            this.setState({
                StoryMenu01: false, StoryMenu02: false, StoryMenu03: true,
            });
        }
    }

    render() {
        return (
            <Fragment>
                <div id="BrandSub02">
                    <BrandSubLnb
                        brandSub01={this.props.brandSub01}
                        brandSub02={this.props.brandSub02}
                        brandSub03={this.props.brandSub03}
                        handleGnbMenu={this.props.handleGnbMenu}
                        Titletext02={this.props.Titletext02}
                        handleClickAlert={this.props.handleClickAlert}
                    />
                    <div className="StoryMenuBox">
                        <ul className="StoryMenu h-box">
                            <li className={`StoryMenuLi flex-1 ${this.state.StoryMenu01 ? 'on' : ''}`} onClick={() => { this.handleBrandMenu('1') }}>브랜드 스토리</li>
                            <li className={`StoryMenuLi flex-1 ${this.state.StoryMenu02 ? 'on' : ''}`} onClick={() => { this.handleBrandMenu('2'); }}>브랜드 세일즈 킷</li>
                            <li className={`StoryMenuLi flex-1 ${this.state.StoryMenu03 ? 'on' : ''}`} onClick={() => { this.handleBrandMenu('3'); }}>브랜드 캐릭터</li>
                            <span className="LineW01" />
                            <span className="LineW02" />
                        </ul>
                    </div>
                    <div className="BrandStory" style={{ display: this.state.StoryMenu01 ? '' : 'none' }}>
                        <div className="Story">
                            <div className="StoryTitleBox">
                                <div className="TopText">
                                    Next ERP, Posts Groupware
                                </div>
                                <div className="StoryTitle">
                                    세상에 없던 디지털 비즈니스 플랫폼,<br />
                                    Amaranth 10을 소개합니다.
                                </div>
                                <div className="StoryText">
                                    지속 가능한 성장이 필요한 기업을 위한 디지털 혁신의 완성, Amaranth 10!<br />
                                    ‘영원히 시들지 않는 꽃’ 이라는 고대 그리스어 ‘Amaranth’에 완성된 숫자를 의미하는 ‘10’을 더해<br />
                                    기업의 지속성장을 위한 디지털 혁신을 완성하겠다는 비전을 담았습니다.
                                </div>
                            </div>
                            <div className="StoryBGBox h-box">
                                <div className="BG01" />
                                <div className="BG02" />
                                <div className="Img01" />
                            </div>
                        </div>
                        <div className="Story" style={{ height: "1200px" }}>
                            <div className="StoryTitleBox">
                                <div className="TopAcc" />
                                <div className="StoryTitle">올인원 디지털 비즈니스 플랫폼, Amaranth 10</div>
                                <div className="StoryText">
                                    Amaranth 10은 ERP·그룹웨어·문서관리 솔루션의 융합을 통해<br />
                                    기업에서 경험하지 못한 새로운 가치와 경험을 제공합니다.
                                </div>
                            </div>
                            <div className="BG03" />
                        </div>
                        <div className="Story">
                            <div className="StoryTitleBox">
                                <div className="TopAcc" />
                                <div className="StoryTitle">핵심 비전</div>
                                <div className="StoryText">
                                    Amaranth 10은 솔루션의 융합, 프로세스의 연결, 데이터의 공유를 통해<br />
                                    기업 운영을 편리하고 효율적으로 변화시켜 기업이 지속적으로 성장하도록 지원합니다.
                                </div>
                            </div>
                            <div className="BG04" />
                            <div className="LineB01" />
                            <div className="StoryTitleBox">
                                <div className="StoryTitle">융합, 연결, 공유</div>
                                <div className="StoryText">
                                    Amaranth 10은 융합을 통해 프로세스를 연결하고 데이터를 공유합니다.<br />
                                    효율성, 속도, 편의성이 한 번에 향상되는 혁신!<br />
                                    <div className="TextBold">Amaranth 10의 도입만으로도 기업 내 업무 효율은 자연스럽게 향상될 것입니다.</div>
                                </div>
                            </div>
                            <div className="BG05" />
                            <div className="ArrBox h-box">
                                <div className="Arr" />
                                <div className="Arr" />
                                <div className="Arr" />
                            </div>
                            <div className="StorySubBox h-box">
                                <div className="SubConBox">
                                    <div className="SubTitle">효율성 UP!</div>
                                    <div className="SubText">
                                        기술/솔루션/디바이스의<br />
                                        융합 시너지를 통해 새로운 가치 창출
                                    </div>
                                </div>
                                <div className="SubConBox">
                                    <div className="SubTitle">속도 UP!</div>
                                    <div className="SubText">
                                        단절되어 있는 업무 프로세스를 연결하여<br />
                                        업무처리 속도 상승
                                    </div>
                                </div>
                                <div className="SubConBox">
                                    <div className="SubTitle">편의성 UP!</div>
                                    <div className="SubText">
                                        시스템 내에서 기업의 자원 데이터를<br />
                                        공유함으로써 사용자의 편의성 향상
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Story" style={{ height: "1146px", paddingTop: "140px", backgroundColor: "#fafbfc" }}>
                            <div className="StoryTitleBox">
                                <div className="TopAcc" />
                                <div className="StoryTitle">
                                    융합, 연결, 공유를 통해<br />
                                    기업의 디지털 전환(DX)을 지원합니다.
                                </div>
                                <div className="StoryText">
                                    디지털 전환(DX : Digital Transformation)은 사용자경험(UX), 직원경험(EX), 고객경험(CX)의 총 합입니다.
                                </div>
                            </div>
                            <div className="BG06" />
                        </div>
                        <div className="Story" style={{ height: "1182px", padding: "140px 0", margin: "-140px 0 0", backgroundColor: "#ecf2f8" }}>
                            <div className="StoryTitleBox">
                                <div className="TopAcc" />
                                <div className="StoryTitle">
                                    Amaranth 10 도입 기대 효과
                                </div>
                                <div className="StoryText">
                                    디지털 혁신을 통해 그동안 경험하지 못한 새로운 가치와 경험을 제공합니다.
                                </div>
                            </div>
                            <div className="StoryBox h-box">
                                <div className="StorySmallBox v-box h-box flex-1">
                                    <div className="LineBlue" />
                                    <div className="SmallBox h-box">
                                        <div className="SmallImg01" />
                                        <div className="v-box">
                                            <div className="SmallTitle">새로운 업무 경험</div>
                                            <div className="StoryT">업무를 더욱 빠르게</div>
                                        </div>
                                    </div>
                                    <div className="StoryLine" />
                                    <div className="TextBox">
                                        통합된 환경에서 업무 프로세스를 단축, 자동화하여<br />
                                        빠르고 정확한 업무가 가능한
                                        <div className="TextPosi h-box">
                                            <div className="TextBold">새로운 업무 경험</div>
                                            을 제공합니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="StorySmallBox v-box h-box flex-1">
                                    <div className="LineBlue" />
                                    <div className="SmallBox h-box">
                                        <div className="SmallImg02" />
                                        <div className="v-box">
                                            <div className="SmallTitle">확장된 협업 경험</div>
                                            <div className="StoryT">소통과 협업을 효율적으로</div>
                                        </div>
                                    </div>
                                    <div className="StoryLine" />
                                    <div className="TextBox">
                                        기업 내 구성원들과 프로젝트, 일정, 문서 중심으로 실시간<br />
                                        빠르게 소통/협업할 수 있는
                                        <div className="TextPosi h-box" style={{ position: "relative", top: "-28px", right: "-206px" }}>
                                            <div className="TextBold">확장된 협업 경험</div>
                                            을 제공합니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="StoryBox h-box">
                                <div className="StorySmallBox v-box h-box flex-1">
                                    <div className="LineBlue" />
                                    <div className="SmallBox h-box">
                                        <div className="SmallImg03" />
                                        <div className="v-box">
                                            <div className="SmallTitle">스마트워크 경험</div>
                                            <div className="StoryT">언제 어디서나 편리하게</div>
                                        </div>
                                    </div>
                                    <div className="StoryLine" />
                                    <div className="TextBox">
                                        시간, 장소에 제약 받지 않고 PC, 모바일 등 어떤 기기에서도<br />
                                        Amaranth 10에 접속할 수 있는
                                        <div className="TextPosi h-box" style={{ position: "relative", top: "-28px", right: "-242px" }}>
                                            <div className="TextBold">스마트워크 경험</div>
                                            을 제공합니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="StorySmallBox v-box h-box flex-1">
                                    <div className="LineBlue" />
                                    <div className="SmallBox h-box">
                                        <div className="SmallImg04" />
                                        <div className="v-box">
                                            <div className="SmallTitle">나와 데이터를 중심으로</div>
                                            <div className="StoryT">업무 현황을 한 눈에</div>
                                        </div>
                                    </div>
                                    <div className="StoryLine" />
                                    <div className="TextBox">
                                        데이터 기반으로 사용자가 원하는 정보를 빠르게 검색하고,<br />
                                        업무를 자동으로 추천하는
                                        <div className="TextPosi h-box" style={{ position: "relative", top: "-28px", right: "-195px" }}>
                                            <div className="TextBold">맞춤형 서비스 경험</div>
                                            을 제공합니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="BannerBox">
                                <div className="BannerBlue">Next ERP, Post Groupware</div>
                                <div className="BannerTitle">세상에 없던 디지털 비즈니스 플랫폼,</div>
                                <div className="TextBold">Amaranth 10의 기능을 확인해 보세요.</div>
                                <div className="BannerBtnBox">
                                    <Link to={MenuUrl.SERVICE_S001} onClick={() => { this.props.handleGnbMenu('service', '1') }}>
                                        <div className="Btn h-box">
                                            <div className="BtnText">서비스소개 자세히 보기</div>
                                            <div className="ArrR" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="Banner" />
                            </div>
                        </div>
                    </div>
                    <div className="BrandSales" style={{ display: this.state.StoryMenu02 ? '' : 'none' }}>
                        <div className="Story">
                            <div className="StoryTitleBox">
                                <div className="TopText">Brand Sales Kit</div>
                                <div className="StoryTitle">
                                    Amaranth 10의 브랜드 정체성을 담아,<br />
                                    다양한 세일즈 킷을 구성하였습니다.
                                </div>
                            </div>
                            <div className="SalesBox">
                                <div className="SalesTitle">서비스 소개 리플릿</div>
                                <div className="LineG" />
                                <div className="BG07" />
                                <div className="BtnBox">
                                    {/* <Link to="/pdfdown/Amaranth 10 리플릿_20210914.pdf" target="_blank" download> */}
                                    <div className="Btn h-box" onClick={() => { window.open("https://online.fliphtml5.com/mmrip/gtrg/"); }}>
                                        <div className="BtnText">다운로드</div>
                                        <div className="DownloadIcon" />
                                    </div>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="SalesBox">
                                <div className="SalesTitle">브로슈어 다운로드</div>
                                <div className="LineG" />
                                <div className="DownloadBox h-box">
                                    <div className="BG08" />
                                    <div className="SalesSmallBox v-box">
                                        <div className="LineBlue" />
                                        <div className="SmallBox h-box">
                                            <div className="v-box">
                                                <div className="SmallTitle">Amaranth 10 General Brochure</div>
                                                <div className="StoryT">Amaranth 10 for General</div>
                                            </div>
                                        </div>
                                        <div className="SalesLine" />
                                        <div className="TextBox">
                                            점점 복잡하고 많아지는 업무! 더욱 빠르고 편리하게 끝내고 싶으신가요?<br />
                                            ERP·그룹웨어·문서관리의 통합으로 하나의 솔루션 그 이상의 가치를 담은<br />
                                            차세대 디지털 비즈니스 플랫폼, Amaranth 10이 해결해드립니다!
                                        </div>
                                        <div className="ColorBlue">Potential Value</div>
                                        <div className="TextBox">
                                            업무에 필요한 A부터 Z까지 모두 담아 하나의 솔루션으로 모든 업무가<br />
                                            가능하고 실시간 소통/협업으로 업무 속도가 빨라지며<br />
                                            업무 데이터를 편리하게 활용할 수 있습니다.
                                        </div>
                                        <div className="BtnBox02">
                                            {/* <Link to="/pdfdown/Amaranth 10_General_spread.pdf" target="_blank" download> */}
                                            <div className="Btn h-box" onClick={() => { window.open("https://online.fliphtml5.com/mmrip/lejw/"); }}>
                                                <div className="BtnText">다운로드</div>
                                                <div className="DownloadIcon" />
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="DownloadBox h-box">
                                    <div className="BG09" />
                                    <div className="SalesSmallBox v-box">
                                        <div className="LineBlue" />
                                        <div className="SmallBox h-box">
                                            <div className="v-box">
                                                <div className="SmallTitle">Amaranth 10 Accounting Manager Brochure</div>
                                                <div className="StoryT">Amaranth 10 for Accounting Manager</div>
                                            </div>
                                        </div>
                                        <div className="SalesLine" />
                                        <div className="TextBox">
                                            복잡하고 많은 회계 데이터를 효율적으로 관리하고 싶으신가요?<br />
                                            ERP·그룹웨어·문서관리의 통합으로 하나의 솔루션 그 이상의 가치를 담은<br />
                                            올인원 디지털 비즈니스 플랫폼, Amaranth 10이 해결해드립니다!
                                        </div>
                                        <div className="ColorBlue">Potential Value</div>
                                        <div className="TextBox">
                                            회계 데이터 입력에서 검증까지 하나의 솔루션에서 빠르고 편리하게 관리가 가능합니다.<br />
                                            자동검증으로 데이터 입력 시간을 줄이고 데이터 중복 및 누락을 방지하여<br />
                                            효율적인 자금 관리 표준 프로세스를 제공합니다.
                                        </div>
                                        <div className="BtnBox02">
                                            {/* <Link to="/pdfdown/Amaranth 10 Brochure(Account Manager)_spread.pdf" target="_blank" download> */}
                                            <div className="Btn h-box" onClick={() => { window.open("https://online.fliphtml5.com/mmrip/qaql/"); }}>
                                                <div className="BtnText">다운로드</div>
                                                <div className="DownloadIcon" />
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="DownloadBox h-box">
                                    <div className="BG10" />
                                    <div className="SalesSmallBox v-box">
                                        <div className="LineBlue" />
                                        <div className="SmallBox h-box">
                                            <div className="v-box">
                                                <div className="SmallTitle">Amaranth 10 HR Manager Brochure</div>
                                                <div className="StoryT">Amaranth 10 for HR Manager</div>
                                            </div>
                                        </div>
                                        <div className="SalesLine" />
                                        <div className="TextBox">
                                            인사 업무를 더욱 효율적으로, 편리하게 하고 싶으신가요?<br />
                                            ERP·그룹웨어·문서관리의 통합으로 하나의 솔루션 그 이상의 가치를 담은<br />
                                            올인원 디지털 비즈니스 플랫폼, Amaranth 10이 해결해드립니다!
                                        </div>
                                        <div className="ColorBlue">Potential Value</div>
                                        <div className="TextBox">
                                            강화된 근로기준법에 근거한 근태관리 시스템을 새롭게 구성하고,<br />
                                            근태관리 프로세스 자동화로 획기적인 시간 절감 및 체계적인 근태 관리가 가능합니다.
                                        </div>
                                        <div className="BtnBox02" style={{ marginTop: "72px" }}>
                                            {/* <Link to="/pdfdown/Amaranth 10 Brochure(HR Manager)_spread.pdf" target="_blank" download> */}
                                            <div className="Btn h-box" onClick={() => { window.open("https://online.fliphtml5.com/mmrip/woly/"); }}>
                                                <div className="BtnText">다운로드</div>
                                                <div className="DownloadIcon" />
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="DownloadBox h-box">
                                    <div className="BG11" />
                                    <div className="SalesSmallBox v-box">
                                        <div className="LineBlue" />
                                        <div className="SmallBox h-box">
                                            <div className="v-box">
                                                <div className="SmallTitle">Amaranth 10 CEO Brochure</div>
                                                <div className="StoryT">Amaranth 10 for CEO</div>
                                            </div>
                                        </div>
                                        <div className="SalesLine" />
                                        <div className="TextBox">
                                            기업의 효율적 경영 방법을 고민 중이신가요?<br />
                                            ERP·그룹웨어·문서관리의 통합으로 하나의 솔루션 그 이상의 가치를 담은<br />
                                            올인원 디지털 비즈니스 플랫폼, Amaranth 10이 해결해드립니다!
                                        </div>
                                        <div className="ColorBlue">Potential Value</div>
                                        <div className="TextBox">
                                            ERP와 그룹웨어, 문서관리가 만나 기업의 성공적인<br />
                                            디지털 전환 및 혁신적인 생산성 향상이 가능합니다.
                                        </div>
                                        <div className="BtnBox02" style={{ marginTop: "72px" }}>
                                            {/* <Link to="/pdfdown/Amaranth 10 Brochure(CEO)_spread.pdf" target="_blank" download> */}
                                            <div className="Btn h-box" onClick={() => { window.open("https://online.fliphtml5.com/mmrip/dqao/"); }}>
                                                <div className="BtnText">다운로드</div>
                                                <div className="DownloadIcon" />
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BrandCharacter" style={{ display: this.state.StoryMenu03 ? '' : 'none' }}>
                        <div className="Story">
                            <div className="StoryTitleBox">
                                <div className="TopText">Brand Character</div>
                                <div className="StoryTitle">
                                    Amaranth 10은 캐릭터를 통해<br />
                                    소통의 가치를 이해하고 새로운 문화를 제시합니다.
                                </div>
                            </div>
                            <div className="SalesBox">
                                <div className="SalesTitle">Animal Character</div>
                                <div className="LineG" />
                                <div className="Text">
                                    Amaranth 10의 동물 캐릭터는 다양한 비즈니스 상황을 연출하여 챗봇과 메신저 이모티콘 등 커뮤니케이션 수단으로 활용이 가능하며, <br />
                                    개별 및 모임형으로 연출하여 사용이 가능합니다.
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox01 h-box">
                                        <div className="CharacterName01">하모니</div>
                                        <div className="CharacterName02">Hamoni</div>
                                    </div>
                                    <div className="CharacterText">
                                        균형있고 조화로운 업무를 지향하는 웰시코기 하모니<br />
                                        언제나 열정이 넘치고 감정표현이 풍부한 신입사원 캐릭터
                                    </div>
                                    <div className="BG12" />
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox02 h-box">
                                        <div className="CharacterName03">코뮤니</div>
                                        <div className="CharacterName04">Comnuni</div>
                                    </div>
                                    <div className="CharacterText">
                                        말을 조리있게 잘 하는 소통쟁이 보더콜리 코뮤니<br />
                                        똑똑하고 맡은 업무를 완벽하게 해내는 중간직급 캐릭터
                                    </div>
                                    <div className="BG13" />
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox03 h-box">
                                        <div className="CharacterName05">셰어</div>
                                        <div className="CharacterName06">Share</div>
                                    </div>
                                    <div className="CharacterText">
                                        똑부러지게 정보를 나누고 공유하는 허스키 셰이<br />
                                        리더로서 전문적이고 카리스마 있는 고위직급자 캐릭터
                                    </div>
                                    <div className="BG14" />
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox04 h-box">
                                        <div className="CharacterName07">모임형</div>
                                        <div className="CharacterName08">Together</div>
                                    </div>
                                    <div className="BG15" />
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox05 h-box">
                                        <div className="CharacterName09">응용A. 챗봇(모바일/웹)</div>
                                    </div>
                                    <div className="BG16" />
                                </div>
                                <div className="CharacterBox">
                                    <div className="CharacterTitleBox06 h-box">
                                        <div className="CharacterName10">응용B. 메신저 이모티콘</div>
                                    </div>
                                    <div className="BG17" />
                                </div>
                            </div>
                            <div className="SalesBox">
                                <div className="SalesTitle">Human Character</div>
                                <div className="LineG" />
                                <div className="Text">
                                    Amaranth 10의 인물 캐릭터는 다양한 비즈니스 상황을 연출하여 커뮤니케이션 수단으로 활용이 가능합니다.
                                </div>
                                <div className="BG18" />
                                <div className="HumanAll h-box">
                                    <div className="HumanBox">
                                        <div className="HumanText">Main Character</div>
                                    </div>
                                    <div className="HumanBox">
                                        <div className="HumanText">Sub Character</div>
                                    </div>
                                    <div className="HumanBox">
                                        <div className="HumanText">Simple Character</div>
                                    </div>
                                </div>
                                <div className="BG19" />
                                <div className="BG20" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}