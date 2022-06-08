import React, { Component, Fragment } from 'react';

// 도입문의 조회 페이지
export default class Intro01 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // 드롭다운리스트
            inTxt01: '제조업',
            inTxt02: '음/식료',
            inTxt03: '10인 미만',
            inTxt04: '구글 광고/검색',
            txtBox: false,
            SelectBoxOpen01: false,
            SelectBoxOpen02: false,
            SelectBoxOpen03: false,
            SelectBoxOpen04: false,

            // 구분 라디오
            selectValue01: false,
            selectValue02: false,
            selectValue03: false,
            selectValue04: false,
            selectValue05: false,
            selectValue06: false,
            disabled: true,

            // 서비스유형 라디오
            selectValue07: 'radio07',
            
            // 광고수신 라디오
            selectValue08: 'radio09',
        
        }
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        if (type === '1') {
            this.setState({
                SelectBoxOpen01:!this.state.SelectBoxOpen01, SelectBoxOpen02:false, SelectBoxOpen03:false, SelectBoxOpen04:false,
            });
        }else if (type === '2') {
            this.setState({
                SelectBoxOpen01:false, SelectBoxOpen02:!this.state.SelectBoxOpen02, SelectBoxOpen03:false, SelectBoxOpen04:false,
            });
        }else if (type === '3') {
            this.setState({
                SelectBoxOpen01:false, SelectBoxOpen02:false, SelectBoxOpen03:!this.state.SelectBoxOpen03, SelectBoxOpen04:false,
            })
        }else if (type === '4') {
            this.setState({
                SelectBoxOpen01:false, SelectBoxOpen02:false, SelectBoxOpen03:false, SelectBoxOpen04:!this.state.SelectBoxOpen04,
            })
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01:false, SelectBoxOpen02:false, SelectBoxOpen03:false, SelectBoxOpen04:false,
        });
    }

    handleSelectValue = (select,txt) => {
        if (select === 'select01') {
            this.setState({
                inTxt01:txt,
            });
        }else if (select === 'select02') {
            this.setState({
                inTxt02:txt
            });
        }else if (select === 'select03') {
            this.setState({
                inTxt03:txt
            });
        }else if (select === 'select04') {
            this.setState({
                inTxt04:txt
            });
        }
    }

    handleValueClick = (type) => {
        if (type === '1') {
            this.setState({ inTxt02: '음/식료', txtBox: false })
        }else if (type === '2') {
            this.setState({ inTxt02: '의료', txtBox: false })
        }else if (type === '3') {
            this.setState({ inTxt02: '건설', txtBox: false })
        }else if (type === '4') {
            this.setState({ txtBox: true })
        }
    }

    // 라디오버튼
    handleRadioClick01 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue01:!this.state.selectValue01, })
        }else if (type === '2') {
            this.setState ({ selectValue02:!this.state.selectValue02, })
        }else if (type === '3') {
            this.setState ({ selectValue03:!this.state.selectValue03, })
        }else if (type === '4') {
            this.setState ({ selectValue04:!this.state.selectValue04, })
        }else if (type === '5') {
            this.setState ({ selectValue05:!this.state.selectValue05, })
        }else if (type === '6') {
            this.setState ({ selectValue06:!this.state.selectValue06, disabled:!this.state.disabled, })
        }
    }

    handleRadioClick02 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue07: 'radio07' })
        }else if (type === '2') {
            this.setState ({ selectValue07: 'radio08' })
        }
    }

    handleRadioClick03 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue08: 'radio09' })
        }else if (type === '2') {
            this.setState ({ selectValue08: 'radio10' })
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
                <div id="introduction">
                    <div className="title01">도입문의</div>
                    <div className="textBox h-box">
                        <div className="textA h-box">
                            <div className="textBlue">*</div>
                            <div>은 필수 입력 입니다.</div>
                        </div>
                    </div>

                    {/* 그리드 영역 */}
                    <div className="gridTableBasic">
                        <table>
                            <colgroup>
                                <col width="120"/>
                                <col width=""/>
                                <col width="120"/>
                                <col width=""/>
                                <col width="120"/>
                                <col width=""/>
                            </colgroup>
                            <tr>
                                <th>
                                    <div  className="h-box">
                                        <div>구분</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                    <div style={{marginTop:"-10px"}}>(문의유형)</div>
                                </th>
                                <td colSpan={3}>
                                    <div className="CheckBox">
                                        <div className="h-box flex-1">
                                            <input type="radio" name="btnradio01" id="radio01" value="radio01" checked={this.state.selectValue01} onClick={()=>{this.handleRadioClick01('1')}}/><label for="radio01">주요기능</label>
                                            <input type="radio" name="btnradio02" id="radio02" value="radio02" checked={this.state.selectValue02} onClick={()=>{this.handleRadioClick01('2')}}/><label for="radio02">제품가격</label>
                                            <input type="radio" name="btnradio03" id="radio03" value="radio03" checked={this.state.selectValue03} onClick={()=>{this.handleRadioClick01('3')}}/><label for="radio03">구축기간</label>
                                            <input type="radio" name="btnradio04" id="radio04" value="radio04" checked={this.state.selectValue04} onClick={()=>{this.handleRadioClick01('4')}}/><label for="radio04">도입방법</label>
                                            <input type="radio" name="btnradio05" id="radio05" value="radio05" checked={this.state.selectValue05} onClick={()=>{this.handleRadioClick01('5')}}/><label for="radio05">이벤트</label>
                                        </div>
                                        <div className="h-box more">
                                            <input type="radio" name="btnradio06" id="radio06" value="radio06" checked={this.state.selectValue06} onClick={()=>{this.handleRadioClick01('6')}}/><label for="radio06">기타</label>
                                            <div className={`InputBox01 h-box ${this.state.disabled ? 'on':''}`}>
                                                <input className="InputText" type="text" disabled={this.state.disabled}/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>서비스 유형</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio07" id="radio07" value="radio07" checked={this.state.selectValue07 === "radio07"} onClick={()=>{this.handleRadioClick02('1')}}/><label for="radio07">구축형</label>
                                        <input type="radio" name="btnradio07" id="radio08" value="radio08" checked={this.state.selectValue07 === "radio08"} onClick={()=>{this.handleRadioClick02('2')}}/><label for="radio08">클라우드형</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>제목</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="InputBox02 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>작성자</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="InputBox02 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>업종</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="h-box">
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
                                        <div className="SelectBox" style={{display: this.state.txtBox ? 'none':''}}>
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('2');}}>{this.state.inTxt02}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen02 ? '' : 'none'}}>
                                                <ul style={{display: this.state.inTxt01 === '제조업' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','음/식료');}}>음/식료</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','의약');}}>의약</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','화약');}}>화약</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','직물/제지');}}>직물/제지</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','석유제품');}}>석유제품</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','철');}}>철</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','기계');}}>기계</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','전기');}}>전기</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','자동차');}}>자동차</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','유리/시멘트');}}>유리/시멘트</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','의류');}}>의류</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','기타');}}>기타</li>
                                                </ul>
                                                <ul style={{display: this.state.inTxt01 === '서비스업' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','의료');}}>의료</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','교육');}}>교육</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','법률');}}>법률</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','외교');}}>외교</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','국방');}}>국방</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','관광');}}>관광</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','기타');}}>기타</li>
                                                </ul>
                                                <ul style={{display: this.state.inTxt01 === '일반' ? '' : 'none'}}>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','건설');}}>건설</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','공공사업');}}>공공사업</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','도/소매');}}>도/소매</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','무역');}}>무역</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','금융/보험');}}>금융/보험</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','기타');}}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen02 ? 'down':'up'}`}/>
                                        </div>
                                        <div className="InputBox03 h-box" style={{display: this.state.inTxt02 === '기타' || this.state.txtBox ? '' : 'none'}}>
                                            <input className="InputText" type="text" placeholder="업종을 입력해주세요."/>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>회사명</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="InputBox02 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>연락처</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="InputBox02 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>이메일</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="InputBox02 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>직원수</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('3');}}>{this.state.inTxt03}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen03 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','10인 미만');}}>10인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','10인 이상 50인 미만');}}>10인 이상 50인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','50인 이상 100인 미만');}}>50인 이상 100인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','100인 이상 500인 미만');}}>100인 이상 500인 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','500인 이상 1000명 미만');}}>500인 이상 1000명 미만</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','1000명 이상');}}>1000명 이상</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen03 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>유입경로</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('4');}}>{this.state.inTxt04}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen04 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','구글 광고/검색');}}>구글 광고/검색</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','네이버 광고/검색');}}>네이버 광고/검색</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','SNS');}}>SNS</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','뉴스/기사');}}>뉴스/기사</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','지인 추천');}}>지인 추천</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','전시/컨퍼런스');}}>전시/컨퍼런스</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','이벤트');}}>이벤트</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','사용경험');}}>사용경험</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select04','기타');}}>기타</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen04 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>광고수신</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio08" id="radio09" value="radio09" checked={this.state.selectValue08 === "radio09"} onClick={()=>{this.handleRadioClick03('1')}}/><label for="radio09">Y</label>
                                        <input type="radio" name="btnradio08" id="radio10" value="radio10" checked={this.state.selectValue08 === "radio10"} onClick={()=>{this.handleRadioClick03('2')}}/><label for="radio10">N</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>내용</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={5}>
                                    <div className="InputBox02 h-box" style={{width:"",height:""}}>
                                        <textarea className="Textarea"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>첨부파일</div>
                                    </div>
                                </th>
                                <td colSpan={5}>
                                    
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={()=>{this.props.handleGnbMenu('introduction','1')}}>취소</button>
                            </div>
                            <div style={{display:"none"}}>
                                <button className="btn">수정</button>
                                <button className="btn" style={{marginLeft:"10px"}}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}