import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url';
import * as HttpUtils from "../../common/js/HttpUtils";
import * as ApiUrl from '../../context/BackEndProtocol';

// 이미지
import prevIcon from '../../../www/images/admin/icon_arrow_prev.png';
import nextIcon from '../../../www/images/admin/icon_arrow_next.png';

// 영상콘텐츠 페이지
export default class MediaCenter03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // 드롭다운리스트
            SelectBoxOpen01: false,
            SelectBoxOpen02: false,
            SelectBoxOpen03: false,
            inTxt01: '전체',
            inTxt02: '전체',
            inTxt03: '전체',

            mediaDiv: '',
            mediaImportantYn: '',
            searchType: '',

            // 그리드 데이터 없을 때
            emptyData: true,

            pagePosition: 1,
            pageSize: 10,
            dataTotalCount: 0,

            mediaMaDocList: []
        }

        this.drawPageStartNum = 1; // 페이지 번호 생성할 때 시작 번호
        this.lastPageNumber = 1;   // 조회 된 데이터 기준으로 마지막 페이지 번호
        this.maxDisplayPageNum = 10; // 한번에 표현되는 페이지 번호 [ 1 2 3 4 .... 10 ]
    }

    // 드롭다운리스트
    handleSelectBoxToggle = (type) => {
        if (type === '1') {
            this.setState({
                SelectBoxOpen01: !this.state.SelectBoxOpen01, SelectBoxOpen02: false, SelectBoxOpen03: false,
            });
        } else if (type === '2') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: !this.state.SelectBoxOpen02, SelectBoxOpen03: false,
            });
        } else if (type === '3') {
            this.setState({
                SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: !this.state.SelectBoxOpen03,
            });
        }
    }

    handleSelectBoxClose = () => {
        this.setState({
            SelectBoxOpen01: false, SelectBoxOpen02: false, SelectBoxOpen03: false,
        });
    }

    handleSelectValue = (select, txt, code) => {
        if (select === 'select01') {
            this.setState({
                inTxt01: txt,
                mediaDiv: code
            });
        } else if (select === 'select02') {
            this.setState({
                inTxt02: txt,
                mediaImportantYn: code
            });
        } else if (select === 'select03') {
            this.setState({
                inTxt03: txt,
                searchType: code
            });
        }
    }

    getMediaMaDataLoad() {

        const param = {
            pagePosition: this.state.pagePosition,
            pageSize: this.state.pageSize,
            mediaDiv: this.state.mediaDiv,
            mediaImportantYn: this.state.mediaImportantYn,
            searchType: this.state.searchType,
            searchTxt: document.querySelector("#txtSearchTxt").value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETMGRMEDIADATALIST, param)
            .then((jsonObj) => {

                this.setState({
                    mediaMaDocList: jsonObj.dataList,
                    dataTotalCount: jsonObj.totalCount,
                    emptyData: jsonObj.totalCount === 0 ? true : false
                });

            }).catch(e => console.log(e));
    }

    componentDidMount() {
        document.body.addEventListener("click", this.handleSelectBoxClose);
        this.getMediaMaDataLoad();
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.handleSelectBoxClose);
    }

    tdTitleClick = (clickData, event) => {

        if (event.target.tagName && (event.target.tagName.toLowerCase() === 'td')) {
            //Link 이벤트 발생
            document.querySelector('#mediaMaLink_' + clickData.mediaSeq).click();
        }

    }

    arrowPageClick(div) {

        let searchPageNum = 0;
        if (div === 'prev') {
            searchPageNum = this.state.pagePosition - 1;
            if (searchPageNum <= 0) {
                alert('첫번째 페이지입니다');
                return;
            }
        }
        else if (div === 'next') {
            searchPageNum = this.state.pagePosition + 1;
            if (searchPageNum > this.lastPageNumber) {
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
            mediaDiv: this.state.mediaDiv,
            mediaImportantYn: this.state.mediaImportantYn,
            searchType: this.state.searchType,
            searchTxt: document.querySelector("#txtSearchTxt").value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETMGRMEDIADATALIST, param)
            .then((jsonObj) => {

                this.setState({
                    mediaMaDocList: jsonObj.dataList,
                    dataTotalCount: jsonObj.totalCount,
                    emptyData: jsonObj.totalCount === 0 ? true : false
                });

            }).catch(e => console.log(e));
    }

    pageClick(currentPos) {

        const param = {
            pagePosition: currentPos,
            pageSize: this.state.pageSize,
            mediaDiv: this.state.mediaDiv,
            mediaImportantYn: this.state.mediaImportantYn,
            searchType: this.state.searchType,
            searchTxt: document.querySelector("#txtSearchTxt").value
        }

        HttpUtils.callAuthPostMethod(ApiUrl.ADMIN_GETMGRMEDIADATALIST, param)
            .then((jsonObj) => {

                this.setState({
                    pagePosition: currentPos,
                    mediaMaDocList: jsonObj.dataList,
                    dataTotalCount: jsonObj.totalCount,
                    emptyData: jsonObj.totalCount === 0 ? true : false
                });

            }).catch(e => console.log(e));
    }

    render() {

        let pageContents = '';
        if (this.state.mediaMaDocList.length > 0) {

            // 페이지 설정 ( 기본적으로 최대 10개 만 보여준다 ) , 1 ~ 10 ,  11 ~ 20
            let mSize = Math.floor(this.state.dataTotalCount / this.state.pageSize);
            let dSize = this.state.dataTotalCount % this.state.pageSize > 0 ? 1 : 0;

            this.lastPageNumber = mSize + dSize; // 마지막 페이지 정보

            let pageArr = [];

            if (this.state.pagePosition % this.maxDisplayPageNum === 0) {
                this.drawPageStartNum = this.state.pagePosition;
            }

            for (let i = this.drawPageStartNum; i <= this.lastPageNumber; i++) {
                pageArr.push(i);
                if (i % 10 === 0) {
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
                <div id="MediaCenter03">
                    <div className="title01">영상콘텐츠</div>

                    {/* 검색 영역 */}
                    <div className="topBox">
                        <div className="h-box flex-2">
                            <div className="text01">· 구분</div>
                            <div className="SelectBox">
                                <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('1'); }}>{this.state.inTxt01}</div>
                                <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen01 ? '' : 'none' }}>
                                    <ul>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '전체', ''); }}>전체</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', 'CEO 인터뷰', 'A'); }}>CEO 인터뷰</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '세미나', 'B'); }}>세미나</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '홍보', 'C'); }}>홍보</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select01', '주요 기능', 'D'); }}>주요 기능</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen01 ? 'down' : 'up'}`} />
                            </div>
                            <div className="text01" style={{ marginLeft: "20px" }}>· 최상단 노출</div>
                            <div className="SelectBox">
                                <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('2'); }}>{this.state.inTxt02}</div>
                                <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen02 ? '' : 'none' }}>
                                    <ul>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', '전체', ''); }}>전체</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'Y', 'Y'); }}>Y</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select02', 'N', 'N'); }}>N</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen02 ? 'down' : 'up'}`} />
                            </div>
                        </div>
                        <div className="h-box" style={{ marginTop: "10px" }}>
                            <div className="text01">· 검색</div>
                            <div className="SelectBox">
                                <div className="inbox" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxToggle('3'); }}>{this.state.inTxt03}</div>
                                <div className="list animated03s fadeIn" style={{ display: this.state.SelectBoxOpen03 ? '' : 'none' }}>
                                    <ul>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '전체', ''); }}>전체</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '제목', 'T'); }}>제목</li>
                                        <li onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.handleSelectBoxClose(); this.handleSelectValue('select03', '내용', 'C'); }}>내용</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen03 ? 'down' : 'up'}`} />
                            </div>
                            <div className="InputBox h-box flex-1">
                                <input className="InputText" type="text" id="txtSearchTxt" placeholder="검색어를 입력해주세요." />
                            </div>
                            <button className="btn" onClick={() => { this.getMediaMaDataLoad() }}>검색</button>
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
                                <Link to={MenuUrl.ADMIN_MGR_MEDIA} onClick={() => { this.props.handleGnbMenu('media', '6') }}>
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
                                        <col width="180" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>제목</th>
                                            <th>등록일</th>
                                            <th>상태</th>
                                            <th>최상단 노출</th>
                                            <th>조회수</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            {/* 데이터 있을 때 */}
                            <div className="gridTableBasicB01" style={{ display: this.state.emptyData ? 'none' : '' }}>
                                <table>
                                    <colgroup>
                                        <col width="120" />
                                        <col width="" />
                                        <col width="180" />
                                        <col width="180" />
                                        <col width="180" />
                                        <col width="180" />
                                    </colgroup>
                                    <tbody>
                                        {
                                            this.state.mediaMaDocList.map((data, idx) => {
                                                return (
                                                    <tr key={'admMgrMa_' + data.mediaSeq}>
                                                        <td>{data.mediaDivTxt}</td>
                                                        <td onClick={this.tdTitleClick.bind(this, data)} >
                                                            <Link id={'mediaMaLink_' + data.mediaSeq} to={{
                                                                pathname: MenuUrl.ADMIN_MGR_MEDIA,
                                                                state: data
                                                            }}>
                                                                {data.mediaTitle}
                                                            </Link>
                                                        </td>
                                                        <td>{data.mediaRegDt}</td>
                                                        <td>{data.mediaStateTxt}</td>
                                                        <td>{data.mediaImportantYn}</td>
                                                        <td>{data.mediaCount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            {/* 데이터 없을 때 */}
                            <div className="gridTableBasicB01" style={{ display: this.state.emptyData ? '' : 'none' }}>
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
                        <div className="PubGridPaging" style={{ display: this.state.emptyData ? 'none' : '' }}>
                            <div className="paging h-box">
                                <button className="prev" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.arrowPageClick('prev'); }}><img src={prevIcon} alt="" /></button>
                                {pageContents}
                                <button className="next" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.arrowPageClick('next'); }}><img src={nextIcon} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}