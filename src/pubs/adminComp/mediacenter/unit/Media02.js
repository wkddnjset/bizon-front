import React, { Component, Fragment } from 'react';

// 보도자료 등록 및 수정 페이지
export default class Media02 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // 드롭다운리스트
            inTxt01: 'CEO 칼럼',
            SelectBoxOpen01: false,

            // 최상단노출
            btnY: true,
            btnN: false,

            // 라디오
            selectValue01: 'radio01',
        
        }
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        this.setState({
            SelectBoxOpen01:!this.state.SelectBoxOpen01,
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

    // 라디오버튼
    handleRadioClick01 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue01: 'radio01' })
        }else if (type === '2') {
            this.setState ({ selectValue01: 'radio02' })
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
                <div id="MediaCenter02">
                    <div className="title01">보도자료</div>
                    <div className="textBox h-box">
                        {/* 수정 화면에서 활성화 */}
                        <div className="cor h-box" style={{display:"none"}}>
                            <div>수정일 :&nbsp;</div>
                            <div>2021.09.01</div>
                        </div>
                        
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
                            </colgroup>
                            <tr>
                                <th>
                                    <div  className="h-box">
                                        <div>구분</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('CEO 칼럼');}}>CEO 칼럼</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('Amaranth 10');}}>Amaranth 10</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>상태</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio01" id="radio01" value="radio01" checked={this.state.selectValue01 === "radio01"} onClick={()=>{this.handleRadioClick01('1')}}/><label for="radio01">노출</label>
                                        <input type="radio" name="btnradio01" id="radio02" value="radio02" checked={this.state.selectValue01 === "radio02"} onClick={()=>{this.handleRadioClick01('2')}}/><label for="radio02">비노출</label>
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
                                <td>
                                    <div className="InputBox01 h-box">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>등록일</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td>
                                    {/* 달력 */}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>내용</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="InputBox02 h-box" style={{width:"",height:""}}>
                                        <textarea className="Textarea" placeholder="내용은 300자 이내로 입력해주세요."/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>출처</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="InputBox04">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>링크</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="InputBox04">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={()=>{this.props.handleGnbMenu('media','2')}}>취소</button>
                            </div>
                            <button className="btn">저장</button>
                            
                            {/* 수정 화면에서 활성화 */}
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