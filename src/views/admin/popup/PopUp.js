import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url'; 
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol';

// 이미지
import prevIcon from '../../../www/images/admin/icon_arrow_prev.png';
import nextIcon from '../../../www/images/admin/icon_arrow_next.png';


// 팝업관리 페이지
export default class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            // 드롭다운리스트
            SelectBoxOpen01: false,
            SelectBoxOpen02: false,
            inTxt01:'전체',
            inTxt02:'전체',

            // 그리드 데이터 없을 때
            emptyData : true,
            
            pagePosition: 1,
            pageSize: 10,
            dataTotalCount: 0,

            popDiv: '',
            popDocList : []
        }

        this.drawPageStartNum = 1; // 페이지 번호 생성할 때 시작 번호
        this.lastPageNumber = 1;   // 조회 된 데이터 기준으로 마지막 페이지 번호
        this.maxDisplayPageNum = 10; // 한번에 표현되는 페이지 번호 [ 1 2 3 4 .... 10 ]
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        if(type === '1'){
            this.setState({
                SelectBoxOpen01:!this.state.SelectBoxOpen01,SelectBoxOpen02:false,
            });
        }else if(type === '2'){
            this.setState({
                SelectBoxOpen01:false,SelectBoxOpen02:!this.state.SelectBoxOpen02,
            });
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01:false,SelectBoxOpen02:false,
        });
    }

    handleSelectValue = (select, code, txt) => {
        this.setState({
            popDiv: code,
            inTxt01:txt
        });
    }

    getPopDataLoad() {

        const param = {
            pagePosition: this.state.pagePosition,
            pageSize: this.state.pageSize,
            popDiv: this.state.popDiv,
            searchText: document.getElementById('txtSearchText').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETPOPUPDATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                popDocList: jsonObj.dataList,
                dataTotalCount: jsonObj.totalCount,
                emptyData: jsonObj.totalCount === 0 ? true : false
            });

        }).catch(e => console.log(e));
    }

    componentDidMount(){
        document.body.addEventListener("click", this.handleSelectBoxClose);
        this.getPopDataLoad();
    }
        
    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }
    
    pageClick(currentPos) {

        const param = {
            pagePosition: currentPos,
            pageSize: this.state.pageSize,
            popDiv: this.state.popDiv,
            searchText: document.getElementById('txtSearchText').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETPOPUPDATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                pagePosition: currentPos,
                popDocList: jsonObj.dataList,
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
            popDiv: this.state.popDiv,
            searchText: document.getElementById('txtSearchText').value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETPOPUPDATALIST, param)
        .then((jsonObj) => {
            
            this.setState({
                pagePosition: searchPageNum,
                popDocList: jsonObj.dataList,
                dataTotalCount: jsonObj.totalCount,
                emptyData: jsonObj.totalCount === 0 ? true : false
            });

        }).catch(e => console.log(e));
    }

    tdTitleClick = (clickData, event) => {
        
        if(event.target.tagName && (event.target.tagName.toLowerCase() === 'td')) {
            //Link 이벤트 발생
            document.querySelector('#popLink_' + clickData.popSeq).click();
        }

    }

    render() {

        let pageContents = '';
        if(this.state.popDocList.length > 0) {
           
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
                <div id="popUp">
                    <div className="title01">팝업관리</div>
                    
                    {/* 검색 영역 */}
                    <div className="topBox h-box">
                        <div className="h-box">
                            <div className="text01">· 구분</div>
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
                        </div>
                        <div className="h-box flex-1 rightBox">
                            <div className="text01">· 검색</div>
                            <div className="InputBox h-box">
                                <input className="InputText" id="txtSearchText" type="text" placeholder="검색어를 입력해주세요."/>
                            </div>
                            <button className="btn" onClick={()=>{this.getPopDataLoad()}}>검색</button>
                        </div>
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
                                <Link to={MenuUrl.ADMIN_MGR_POPUP} onClick={()=>{this.props.handleGnbMenu('popup','2')}}>
                                    <button className="btn">등록</button>
                                </Link>
                            </div>
                        </div>

                        {/* 그리드 영역 */}
                        <div className="gridTableBasic">
                            <div className="gridTableBasicH01">
                                <table>
                                    <colgroup>
                                        <col width="120" />
                                        <col width="" />
                                        <col width="180" />
                                        <col width="180" />
                                        <col width="180" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>제목</th>
                                            <th>노출기간</th>
                                            <th>등록일</th>
                                            <th>상태</th>
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
                                        <col width="180" />
                                        <col width="180" />
                                        <col width="180" />
                                    </colgroup>
                                    <tbody>
                                        {
                                            this.state.popDocList.map((data, idx) => {
                                                return (
                                                    <tr key={'admMgrPopup_' + data.popSeq}>
                                                        <td>{data.popDivTxt}</td>
                                                        <td onClick={this.tdTitleClick.bind(this, data)} >
                                                            <Link id={'popLink_' + data.popSeq} to={{
                                                                pathname: MenuUrl.ADMIN_MGR_POPUP,
                                                                state: data
                                                            }}>
                                                                {data.popTitle}
                                                            </Link>
                                                        </td>
                                                        <td>{ data.popDisplayYn === 'N' ? '상시' : data.popDisplayFrom + ' ~ ' + data.popDisplayTo }</td>
                                                        <td>{data.popRegDt}</td>
                                                        <td>{data.popStateTxt}</td>
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
                                        <col width="180" />
                                        <col width="180" />
                                        <col width="180" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td className="dataNo" colSpan={5}>데이터가 없습니다.</td>
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