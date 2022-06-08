import React, { Component, Fragment } from 'react';
import IntroSubLnb from './unit/IntroSubLnb';

// 도입문의
export default class IntroductionSub03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            SelectBoxOpen01:false,
            SelectBoxOpen02:false,
            SelectBoxOpen03:false,
            SelectBoxOpen04:false,
            
            inTxt01:'업종 선택',
            inTxt02:'선택',
            inTxt03:'선택',
            inTxt04:'선택',
            txtBox:false,

            select01:true,
            select02:false,

            AgreeClick01:false,
            AgreeClick02:true,
            AgreeClick03:false,
            AgreeClick04:true,

            check01: false,
            check02: false,
            check03: false,
            check04: false,
            check05: false,
            check06: false,
            disabled: true,

        }
    }

    handleSelectBoxToggle = (type) => {
        if(type === '1'){
            this.setState({
                SelectBoxOpen01:!this.state.SelectBoxOpen01,SelectBoxOpen02:false,SelectBoxOpen03:false,SelectBoxOpen04:false,
            });
        }else if(type === '2'){
            this.setState({
                SelectBoxOpen01:false,SelectBoxOpen02:!this.state.SelectBoxOpen02,SelectBoxOpen03:false,SelectBoxOpen04:false,
            });
        }else if(type === '3'){
            this.setState({
                SelectBoxOpen01:false,SelectBoxOpen02:false,SelectBoxOpen03:!this.state.SelectBoxOpen03,SelectBoxOpen04:false,
            });
        }else if(type === '4'){
            this.setState({
                SelectBoxOpen01:false,SelectBoxOpen02:false,SelectBoxOpen03:false,SelectBoxOpen04:!this.state.SelectBoxOpen04,
            });
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01:false,SelectBoxOpen02:false,SelectBoxOpen03:false,SelectBoxOpen04:false,
        });
    }

    handleSelectValue = (select,txt) => {
        if(select === 'select01'){
            this.setState({ inTxt01:txt, });
        }else if(select === 'select02'){
            this.setState({ inTxt02:txt, });
        }else if(select === 'select03'){
            this.setState({ inTxt03:txt, });
        }else if(select === 'select04'){
            this.setState({ inTxt04:txt, });
        }
    }

    handleValueClick = (type) => {
        if (type === '1') {
            this.setState({ inTxt04: '선택', select01:false, txtBox: false, })
        }else if (type === '2') {
            this.setState({ inTxt04: '선택', select01:false, txtBox: false, })
        }else if (type === '3') {
            this.setState({ inTxt04: '선택', select01:false, txtBox: false, })
        }else if (type === '4') {
            this.setState({ inTxt04: '선택', select01:false, txtBox: true, })
        }
    }

    handleCheckClick = (type) => {
        if(type === '1'){
            this.setState({ check01:!this.state.check01, })
        }else if(type === '2'){
            this.setState({ check02:!this.state.check02, })
        }else if(type === '3'){
            this.setState({ check03:!this.state.check03, })
        }else if(type === '4'){
            this.setState({ check04:!this.state.check04, })
        }else if(type === '5'){
            this.setState({ check05:!this.state.check05, })
        }else if(type === '6'){
            this.setState({ check06:!this.state.check06, disabled:!this.state.disabled, })
        }
    }

    handleAgreeCheck = (type) => {
        if(type ==='1'){
            this.setState({
                AgreeClick01:!this.state.AgreeClick01,AgreeClick02:false,
            })
        }else if(type ==='2'){
            this.setState({
                AgreeClick01:false,AgreeClick02:!this.state.AgreeClick02,
            })
        }else if(type ==='3'){
            this.setState({
                AgreeClick03:!this.state.AgreeClick03,AgreeClick04:false,
            })
        }else if(type ==='4'){
            this.setState({
                AgreeClick03:false,AgreeClick04:!this.state.AgreeClick04,
            })
        }
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
                <IntroSubLnb  
                introductionSub01={this.props.introductionSub01}
                introductionSub02={this.props.introductionSub02}
                introductionSub03={this.props.introductionSub03}
                handleGnbMenu={this.props.handleGnbMenu}
                Titletext01={this.props.Titletext01}
                handleClickAlert={this.props.handleClickAlert}
                />                
                <div id="IntroductionSub03">
                    <div className="IntroMenu301">
                        <div className="IntroTitle">도입문의</div>
                        <div className="IntroTitleText">도입에 필요한 궁금증, 더존ICT 전문 컨설턴트가 해결해 드립니다.</div>
                        <div className="IntroSmallTitleBox h-box">
                            <div className="IntroSmallTitle01 flex-1">문의내용 작성</div>
                            <div className="IntroSmallTitle02 h-box">
                                <div className="ColorBlue">*</div>
                                표기는 필수 선택 및 입력 항목입니다.
                            </div>
                        </div>
                        <table>
                            <tr className="h-box">
                                <th className="h-box">업종<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','제조업');this.handleValueClick('1');}}>제조업</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','서비스업');this.handleValueClick('2');}}>서비스업</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','일반');this.handleValueClick('3');}}>일반</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','기타');this.handleValueClick('4');}}>기타</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                                    </div>
                                    <div style={{display: this.state.txtBox ? 'none':''}}>
                                        <div className='NoSelectBox' style={{display: this.state.select01 ? '':'none'}}>
                                            <div className='inbox'>업종을 선택해주세요.</div>
                                            <div className='arr'/>
                                        </div>
                                        <div className="SelectBox" style={{display: this.state.select01 ? 'none':''}}>
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('4');}}>{this.state.inTxt04}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen04 ? '': 'none'}}>
                                                <ul style={{display: this.state.inTxt01 === '제조업' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','음/식료');}}>음/식료</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','의약');}}>의약</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','화약');}}>화약</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','직물/제지');}}>직물/제지</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','석유제품');}}>석유제품</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','철');}}>철</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','기계');}}>기계</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','전기');}}>전기</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','자동차');}}>자동차</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','유리/시멘트');}}>유리/시멘트</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','의류');}}>의류</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','기타');}}>기타</li>
                                                </ul>
                                                <ul style={{display: this.state.inTxt01 === '서비스업' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','의료');}}>의료</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','교육');}}>교육</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','법률');}}>법률</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','외교');}}>외교</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','국방');}}>국방</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','관광');}}>관광</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','기타');}}>기타</li>
                                                </ul>
                                                <ul style={{display: this.state.inTxt01 === '일반' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','건설');}}>건설</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','공공사업');}}>공공사업</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','도/소매');}}>도/소매</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','무역');}}>무역</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','금융/보험');}}>금융/보험</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','기타');}}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen04 ? 'down':'up'}`}/>
                                        </div>
                                    </div>
                                    <div className="InputBox h-box" style={{display: this.state.txtBox ? '':'none'}}>
                                        <input className="InputText" type="text" placeholder="업종을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">회사명<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="회사명을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">직원수<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('2')}}>{this.state.inTxt02}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen02 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','10인 미만');}}>10인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','10인 이상 50인 미만');}}>10인 이상 50인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','50인 이상 100인 미만');}}>50인 이상 100인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','100인 이상 500인 미만');}}>100인 이상 500인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','100인 이상 500인 미만');}}>100인 이상 500인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','1000명 이상');}}>1000명 이상</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen02 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">이름<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="이름을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">연락처<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="'-'없이 숫자만 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">이메일<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="InputBox h-box">
                                        <input className="InputText" type="text" placeholder="예) amaranth10@douzone.com"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">유입경로</th>
                                <td className="h-box">
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('3')}}>{this.state.inTxt03}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen03 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','구글광고/검색');}}>구글광고/검색</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','네이버광고/검색');}}>네이버광고/검색</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','SNS');}}>SNS</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','뉴스/기사');}}>뉴스/기사</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','지인추천');}}>지인추천</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','전시/컨퍼런스');}}>전시/컨퍼런스</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','이벤트');}}>이벤트</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','사용경험');}}>사용경험</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','기타');}}>기타</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen03 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">서비스유형<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio" id="radio01"/><label for="radio01">구축형</label>
                                        <input type="radio" name="btnradio" id="radio02"/><label for="radio02">클라우드형</label>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">문의유형<div className="ColorBlue">*</div></th>
                                <td>
                                    <div className="checkBox h-box">
                                        <div className={`check01 ${this.state.check01 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('1');}}>주요기능</div>
                                        <div className={`check01 ${this.state.check02 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('2');}}>제품가격</div>
                                        <div className={`check01 ${this.state.check03 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('3');}}>구축기간</div>
                                        <div className={`check01 ${this.state.check04 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('4');}}>도입방법</div>
                                        <div className={`check01 ${this.state.check05 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('5');}}>이벤트</div>
                                    </div>
                                    <div className='checkBox h-box'>
                                        <div className={`check01 ${this.state.check06 ? 'IconOff':''}`} onClick={()=>{this.handleCheckClick('6');}}>기타</div>
                                        <div className={`InputBox h-box ${this.state.disabled ? 'disa':''}`}>
                                            <input className={`InputText ${this.state.disabled ? 'disa':''}`} type="text" disabled={this.state.disabled}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">제목<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <div className="InputBox h-box" style={{width:"900px",height:"44px"}}>
                                        <input className="InputText" type="text" placeholder="제목을 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">문의내용<div className="ColorBlue">*</div></th>
                                <td className="h-box">
                                    <textarea className="Textarea" placeholder="문의하실 내용을 입력해주세요. (가격, 보안강도, 관리자 기능 등)&#13;&#10;* 개인정보보호를 위해 문의 내용에는 휴대폰 번호 등의 개인정보 입력을 지양해 주시기 바랍니다."/>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">파일첨부</th>
                                <td>
                                    <div className="h-box">
                                        <div className="InputBox h-box" style={{width:"802px",height:"44px"}}>
                                            <input className="InputText" type="text" readOnly/>
                                        </div>
                                        <div className="inputBtn">찾아보기</div>
                                    </div>
                                    <div className="inputT">첨부파일은(JPG,GIF,PNG,PDF,HWP,PPT,XLS,DOC,ZIP등) 문서와 이미지만 가능하며 10MB까지만 업로드하실 수 있습니다.</div>
                                </td>
                            </tr>
                            <tr className="h-box">
                                <th className="h-box">개인정보 수집/<br/>이용동의</th>
                                <td>
                                    <div className="AgreeBox">
                                        <div className="AgreeText">
                                            더존비즈온에서 제공하는 Amaranth 10 홈페이지에서는 개인정보의 수집, 이용 등 처리에 있어 아래의<br/>
                                            사항을 정보주체에게 안내합니다.<br/><br/>
                                            1. 개인정보 수집/이용 목적<br/>
                                            - 제품소개, 컨설팅 요청 상담 등 고객문의 처리<br/>
                                            - (마케팅 정보 수신 동의 시) 더존비즈온의 제품/서비스 정보 및 이벤트, 교육을 전화, 문자, 이메일로 안내<br/><br/>
                                            2. 수집하는 개인정보 항목<br/>
                                            - 필수항목 : 이름, 연락처, 이메일<br/><br/>
                                            3. 개인정보 보유 및 이용기간<br/>
                                            - 관련법령에 따라 1년간 보관후 삭제   
                                        </div>
                                    </div>
                                    <div className="AgreeBtnBox">
                                        <div className="AgreeBtn h-box">
                                            <div className="AgreeIconOn" style={{display:this.state.AgreeClick01 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('2');}}/>
                                            <div className="AgreeIconOff" style={{display:this.state.AgreeClick02 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('1');}}/>
                                            <div className="AgreeBtnText h-box">
                                                개인정보 수집 및 이용에 대한 안내에 동의합니다.&nbsp;
                                                <div className="ColorBlue">(필수)</div>
                                            </div>
                                        </div>
                                        <div className="AgreeBtn h-box">
                                        <div className="AgreeIconOn" style={{display:this.state.AgreeClick03 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('4');}}/>
                                            <div className="AgreeIconOff" style={{display:this.state.AgreeClick04 ? '':'none'}} onClick={()=>{this.handleAgreeCheck('3');}}/>
                                            <div className="AgreeBtnText h-box">
                                                프로모션 및 마케팅 정보 수신에 동의합니다.&nbsp;
                                                <div className="ColorGray">(선택)</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div className="IntroBtnBox">
                            <div className="IntroBtn02 h-box">
                                <div className="BtnText">문의하기</div>
                                <div className="IntroArrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


