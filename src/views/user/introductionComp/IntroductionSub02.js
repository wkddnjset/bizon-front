import React, { Component, Fragment } from 'react';
import IntroSubLnb from './unit/IntroSubLnb';

// 요금안내
export default class IntroductionSub02 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(this.props.history) {
            this.props.handleGnbMenu('introduction', '2');
        }
    }

    render() {
        return (
            <Fragment>
                <IntroSubLnb  
                introductionSub01={this.props.introductionSub01}
                introductionSub02={this.props.introductionSub02}
                introductionSub03={this.props.introductionSub03}
                handleGnbMenu={this.props.handleGnbMenu}
                Titletext01={this.props.Titletext01}
                handleClickAlert={this.props.handleClickAlert}
                />            
                <div id="IntroductionSub02">
                    <div className="IntroMenu201">
                        <div className="IntroTitle">요금 안내</div>
                        <div className="IntroBox h-box"> 
                            <div className="IntroSmallBox v-box">
                                <div className="LineBlue"/>
                                <div className="SmallBox h-box">
                                    <div className="SmallImg01"/>
                                    <div className="SmallTitle">구축형</div>
                                </div>
                                <div className="IntroT">시스템 연동과 보유 서버를 활용할 수 있는 서비스입니다.</div>
                                <div className="TextBox">
                                    <div className="TextSmallBox h-box">
                                        <div className="ColorBlue">월 40만원</div>
                                        <div className="Ctitle_01">/1유저 사용료</div>
                                    </div>
                                    <div className='textRoom'>
                                        <div className='room1'>
                                            <div className='txt01 h-box'>기본료<em>3,845만원</em></div>
                                            <div className='txt01 h-box'>사용료<em>2,100만원/50유저</em></div>
                                            <div className='txt01 h-box'>구축/교육<em>900만원</em></div>
                                        </div>
                                        <div className='txt01 h-box'>초기 도입비<em>6,845만원</em></div>
                                    </div>
                                    <div className="SmallTextBox">
                                        <div className="SmallText">기본 서비스 포함 (그룹웨어, ERP회계/인사, 문서관리)</div>
                                        <div className="SmallText">구축/교육 18회</div>
                                        <div className="SmallText">커스터마이징 가능 (비용 별도)</div>
                                        <div className="SmallText">서버 협의 별도 가능</div>
                                    </div>
                                </div>
                            </div>
                            <div className="IntroSmallBox v-box">
                                <div className="LineBlue"/>
                                <div className="SmallBox h-box">
                                    <div className="SmallImg02"/>
                                    <div className="SmallTitle">클라우드형</div>
                                </div>
                                <div className="IntroT">합리적인 비용으로 도입할 수 있는 서비스입니다.</div>
                                <div className="TextBox">
                                    <div className="TextSmallBox h-box">
                                        <div className="ColorBlue">월 3만원</div>
                                        <div className="Ctitle_01">/1유저 사용료</div>
                                    </div>
                                    <div className='textRoom'>
                                        <div className='room1'>
                                            <div className='txt01 h-box'>기본료<em>2,500만원</em></div>
                                            <div className='txt01 h-box'>사용료<em>250만원/50유저</em></div>
                                            <div className='txt01 h-box'>구축/교육<em>700만원</em></div>
                                        </div>
                                        <div className='txt01 h-box'>초기 도입비<em>3,450만원</em></div>
                                    </div>
                                    <div className="SmallTextBox">
                                        <div className="SmallText">기본 서비스 포함 (그룹웨어, ERP회계/인사, 문서관리)</div>
                                        <div className="SmallText">구축/교육 16회</div>
                                        <div className="SmallText">최신 업데이트 지원</div>
                                        <div className="SmallText">스토리지 기본 제공</div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        <div className="IntroBG201"/>
                    </div>
                    <div className="IntroMenu202">
                        <div className="IntroTitle">기본 엔진</div>
                        <div className="Table">
                            <table>
                                <tr>
                                    <th className="Th1">
                                        임직원업무관리<br/>
                                        <div className="BoldNo">(For Me)</div>
                                    </th>
                                    <td>
                                        <div className="h-box" style={{marginTop:"-10px"}}>
                                            <div className="TdText">• 품의/지출결의</div>
                                            <div className="TdText">• 경비청구</div>
                                            <div className="TdText">• 세금계산서관리</div>
                                            <div className="TdText">• 업무승용차관리</div>
                                        </div>
                                        <div className="h-box">
                                            <div className="TdText">• 근태관리</div>
                                            <div className="TdText">• 연차/인사관리</div>
                                            <div className="TdText">• 급여/퇴직관리</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        그룹웨어<br/>
                                        <div className="BoldNo">(UC)</div>
                                    </th>
                                    <td>
                                        <div className="h-box" style={{marginTop:"-10px"}}>
                                            <div className="TdText">• 전자결재</div>
                                            <div className="TdText">• 메일</div>
                                            <div className="TdText">• 일정</div>
                                            <div className="TdText">• 게시판</div>
                                        </div>
                                        <div className="h-box">
                                            <div className="TdText">• 자원</div>
                                            <div className="TdText">• 메신저</div>
                                            <div className="TdText">• 통합검색</div>
                                            <div className="TdText">• 업무관리</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>회계</th>
                                    <td>
                                        <div className="h-box" style={{marginTop:"-10px"}}>
                                            <div className="TdText">• 전표장부관리</div>
                                            <div className="TdText">• 결산/재무제표관리</div>
                                            <div className="TdText">• 부가가치세관리</div>
                                            <div className="TdText">• 고정자산관리</div>
                                        </div>
                                        <div className="h-box">
                                            <div className="TdText">• 자금관리</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>인사</th>
                                    <td>
                                        <div className="h-box" style={{marginTop:"-10px"}}>
                                            <div className="TdText">• 인사관리</div>
                                            <div className="TdText">• 근태 및 연차관리</div>
                                            <div className="TdText">• 급여관리</div>
                                            <div className="TdText">• 세무관리</div>
                                        </div>
                                        <div className="h-box">
                                            <div className="TdText">• 사회보험관리</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="Th2">
                                        문서관리<br/>
                                        <div className="BoldNo">(ONECHAMBER)</div>
                                    </th>
                                    <td>
                                        <div className="h-box" style={{marginTop:"-10px"}}>
                                            <div className="TdText">• 문서관리</div>
                                            <div className="TdText">• 보존연한관리</div>
                                            <div className="TdText">• 문서유형관리</div>
                                            <div className="TdText">• 분류체계관리</div>
                                        </div>
                                        <div className="h-box">
                                            <div className="TdText">• 권한관리</div>
                                            <div className="TdText">• 중복문서제거</div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='txt'>* 기본 엔진별 별도 구매는 불가합니다.</div>
                        <div className="IntroBG202"/>     
                    </div>
                    <div className="IntroMenu203">
                        <div className="IntroTitle">구축/교육</div>
                        <div className='introTxt'>최고의 ICT 전문가와 함께 맞춤형 교육이 가능합니다.</div>
                        <div className="Table">
                            <div className='tit01'>구축 컨설팅형</div>
                            <div className='txt01'>방문 11회 + 비대면 5회</div>
                            <div className='boxAll h-box'>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico01'/><div>맞춤형 일정</div>
                                    </div>
                                    <div className='txt'>고객 일정 맞춤형 컨설팅 진행</div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico02'/><div>커스터마이징</div>
                                    </div>
                                    <div className='txt'>고객 니즈 맞춤형 커스터마이징 개발</div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico03'/><div>업무분석</div>
                                    </div>
                                    <div className='txt'>정확한 업무분석을 통한<br/>업무혁신 지원</div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico04'/><div>체계적 관리</div>
                                    </div>
                                    <div className='txt'>PM/PL 전담을 통한 체계적 관리</div>
                                </div>
                            </div>
                        </div>
                        <div className="Table mar">
                            <div className='tit01'>FoEX 구축형</div>
                            <div className='txt01'>방문 2회 + FoEx 6회 + 검증교육 1회</div>
                            <div className='boxAll h-box'>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico05'/><div>효율성 UP</div>
                                    </div>
                                    <div className='txt'>구축기간, 투입비용과<br/>시간 Save</div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico06'/><div>노하우 MAX</div>
                                    </div>
                                    <div className='txt'>다양한 고객사와 제품 활용<br/>노하우 공유</div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico07'/><div className='titBg'>체험공간 제공</div>
                                    </div>
                                    <div className='txt'><em>디지털 혁신</em>을 직접 <em>보고,</em><br/><em>듣고, 체험</em></div>
                                </div>
                                <div className='introBox'>
                                    <div className='title h-box'>
                                        <div className='ico08'/><div className='titBg'>교육비용 절감</div>
                                    </div>
                                    <div className='txt'><em>합리적인</em> <em>교육 비용</em></div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroBG203"/>
                        <div className="BGacc"/>     
                    </div>
                    <div className="IntroMenu204">
                        <div className="IntroTitle">유형별 서비스 옵션</div>
                        <div className="IntroTable h-box">
                            <div className="TableT">구축형</div>
                            <div className="TableT">클라우드형</div>
                        </div>
                        <div className='introTable v-box'>
                            <div className='tr h-box'>
                                <div className='th'>그룹웨어</div>
                                <div className='td'>FIDO</div>
                                <div className='td'>인증모듈</div>
                                <div className='tdImg01'/>
                                <div className='tdImg01 just'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>USB 인증장치</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>팩스/문자</div>
                                <div className='td bor'>~50유저</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 bor just'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>51~100유저</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>101~200유저</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>201~300유저</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td bor'>301~500유저</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='th bor'>문서관리</div>
                                <div className='td02 bor'>원챔버 스토리지 요금제</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='th bor'>회계관리</div>
                                <div className='td02 bor'>금융서비스 연동</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>그룹 재무제표</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>스마트증빙</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg02 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>자동전표처리</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>개인형 계좌/스크래핑</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg02 bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='th bor'>임직원업무관리</div>
                                <div className='td02 bor'>근태 리더기 연동</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg01 just bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='th bor'>백업</div>
                                <div className='td02 bor'>전용 라이선스</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg02 bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>전용 설치비</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg02 bor'/>
                            </div>
                            <div className='tr h-box'>
                                <div className='td02 bor'>전용 운영서버(300유저 미만)</div>
                                <div className='tdImg01 bor'/>
                                <div className='tdImg02 bor'/>
                            </div>
                            <div className='tr h-box bb'>
                                <div className='td02 bor'>전용 운영서버(300유저 이상)</div>
                                <div className='tdImg01 mm bor'/>
                                <div className='tdImg02 bor'/>
                            </div>
                        </div>
                        <div className="AttendBox">
                            <div className="AttendSmallBox h-box">
                                <div className="AttendIcon"/>
                                <div className="AttendTitle">유의사항</div>
                            </div>
                            <div  className="AttendTextBox">
                                <div className="AttendText">• 부가세는 별도입니다.</div>
                                <div className="AttendText">
                                    • Amaranth 10 요금플랜은 기업의 규모와 특성에 맞게 새로운 기능이 추가되거나 제거될 수 있습니다.<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;변경사항이 있을 경우, 가입된 고객에게 별도로 안내드릴 예정입니다.
                                </div>
                                <div className="AttendText">• Amaranth 10 서비스 이용에 따른 대금결제는 신한은행을 통해 대납하시거나 직접 결제로 사용하실 수 있습니다.</div>
                            </div>
                        </div>
                        <div className="IntroBG204"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}