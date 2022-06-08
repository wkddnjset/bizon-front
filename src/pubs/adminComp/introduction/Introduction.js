import React, { Component, Fragment } from 'react';

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
            inTxt04:'전체',

            // 그리드 데이터 없을 때
            emptyData : false,

        }
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

    handleSelectValue = (select,txt) => {
        if(select === 'select01'){
            this.setState({
                inTxt01:txt
            });
        }else if(select === 'select02'){
            this.setState({
                inTxt02:txt
            });
        }else if(select === 'select03'){
            this.setState({
                inTxt03:txt
            });
        }else if(select === 'select04'){
            this.setState({
                inTxt04:txt
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
                <div id="introduction">
                    <div className="title01">도입문의</div>
                    
                    {/* 검색 영역 */}
                    <div className="topBox">
                        <table>
                            <colgroup>
                                <col width="120"/>
                                <col width="300"/>
                                <col width="120"/>
                                <col width="300"/>
                                <col width="120"/>
                                <col width="300"/>
                            </colgroup>
                            <tr>
                                <td className="th">· 구분</td>
                                <td>
                                    <div className="SelectBox">
                                        <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxToggle('1');}}>{this.state.inTxt01}</div>
                                        <div className="list animated03s fadeIn" style={{display:this.state.SelectBoxOpen01 ? '' : 'none'}}>
                                            <ul>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','전체');}}>전체</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','주요기능');}}>주요기능</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','제품가격');}}>제품가격</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','구축기간');}}>구축기간</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','도입방법');}}>도입방법</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','이벤트');}}>이벤트</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select01','기타');}}>기타</li>
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
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','전체');}}>전체</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','Y');}}>Y</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select02','N');}}>N</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen02 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                                <td className="th">· 등록일</td>
                                <td>
                                    <div className="SelectBox" style={{width:"85%"}}>
                                        <div className="inbox h-box">
                                            <div>전체</div>
                                            <div className="icon"/>
                                        </div>
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
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','전체');}}>전체</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','제목');}}>제목</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','내용');}}>내용</li>
                                                <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleSelectBoxClose();this.handleSelectValue('select03','작성자');}}>작성자</li>
                                            </ul>
                                        </div>
                                        <div className={`arr ${this.state.SelectBoxOpen03 ? 'down':'up'}`}/>
                                    </div>
                                </td>
                                <td/>
                                <td colSpan={3}>
                                    <div className="h-box">
                                        <div className="InputBox h-box">
                                            <input className="InputText" type="text" placeholder="검색어를 입력해주세요."/>
                                        </div>
                                        <div>
                                            <button className="btn">검색</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
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
                                <button className="btn">Excel 다운</button>
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
                                            <th>공고 수신</th>
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
                                        <tr>
                                            <td>주요기능</td>
                                            <td onClick={()=>{this.props.handleGnbMenu('introduction','2')}}>도입문의 제목A</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>Y</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>제품가격</td>
                                            <td>도입문의 제목B</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>N</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>구축기간</td>
                                            <td>도입문의 제목C</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>N</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>도입방법</td>
                                            <td>도입문의 제목D</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>Y</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>이벤트</td>
                                            <td>도입문의 제목E</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>N</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>기타</td>
                                            <td>도입문의 제목F</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>Y</td>
                                            <td>2021.09.30</td>
                                        </tr>
                                        <tr>
                                            <td>기타</td>
                                            <td>도입문의 제목G</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>Y</td>
                                            <td>2021.09.30</td>
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