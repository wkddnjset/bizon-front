import React, { Component, Fragment } from 'react';
import TermsSubLnb from './unit/TermsSubLnb';

// 이용약관
export default class TermsSub02 extends Component {
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
                <div id="TermsSub02">
                    <div className="TermsTopBox h-box">
                        <div className="TermsTilte flex-1">이용약관</div>
                            <div className="TermsSelect h-box">
                                <div className="SelectBox flex-1">
                                    <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                    <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                    <ul>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('날짜1');}}>날짜1</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('날짜2');}}>날짜2</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('날짜3');}}>날짜3</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                            </div>
                        </div>
                    </div>
                    <div className="TermsText">Amaranth 10 서비스의 이용과 관련하여 필요한 사항을 규정합니다.</div>
                    <div className="TextBox">
                        <div className="Text03">
                            제1조 목적 등<br/>
                            제2조 이용자의 정의 및 인증<br/>
                            제3조 콘텐츠 및 지적재산권 보호<br/>
                            제4조 서비스의 중단<br/>
                            제5조 이용자의 개인정보보호<br/>
                            제6조 회사의 의무<br/>
                            제7조 이용자의 의무<br/>
                            제8조 공개게시물의 삭제<br/>
                            제9조 회사의 면책조항
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제 1조 (목적 등)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">이 약관은 (주)더존비즈온 (이하 “회사”라 한다)이 Amaranth 10 웹사이트(amaranth10.com)를 통해 고객(이하 “이용자”라 한다)에게 제공하는 세미나 예약 서비스 및 인터넷 관련 서비스(이하 “서비스”라 합니다)를 이용함에 있어 이용자와 회사의 권리•의무 및 책임사항을 규정함을 목적으로 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">이 약관은 이용자에게 서비스 화면을 통해 공지하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">3.</div>
                            <div className="Txt">서비스를 이용하고자 하는 경우 회사가 정한 소정의 절차를 거치면 본 약관에 동의 하는 것으로 간주합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">4.</div>
                            <div className="Txt">회사는 영업상 필요 또는 기타 사정 변경이 있을 때 약관을 변경할 수 있으며, 그 내용을 서비스 제공자의 웹사이트의 “서비스” 관련 페이지에 공지합니다. 이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우 서비스 이용이 중단될 수 있습니다. 이용자가 서비스 제공자에 대하여 거부의 의사표시를 하지 않는 경우 이용자는 변경된 약관에 동의한 것으로 간주됩니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">5.</div>
                            <div className="Txt">새로운 서비스가 개설될 경우 별도의 명시된 설명이 없는 한, 이 약관에 따라 제공합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">6.</div>
                            <div className="Txt">이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따르며 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제2조 (이용자의 정의 및 인증)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">“이용자”란 서비스제공 웹사이트에 접속하는 자를 말합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">회사는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제3조 (콘텐츠 및 지적재산권 보호)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">회사에서 제공하는 콘텐츠라 함은 회사 웹사이트에서 제공하는 모든 문자, 파일, 그래픽, 소프트웨어를 의미합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">회사에서 서비스 하는 모든 콘텐츠 내용에 대한 저작권은 다음 두 경우로 분류됩니다.</div>
                        </div>
                        <div className="TxtBox">
                            <div className="ATbox h-box">
                                <div className="Acc">•</div>
                                <div className="Txt02">더존비즈온 자체개발 콘텐츠: 더존비즈온 저작권 소유</div>
                            </div>
                            <div className="ATbox h-box">
                                <div className="Acc">•</div>
                                <div className="Txt02">
                                    별도 제공처가 표기된 콘텐츠: 콘텐츠 제공처 저작권 소유 별도로 제공처가 표기된 콘텐츠는 모든 법적 책임이 내용을 제공한 제공처에 있으며, <br/>
                                    회사에서는 해당 서비스제공 페이지에 같은 내용을 공지하여 사용자의 이해를 돕도록 합니다. 더존비즈온에서 서비스 하는 모든 내용들은 <br/>
                                    지적 재산권에 의해 보호 받으며 회사의 사전 승인없이 어떠한 경우도 대여, 배포, 판매 행위가 금지되어 있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제4조 (서비스의 중단)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">회사는 컴퓨터 등 정보통신설비의 보수점검•교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있고, 새로운 서비스로의 교체 또는 기타 회사가 적절하다고 판단하는 사유에 기하여 현재 제공되는 서비스를 완전히 중단할 수 있습니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">제1항에 의한 서비스 중단의 경우에는 회사는 이용자에게 웹사이트를 통해 공지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 서비스의 중단 (시스템 관리자의 고의/과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제5조 (이용자의 개인정보보호)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">회사는 관계법령이 정하는 바에 따라서 이용자의 개인정보를 보호하기 위하여 노력합니다. 이용자의 개인정보보호에 관해서는 관련법령 및 회사가 정하는 개인정보보호정책에 정한 바에 의합니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제6조 (회사의 의무)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">회사는 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위해서 노력 할 것입니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">회사는 개인정보보호법 등 관계법령이 정하는 바에 따라 이용자의 개인정보를 안전하게 보호하기 위하여 노력할 것 입니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">3.</div>
                            <div className="Txt">회사는 약관의 규제에 관한 법률 등 관계법령이 정하는 바에 따라 이용자가 서비스를 이용하는 과정에서 부당한 불이익을 당하는 일이 없도록 최선의 노력을 다 할 것입니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제7조 (이용자의 의무)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">이용자는 이 약관 및 관계 법령에서 규정한 사항을 준수하여야 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">이용자는 Email, 연락처 등 이용신청사항이 변경된 경우에는 서비스 또는 전화 등을 통하여 이를 즉시 회사에 알려야 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">3.</div>
                            <div className="Txt">이용자는 각 서비스섹션(채널)별로 정보제공자가 정하여 회사를 통해 서비스에 게시 하거나 별도로 고지한 이용제한 사항을 준수하여야 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">4.</div>
                            <div className="Txt">서비스에서 얻은 정보를 회사의 사전승낙 없이 복제 및 변경하여 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위를 하지 않아야 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">5.</div>
                            <div className="Txt">회사의 저작권, 제 3자의 저작권 등 기타 권리를 침해하는 행위를 하지 않아야 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">6.</div>
                            <div className="Txt">이용자는 회사의 사전 승낙 없이 서비스를 이용한 영업행위를 할 수 없으며, 이에 따른 결과로 인하여 발생한 결과에 대해서는 회사가 책임지지 않습니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">7.</div>
                            <div className="Txt">이용자는 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">8.</div>
                            <div className="Txt">이용자는 다음 각 호의 행위를 하여서는 안됩니다.</div>
                        </div>
                        <div className="TxtBox">
                            <div className="ATbox h-box">
                                <div className="Txt02" style={{marginLeft:"5px",lineHeight:"1.95"}}>
                                    ①&nbsp;&nbsp;허위내용을 등록하는 행위<br/>
                                    ②&nbsp;&nbsp;관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)의 전송 또는 게시하는 행위<br/>
                                    ③&nbsp;&nbsp;선량한 풍속, 기타 사회질서를 해하는 행위<br/>
                                    ④&nbsp;&nbsp;회사 또는 기타 제3자의 인격권 또는 지적재산권을 침해하거나 업무를 방해하는 행위<br/>
                                    ⑤&nbsp;&nbsp;정보통신설비의 오동작이나 정보 등의 파괴를 유발시키는 해킹 또는 컴퓨터 바이러스 프로그램 등의 유포 행위<br/> 
                                    ⑥&nbsp;&nbsp;불특정 다수의 자를 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송하는 행위<br/>
                                    ⑦&nbsp;&nbsp;서비스의 안정적 운영에 지장을 초래하는 다량의 자료 송수신, 게시물 등록, 기타 건전한 서비스 이용에 반하는 행위<br/>
                                    ⑧&nbsp;&nbsp;회사의 직원이나 서비스 관리자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위<br/>
                                    ⑨&nbsp;&nbsp;스토킹(stalking) 등 다른 이용자를 괴롭히는 행위<br/>
                                    ⑩&nbsp;&nbsp;다른 이용자에 대한 개인정보를 동의 없이 수집, 저장, 공개하는 행위<br/>
                                    ⑪&nbsp;&nbsp;회사가 제공하는 서비스에 정한 약관 및 이용규칙에서 정한 사항을 위반하는 행위<br/>
                                    ⑫&nbsp;&nbsp;기타 관계법령에 위배되는 행위
                                </div>
                            </div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">9.</div>
                            <div className="Txt">이용자는 그 귀책사유로 인하여 회사나 다른 이용자가 입은 손해를 배상할 책임이 있습니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제8조 (공개게시물의 삭제)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">이용자가 웹사이트에서 작성 게시한 공개 게시물에 대한 저작권 등 권리는 회사에 귀속 됩니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">이용자의 공개게시물의 내용이 다음 각 호에 해당하는 경우 회사는 해당 이용자에게 사전 통지 없이 해당 공개게시물을 삭제할 수 있고, 해당 이용자의 자격을 제한, 정지, 상실시킬 수 있습니다.</div>
                        </div>
                        <div className="TxtBox">
                            <div className="ATbox h-box">
                                <div className="Txt02" style={{marginLeft:"5px",lineHeight:"1.95"}}>
                                    ①&nbsp;&nbsp;다른 이용자 또는 제3자를 비방하거나 중상 모략으로 명예를 손상시키는 내용<br/>
                                    ②&nbsp;&nbsp;미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 유포하는 내용<br/>
                                    ③&nbsp;&nbsp;범죄행위와 관련이 있다고 판단되는 내용<br/>
                                    ④&nbsp;&nbsp;다른 이용자 또는 제3자의 저작권 등 기타 권리를 침해하는 내용<br/>
                                    ⑤&nbsp;&nbsp;주민등록번호 및 전화번호 등의 개인정보보호에 위반되는 내용<br/>
                                    ⑥&nbsp;&nbsp;기타 관계 법령에 위배된다고 판단되는 내용
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">제9조 (회사의 면책조항)</div>
                        <div className="TextSub01 h-box">
                            <div className="Num">1.</div>
                            <div className="Txt">이용자가 회사의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 불이익에 대하여 회사는 책임을 지지 아니합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">2.</div>
                            <div className="Txt">회사는 이용자들의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 아니 합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">3.</div>
                            <div className="Txt">회사는 이용자가 게시 또는 전송한 자료의 내용에 관하여는 책임을 지지 아니합니다.</div>
                        </div>
                        <div className="TextSub01 h-box">
                            <div className="Num">4.</div>
                            <div className="Txt">회사는 이용자 상호간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 물품 거래 등을 한 경우에는 책임을 지지 아니합니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                    <div className="TextSubBox">
                        <div className="Title01">부칙</div>
                        <div className="TextSub01">
                            <div className="TxtBlue">- 이 약관은 2021년 10월 19일부터 시행합니다.</div>
                            <div className="TxtCon">- 이용자의 개인정보에 대해서는 더존비즈온 “개인정보 보호방침”이 작용됩니다.</div>
                        </div>
                    </div>
                    <div className="LineG"/>
                </div>
            </Fragment>
        );
    }
}


