import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../../context/url'; 
import * as HttpUtils from "../../../common/js/HttpUtils"
import * as ApiUrl from '../../../context/BackEndProtocol'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

// 팝업관리 등록 및 수정 페이지
export default class Pop01 extends Component {
    
    popSeq = 0;
    constructor(props) {
        super(props);
        this.state = {

            inTxt01: '전체',
            SelectBoxOpen01: false,

            btnY: true,
            btnN: false,

            selectValue: 'radio01',

            popDiv: '',
            popState: 1, // 노출
            popRegDt: '',
            popDisplayYn: 'Y',
            popDisplayFrom: '',
            popDisplayTo: '',
            uploadFileName: '',

            saveAttachSeq: 0,
            saveAttachSubSeq: 0,
            saveAttachFileName: '',

            delFileSeqs: []
        }

        //input file Tag Ref 정보
        this.hidInputFileRef = React.createRef();
    }

    setDatePickerValue(stateName, stateValue) {
        this.setState({
            [stateName]: stateValue
        });
    }

    searchFileClick() {
        this.hidInputFileRef.current.click();
    }

    selectedFileChange(e) {
        
        const prevAttachFileSubSeq = this.state.saveAttachSubSeq;
        this.setState({
            saveAttachSubSeq: 0,
            delFileSeqs: prevAttachFileSubSeq != 0 ? [...this.state.delFileSeqs, prevAttachFileSubSeq] : this.state.delFileSeqs,
            uploadFileName : e.currentTarget.files[0].name
        });

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

    handleSelectValue = (select, code, txt) => {
        this.setState({
            popDiv: code,
            inTxt01:txt
        });
    }

    // 전시기간 Y/N
    handleBtnYesOrNo = (type) => {
        if (type === '1') {
            this.setState({ popDisplayYn: 'Y', btnY: true, btnN: false })
        }else if (type === '2') {
            this.setState({ popDisplayYn: 'N', btnY: false, btnN: true })
        }
    }

    // 라디오버튼
    handleRadioClick = (type) => {
        this.setState({
            selectValue: type === '0' ? 'radio02' : 'radio01',
            popState: type
        });
    }

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);

        //데이터 바인딩
        if(this.props.location.state != undefined) {
            
            this.popSeq = this.props.location.state.popSeq;
            document.getElementById('txtPopTitle').value = this.props.location.state.popTitle;
            document.getElementById('txtPopLandingUrl').value = this.props.location.state.popLandingUrl;

            if(this.props.location.state.popDisplayYn === 'Y') {
                this.setState({
                
                    popDiv: this.props.location.state.popDiv,
                    inTxt01: this.props.location.state.popDivTxt,
                    
                    popState: this.props.location.state.popState,
                    selectValue: this.props.location.state.popState === '0' ? 'radio02' : 'radio01',
                    
                    popRegDt: new Date(this.props.location.state.popRegDt),

                    popDisplayFrom: new Date(this.props.location.state.popDisplayFrom),
                    popDisplayTo: new Date(this.props.location.state.popDisplayTo),

                    popDisplayYn: this.props.location.state.popDisplayYn,
                    btnY: true,
                    bntN: false,
                    
                    saveAttachSeq: this.props.location.state.uploadFileInfo.attachSeq,
                    saveAttachSubSeq: this.props.location.state.uploadFileInfo.attachSubSeq,
                    saveAttachFileName: this.props.location.state.uploadFileInfo.originFileName + '.' + this.props.location.state.uploadFileInfo.fileExt
                });
            }
            else if(this.props.location.state.popDisplayYn === 'N') {
                this.setState({
                
                    popDiv: this.props.location.state.popDiv,
                    inTxt01: this.props.location.state.popDivTxt,
                    
                    popState: this.props.location.state.popState,
                    selectValue: this.props.location.state.popState === '0' ? 'radio02' : 'radio01',
                    
                    popRegDt: new Date(this.props.location.state.popRegDt),

                    popDisplayYn: this.props.location.state.popDisplayYn,
                    btnY: false,
                    btnN: true,

                    saveAttachSeq: this.props.location.state.uploadFileInfo.attachSeq,
                    saveAttachSubSeq: this.props.location.state.uploadFileInfo.attachSubSeq,
                    saveAttachFileName: this.props.location.state.uploadFileInfo.originFileName + '.' + this.props.location.state.uploadFileInfo.fileExt
                });
            }
            else {
                console.log('데이터 오류');
            }
        }
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    delFileBtnClick = () => {
        
        if(window.confirm('삭제하시겠습니까?')) {

            const prevAttachFileSubSeq = this.state.saveAttachSubSeq;
            this.setState({
                saveAttachSubSeq: 0,
                saveAttachFileName: '',
                delFileSeqs: prevAttachFileSubSeq != 0 ? [...this.state.delFileSeqs, prevAttachFileSubSeq] : this.state.delFileSeqs,
            });

        }

    }

    cancelBtnClick = () => {
     
        if(this.popSeq === 0) {
            //신규등록
            if(window.confirm('취소하시겠습니까?')) {
                window.history.back();
            }
        }
        else {
            //수정
            if(this.compareUserInput()) {
                if(window.confirm('취소하시겠습니까?')) {
                    window.history.back();
                }
            }
            else {
                //해당 화면은 수정에서만 올 수 있기 때문에 아래와 같이 적용
                window.history.back();
            }
        }
    }

    compareUserInput = () => {

        let originObj = this.props.location.state, modifyObj = this.state;

        // 구분
        if(originObj.popDiv != modifyObj.popDiv) {
            return true;
        }

        // 상태
        if(originObj.popState != modifyObj.popState) {
            return true;
        }

        // 제목
        if(originObj.popTitle != document.getElementById('txtPopTitle').value) {
            return true;
        }

        // 등록일
        if(originObj.popRegDt.replace(/\./g, '') != this.convertDateToString(modifyObj.popRegDt)) {
            return true;
        }

        // 전시기간 여부
        if(originObj.popDisplayYn != (modifyObj.btnY ? 'Y' : 'N')) {
            return true;
        }

        // 전시기간 날짜
        if(originObj.popDisplayYn == 'Y' && modifyObj.btnY) {
            //from 날짜
            if(originObj.popDisplayFrom.replace(/\./g, '') != this.convertDateToString(modifyObj.popDisplayFrom)) {
                return true;
            }

            //to 날짜
            if(originObj.popDisplayTo.replace(/\./g, '') != this.convertDateToString(modifyObj.popDisplayTo)) {
                return true;
            }
        }

        // 첨부파일
        if(this.state.delFileSeqs.length > 0) {
            return true;
        }

        // 랜딩 URL 
        if(originObj.popLandingUrl != document.getElementById('txtPopLandingUrl').value) {
            return true;
        }

        return false;
    }

    deletePopMgrData = () => {
        if(window.confirm('삭제하시겠습니까?')) {
       
            const param = {
                popSeq: this.popSeq
            }
    
            HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_DELETEPOPUPDATA, param)
            .then((jsonObj) => {
                if(jsonObj.resultCode === '1') {
                    alert(jsonObj.resultMsg);
                    
                    //리스트 화면으로 이동
                    window.history.back();
                }
                else {
                    alert(jsonObj.resultMsg);
                } 
            }).catch(e => console.log(e));
        }
    }

    setPopupData() {

        //필수 값 체크
        if(this.checkInputData()) {
            alert('"*"는 필수 입력 값입니다. 모두 입력해 주세요.');
            return;
        }

        //전시기간 날짜 체크
        if(this.state.popDisplayYn ==='Y') {
            if(this.state.popDisplayFrom > this.state.popDisplayTo) {
                alert('전시기간 날짜에서 시작일이 종료일보다 늦습니다.');
                return;
            }
        }

        const formData = new FormData();
        formData.append('popSeq', this.popSeq); // 팝업관리 KEY
        formData.append('popDiv', this.state.popDiv); // 구분
        formData.append('popState', this.state.popState); // 상태
        formData.append('popTitle', document.getElementById('txtPopTitle').value); // 제목 
        formData.append('popDisplayYn', this.state.popDisplayYn); // 전시기간 여부 ( Y, N ) 
        formData.append('popDisplayFrom', this.convertDateToString(this.state.popDisplayFrom)); // 전시기간 FROM
        formData.append('popDisplayTo', this.convertDateToString(this.state.popDisplayTo)); // 전시기간 TO
        formData.append('popLandingUrl', document.getElementById('txtPopLandingUrl').value); // 랜딩 URL 
        formData.append('popRegDt', this.convertDateToString(this.state.popRegDt)); // 등록일
        
        formData.append('attachSeq', this.state.saveAttachSeq); // 첨부파일 메인 KEY ( 등록 : 0 , 수정 : KEY값 )
        formData.append('attachSubSeq', this.state.saveAttachSubSeq); // 첨부파일 서브 KEY 

        formData.append('deleteFiles', this.state.delFileSeqs); // 삭제 처리될 첨부파일 Sub KEY 정보

        for (let i = 0; i < this.hidInputFileRef.current.files.length; i++) {
            formData.append("files", this.hidInputFileRef.current.files[i]);
        }

        HttpUtils.callAuthFormPostMethod(ApiUrl.ADMIN_SETPOPUPDATA, formData)
        .then((jsonObj) => {
            if(jsonObj.resultCode === '1') {
                alert(jsonObj.resultMsg);
                
                //리스트 화면으로 이동
                window.history.back();
            }
            else {
                alert(jsonObj.resultMsg);
            }
        }).catch(e => console.log(e));
 
    }

    checkInputData = () => {

        //구분
        if(this.state.popDiv === '') {
            return true;
        }
        //제목
        if(document.getElementById('txtPopTitle').value.trim() === '') {
            return true;
        }

        //등록일
        if(!this.state.popRegDt) {
            return true;
        }

        //전시기간 날짜 입력
        if(this.state.popDisplayYn === 'Y' && (!this.state.popDisplayFrom || !this.state.popDisplayTo)) {
            return true;
        }

        //첨부파일
        //수정 인 경우에는 없어도 됨 ( 단, 기존에 올린 첨부파일을 삭제 안한 경우에만 )
        if(this.popSeq > 0) {
            //수정
            if(this.state.saveAttachSubSeq === 0) {
                if(this.hidInputFileRef.current.files.length < 1) {
                    return true;
                }
            }
        }
        else {
            //신규 등록
            if(this.hidInputFileRef.current.files.length < 1) {
                return true;
            }
        }

        return false;
    }

    convertDateToString(date) {

        if(date) {
            const yyyy = date.getFullYear();
            const MM = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

            return yyyy + '' + MM + '' + dd;
        }
        else {
            return "";
        }
    }

    render() {
        return (
            <Fragment>
                <div id="popUp">
                    <div className="title01">팝업관리</div>
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
                            <tbody>
                                <tr>
                                    <th>
                                        <div  className="h-box">
                                            <div>구분</div>
                                            <div className="textBlue">*</div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                                <ul>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', '', '전체');}}>전체</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'DE', '일반');}}>일반</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'EM', '긴급');}}>긴급</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'UP', '업데이트');}}>업데이트</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'EV', '이벤트');}}>이벤트</li>
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
                                            <input type="radio" name="btnradio" id="radio01" value="radio01" checked={this.state.selectValue === "radio01"} onChange={()=>{this.handleRadioClick('1')}} /><label htmlFor="radio01">노출</label>
                                            <input type="radio" name="btnradio" id="radio02" value="radio02" checked={this.state.selectValue === "radio02"} onChange={()=>{this.handleRadioClick('0')}} /><label htmlFor="radio02">비노출</label>
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
                                            <input className="InputText" type="text" id='txtPopTitle' />
                                        </div>
                                    </td>
                                    <th>
                                        <div className="h-box">
                                            <div>등록일</div>
                                            <div className="textBlue">*</div>
                                        </div>
                                    </th>
                                    <td>
                                        <DatePicker 
                                            dateFormat="yyyy-MM-dd"
                                            locale={ko}
                                            showPopperArrow={false}
                                            selected={this.state.popRegDt}
                                            onChange={(date) => this.setDatePickerValue('popRegDt', date)}
                                            customInput={<input type="text" style={{width: '30%', height: '30px'}} value={this.state.popRegDt} onInput={(e) => { e.target.value = ''; }} />}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <div className="h-box">
                                            <div>전시기간</div>
                                            <div className="textBlue">*</div>
                                        </div>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="btnBox01 h-box">
                                            <div className={`btn01 ${this.state.btnY ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('1')}}>Y</div>
                                            <div className={`btn01 ${this.state.btnN ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('2')}}>N</div>
                                        </div>
                                        <div className="h-box">
                                            <div className={`InputBox02 ${this.state.btnN ? 'on':''}`} style={{paddingLeft: "0" }}>
                                                <div style={{display: this.state.btnN ? 'none': ''}}>
                                                    <DatePicker 
                                                        dateFormat="yyyy-MM-dd"
                                                        locale={ko}
                                                        showPopperArrow={false}
                                                        selected={this.state.popDisplayFrom}
                                                        onChange={(date) => this.setDatePickerValue('popDisplayFrom', date)}
                                                        customInput={<input className="InputText" type="text" value={this.state.popDisplayFrom} />}
                                                    />
                                                </div>
                                            </div>
                                            <div style={{margin:"13px 10px 0"}}>-</div>
                                            <div className={`InputBox02 ${this.state.btnN ? 'on':''}`} style={{paddingLeft: "0" }}>
                                                <div style={{display: this.state.btnN ? 'none': ''}}>
                                                    <DatePicker 
                                                        dateFormat="yyyy-MM-dd"
                                                        locale={ko}
                                                        showPopperArrow={false}
                                                        selected={this.state.popDisplayTo}
                                                        onChange={(date) => this.setDatePickerValue('popDisplayTo', date)}
                                                        customInput={<input className="InputText" type="text" value={this.state.popDisplayTo} />}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <div className="h-box">
                                            <div>첨부파일</div>
                                            <div className="textBlue">*</div>
                                        </div>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="h-box" style={{alignItems:"center"}}>
                                            <div className="InputBox03">
                                                <input className="InputText" value={this.state.uploadFileName} readOnly/>
                                            </div>
                                            <input type="file" ref={this.hidInputFileRef} 
                                                        onChange={this.selectedFileChange.bind(this)}  style={{display: 'none'}}/>
                                            <button className="btn" onClick={this.searchFileClick.bind(this)}>파일 선택</button>

                                            {/* 수정 화면에서 삭제버튼 활성화 */}
                                            <div style={{paddingLeft: '15px'}}>{this.state.saveAttachFileName}</div>
                                            <button className="btn" style={{display: this.state.saveAttachFileName === '' ?'none' : ''}} onClick={this.delFileBtnClick}>삭제</button>
                                        </div>
                                        <div className="text02">가로 600px * 세로 700px만 등록 가능합니다.</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>랜딩 URL</th>
                                    <td colSpan={3}>
                                        <div className="InputBox04 h-box">
                                            <input className="InputText" type="text" id="txtPopLandingUrl"/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={this.cancelBtnClick.bind(this)}>취소</button>
                            </div>
                            <button className="btn" style={{display: this.popSeq === 0 ? "" : "none"}} onClick={this.setPopupData.bind(this)} >저장</button>
                            
                            {/* 수정 화면에서 활성화 */}
                            <div style={{display: this.popSeq === 0 ? "none" : ""}}>
                                <button className="btn" onClick={this.setPopupData.bind(this)}>수정</button>
                                <button className="btn" style={{marginLeft:"10px"}} onClick={this.deletePopMgrData.bind(this)}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}