import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../../context/url'; 
import * as HttpUtils from "../../../common/js/HttpUtils"
import * as ApiUrl from '../../../context/BackEndProtocol'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';


// 광고 등록 및 수정 페이지
export default class Media01 extends Component {
    
    adSeq = 0;
    constructor(props) {
        super(props);
        this.state = {

            // 드롭다운리스트
            inTxt01: 'TVC',
            SelectBoxOpen01: false,

            // 최상단노출
            btnY: true,
            btnN: false,

            // 라디오
            selectValue01: 'radio01',
            selectValue02: 'radio03',

            adDiv: 'A', // 구분 기본값
            adRegDt: '',
            uploadFileName: '',

            saveAttachSeq: 0,
            saveAttachSubSeq: 0,
            saveAttachFileName: '',

            delFileSeqs: []
        }

        //input file Tag Ref 정보
        this.hidInputFileRef = React.createRef();
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

    setDatePickerValue(stateName, stateValue) {
        this.setState({
            [stateName]: stateValue
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

    handleSelectValue = (code, txt) => {
        this.setState({
            adDiv: code,
            inTxt01:txt
        });
    }

    // 최상단노출 Y/N
    handleBtnYesOrNo = (type) => {
        this.setState({
            btnY: type === 'yes' ?? false,
            btnN: type === 'no' ?? false
        });
    }

    // 라디오버튼
    handleRadioClick01 = (type) => {
        this.setState({
            selectValue01: type === '1' ? 'radio01' : 'radio02'
        });
    }

    handleRadioClick02 = (type) => {
        this.setState({
            selectValue02: type === '1' ? 'radio03' : 'radio04'
        });
    }

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);

        //데이터 바인딩
        if(this.props.location.state != undefined) {
            
            const mediaAdData = this.props.location.state;

            this.adSeq = mediaAdData.adSeq;
            document.querySelector('#txtAdTitle').value = mediaAdData.adTitle;
            document.querySelector('#txtAdMediaUrl').value = mediaAdData.adMediaUrl;

            this.setState({
                adDiv: mediaAdData.adDiv,
                inTxt01: mediaAdData.adDivTxt,

                btnY: mediaAdData.adImportantYn === 'Y' ? true : false,
                btnN: mediaAdData.adImportantYn === 'Y' ? false : true,

                adRegDt: new Date(mediaAdData.adRegDt),

                saveAttachSeq: mediaAdData.uploadFileInfo.attachSeq,
                saveAttachSubSeq: mediaAdData.uploadFileInfo.attachSubSeq,
                saveAttachFileName: mediaAdData.uploadFileInfo.originFileName + '.' + mediaAdData.uploadFileInfo.fileExt,

                selectValue01: mediaAdData.adState === 'S' ?  'radio01' : 'radio02',
                selectValue02: mediaAdData.adMediaType === '' ? 'radio03' : ( mediaAdData.adMediaType === 'W' ? 'radio03' : 'radio04' )

            });

        }
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }
    
    cancelBtnClick = () => {
    
        if(this.adSeq === 0) {
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
        if(originObj.adDiv != modifyObj.adDiv) {
            return true;
        }

        // 상태
        if(originObj.adState != document.querySelector('input[id="' + this.state.selectValue01 + '"]').value) {
            return true;
        }

        // 제목
        if(originObj.adTitle !=  document.querySelector('#txtAdTitle').value) {
            return true;
        }

        // 등록일
        if(originObj.adRegDt.replace(/\./g, '') != this.convertDateToString(modifyObj.adRegDt)) {
            return true;
        }

        // 썸네일
        if(this.state.delFileSeqs.length > 0) {
            return true;
        }

        //아래는 구분이 TVC 인 경우에만 해당
        if(modifyObj.adDiv === 'A') {

            //영상 종류 비교
            if(originObj.adMediaType != document.querySelector('input[id="' + this.state.selectValue02 + '"]').value) {
                return true;
            }

            //영상 URL 비교
            if(originObj.adMediaUrl != document.querySelector('#txtAdMediaUrl').value) {
                return true;
            }
        }

        //최상단노출 값 비교
        if(originObj.adImportantYn != (modifyObj.btnY ? 'Y' : 'N')) {
            return true;
        }

        return false;
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

    deleteMgrAdData = () => {
        if(window.confirm('삭제하시겠습니까?')) {
       
            const param = {
                adSeq: this.adSeq
            }
    
            HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_DELETEMGRADDATA, param)
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

    setMgrAdData = () => {

        //필수 값 체크
        if(this.checkInputData()) {
            alert('"*"는 필수 입력 값입니다. 모두 입력해 주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('adSeq', this.adSeq); 
        formData.append('adDiv', this.state.adDiv); 
        formData.append('adTitle', document.querySelector('#txtAdTitle').value); 
        formData.append('adMediaType', this.state.adDiv === 'A' ? document.querySelector('input[id="' + this.state.selectValue02 + '"]').value : ''); 
        formData.append('adMediaUrl',  this.state.adDiv === 'A' ? document.querySelector('#txtAdMediaUrl').value : ''); 
        formData.append('adMediaTime', ''); // 플레이 타임은 서버에서 작업
        formData.append('adState', document.querySelector('input[id="' + this.state.selectValue01 + '"]').value); 
        formData.append('adImportantYn', this.state.btnY ? 'Y' : 'N'); 
        formData.append('adRegDt', this.convertDateToString(this.state.adRegDt)); 

        formData.append('attachSeq', this.state.saveAttachSeq); 
        formData.append('attachSubSeq', this.state.saveAttachSubSeq); 

        formData.append('deleteFiles', this.state.delFileSeqs); 

        for (let i = 0; i < this.hidInputFileRef.current.files.length; i++) {
            formData.append("files", this.hidInputFileRef.current.files[i]);
        }

        HttpUtils.callAuthFormPostMethod(ApiUrl.ADMIN_SETMGRADDATA, formData)
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
        
        //제목
        if(document.querySelector('#txtAdTitle').value.trim() === '') {
            return true;
        }

        //등록일
        if(!this.state.adRegDt) {
            return true;
        }

        //썸네일
        //수정 인 경우에는 없어도 됨 ( 단, 기존에 올린 첨부파일을 삭제 안한 경우에만 )
        if(this.adSeq > 0) {
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

        // TVC 인 경우 첨부 URL
        if(this.state.adDiv === 'A') {
            
            if( document.querySelector('#txtAdMediaUrl').value.trim() === '') {
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
                <div id="MediaCenter01">
                    <div className="title01">광고</div>
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
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('A', 'TVC');}}>TVC</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('B', '지면광고');}}>지면광고</li>
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
                                        <input type="radio" name="btnradio01" id="radio01" value="S" checked={this.state.selectValue01 === "radio01"} onClick={()=>{this.handleRadioClick01('1')}}/><label for="radio01">노출</label>
                                        <input type="radio" name="btnradio01" id="radio02" value="N" checked={this.state.selectValue01 === "radio02"} onClick={()=>{this.handleRadioClick01('2')}}/><label for="radio02">비노출</label>
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
                                        <input className="InputText" id="txtAdTitle" type="text"/>
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
                                            selected={this.state.adRegDt}
                                            onChange={(date) => this.setDatePickerValue('adRegDt', date)}
                                            customInput={<input type="text" style={{width: '30%', height: '30px'}} value={this.state.adRegDt} onInput={(e) => { e.target.value = ''; }} />}
                                        />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="h-box" style={{display: this.state.inTxt01 === 'TVC' ? '' : 'none'}}>
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
                                            <input className="InputText" value={this.state.uploadFileName} readOnly/>
                                        </div>
                                        <input type="file" ref={this.hidInputFileRef} 
                                                    onChange={this.selectedFileChange.bind(this)}  style={{display: 'none'}}/>
                                        <button className="btn" onClick={this.searchFileClick.bind(this)}>파일 선택</button>

                                        {/* 수정 화면에서 삭제버튼 활성화 */}
                                        <div style={{paddingLeft: '15px'}}>{this.state.saveAttachFileName}</div>
                                        <button className="btn" style={{display: this.state.saveAttachFileName === '' ?'none' : ''}} onClick={this.delFileBtnClick}>삭제</button>
                                    </div>
                                    <div className="text02" style={{display: this.state.inTxt01 === 'TVC' ? '' : 'none'}}>가로 632px * 세로 359px만 등록 가능합니다.</div>
                                </td>
                            </tr>
                            <tr style={{display: this.state.inTxt01 === 'TVC' ? '' : 'none'}}>
                                <th>
                                    <div className="h-box">
                                        <div>첨부 URL</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio02" id="radio03" value="W" checked={this.state.selectValue02 === "radio03"} onClick={()=>{this.handleRadioClick02('1')}}/><label for="radio03">위스튜디오</label>
                                        <input type="radio" name="btnradio02" id="radio04" value="Y" checked={this.state.selectValue02 === "radio04"} onClick={()=>{this.handleRadioClick02('2')}}/><label for="radio04">유튜브</label>
                                    </div>
                                    <div className="InputBox04">
                                        <input className="InputText" id="txtAdMediaUrl" type="text"/>
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
                                        <div className={`btn01 ${this.state.btnY ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('yes')}}>Y</div>
                                        <div className={`btn01 ${this.state.btnN ? 'on':''}`} onClick={()=>{this.handleBtnYesOrNo('no')}}>N</div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={this.cancelBtnClick.bind(this)}>취소</button>
                            </div>
                            <button className="btn" style={{display: this.adSeq === 0 ? "" : "none"}} onClick={this.setMgrAdData.bind(this)} >저장</button>
                            
                            {/* 수정 화면에서 활성화 */}
                            <div style={{display: this.adSeq === 0 ? "none" : ""}}>
                                <button className="btn" onClick={this.setMgrAdData.bind(this)}>수정</button>
                                <button className="btn" style={{marginLeft:"10px"}} onClick={this.deleteMgrAdData.bind(this)}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}