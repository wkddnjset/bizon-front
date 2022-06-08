import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import * as HttpUtils from "../../../common/js/HttpUtils"
import * as ApiUrl from '../../../context/BackEndProtocol'

// 도입문의 조회 페이지
export default class Intro01 extends Component {

    introSeq = 0;
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

            bnfFirstCode: '',
            bnfScondCode: '',
            employeeCntCode: '',
            inRouteCode: ''
        }
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        if (type === '1') {
            this.setState({
                SelectBoxOpen01: !this.state.SelectBoxOpen01, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: false,
            });
        } else if (type === '2') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: !this.state.SelectBoxOpen02, SelectBoxOpen03: false, SelectBoxOpen04: false,
            });
        } else if (type === '3') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: !this.state.SelectBoxOpen03, SelectBoxOpen04: false,
            })
        } else if (type === '4') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: !this.state.SelectBoxOpen04,
            })
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: false,
        });
    }

    handleSelectValue = (select, txt, code) => {
        if (select === 'select01') {
            this.setState({
                inTxt01: txt,
                bnfFirstCode: code,
                bnfScondCode: code === 'E' ? '' : 'A'
            });
        } else if (select === 'select02') {
            this.setState({
                inTxt02: txt,
                bnfScondCode: code
            });
        } else if (select === 'select03') {
            this.setState({
                inTxt03: txt,
                employeeCntCode: code
            });
        } else if (select === 'select04') {
            this.setState({
                inTxt04: txt,
                inRouteCode: code
            });
        }
    }

    handleValueClick = (type) => {
        if (type === '1') {
            this.setState({ inTxt02: '음/식료', txtBox: false })
        } else if (type === '2') {
            this.setState({ inTxt02: '의료', txtBox: false })
        } else if (type === '3') {
            this.setState({ inTxt02: '건설', txtBox: false })
        } else if (type === '4') {
            this.setState({ bnfScondCode: '', txtBox: true })
        }
    }

    // 라디오버튼
    handleRadioClick01 = (type) => {
        if (type === '1') {
            this.setState({ selectValue01: !this.state.selectValue01, })
        } else if (type === '2') {
            this.setState({ selectValue02: !this.state.selectValue02, })
        } else if (type === '3') {
            this.setState({ selectValue03: !this.state.selectValue03, })
        } else if (type === '4') {
            this.setState({ selectValue04: !this.state.selectValue04, })
        } else if (type === '5') {
            this.setState({ selectValue05: !this.state.selectValue05, })
        } else if (type === '6') {
            this.setState({ selectValue06: !this.state.selectValue06, disabled: !this.state.disabled, })
        }
    }

    handleRadioClick02 = (type) => {
        if (type === '1') {
            this.setState({ selectValue07: 'radio07' })
        } else if (type === '2') {
            this.setState({ selectValue07: 'radio08' })
        }
    }

    handleRadioClick03 = (type) => {
        if (type === '1') {
            this.setState({ selectValue08: 'radio09' })
        } else if (type === '2') {
            this.setState({ selectValue08: 'radio10' })
        }
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handleSelectBoxClose);

        //데이터 바인딩
        if (this.props.location.state !== undefined) {

            this.introSeq = this.props.location.state.introSeq;

            document.getElementById('txtQueEtcName').value = this.props.location.state.queEtcName; // 구분 - 기타 (텍스트)
            document.getElementById('txtTitle').value = this.props.location.state.title; //제목
            document.getElementById('txtUserName').value = this.props.location.state.userName; //작성자
            document.getElementById('txtCompanyName').value = this.props.location.state.companyName; //회사명
            document.getElementById('txtUserTel').value = this.props.location.state.userTel; //연락처
            document.getElementById('txtUserEmail').value = this.props.location.state.userEmail; //이메일
            document.getElementById('taContents').value = this.props.location.state.contents; //내용
            document.getElementById('txtBnfEtcName').value = this.props.location.state.bnfFirstCode === 'E' ? this.props.location.state.bnfScondName : ''; // 업종 기타 텍스트

            this.setState({
                selectValue01: this.isCheckedOfValue('A', this.props.location.state.queTypeCode),
                selectValue02: this.isCheckedOfValue('B', this.props.location.state.queTypeCode),
                selectValue03: this.isCheckedOfValue('C', this.props.location.state.queTypeCode),
                selectValue04: this.isCheckedOfValue('D', this.props.location.state.queTypeCode),
                selectValue05: this.isCheckedOfValue('E', this.props.location.state.queTypeCode),
                selectValue06: this.isCheckedOfValue('F', this.props.location.state.queTypeCode),
                disabled: !this.isCheckedOfValue('F', this.props.location.state.queTypeCode),

                selectValue07: this.props.location.state.serviceType === 'A' ? 'radio07' : 'radio08',

                bnfFirstCode: this.props.location.state.bnfFirstCode,
                inTxt01: this.props.location.state.bnfFirstName,

                bnfScondCode: this.props.location.state.bnfScondCode,
                inTxt02: this.props.location.state.bnfScondName,
                txtBox: this.props.location.state.bnfScondCode === '' ? true : false,

                inTxt03: this.props.location.state.employeeCntCodeName,
                employeeCntCode: this.props.location.state.employeeCntCode,

                inTxt04: this.props.location.state.inRouteCodeName,
                inRouteCode: this.props.location.state.inRouteCode,

                selectValue08: this.props.location.state.collectMarketingYn === 'Y' ? 'radio09' : 'radio10'
            });
        } else {
            console.log('데이터 오류');
        }
    }

    isCheckedOfValue = (val, serverVal) => {
        return serverVal.indexOf(val) >= 0 ? true : false;
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    cancelBtnClick = () => {
        if (this.compareUserInput()) {
            if (window.confirm('취소하시겠습니까?')) {
                window.history.back();
            }
        } else {
            //해당 화면은 수정에서만 올 수 있기 때문에 아래와 같이 적용
            window.history.back();
        }
    }

    compareUserInput = () => {

        let originObj = this.props.location.state, modifyObj = this.state;

        // 구분 (문의유형)
        if (originObj.queTypeCode != this.getQueTypCodeString()) {
            return true;
        }
        else {
            //기존과 선택한 코드값이 동일하며, 기타 항목이 체크되어 있으면 텍스트 비교
            if (originObj.queTypeCode.indexOf('F') > 0) {
                if (originObj.queEtcName != document.getElementById('txtQueEtcName').value) {
                    return true;
                }
            }
        }

        // 서비스유형
        if (originObj.serviceType != document.querySelector('input[id="' + this.state.selectValue07 + '"]').value) {
            return true;
        }

        // 제목
        if (originObj.title != document.getElementById('txtTitle').value) {
            return true;
        }

        // 작성자
        if (originObj.userName != document.getElementById('txtUserName').value) {
            return true;
        }

        // 업종
        if (originObj.bnfFirstCode != this.state.bnfFirstCode) {
            return true;
        }
        else {
            // 1차 대분류 업종 코드가 동일 한 경우
            // ㄱ. 1차 코드가 기타 인 경우 텍스트 비교
            // ㄴ. 2차 코드 비교
            if (originObj.bnfFirstCode === 'E') {
                if (originObj.bnfScondName != document.getElementById('txtBnfEtcName').value) {
                    return true;
                }
            }
            else {
                if (originObj.bnfScondCode != this.state.bnfScondCode) {
                    return true;
                }
            }
        }

        // 회사명
        if (originObj.companyName != document.getElementById('txtCompanyName').value) {
            return true;
        }

        // 연락처
        if (originObj.userTel != document.getElementById('txtUserTel').value) {
            return true;
        }

        // 이메일
        if (originObj.userEmail != document.getElementById('txtUserEmail').value) {
            return true;
        }

        // 직원수
        if (originObj.employeeCntCode != this.state.employeeCntCode) {
            return true;
        }

        // 유입경로
        if (originObj.inRouteCode != this.state.inRouteCode) {
            return true;
        }

        // 광고 수신
        if (originObj.collectMarketingYn != document.querySelector('input[id="' + this.state.selectValue08 + '"]').value) {
            return true;
        }

        // 내용
        if (originObj.contents != document.getElementById('taContents').value) {
            return true;
        }

        return false;
    }

    attachFileClick = (attachSeq, attachSubSeq, saveFileName) => {

        if (window.confirm('저장하시겠습니까?')) {
            let link = document.createElement("a");
            link.href = ApiUrl.COMMON_FILEDOWN + 'intro/' + attachSeq + '/' + attachSubSeq + '/' + saveFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    setIntroData = () => {

        //필수 값 체크
        if (this.checkInputData()) {
            alert('"*"는 필수 입력 값입니다. 모두 입력해 주세요.');
            return;
        } else if (this.getQueTypCodeString().indexOf('F') > 0 && document.getElementById('txtQueEtcName').value.trim() === '') {
            alert('문의유형 구분 "기타"를 선택하셨습니다.\n상세 내용을 입력해 주세요.');
            return;
        } else if (this.state.bnfFirstCode === 'E' && document.getElementById('txtBnfEtcName').value.trim() === '') {
            alert('업종 구분 "기타"를 선택하셨습니다.\n상세 내용을 입력해 주세요.');
            return;
        }


        const param = {
            introSeq: this.introSeq,
            bnfFirstCode: this.state.bnfFirstCode,
            bnfFirstName: this.state.inTxt01,
            bnfSecondCode: this.state.bnfScondCode,
            bnfSecondName: this.state.bnfScondCode === '' ? document.getElementById('txtBnfEtcName').value : this.state.inTxt02,
            companyName: document.getElementById('txtCompanyName').value,
            employeeCntCode: this.state.employeeCntCode,
            userName: document.getElementById('txtUserName').value,
            userTel: document.getElementById('txtUserTel').value,
            userEmail: document.getElementById('txtUserEmail').value,
            inRouteCode: this.state.inRouteCode,
            serviceType: document.querySelector('input[id="' + this.state.selectValue07 + '"]').value,
            queTypeCode: this.getQueTypCodeString(),
            queEtcName: document.getElementById('txtQueEtcName').value,
            title: document.getElementById('txtTitle').value,
            contents: document.getElementById('taContents').value,
            collectMarketingYn: document.querySelector('input[id="' + this.state.selectValue08 + '"]').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_SETINTRODATA, param).then((jsonObj) => {
            if (jsonObj.resultCode === '1') {
                alert(jsonObj.resultMsg);

                //리스트 화면으로 이동
                window.history.back();
            } else {
                alert(jsonObj.resultMsg);
            }
        }).catch(e => console.log(e));
    }

    checkInputData = () => {

        //구분
        if (this.getQueTypCodeString() === '') {
            return true;
        }
        //제목
        if (document.getElementById('txtTitle').value.trim() === '') {
            return true;
        }

        //작성자
        if (document.getElementById('txtUserName').value.trim() === '') {
            return true;
        }

        //회사명
        if (document.getElementById('txtCompanyName').value.trim() === '') {
            return true;
        }

        //연락처
        if (document.getElementById('txtUserTel').value.trim() === '') {
            return true;
        }

        //이메일
        if (document.getElementById('txtUserEmail').value.trim() === '') {
            return true;
        }

        //내용
        if (document.getElementById('taContents').value.trim() === '') {
            return true;
        }

        return false;
    }


    getQueTypCodeString = () => {

        let pipeString = '';
        document.querySelectorAll('input[data-group="queTypeGroup"]:checked').forEach((v, k) => {
            pipeString += v.value + '|';
        });

        return pipeString.substring(0, pipeString.length - 1)
    }

    deleteIntroMgrData = () => {

        if (window.confirm('삭제하시겠습니까?')) {

            const param = {
                introSeq: this.introSeq
            }

            HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_DELETEINTRODATA, param)
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
                                <col width="120" />
                                <col width="" />
                                <col width="120" />
                                <col width="" />
                                <col width="120" />
                                <col width="" />
                            </colgroup>
                            <tr>
                                <th>
                                    <div className="h-box">
                                        <div>구분</div>
                                        <div className="textBlue">*</div>
                                    </div>
                                    <div style={{ marginTop: "-10px" }}>(문의유형)</div>
                                </th>
                                <td colSpan={3}>
                                    <div className="CheckBox">
                                        <div className="h-box flex-1">
                                            <input type="radio" name="btnradio01" id="radio01" value="A" data-group="queTypeGroup" checked={this.state.selectValue01} readOnly onClick={() => { this.handleRadioClick01('1') }} /><label for="radio01">주요기능</label>
                                            <input type="radio" name="btnradio02" id="radio02" value="B" data-group="queTypeGroup" checked={this.state.selectValue02} readOnly onClick={() => { this.handleRadioClick01('2') }} /><label for="radio02">제품가격</label>
                                            <input type="radio" name="btnradio03" id="radio03" value="C" data-group="queTypeGroup" checked={this.state.selectValue03} readOnly onClick={() => { this.handleRadioClick01('3') }} /><label for="radio03">구축기간</label>
                                            <input type="radio" name="btnradio04" id="radio04" value="D" data-group="queTypeGroup" checked={this.state.selectValue04} readOnly onClick={() => { this.handleRadioClick01('4') }} /><label for="radio04">도입방법</label>
                                            <input type="radio" name="btnradio05" id="radio05" value="E" data-group="queTypeGroup" checked={this.state.selectValue05} readOnly onClick={() => { this.handleRadioClick01('5') }} /><label for="radio05">이벤트</label>
                                        </div>
                                        <div className="h-box more">
                                            <input type="radio" name="btnradio06" id="radio06" value="F" data-group="queTypeGroup" checked={this.state.selectValue06} readOnly onClick={() => { this.handleRadioClick01('6') }} /><label for="radio06">기타</label>
                                            <div className={`InputBox01 h-box ${this.state.disabled ? 'on' : ''}`}>
                                                <input className="InputText" type="text" id="txtQueEtcName" disabled={this.state.disabled} />
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
                                        <input type="radio" name="btnradio07" id="radio07" value="A" checked={this.state.selectValue07 === "radio07"} readOnly onClick={() => { this.handleRadioClick02('1') }} /><label htmlFor="radio07">구축형</label>
                                        <input type="radio" name="btnradio07" id="radio08" value="C" checked={this.state.selectValue07 === "radio08"} readOnly onClick={() => { this.handleRadioClick02('2') }} /><label htmlFor="radio08">클라우드형</label>
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
                                        <input className="InputText" id="txtTitle" type="text" />
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
                                        <input className="InputText" id="txtUserName" type="text" />
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
                                            <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('1'); }}>{this.state.inTxt01}</div>
                                            <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen01 ? '' : 'none' }}>
                                                <ul>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '제조업', 'M'); this.handleValueClick('1'); }}>제조업</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '서비스업', 'S'); this.handleValueClick('2'); }}>서비스업</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '일반', 'N'); this.handleValueClick('3'); }}>일반</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '기타', 'E'); this.handleValueClick('4'); }}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen01 ? 'down' : 'up'}`} />
                                        </div>
                                        <div className="SelectBox" style={{ display: this.state.txtBox ? 'none' : '' }}>
                                            <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('2'); }}>{this.state.inTxt02}</div>
                                            <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen02 ? '' : 'none' }}>
                                                <ul style={{ display: this.state.bnfFirstCode === 'M' ? '' : 'none' }}>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '음/식료', 'A'); }}>음/식료</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '의약', 'B'); }}>의약</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '화약', 'C'); }}>화약</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '직물/제지', 'D'); }}>직물/제지</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '석유제품', 'E'); }}>석유제품</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '철', 'F'); }}>철</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '기계', 'G'); }}>기계</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '전기', 'H'); }}>전기</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '자동차', 'I'); }}>자동차</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '유리/시멘트', 'J'); }}>유리/시멘트</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '의류', 'K'); }}>의류</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '기타', 'L'); }}>기타</li>
                                                </ul>
                                                <ul style={{ display: this.state.bnfFirstCode === 'S' ? '' : 'none' }}>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '의료', 'A'); }}>의료</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '교육', 'B'); }}>교육</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '법률', 'C'); }}>법률</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '외교', 'D'); }}>외교</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '국방', 'E'); }}>국방</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '관광', 'F'); }}>관광</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '기타', 'G'); }}>기타</li>
                                                </ul>
                                                <ul style={{ display: this.state.bnfFirstCode === 'N' ? '' : 'none' }}>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '건설', 'A'); }}>건설</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '공공사업', 'B'); }}>공공사업</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '도/소매', 'C'); }}>도/소매</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '무역', 'D'); }}>무역</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '금융/보험', 'E'); }}>금융/보험</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '기타', 'F'); }}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen02 ? 'down' : 'up'}`} />
                                        </div>
                                        <div className="InputBox03 h-box" style={{ display: this.state.bnfScondCode === '' ? '' : 'none' }}>
                                            <input className="InputText" type="text" placeholder="업종을 입력해주세요." id="txtBnfEtcName" />
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
                                        <input className="InputText" id="txtCompanyName" type="text" />
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
                                        <input className="InputText" id="txtUserTel" type="text" />
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
                                        <input className="InputText" id="txtUserEmail" type="text" />
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
                                        <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('3'); }}>{this.state.inTxt03}</div>
                                        <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen03 ? '' : 'none' }}>
                                            <ul>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '10인 미만', 'A'); }}>10인 미만</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '10인 이상 50인 미만', 'B'); }}>10인 이상 50인 미만</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '50인 이상 100인 미만', 'C'); }}>50인 이상 100인 미만</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '100인 이상 500인 미만', 'D'); }}>100인 이상 500인 미만</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '500인 이상 1000명 미만', 'E'); }}>500인 이상 1000명 미만</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '1000명 이상', 'F'); }}>1000명 이상</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen03 ? 'down' : 'up'}`} />
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
                                        <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('4'); }}>{this.state.inTxt04}</div>
                                        <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen04 ? '' : 'none' }}>
                                            <ul>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '구글 광고/검색', 'A'); }}>구글 광고/검색</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '네이버 광고/검색', 'B'); }}>네이버 광고/검색</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', 'SNS', 'C'); }}>SNS</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '뉴스/기사', 'D'); }}>뉴스/기사</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '지인 추천', 'E'); }}>지인 추천</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '전시/컨퍼런스', 'F'); }}>전시/컨퍼런스</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '이벤트', 'G'); }}>이벤트</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '사용경험', 'H'); }}>사용경험</li>
                                                <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select04', '기타', 'I'); }}>기타</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen04 ? 'down' : 'up'}`} />
                                    </div>
                                </td>
                                <th>
                                    <div className="h-box">
                                        <div>광고수신</div>
                                    </div>
                                </th>
                                <td colSpan={3}>
                                    <div className="RadioBox h-box">
                                        <input type="radio" name="btnradio08" id="radio09" value="Y" checked={this.state.selectValue08 === "radio09"} readOnly onClick={() => { this.handleRadioClick03('1') }} /><label htmlFor="radio09">Y</label>
                                        <input type="radio" name="btnradio08" id="radio10" value="N" checked={this.state.selectValue08 === "radio10"} readOnly onClick={() => { this.handleRadioClick03('2') }} /><label htmlFor="radio10">N</label>
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
                                    <div className="InputBox02 h-box" style={{ width: "", height: "" }}>
                                        <textarea className="Textarea" id="taContents" />
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
                                    {
                                        this.props.location.state.uploadFileInfo.map(f => {
                                            return (
                                                <>
                                                    <Link onClick={(e) => { e.preventDefault(); this.attachFileClick(f.attachSeq, f.attachSubSeq, f.saveFileName) }}>
                                                        {f.originFileName + '.' + f.fileExt}
                                                    </Link>
                                                    <br />
                                                </>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        </table>

                        <div className="btnBox h-box">
                            <div className="flex-1">
                                <button className="btn" onClick={this.cancelBtnClick.bind(this)}>취소</button>
                            </div>
                            <div>
                                <button className="btn" onClick={this.setIntroData.bind(this)}>수정</button>
                                <button className="btn" style={{ marginLeft: "10px" }} onClick={this.deleteIntroMgrData.bind(this)}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}