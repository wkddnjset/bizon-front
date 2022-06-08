import React, { Component, Fragment } from 'react';

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
            emptyData : false,

        }
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

    handleSelectValue = (select,txt) => {
        if(select === 'select01'){
            this.setState({
                inTxt01:txt
            });
        }else if(select === 'select02'){
            this.setState({
                inTxt02:txt
            });
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
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','전체');}}>전체</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','일반');}}>일반</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','긴급');}}>긴급</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','업데이트');}}>업데이트</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','이벤트');}}>이벤트</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.SelectBoxOpen01 ? 'down':'up'}`}/>
                            </div>
                        </div>
                        <div className="h-box flex-1 rightBox">
                            <div className="text01">· 검색</div>
                            <div className="InputBox h-box">
                                <input className="InputText" type="text" placeholder="검색어를 입력해주세요."/>
                            </div>
                            <button className="btn">검색</button>
                        </div>
                    </div>

                    <div className="conBox">

                        {/* 토탈 및 등록 영역 */}
                        <div className="conTopbox h-box">
                            <div className="totalBox flex-1 h-box">
                                <div>Total : &nbsp;</div>
                                <div>27</div>
                                <div>건</div>
                            </div>
                            <div className="h-box">
                                <button className="btn" onClick={()=>{this.props.handleGnbMenu('popup','2')}}>등록</button>
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
                                        <tr>
                                            <td>일반</td>
                                            <td>공지사항 제목A</td>
                                            <td>상시</td>
                                            <td>2021.08.01</td>
                                            <td>노출</td>
                                        </tr>
                                        <tr>
                                            <td>긴급</td>
                                            <td>공지사항 제목B</td>
                                            <td>2021.08.01~2021.09.30</td>
                                            <td>2021.08.01</td>
                                            <td>노출</td>
                                        </tr>
                                        <tr>
                                            <td>업데이트</td>
                                            <td>공지사항 제목C</td>
                                            <td>2021.08.01~2021.09.30</td>
                                            <td>2021.08.01</td>
                                            <td>비노출</td>
                                        </tr>
                                        <tr>
                                            <td>이벤트</td>
                                            <td>공지사항 제목D</td>
                                            <td>2021.08.01~2021.09.30</td>
                                            <td>2021.08.01</td>
                                            <td>노출</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* 데이터 없을 때 */}
                            <div className="gridTableBasicB01" style={{display:this.props.emptyData ? '':'none'}}>
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
                        <div className="PubGridPaging" style={{display:this.props.emptyData ? 'none':''}}>
                            <div className="paging h-box">
                                <button className="prev"><img src={prevIcon} alt=""/></button>
                                <button className="num on" type="button" tabindex="0"><span>1</span></button>
                                <button className="num" type="button" tabindex="0"><span>2</span></button>
                                <button className="next"><img src={nextIcon} alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}