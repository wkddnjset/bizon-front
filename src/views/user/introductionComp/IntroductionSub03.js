import React, { Component, Fragment } from 'react';
import IntroSubLnb from './unit/IntroSubLnb';

import * as ApiUrl from '../../context/BackEndProtocol';

// 도입문의
export default class IntroductionSub03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //업종_1 ( code , name )
            bnfFirstCode: '',
            bnfFirstName: '',
            //업종_2 ( code , name )
            bnfSecondCode: '',
            bnfSecondName: '',
            //회사명
            companyName: '',
            //직원수
            employeeCntCode: '',
            //이름
            userName: '',
            //연락처
            userTel: '',
            //이메일
            userEmail: '',
            //유입경로
            inRouteCode: '',
            //서비스유형
            serviceType: '',
            //문의유형
            queTypeCode: '',
            queEtcName: '',
            //제목
            title: '',
            //문의내용
            contents: '',
            //첨부파일
            //개인정보 동의
            collectPrivateYn: '',
            //프로모션 동의
            collectMaketingYn: 'N',

            SelectBoxOpen01: false,
            SelectBoxOpen01_1: false,
            SelectBoxOpen02: false,
            SelectBoxOpen03: false,
            SelectBoxOpen04: false,

            inTxt01: '업종 선택',
            inTxt01_1: '업종을 선택해주세요.',
            selectBnfSecondArr: [],
            isVisibleTextBox: false,

            inTxt02: '선택',
            inTxt03: '선택',
            inTxt04: '선택',
            txtBox: false,

            select01: true,
            select02: false,

            AgreeClick01: false,
            AgreeClick02: true,
            AgreeClick03: false,
            AgreeClick04: true,

            check01: false,
            check02: false,
            check03: false,
            check04: false,
            check05: false,
            check06: false,
            disabled: true,

            uploadFileName: ''
        }

        //input file Tag Ref 정보
        this.hidInputFileRef = React.createRef();
    }

    handleSelectBoxToggle = (type) => {
        if (type === '1') {
            this.setState({
                SelectBoxOpen01: !this.state.SelectBoxOpen01, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: false,
            });
        } else if (type === '1_1') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen01_1: !this.state.SelectBoxOpen01_1, electBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: false,
            });
        } else if (type === '2') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: !this.state.SelectBoxOpen02, SelectBoxOpen03: false, SelectBoxOpen04: false,
            });
        } else if (type === '3') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: !this.state.SelectBoxOpen03, SelectBoxOpen04: false,
            });
        } else if (type === '4') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: !this.state.SelectBoxOpen04,
            });
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01: false, SelectBoxOpen01_1: false, SelectBoxOpen02: false, SelectBoxOpen03: false, SelectBoxOpen04: false,
        });
    }

    handleValueClick = (type) => {
        if (type === '1') {
            this.setState({ inTxt04: '선택', select01: false, txtBox: false, })
        } else if (type === '2') {
            this.setState({ inTxt04: '선택', select01: false, txtBox: false, })
        } else if (type === '3') {
            this.setState({ inTxt04: '선택', select01: false, txtBox: false, })
        } else if (type === '4') {
            this.setState({ inTxt04: '선택', select01: false, txtBox: true, })
        }
    }

    handleCheckClick = (type) => {

        let returnValueStr = '';
        let replaceStr = '';

        if (this.getStateCheckOfQueType(type)) {
            //체크 -> 미체크
            const regExp = new RegExp('\\|?' + type + '\\|?', 'g');
            const chkArr = regExp.exec(this.state.queTypeCode);
            if (chkArr != null && chkArr[0].length === 3) {
                replaceStr = '|';
            }
            returnValueStr = this.state.queTypeCode.replace(regExp, replaceStr);
        }
        else {
            //미체크 -> 체크
            returnValueStr = this.state.queTypeCode === '' ? type : this.state.queTypeCode + '|' + type;
        }

        if (type === 'A') {

            this.setState({
                check01: !this.state.check01,
                queTypeCode: returnValueStr
            });

        } else if (type === 'B') {

            this.setState({
                check02: !this.state.check02,
                queTypeCode: returnValueStr
            });

        } else if (type === 'C') {

            this.setState({
                check03: !this.state.check03,
                queTypeCode: returnValueStr
            });

        } else if (type === 'D') {

            this.setState({
                check04: !this.state.check04,
                queTypeCode: returnValueStr
            });

        } else if (type === 'E') {

            this.setState({
                check05: !this.state.check05,
                queTypeCode: returnValueStr
            });

        } else if (type === 'F') {

            this.setState({
                check06: !this.state.check06,
                disabled: !this.state.disabled,
                queTypeCode: returnValueStr,
                queEtcName: ''
            });
        }
    }

    getStateCheckOfQueType(type) {
        switch (type) {
            case 'A':
                return this.state.check01;
            case 'B':
                return this.state.check02;
            case 'C':
                return this.state.check03;
            case 'D':
                return this.state.check04;
            case 'E':
                return this.state.check05;
            case 'F':
                return this.state.check06;
            default:
                alert('잘못된 문의유형 코드입니다');
        }
    }


    handleAgreeCheck = (type) => {
        if (type === '1') {
            this.setState({
                AgreeClick01: !this.state.AgreeClick01,
                AgreeClick02: false,
                collectPrivateYn: 'Y'
            })
        } else if (type === '2') {
            this.setState({
                AgreeClick01: false,
                AgreeClick02: !this.state.AgreeClick02,
                collectPrivateYn: 'N'
            })
        } else if (type === '3') {
            this.setState({
                AgreeClick03: !this.state.AgreeClick03,
                AgreeClick04: false,
                collectMaketingYn: 'Y'
            })
        } else if (type === '4') {
            this.setState({
                AgreeClick03: false,
                AgreeClick04: !this.state.AgreeClick04,
                collectMaketingYn: 'N'
            })
        }
    }

    handleSelectValue = (select, code, txt) => {

        if (select === 'select01') {
            this.setState({
                inTxt01: txt,
                inTxt01_1: '',
                selectBnfSecondArr: this.drawSelectBnfSecond(code),
                isVisibleTextBox: this.test(code),

                bnfFirstCode: code,
                bnfFirstName: txt,
                bnfSecondCode: '',
                bnfSecondName: ''
            });
        } else if (select === 'select01_1') {
            this.setState({
                inTxt01_1: txt,

                bnfSecondCode: code,
                bnfSecondName: txt
            });
        } else if (select === 'select02') {
            this.setState({
                inTxt02: txt,

                employeeCntCode: code
            });
        } else if (select === 'select03') {
            this.setState({
                inTxt03: txt,

                inRouteCode: code
            });
        } else if (select === 'select04') {
            this.setState({
                inTxt04: txt
            });
        }
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handleSelectBoxClose);
        if (this.props.history) {
            this.props.handleGnbMenu('introduction', '3');
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    /**
     * 업종 1차 분류
     */
    drawSelectBnfFirst() {
        const bnfFirstArr = [{ code: 'M', name: '제조업' }, { code: 'S', name: '서비스업' }, { code: 'N', name: '일반' }, { code: 'E', name: '기타' }];
        return bnfFirstArr.map((data, idx) => {
            return (<li key={data.code} onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', data.code, data.name); }}>{data.name}</li>);
        });
    }

    /**
     * 업종 2차 분류
     */
    drawSelectBnfSecond(firstCode) {

        if (firstCode === 'M') {
            //제조업
            const mArray = [
                { code: 'A', name: '음/식료' }, { code: 'B', name: '의약' }, { code: 'C', name: '화학' }, { code: 'D', name: '직물/제지' },
                { code: 'E', name: '석유제품' }, { code: 'F', name: '철' }, { code: 'G', name: '기계' }, { code: 'H', name: '전기' },
                { code: 'I', name: '자동차' }, { code: 'J', name: '유리/시멘트' }, { code: 'K', name: '의류' }, { code: 'L', name: '기타' }
            ];
            return mArray.map((data, idx) => {
                return (<li key={firstCode + '_' + data.code} onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01_1', data.code, data.name); }}>{data.name}</li>);
            });
        }
        else if (firstCode === 'S') {
            //서비스업
            const sArray = [
                { code: 'A', name: '의료' }, { code: 'B', name: '교육' }, { code: 'C', name: '법률' }, { code: 'D', name: '외교' },
                { code: 'E', name: '국방' }, { code: 'F', name: '의료' }, { code: 'G', name: '관광' }, { code: 'H', name: '기타' }
            ];
            return sArray.map((data, idx) => {
                return (<li key={firstCode + '_' + data.code} onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01_1', data.code, data.name); }}>{data.name}</li>);
            });
        }
        else if (firstCode === 'N') {
            //일반
            const nArray = [
                { code: 'A', name: '건설' }, { code: 'B', name: '공공사업' }, { code: 'C', name: '도/소매' }, { code: 'D', name: '무역' },
                { code: 'E', name: '금융/보험' }, { code: 'F', name: '기타' }
            ];
            return nArray.map((data, idx) => {
                return (<li key={firstCode + '_' + data.code} onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01_1', data.code, data.name); }}>{data.name}</li>);
            });
        }
        else if (firstCode === 'E') {
            //기타
        }
        else {

        }
    }

    test(firstCode) {

        switch (firstCode) {
            case 'M':
            case 'S':
            case 'N':
                return false;
            case 'E':
                return true;
            default:
                return false;
        }
    }

    searchFileClick() {
        this.hidInputFileRef.current.click();
    }

    selectedFileChange(e) {
        this.setState({
            uploadFileName: e.currentTarget.files[0].name
        });
    }

    inputOnChangeHandler(event) {

        let returnValueStr = '';
        if ("checktype" in event.target.dataset) {
            //validation 체크
            const validType = event.target.dataset.checktype;
            if (validType === 'number') {
                //숫자
                returnValueStr = event.target.value.replace(/\D+/g, '');
            }
        }
        else {
            returnValueStr = event.target.value;
        }

        this.setState({
            [event.target.name]: returnValueStr
        });
    }

    isValidEmailFormat() {
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;
        return regEmail.test(this.state.userEmail)
    }

    /**
     * 문의하기
     */
    sendQuestion() {

        //필수 값 체크
        if (this.state.bnfFirstCode === '' || (this.state.bnfFirstCode != 'E' && this.state.bnfSecondCode === '')) {
            alert('업종을 선택해 주십시오');
            return;
        }
        else if (this.state.bnfFirstCode === 'E' && this.state.bnfSecondName === '') {
            alert('업종을 입력해 주십시오');
            return;
        }
        else if (this.state.companyName === '') {
            alert('회사명을 입력해 주십시오');
            return;
        }
        else if (this.state.employeeCntCode === '') {
            alert('직원수를 선택해 주십시오');
            return;
        }
        else if (this.state.userName === '') {
            alert('이름을 입력해 주십시오');
            return;
        }
        else if (this.state.userTel === '') {
            alert('연락처를 입력해 주십시오');
            return;
        }
        else if (this.state.userEmail === '') {
            alert('이메일을 입력해 주십시오');
            return;
        }
        else if (!this.isValidEmailFormat()) {
            alert('이메일 형식이 아닙니다.');
            return;
        }
        else if (this.state.serviceType === '') {
            alert('서비스 유형을 선택해 주십시오');
            return;
        }
        else if (this.state.queTypeCode === '') {
            alert('문의유형을 선택해 주십시오');
            return;
        }
        else if (this.state.title === '') {
            alert('제목을 입력해 주십시오');
            return;
        }
        else if (this.state.contents === '') {
            alert('내용을 입력해 주십시오');
            return;
        }
        else if (this.hidInputFileRef.current.files.length > 0) {

            //첨부파일이 있는 경우 용량(10MB) 체크
            const fileInfo = this.hidInputFileRef.current.files[0];
            const sizeLimit = 10 * 1024 * 1024; // 10MB
            if (fileInfo.size > sizeLimit) {
                alert('업로드할 수 있는 파일 용량은 10MB가 입니다.');
                return;
            }

            //파일 확장자 체크
            const acceptFileExt = ['jpg', 'gif', 'png', 'pdf', 'hwp', 'ppt', 'xls', 'doc', 'zip'];
            const fileDotExtIndex = fileInfo.name.lastIndexOf('.');
            const fileExt = fileInfo.name.substring(fileDotExtIndex + 1, fileInfo.name.length);
            if (acceptFileExt.indexOf(fileExt.toLowerCase()) === -1) {
                alert('업로드할 수 없는 파일 확장자입니다');
                return;
            }
        }
        else if (this.state.collectPrivateYn === '' || this.state.collectPrivateYn === 'N') {
            alert('개인정보 수집 및 이용 항목은 필수입니다');
            return;
        }

        const formData = new FormData();
        formData.append('bnfFirstCode', this.state.bnfFirstCode);
        formData.append('bnfFirstName', this.state.bnfFirstName);
        formData.append('bnfSecondCode', this.state.bnfSecondCode);
        formData.append('bnfSecondName', this.state.bnfSecondName);
        formData.append('companyName', this.state.companyName);
        formData.append('employeeCntCode', this.state.employeeCntCode);
        formData.append('userName', this.state.userName);
        formData.append('userTel', this.state.userTel);
        formData.append('userEmail', this.state.userEmail);
        formData.append('inRouteCode', this.state.inRouteCode);
        formData.append('serviceType', this.state.serviceType);
        formData.append('queTypeCode', this.state.queTypeCode);
        formData.append('queEtcName', this.state.queEtcName);
        formData.append('title', this.state.title);
        formData.append('contents', this.state.contents);
        formData.append('collectPrivateYn', this.state.collectPrivateYn);
        formData.append('collectMaketingYn', this.state.collectMaketingYn);

        for (let i = 0; i < this.hidInputFileRef.current.files.length; i++) {
            formData.append("files", this.hidInputFileRef.current.files[i]);
        }

        window.fetch(ApiUrl.USER_SETUSERINTRODATA, {
            method: "POST",
            body: formData
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            alert(result.resultMsg);

            if (result.resultCode > 0) {
                window.location.reload();
            }
        });
    }

    render() {

        const bnfFirstComp = this.drawSelectBnfFirst();

        return (
            <Fragment>
                <IntroSubLnb
                    introductionSub01={this.props.introductionSub01}
                    introductionSub02={this.props.introductionSub02}
                    introductionSub03={this.props.introductionSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext01={this.props.Titletext01}
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
                            <tbody>
                                <tr className="h-box">
                                    <th className="h-box">업종<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('1'); }}>{this.state.inTxt01}</div>
                                            <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen01 ? '' : 'none' }}>
                                                <ul>
                                                    {bnfFirstComp}
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen01 ? 'down' : 'up'}`} />
                                        </div>
                                        {
                                            this.state.isVisibleTextBox ?
                                                <div className="InputBox h-box">
                                                    <input className="InputText" type="text" name="bnfSecondName" value={this.state.bnfSecondName} onChange={this.inputOnChangeHandler.bind(this)} placeholder="업종을 입력해주세요." />
                                                </div>
                                                : <div className="SelectBox">
                                                    <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('1_1'); }}>{this.state.inTxt01_1}</div>
                                                    <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen01_1 ? '' : 'none' }}>
                                                        <ul>
                                                            {this.state.selectBnfSecondArr}
                                                        </ul>
                                                    </div>
                                                    <div className={`arr ${this.state.SelectBoxOpen01_1 ? 'down' : 'up'}`} />
                                                </div>
                                        }
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">회사명<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="InputBox h-box">
                                            <input className="InputText" type="text" name="companyName" value={this.state.companyName} onChange={this.inputOnChangeHandler.bind(this)} placeholder="회사명을 입력해주세요." />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">직원수<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('2') }}>{this.state.inTxt02}</div>
                                            <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen02 ? '' : 'none' }}>
                                                <ul>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'A', '10인 미만'); }}>10인 미만</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'B', '10인 이상 50인 미만'); }}>10인 이상 50인 미만</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'C', '50인 이상 100인 미만'); }}>50인 이상 100인 미만</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'D', '100인 이상 500인 미만'); }}>100인 이상 500인 미만</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'E', '100인 이상 1000명 미만'); }}>500인 이상 1000명 미만</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'F', '1000명 이상'); }}>1000명 이상</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen02 ? 'down' : 'up'}`} />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">이름<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="InputBox h-box">
                                            <input className="InputText" type="text" name="userName" value={this.state.userName} onChange={this.inputOnChangeHandler.bind(this)} placeholder="이름을 입력해주세요." />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">연락처<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="InputBox h-box">
                                            <input className="InputText" type="text" data-checktype="number" name="userTel" value={this.state.userTel} onChange={this.inputOnChangeHandler.bind(this)} placeholder="'-'없이 숫자만 입력해주세요." />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">이메일<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="InputBox h-box">
                                            <input className="InputText" type="text" name="userEmail" value={this.state.userEmail} onChange={this.inputOnChangeHandler.bind(this)} placeholder="예) amaranth10@douzone.com" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">유입경로</th>
                                    <td className="h-box">
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('3') }}>{this.state.inTxt03}</div>
                                            <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen03 ? '' : 'none' }}>
                                                <ul>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'A', '구글광고/검색'); }}>구글광고/검색</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'B', '네이버광고/검색'); }}>네이버광고/검색</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'C', 'SNS'); }}>SNS</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'D', '뉴스/기사'); }}>뉴스/기사</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'E', '지인추천'); }}>지인추천</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'F', '전시/컨퍼런스'); }}>전시/컨퍼런스</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'G', '이벤트'); }}>이벤트</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'H', '사용경험'); }}>사용경험</li>
                                                    <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', 'I', '기타'); }}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen03 ? 'down' : 'up'}`} />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">서비스유형<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="RadioBox h-box">
                                            <input type="radio" name="serviceType" id="radio01" value="A" onChange={this.inputOnChangeHandler.bind(this)} /><label htmlFor="radio01">구축형</label>
                                            <input type="radio" name="serviceType" id="radio02" value="C" onChange={this.inputOnChangeHandler.bind(this)} /><label htmlFor="radio02">클라우드형</label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">문의유형<div className="ColorBlue">*</div></th>
                                    <td>
                                        <div className="checkBox h-box">
                                            <div className={`check01 ${this.state.check01 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('A'); }}>주요기능</div>
                                            <div className={`check01 ${this.state.check02 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('B'); }}>제품가격</div>
                                            <div className={`check01 ${this.state.check03 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('C'); }}>구축기간</div>
                                            <div className={`check01 ${this.state.check04 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('D'); }}>도입방법</div>
                                            <div className={`check01 ${this.state.check05 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('E'); }}>이벤트</div>
                                        </div>
                                        <div className='checkBox h-box'>
                                            <div className={`check01 ${this.state.check06 ? 'IconOff' : ''}`} onClick={() => { this.handleCheckClick('F'); }}>기타</div>
                                            <div className={`InputBox h-box ${this.state.disabled ? 'disa' : ''}`}>
                                                <input className={`InputText ${this.state.disabled ? 'disa' : ''}`} type="text" name="queEtcName" value={this.state.queEtcName} onChange={this.inputOnChangeHandler.bind(this)} disabled={this.state.disabled} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">제목<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <div className="InputBox h-box" style={{ width: "900px", height: "44px" }}>
                                            <input className="InputText" type="text" name="title" onChange={this.inputOnChangeHandler.bind(this)} placeholder="제목을 입력해주세요." />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">문의내용<div className="ColorBlue">*</div></th>
                                    <td className="h-box">
                                        <textarea className="Textarea" name="contents" onChange={this.inputOnChangeHandler.bind(this)} placeholder="문의하실 내용을 입력해주세요. (가격, 보안강도, 관리자 기능 등)&#13;&#10;* 개인정보보호를 위해 문의 내용에는 휴대폰 번호 등의 개인정보 입력을 지양해 주시기 바랍니다." />
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">파일첨부</th>
                                    <td>
                                        <div className="h-box">
                                            <div className="InputBox h-box" style={{ width: "802px", height: "44px" }}>
                                                <input className="InputText" value={this.state.uploadFileName} readOnly />
                                            </div>
                                            <input type="file" ref={this.hidInputFileRef}
                                                onChange={this.selectedFileChange.bind(this)} style={{ display: 'none' }} />
                                            <div className="inputBtn" onClick={this.searchFileClick.bind(this)}>찾아보기</div>
                                        </div>
                                        <div className="inputT">첨부파일은(JPG,GIF,PNG,PDF,HWP,PPT,XLS,DOC,ZIP등) 문서와 이미지만 가능하며 10MB까지만 업로드하실 수 있습니다.</div>
                                    </td>
                                </tr>
                                <tr className="h-box">
                                    <th className="h-box">개인정보 수집/<br />이용동의</th>
                                    <td>
                                        <div className="AgreeBox">
                                            <div className="AgreeText">
                                                더존비즈온에서 제공하는 Amaranth 10 홈페이지에서는 개인정보의 수집, 이용 등 처리에 있어 아래의<br />
                                                사항을 정보주체에게 안내합니다.<br /><br />
                                                1. 개인정보 수집/이용 목적<br />
                                                - 제품소개, 컨설팅 요청 상담 등 고객문의 처리<br />
                                                - (마케팅 정보 수신 동의 시) 더존비즈온의 제품/서비스 정보 및 이벤트, 교육을 전화, 문자, 이메일로 안내<br /><br />
                                                2. 수집하는 개인정보 항목<br />
                                                - 필수항목 : 이름, 연락처, 이메일<br /><br />
                                                3. 개인정보 보유 및 이용기간<br />
                                                - 관련법령에 따라 1년간 보관후 삭제
                                            </div>
                                        </div>
                                        <div className="AgreeBtnBox">
                                            <div className="AgreeBtn h-box">
                                                <div className="AgreeIconOn" style={{ display: this.state.AgreeClick01 ? '' : 'none' }} onClick={() => { this.handleAgreeCheck('2'); }} />
                                                <div className="AgreeIconOff" style={{ display: this.state.AgreeClick02 ? '' : 'none' }} onClick={() => { this.handleAgreeCheck('1'); }} />
                                                <div className="AgreeBtnText h-box">
                                                    개인정보 수집 및 이용에 대한 안내에 동의합니다.&nbsp;
                                                    <div className="ColorBlue">(필수)</div>
                                                </div>
                                            </div>
                                            <div className="AgreeBtn h-box">
                                                <div className="AgreeIconOn" style={{ display: this.state.AgreeClick03 ? '' : 'none' }} onClick={() => { this.handleAgreeCheck('4'); }} />
                                                <div className="AgreeIconOff" style={{ display: this.state.AgreeClick04 ? '' : 'none' }} onClick={() => { this.handleAgreeCheck('3'); }} />
                                                <div className="AgreeBtnText h-box">
                                                    프로모션 및 마케팅 정보 수신에 동의합니다.&nbsp;
                                                    <div className="ColorGray">(선택)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="IntroBtnBox">
                            <div className="IntroBtn02 h-box" onClick={this.sendQuestion.bind(this)}>
                                <div className="BtnText">문의하기</div>
                                <div className="IntroArrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


