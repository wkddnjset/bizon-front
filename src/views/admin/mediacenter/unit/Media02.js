import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../../context/url';
import * as HttpUtils from "../../../common/js/HttpUtils"
import * as ApiUrl from '../../../context/BackEndProtocol'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';


// 보도자료 등록 및 수정 페이지
export default class Media02 extends Component {

    reportSeq = 0;
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

            reportDiv: 'A', // 구분 기본값
            reportRegDt: '',
            contentsLength: 0
        }
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        this.setState({
            SelectBoxOpen01: !this.state.SelectBoxOpen01,
        });
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01: false,
        });
    }

    handleSelectValue = (code, txt) => {
        this.setState({
            reportDiv: code,
            inTxt01: txt
        });
    }

    // 라디오버튼
    handleRadioClick01 = (type) => {
        if (type === '1') {
            this.setState({ selectValue01: 'radio01' })
        } else if (type === '2') {
            this.setState({ selectValue01: 'radio02' })
        }
    }

    setDatePickerValue(stateName, stateValue) {
        this.setState({
            [stateName]: stateValue
        });
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handleSelectBoxClose);

        //데이터 바인딩
        if (this.props.location.state != undefined) {

            const mediaReportData = this.props.location.state;

            this.reportSeq = mediaReportData.reportSeq;
            document.querySelector('#txtReportTitle').value = mediaReportData.reportTitle;
            document.querySelector('#taReportContents').value = mediaReportData.reportContents;
            document.querySelector('#txtReportSource').value = mediaReportData.reportSource;
            document.querySelector('#txtReportUrl').value = mediaReportData.reportUrl;

            this.setState({
                reportDiv: mediaReportData.reportDiv,
                inTxt01: mediaReportData.reportDivTxt,

                btnY: mediaReportData.reportState === 'S' ? true : false,
                btnN: mediaReportData.reportState === 'S' ? false : true,

                selectValue01: mediaReportData.reportState === 'S' ? 'radio01' : 'radio02',

                reportRegDt: new Date(mediaReportData.reportRegDt),
                contentsLength: mediaReportData.reportContents.length
            });

        }
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    cancelBtnClick = () => {

        if (this.reportSeq === 0) {
            //신규등록
            if (window.confirm('취소하시겠습니까?')) {
                window.history.back();
            }
        }
        else {
            //수정
            if (this.compareUserInput()) {
                if (window.confirm('취소하시겠습니까?')) {
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
        if (originObj.reportDiv != modifyObj.reportDiv) {
            return true;
        }

        // 상태
        if (originObj.reportState != document.querySelector('input[id="' + this.state.selectValue01 + '"]').value) {
            return true;
        }

        // 제목
        if (originObj.reportTitle != document.querySelector('#txtReportTitle').value) {
            return true;
        }

        // 등록일
        if (originObj.reportRegDt.replace(/\./g, '') != this.convertDateToString(modifyObj.reportRegDt)) {
            return true;
        }

        // 내용
        if (originObj.reportContents != document.querySelector('#taReportContents').value) {
            return true;
        }

        // 출처
        if (originObj.reportSource != document.querySelector('#txtReportSource').value) {
            return true;
        }

        // 링크
        if (originObj.reportUrl != document.querySelector('#txtReportUrl').value) {
            return true;
        }

        return false;
    }

    deleteMgrReportData = () => {
        if (window.confirm('삭제하시겠습니까?')) {

            const param = {
                reportSeq: this.reportSeq
            }

            HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_DELETEMGRREPORTDATA, param)
                .then((jsonObj) => {
                    if (jsonObj.resultCode === '1') {
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

    setMgrReportData = () => {

        console.log(document.querySelector('#taReportContents').value.length);

        //필수 값 체크
        if (this.checkInputData()) {
            alert('"*"는 필수 입력 값입니다. 모두 입력해 주세요.');
            return;
        } else if (document.querySelector('#taReportContents').value.length > 300) {
            alert('내용은 300자 이내만 입력 가능합니다.');
            return;
        }

        const param = {
            reportSeq: this.reportSeq,
            reportDiv: this.state.reportDiv,
            reportTitle: document.querySelector('#txtReportTitle').value,
            reportContents: document.querySelector('#taReportContents').value,
            reportSource: document.querySelector('#txtReportSource').value,
            reportUrl: document.querySelector('#txtReportUrl').value,
            reportState: document.querySelector('input[id="' + this.state.selectValue01 + '"]').value,
            reportRegDt: this.convertDateToString(this.state.reportRegDt)
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_SETMGRREPORTDATA, param)
            .then((jsonObj) => {
                if (jsonObj.resultCode === '1') {
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
        if (document.querySelector('#txtReportTitle').value.trim() === '') {
            return true;
        }

        //등록일
        if (!this.state.reportRegDt) {
            return true;
        }

        //내용
        if (document.querySelector('#taReportContents').value.trim() === '') {
            return true;
        }

        //출처
        if (document.querySelector('#txtReportSource').value.trim() === '') {
            return true;
        }

        //링크
        if (document.querySelector('#txtReportUrl').value.trim() === '') {
            return true;
        }

        return false;
    }

    convertDateToString(date) {

        if (date) {
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
                <div id="MediaCenter02">
                    <div className="title01">보도자료</div>
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
                                <col width="120" />
                                <col width="" />
                                <col width="120" />
                                <col width="" />
                            </colgroup>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>구분</div>
                                    </div>
                                </th>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('1'); }}>{this.state.inTxt01}</div>
                                        <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen01 ? '' : 'none' }}>
                                            <ul>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('A', 'CEO 칼럼'); }}>CEO 칼럼</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('B', 'Amaranth 10'); }}>Amaranth 10</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen01 ? 'down' : 'up'}`} />
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
                                        <input type="radio" name="btnradio01" id="radio01" value="S" checked={this.state.selectValue01 === "radio01"} onClick={() => { this.handleRadioClick01('1') }} /><label for="radio01">노출</label>
                                        <input type="radio" name="btnradio01" id="radio02" value="N" checked={this.state.selectValue01 === "radio02"} onClick={() => { this.handleRadioClick01('2') }} /><label for="radio02">비노출</label>
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
                                        <input className="InputText" id="txtReportTitle" type="text" />
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
                                        selected={this.state.reportRegDt}
                                        onChange={(date) => this.setDatePickerValue('reportRegDt', date)}
                                        customInput={<input type="text" style={{ width: '30%', height: '30px' }} value={this.state.reportRegDt} onInput={(e) => { e.target.value = ''; }} />}
                                    />
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
                                    <div className="InputBox02 h-box" style={{ width: "", height: "" }}>
                                        <textarea className="Textarea" id="taReportContents" onChange={e => this.setState({ contentsLength: e.target.value.length })} placeholder="내용은 300자 이내로 입력해주세요." /> ({this.state.contentsLength}/300)
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
                                        <input className="InputText" id="txtReportSource" type="text" />
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
                                        <input className="InputText" id="txtReportUrl" type="text" />
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={this.cancelBtnClick.bind(this)}>취소</button>
                            </div>
                            <button className="btn" style={{ display: this.reportSeq === 0 ? "" : "none" }} onClick={this.setMgrReportData.bind(this)} >저장</button>

                            {/* 수정 화면에서 활성화 */}
                            <div style={{ display: this.reportSeq === 0 ? "none" : "" }}>
                                <button className="btn" onClick={this.setMgrReportData.bind(this)}>수정</button>
                                <button className="btn" style={{ marginLeft: "10px" }} onClick={this.deleteMgrReportData.bind(this)}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}