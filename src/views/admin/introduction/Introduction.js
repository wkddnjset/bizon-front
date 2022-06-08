import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url'; 
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

// 이미지
import prevIcon from '../../../www/images/admin/icon_arrow_prev.png';
import nextIcon from '../../../www/images/admin/icon_arrow_next.png';


// 도입문의 페이지
export default class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            // 드롭다운리스트
            SelectBoxOpen01: false,
            SelectBoxOpen02: false,
            SelectBoxOpen03: false,
            SelectBoxOpen04: false,
            inTxt01:'전체',
            inTxt02:'전체',
            inTxt03:'전체',

            //구분
            queTypeCode: '',

            //광고수신
            collectMarketingYn: '',

            //등록일 From - to
            fromDate: null,
            toDate: null,

            //검색
            searchType: '',

            // 그리드 데이터 없을 때
            emptyData : true,

            pagePosition: 1,
            pageSize: 10,
            dataTotalCount: 0,

            introDocList : []
        }

        this.drawPageStartNum = 1; // 페이지 번호 생성할 때 시작 번호
        this.lastPageNumber = 1;   // 조회 된 데이터 기준으로 마지막 페이지 번호
        this.maxDisplayPageNum = 10; // 한번에 표현되는 페이지 번호 [ 1 2 3 4 .... 10 ]
    }

    // 드롭다운리스트
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

    handleSelectValue = (select, code, txt) => {
        if(select === 'select01'){
            this.setState({
                queTypeCode: code,
                inTxt01:txt
            });
        }else if(select === 'select02'){
            this.setState({
                collectMarketingYn: code,
                inTxt02:txt
            });
        }else if(select === 'select03'){
            this.setState({
                searchType: code,
                inTxt03:txt
            });
        }
    }

    getIntroDataLoad() {

        const param = {
            pagePosition: this.state.pagePosition,
            pageSize: this.state.pageSize,
            queTypeCode: this.state.queTypeCode,
            collectMarketingYn: this.state.collectMarketingYn,
            fromDt: this.convertDateToString(this.state.fromDate),
            toDt: this.convertDateToString(this.state.toDate),
            searchType: this.state.searchType,
            searchTxt: document.querySelector('#txtSearch').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETINTRODATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                introDocList: jsonObj.dataList,
                dataTotalCount: jsonObj.totalCount,
                emptyData: jsonObj.totalCount === 0 ? true : false
            });

        }).catch(e => console.log(e));
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

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);
        this.getIntroDataLoad();
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }
       
    pageClick(currentPos) {

        const param = {
            pagePosition: currentPos,
            pageSize: this.state.pageSize,
            queTypeCode: this.state.queTypeCode,
            collectMarketingYn: this.state.collectMarketingYn,
            fromDt: this.convertDateToString(this.state.fromDate),
            toDt: this.convertDateToString(this.state.toDate),
            searchType: this.state.searchType,
            searchTxt: document.querySelector('#txtSearch').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETINTRODATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                pagePosition: currentPos,
                introDocList: jsonObj.dataList,
                dataTotalCount: jsonObj.totalCount,
                emptyData: jsonObj.totalCount === 0 ? true : false
            });

        }).catch(e => console.log(e));
        
    }

    arrowPageClick(div) {
        
        let searchPageNum = 0;
        if(div === 'prev') {
            searchPageNum = this.state.pagePosition - 1;
            if(searchPageNum <= 0) {
                alert('첫번째 페이지입니다');
                return;
            }
        }
        else if(div === 'next') {
            searchPageNum = this.state.pagePosition + 1;
            if(searchPageNum > this.lastPageNumber) {
                alert('마지막 페이지입니다');
                return;
            }
        }
        else {
            alert('잘못된 파라미터 정보입니다');
            return;
        }

        const param = {
            pagePosition: searchPageNum,
            pageSize: this.state.pageSize,
            queTypeCode: this.state.queTypeCode,
            collectMarketingYn: this.state.collectMarketingYn,
            fromDt: this.convertDateToString(this.state.fromDate),
            toDt: this.convertDateToString(this.state.toDate),
            searchType: this.state.searchType,
            searchTxt: document.querySelector('#txtSearch').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETINTRODATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                pagePosition: searchPageNum,
                introDocList: jsonObj.dataList,
                dataTotalCount: jsonObj.totalCount,
                emptyData: jsonObj.totalCount === 0 ? true : false
            });

        }).catch(e => console.log(e));
    }

    tdTitleClick = (clickData, event) => {
        
        if(event.target.tagName && (event.target.tagName.toLowerCase() === 'td')) {
            //Link 이벤트 발생
            document.querySelector('#introLink_' + clickData.introSeq).click();
        }

    }

    setDatePickerValue = (date) => {

        this.setState({
            fromDate: date[0],
            toDate: date[1]
        });

    }

    getIntroExcelDataDown = () => {

        const param = {
            pagePosition: this.state.pagePosition,
            pageSize: this.state.pageSize,
            queTypeCode: this.state.queTypeCode,
            collectMarketingYn: this.state.collectMarketingYn,
            fromDt: this.convertDateToString(this.state.fromDate),
            toDt: this.convertDateToString(this.state.toDate),
            searchType: this.state.searchType,
            searchTxt: document.querySelector('#txtSearch').value
        }

        HttpUtils.callAutFileDownPostMethod(ApiUrl.ADMIN_GETINTROEXCELFILEDOWN, param)
        .then(blob => URL.createObjectURL(blob))
        .then(uril => {

            let link = document.createElement("a");
            link.href = uril;
            link.download = '도입문의_' + this.convertDateToString(new Date()) + '.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }).catch(e => console.log(e));

    }

    render() {

        let pageContents = '';
        if(this.state.introDocList.length > 0) {
           
            // 페이지 설정 ( 기본적으로 최대 10개 만 보여준다 ) , 1 ~ 10 ,  11 ~ 20
            let mSize = Math.floor(this.state.dataTotalCount / this.state.pageSize);
            let dSize = this.state.dataTotalCount % this.state.pageSize > 0 ? 1 : 0;

            this.lastPageNumber = mSize + dSize; // 마지막 페이지 정보

            let pageArr = [];
            
            if(this.state.pagePosition % this.maxDisplayPageNum === 0) {
                this.drawPageStartNum = this.state.pagePosition;
            }

            for(let i = this.drawPageStartNum; i <= this.lastPageNumber; i++) {
                pageArr.push(i);
                if(i%10 === 0) {
                    break;
                }
            }

            pageContents = pageArr.map((data, idx) => {
                return (
                    <button key={data} 
                            className={data === this.state.pagePosition ? 'num on' : 'num'}
                            type="button"
                            onClick={this.pageClick.bind(this, data)}
                            tabIndex="0">
                        <span>
                            {data}
                        </span>
                    </button>
                )
            });
        }

        return (
            <Fragment>
                <div id="introduction">
                    <div className="title01">도입문의</div>
                    
                    {/* 검색 영역 */}
                    <div className="topBox">
                        <table>
                            <colgroup>
                                <col width="50"/>
                                <col width="100"/>
                                <col width="50"/>
                                <col width="100"/>
                                <col width="50"/>
                                <col width="300"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td className="th">· 구분</td>
                                    <td>
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                                <ul>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', '', '전체');}}>전체</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'A', '주요기능');}}>주요기능</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'B', '제품가격');}}>제품가격</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'C', '구축기간');}}>구축기간</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'D', '도입방법');}}>도입방법</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'E', '이벤트');}}>이벤트</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01', 'F', '기타');}}>기타</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                                        </div>
                                    </td>
                                    <td className="th">· 광고 수신</td>
                                    <td>
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('2');}}>{this.state.inTxt02}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen02 ? '' : 'none'}}>
                                                <ul>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02', '', '전체');}}>전체</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02', 'Y', 'Y');}}>Y</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02', 'N', 'N');}}>N</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen02 ? 'down':'up'}`}/>
                                        </div>
                                    </td>
                                    <td className="th">· 등록일</td>
                                    <td>
                                        <div className="SelectBox" style={{width:"63%"}}>
                                            <DatePicker 
                                                dateFormat="yyyy-MM-dd"
                                                locale={ko}
                                                showPopperArrow={false}
                                                startDate={this.state.fromDate}
                                                endDate={this.state.toDate}
                                                monthsShown={2}
                                                selectsRange={true}
                                                isClearable
                                                onChange={this.setDatePickerValue}
                                                customInput={<input type="text" style={{width: '90%', height: '20px'}} value={ this.state.fromDate + ' ~ ' + this.state.toDate} 
                                                                onInput={(e) => { e.target.value = ''; }}
                                                            />}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="th">· 검색</td>
                                    <td>
                                        <div className="SelectBox">
                                            <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('3');}}>{this.state.inTxt03}</div>
                                            <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen03 ? '' : 'none'}}>
                                                <ul>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03', '', '전체');}}>전체</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03', 'T', '제목');}}>제목</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03', 'C', '내용');}}>내용</li>
                                                    <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03', 'W', '작성자');}}>작성자</li>
                                                </ul>
                                            </div>
                                            <div className={`arr ${this.state.SelectBoxOpen03 ? 'down':'up'}`}/>
                                        </div>
                                    </td>
                                    <td colSpan={4}>
                                        <div className="h-box">
                                            <div className="InputBox h-box">
                                                <input className="InputText" id='txtSearch' type="text" placeholder="검색어를 입력해주세요."/>
                                            </div>
                                            <div>
                                                <button className="btn" onClick={()=>{this.getIntroDataLoad()}}>검색</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="conBox">
                        {/* 토탈 및 등록 영역 */}
                        <div className="conTopbox h-box">
                            <div className="totalBox flex-1 h-box">
                                <div>Total : &nbsp;</div>
                                <div>{this.state.dataTotalCount}</div>
                                <div>건</div>
                            </div>
                            <div className="h-box">
                                <button className="btn" onClick={this.getIntroExcelDataDown.bind(this)}>Excel 다운</button>
                            </div>
                        </div>

                        {/* 그리드 영역 */}
                        <div className="gridTableBasic">
                            <div className="gridTableBasicH01">
                                <table>
                                    <colgroup>
                                        <col width="120" />
                                        <col width="" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="130" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>제목</th>
                                            <th>업종</th>
                                            <th>회사명</th>
                                            <th>작성자</th>
                                            <th>광고 수신</th>
                                            <th>등록일</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            {/* 데이터 있을 때 */}
                            <div className="gridTableBasicB01" style={{display:this.state.emptyData ? 'none':''}}>
                                <table>
                                    <colgroup>
                                        <col width="120" />
                                        <col width="" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="130" />
                                    </colgroup>
                                    <tbody>
                                        {
                                            this.state.introDocList.map((data, idx) => {
                                                return (
                                                    <tr key={'admMgrIntro_' + data.introSeq}>
                                                        <td style={{lineHeight: 'initial'}}>
                                                            {
                                                                data.queTypeCodeName.split('|').map(str => {
                                                                    return (<span>{str}<br/></span>)
                                                                })
                                                            }
                                                        </td>
                                                        <td onClick={this.tdTitleClick.bind(this, data)} >
                                                            <Link id={'introLink_' + data.introSeq} to={{
                                                                pathname: MenuUrl.ADMIN_MGR_INTRO,
                                                                state: data
                                                            }}>
                                                                {data.title}
                                                            </Link>
                                                        </td>
                                                        <td>{data.bnfTextName}</td>
                                                        <td>{data.companyName}</td>
                                                        <td>{data.userName}</td>
                                                        <td>{data.collectMarketingYn}</td>
                                                        <td>{data.createdDt}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            {/* 데이터 없을 때 */}
                            <div className="gridTableBasicB01" style={{display:this.state.emptyData ? '':'none'}}>
                                <table>
                                    <colgroup>
                                        <col width="120" />
                                        <col width="" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="120" />
                                        <col width="130" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td className="dataNo" colSpan={7}>데이터가 없습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    {/* 페이징 영역 */}
                    <div className="botmBox">
                        <div className="PubGridPaging" style={{display:this.state.emptyData ? 'none':''}}>
                            <div className="paging h-box">
                                <button className="prev" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.arrowPageClick('prev');}}><img src={prevIcon} alt=""/></button>
                                {pageContents}
                                <button className="next" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.arrowPageClick('next');}}><img src={nextIcon} alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}