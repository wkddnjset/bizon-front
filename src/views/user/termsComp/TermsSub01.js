import React, { Component, Fragment } from 'react';
import TermsSubLnb from './unit/TermsSubLnb';

// 개인정보처리방침
export default class TermsSub01 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            SelectBoxOpen01:false,

            inTxt01:'2021년 10월 19일',

        }
    }

    handleSelectBoxToggle = () => {
        this.setState({
            SelectBoxOpen01:!this.state.SelectBoxOpen01
        });
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01:false,
        });
    }

    handleSelectValue = (txt) => {
        this.setState({
            inTxt01:txt
        });
    }

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);

        if(this.props.history) {
            this.props.handleGnbMenu('terms', '1');
        }
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
        }

    render() {
        return (
            <Fragment>
                <TermsSubLnb
                    termsSub01={this.props.termsSub01}
                    termsSub02={this.props.termsSub02}
                    termsSub03={this.props.termsSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext04={this.props.Titletext04}
                />
                <div id="TermsSub01">
                    <div className="TermsTopBox h-box">
                        <div className="TermsTilte flex-1">개인정보처리방침</div>
                            <div className="TermsSelect h-box">
                                <div className="SelectBox flex-1">
                                    <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                    <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                    <ul></ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                            </div>
                        </div>
                    </div>
                    <div className="TermsText">Amaranth 10 서비스의 이용과 관련하여 필요한 사항을 규정합니다.</div>
                    <div className="TextBox">
                        <div className="Text01">
                            주식회사 더존비즈온(이하 “더존비즈온”이라 함)은 개인정보보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 정보주체의 개인정보<br/>
                            및 권익을 보호하고 개인정보와 관련한 정보주체의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                        </div>
                        <div className="Text02">
                            • 본 개인정보 처리방침은 더존비즈온의 Amaranth 10 서비스 이용에 적용됩니다.
                        </div>
                        <div className="Text03">
                            ① &nbsp;&nbsp;개인정보의 처리 목적<br/>
                            ② &nbsp;&nbsp;개인정보의 항목 및 수집방법<br/>
                            ③ &nbsp;&nbsp;개인정보의 처리 및 보유 기간<br/>
                            ④ &nbsp;&nbsp;정보주체의 권리·의무 및 그 행사방법<br/>
                            ⑤ &nbsp;&nbsp;개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br/>
                            ⑥ &nbsp;&nbsp;개인정보 파기<br/>
                            ⑦ &nbsp;&nbsp;개인정보의 안전성 확보 조치<br/> 
                            ⑧ &nbsp;&nbsp;개인정보 보호책임자<br/>
                            ⑨ &nbsp;&nbsp;권익침해 구제 방법<br/>
                            ⑩ &nbsp;&nbsp;개인정보 처리방침 변경<br/>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">1. 개인정보의 처리 목적</div>
                        <div className="TextSmallBox">
                            <div className="Text01">더존비즈온은 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 정보주체의 사전동의를 구하여 처리하도록 하겠습니다.</div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">가.</div>
                                <div className="Text03">
                                    홈페이지 이용자 관리 및 이용자 광고 수신 의사 확인, 이용자 자격 유지, 본인 확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지·통지,고충처리, 분쟁<br/>
                                    조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.
                                </div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">나.</div>
                                <div className="Text03">재화 또는 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공 등을 목적으로 개인정보를 처리합니다.</div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">다.</div>
                                <div className="Text03">
                                    마케팅 및 광고의 활용 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고<br/>
                                    게재, 서비스의 유효성 확인, 접속빈도 파악 또는 이용자의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">2. 개인정보의 항목 및 수집방법</div>
                        <div className="TextSmallBox">
                            <div className="TextBlue">가. 개인정보 수집 항목</div>
                            <div className="TextBox02">
                                <div className="SmallText">첫째, 더존비즈온은 원활한 고객상담, 각종 서비스의 제공을 위해 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.(14세 미만의 경우 법정 대리인)</div>
                                <div className="SmallText" style={{lineHeight:"1.8"}}>
                                    • 필수항목 : 이름, 이메일, 전화번호, 회사명, 업종, 직원수<br/>
                                    • 선택항목 : 직원수, 유입경로, 광고수신여부
                                </div>
                                <div className="SmallText" style={{marginTop:"20px"}}>둘째, 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</div>
                                <div className="SmallText">• 필수항목 : 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속기록</div>
                            </div>
                            <div className="TextBlue">나. 개인정보 수집 방법</div>
                            <div className="TextBox02">
                                <div className="SmallText">- 더존 Amaranth 10 홈페이지, 서면양식, 팩스, 전화, 상담 게시판, 이메일</div>
                            </div>
                            <div className="TextBlue">다. 동의를 거부할 권리 및 동의 거부에 따른 불이익</div>
                            <div className="TextBox02">
                                <div className="TextRed">
                                    - 필수 정보 및 필수 정보 외 선택 정보 수집에 대한 동의를 거부할 권리가 있습니다. 선택 정보란 보다 특화된 서비스를 제공하기 위해 추가 수집하는 정보로서<br/>
                                    &nbsp;&nbsp;선택 정보 수집에 동의하지 않은 경우에도 기본적인 서비스 이용에 제한은 없으나, 특화된 서비스 이용은 제한될 수 있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">3. 개인정보의 처리 및 보유 기간</div>
                        <div className="TextSmallBox">
                            <div className="Text01">
                                더존비즈온은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서<br/>
                                개인정보를 처리·보유합니다.
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">가.</div>
                                <div className="Text03">홈페이지 이용자 관리, 민원사무 처리, 재화 또는 서비스 제공, 마케팅 및 광고의 활용과 관련한 개인정보는 수집·이용에 관한 동의일로부터 파기일까지 위 이용목적을 위하여 보유·이용됩니다.</div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">나.</div>
                                <div className="Text03">상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 이용자 정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.</div>
                            </div>
                            <div className="TextBox02 h-box" style={{marginTop:"10px"}}>
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    계약 또는 청약철회 등에 관한 기록 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br/>
                                    보존 기간 : 5년
                                </div>
                            </div>
                            <div className="TextBox02 h-box">
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    대금결제 및 재화 등의 공급에 관한 기록 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br/>
                                    보존 기간 : 5년
                                </div>
                            </div>
                            <div className="TextBox02 h-box">
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    전자금융 거래에 관한 기록 보존 이유 : 전자금융거래법<br/>
                                    보존 기간 : 5년
                                </div>
                            </div>
                            <div className="TextBox02 h-box">
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    세금계산서 발행에 관한 기록 보존 이유 : 부가가치세법<br/>
                                    보존 기간 : 5년
                                </div>
                            </div>
                            <div className="TextBox02 h-box">
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    소비자의 불만 또는 분쟁처리에 관한 기록 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br/>
                                    보존 기간 : 3년
                                </div>
                            </div>
                            <div className="TextBox02 h-box">
                                <div className="Acc">•</div>
                                <div className="SmallText">
                                    신용정보의 수집/처리 및 이용 등에 관한 기록 보존 이유 : 신용정보의 이용 및 보호에 관한 법률<br/>
                                    보존 기간 : 3년
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">4. 정보주체의 권리·의무 및 그 행사방법</div>
                        <div className="TextSmallBox">
                            <div className="Text01">정보주체는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">가.</div>
                                <div className="Text03">정보주체는 더존비즈온에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</div>
                            </div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{lineHeight:"1.9"}}>
                                    첫째, 개인정보 열람요구<br/>
                                    둘째, 오류 등이 있을 경우 정정 요구<br/>
                                    셋째, 삭제요구<br/>
                                    넷째, 처리정지 요구
                                </div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">나.</div>
                                <div className="Text03">제1항에 따른 권리 행사는 더존비즈온에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며<br/>더존비즈온은 이에 대해 지체 없이 조치하겠습니다.</div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">다.</div>
                                <div className="Text03">정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 더존비즈온은 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나<br/>제공하지 않습니다.</div>
                            </div>
                            <div className="TextBox01 h-box">
                                <div className="Text02">라.</div>
                                <div className="Text03">제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지<br/>제11호 서식에 따른 위임장을 제출하셔야 합니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">5. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</div>
                        <div className="TextSmallBox">
                            <div className="Text01">
                                더존비즈온은 정보주체의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다.<br/>
                                쿠키란 웹사이트를 운영하는데 이용되는 서버가 정보주체의 브라우저에 보내는 아주 작은 텍스트 파일로서 정보주체의 컴퓨터 하드디스크에<br/>저장됩니다. 더존비즈온은 다음과 같은 목적을 위해 암호화된 쿠키를 사용합니다.
                            </div>
                            <div className="TextBlue">가. 쿠키 등 사용 목적</div>
                            <div className="TextBox02">
                                <div className="SmallText">이용자의 접속 빈도나 방문 시간 등을 분석, 정보주체의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 정보주체는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 정보주체는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</div>
                            </div>
                            <div className="TextBlue">나. 쿠키 설정 거부 방법</div>
                            <div className="TextBox02">
                                <div className="SmallText">
                                    (예: 쿠키 설정을 거부하는 방법으로는 이용자님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.)<br/>
                                    설정방법 : 예(인터넷 익스플로어의 경우) =&gt; 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보<br/>
                                    (크롬의 경우) =&gt; 웹 브라우저 우측의 설정 메뉴 &gt; 화면 하단의 고급 설정 표시 &gt; 개인정보의 콘텐츠 설정 버튼 &gt; 쿠키<br/>
                                    (단, 정보주체가 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">6. 개인정보 파기</div>
                        <div className="TextSmallBox">
                            <div className="Text01">
                                더존비즈온은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은<br/>
                                다음과 같습니다.
                            </div>
                            <div className="TextBox01">
                                <div className="Text03">• 파기절차</div>
                            </div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"-5px"}}>정보주체가 입력한 정보는 보유기간이 경과했거나 처리목적이 달성된 후 내부 방침 및 관련 법령에 법령에 따라 파기합니다.</div>
                            </div>
                            <div className="TextBox01">
                                <div className="Text03">• 파기기한</div>
                            </div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"-5px"}}>정보주체의 개인정보는 개인정보의 보유기간이 경과된 경우 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지,<br/>사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.</div>
                            </div>
                            <div className="TextBox01">
                                <div className="Text03">• 파기방법</div>
                            </div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"-5px"}}>더존비즈온에서 처리하는 개인정보를 파기할 때에는 다음의 방법으로 파기합니다.</div>
                                <div className="SmallText" style={{marginLeft:"-8px"}}>• 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</div>
                                <div className="SmallText" style={{marginLeft:"-8px"}}>• 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">7. 개인정보의 안전성 확보 조치</div>
                        <div className="TextSmallBox">
                            <div className="Text01">더존비즈온은 개인정보 보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</div>
                            <div className="TextBlue">가. 개인정보 처리 직원의 최소화 및 교육</div>
                            <div className="TextBox02">
                                <div className="SmallText">개인정보를 처리하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</div>
                            </div>
                            <div className="TextBlue">나. 내부관리계획의 수립 및 시행</div>
                            <div className="TextBox02">
                                <div className="SmallText">개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</div>
                            </div>
                            <div className="TextBlue">다. 개인정보의 암호화</div>
                            <div className="TextBox02">
                                <div className="SmallText">
                                    정보주체의 개인정보는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을<br/>
                                    사용하는 등의 별도 보안기능을 사용하고 있습니다.
                                </div>
                            </div>
                            <div className="TextBlue">라. 해킹 등에 대비한 기술적 대책</div>
                            <div className="TextBox02">
                                <div className="SmallText">
                                    더존비즈온은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터<br/>
                                    접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                                </div>
                            </div>
                            <div className="TextBlue">마. 개인정보에 대한 접근 제한</div>
                            <div className="TextBox02">
                                <div className="SmallText">개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</div>
                            </div>
                            <div className="TextBlue">바. 문서보안을 위한 잠금장치 사용</div>
                            <div className="TextBox02">
                                <div className="SmallText">개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</div>
                            </div>
                            <div className="TextBlue">사. 비인가자에 대한 출입 통제</div>
                            <div className="TextBox02">
                                <div className="SmallText">개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">8. 개인정보의 안전성 확보 조치</div>
                        <div className="TextSmallBox">
                            <div className="TextBox01 h-box" style={{marginLeft:"25px"}}>
                                <div className="Text02">가.</div>
                                <div className="Text03">더존비즈온은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</div>
                            </div>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 개인정보 보호책임자</div>
                            <table>
                                <tr>
                                    <th>성명</th>
                                    <td>정재근</td>
                                </tr>
                                <tr>
                                    <th>직책</th>
                                    <td>플렛폼개발센터장</td>
                                </tr>
                                <tr>
                                    <th>직급</th>
                                    <td>이사</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>02-1688-7001</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>avatarjk@douzone.com</td>
                                </tr>
                            </table>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 개인정보 보호 담당부서</div>
                            <table>
                                <tr>
                                    <th>부서명</th>
                                    <td>정보보안팀</td>
                                </tr>
                                <tr>
                                    <th>담당자</th>
                                    <td>정현민 과장</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>02-1688-7001</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>hmjeong1@douzone.com</td>
                                </tr>
                            </table>
                            <div className="TextBox01 h-box" style={{marginLeft:"25px"}}>
                                <div className="Text02">나.</div>
                                <div className="Text03">정보주체는 더존비즈온의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 더존비즈온은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">9. 권익침해 구제방법</div>
                        <div className="TextSmallBox">
                            <div className="Text01">
                            아래는 더존비즈온과는 별개의 기관으로서 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이<br/>필요하시면 문의하여 주시기 바랍니다.
                            </div>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 개인정보 침해신고센터 (한국인터넷진흥원 운영)</div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"25px",lineHeight:"1.9"}}>
                                    - 소관업무 : 개인정보 침해사실 신고, 상담 신청 <br/>
                                    - 홈페이지 : privacy.kisa.or.kr <br/>
                                    - 전화 : (국번없이) 118 
                                </div>
                            </div>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 개인정보 분쟁조정위원회 (개인정보보호위원회 운영) </div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"25px",lineHeight:"1.9"}}>
                                    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) <br/>
                                    - 홈페이지 : www.kopico.go.kr<br/>
                                    - 전화 : 1833-6972 
                                </div>
                            </div>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 대검찰청 사이버수사과</div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"25px",lineHeight:"1.9"}}>
                                    - 홈페이지 : http://www.spo.go.kr <br/>
                                    - 전화 : 국번없이 1301
                                </div>
                            </div>
                            <div className="TextBlue" style={{marginLeft:"50px"}}>• 경찰청 사이버안전국</div>
                            <div className="TextBox02">
                                <div className="SmallText" style={{marginLeft:"25px",lineHeight:"1.9"}}>
                                    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) 
                                    - 홈페이지 : http://cyberbureau.police.go.kr
                                    - 전화 : 국번없이 182
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TermsAllBox">
                        <div className="TermsTitle">10. 개인정보 처리방침의 변경</div>
                        <div className="TextSmallBox">
                            <div className="Text01">
                            이 개인정보처리방침은 2021년 10월 19일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                            </div>
                            <div className="TextBlue" style={{fontSize:"20px",fontFamily:"NSKR"}}>본 방침은 2021년 10월 19일부터 시행됩니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                </div>
            </Fragment>
        );
    }
}