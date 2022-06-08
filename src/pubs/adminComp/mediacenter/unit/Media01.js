import React, { Component, Fragment } from 'react';

// 광고 등록 및 수정 페이지
export default class Media01 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // 드롭다운리스트
            inTxt01: 'TVCF',
            SelectBoxOpen01: false,

            // 최상단노출
            btnY: true,
            btnN: false,

            // 라디오
            selectValue01: 'radio01',
            selectValue02: 'radio03',
        
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

    // 최상단노출 Y/N
    handleBtnYesOrNo = (type) => {
        if (type === '1') {
            this.setState({ btnY: true, btnN: false })
        }else if (type === '2') {
            this.setState({ btnY: false, btnN: true })
        }
    }

    // 라디오버튼
    handleRadioClick01 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue01: 'radio01' })
        }else if (type === '2') {
            this.setState ({ selectValue01: 'radio02' })
        }
    }

    handleRadioClick02 = (type) => {
        if (type === '1') {
            this.setState ({ selectValue02: 'radio03' })
        }else if (type === '2') {
            this.setState ({ selectValue02: 'radio04' })
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
                <div id="MediaCenter01">
                    <div className="title01">광고</div>
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
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('TVCF');}}>TVCF</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('지면광고');}}>지면광고</li>
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
                                    <div className="h-box" style={{display: this.state.inTxt01 === 'TVCF' ? '' : 'none'}}>
                                        <div>썸네일</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                    <div className="h-box" style={{display: this.state.inTxt01 === '지면광고' ? '' : 'none'}}>
                                        <div>첨부파일</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="h-box" style={{alignItems:"center"}}>
                                        <div className="InputBox03">
                                            <input className="InputText" type="text"/>
                                        </div>
                                        <button className="btn">파일 선택</button>
                                        
                                        {/* 수정 화면에서 삭제버튼 활성화 */}
                                        <button className="btn" style={{display:"none"}}>삭제</button>
                                    </div>
                                    <div className="text02" style={{display: this.state.inTxt01 === 'TVCF' ? '' : 'none'}}>가로 632px * 세로 359px만 등록 가능합니다.</div>
                                </td>
                            </tr>
                            <tr style={{display: this.state.inTxt01 === 'TVCF' ? '' : 'none'}}>
                                <th>
                                    <div className="h-box">
                                        <div>첨부 URL</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio02" id="radio03" value="radio03" checked={this.state.selectValue02 === "radio03"} onClick={()=>{this.handleRadioClick02('1')}}/><label for="radio03">위스튜디오</label>
                                        <input type="radio" name="btnradio02" id="radio04" value="radio04" checked={this.state.selectValue02 === "radio04"} onClick={()=>{this.handleRadioClick02('2')}}/><label for="radio04">유튜브</label>
                                    </div>
                                    <div className="InputBox04">
                                        <input className="InputText" type="text"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>최상단 노출</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="btnBox01 h-box">
                                        <div className={`btn01 ${this.state.btnY ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('1')}}>Y</div>
                                        <div className={`btn01 ${this.state.btnN ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('2')}}>N</div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={()=>{this.props.handleGnbMenu('media','1')}}>취소</button>
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