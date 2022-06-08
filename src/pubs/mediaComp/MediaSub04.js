import React, { Component, Fragment } from 'react';
import MediaSubLnb from './unit/MediaSubLnb';
import MediaOpen from './unit/MediaOpen';

// 공지사항
export default class MediaSub04 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectBoxOpen01: false,
            inTxt01: '제목+내용',
            emptyData: false,

        }
    }

    handleSelectValue = (txt) => {this.setState({ inTxt01:txt });}

    render() {
        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    mediaSub04={this.props.mediaSub04}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub04">
                    <div style={{display: this.props.tableOpen === false ? '':'none'}}>
                        <div className='h3'>공지사항</div>
                        
                        <div className='top h-box flex-1'>
                            <div className="selectBox">
                                <div className="inbox" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01:!this.state.selectBoxOpen01});}}>{this.state.inTxt01}</div>
                                <div className="list animated03s fadeIn" style={{display:this.state.selectBoxOpen01 ? '' : 'none'}}>
                                    <ul>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01: false});this.handleSelectValue('제목+내용');}}>제목+내용</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01: false});this.handleSelectValue('제목');}}>제목</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01: false});this.handleSelectValue('내용');}}>내용</li>
                                        <li onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({selectBoxOpen01: false});this.handleSelectValue('기타');}}>기타</li>
                                    </ul>
                                </div>
                                <div className={`arr ${this.state.selectBoxOpen01 ? 'down':'up'}`}/>
                            </div>
                            <div className='searchBox'>
                                <input type='text' placeholder='공지사항을 검색해보세요.'/>
                            </div>
                        </div>
                        

                        {/* 확인 안 한 게시물은 굵은 폰트 처리 (클래스 fontBold 사용) */}
                        {/* 첨부파일 있는 게시물은 아이콘 표시 (span 클래스 attach) */}

                        {/* 데이터 있을 때 */}
                        <div style={{display: this.state.emptyData ? 'none':''}}>
                            <table className='media04Table'>
                                <colgroup>
                                    <col width='102'/>
                                    <col width=''/>
                                    <col width='148'/>
                                    <col width='120'/>
                                </colgroup>

                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>조회</th>
                                </tr>
                                <tr>
                                    <td><div className='label'>공지</div></td>
                                    <td className='txtLeft fontBold'>Amaranth 10 개인정보 수집 및 이용 동의/마케팅 정보 수신 동의 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td><div className='label'>공지</div></td>
                                    <td className='txtLeft fontBold' onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleScrollTop();this.props.handleTableClick('1');}}>[~소진 시까지] Amaranth 10 ‘DX One Pack 프로모션’<span className='attach'/></td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td><div className='label'>공지</div></td>
                                    <td className='txtLeft fontBold'>[Live] 소프트웨이브  X 더존비즈온</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className='non txtLeft fontBold'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내<span className='attach'/></td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className='txtLeft'>Amaranth 10 개인정보처리방침 내용 변경 안내</td>
                                    <td className='txtGray'>2022.03.04</td>
                                    <td className='txtGray'>446</td>
                                </tr>
                            </table>
                        </div>

                        {/* 데이터 없을 때 */}
                        <div style={{display: this.state.emptyData ? '':'none'}}>
                            <table className='media04Table'>
                                <colgroup>
                                    <col width='102'/>
                                    <col width=''/>
                                    <col width='148'/>
                                    <col width='120'/>
                                </colgroup>

                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>조회</th>
                                </tr>
                                <tr>
                                    <td className='emptyTd' colSpan={4}>검색 결과가 없습니다.</td>
                                </tr>
                                
                            </table>
                        </div>

                        {/* 페이징 영역 (데이터 없을 때 1번 페이지만 표시)*/}
                        <div className='paging h-box'>
                            <div className='first'/><div className='prev'/>
                            <div className='numBox h-box'>
                                <div className='num on'>1</div>
                                <div className='num'>2</div>
                                <div className='num'>3</div>
                                <div className='num'>4</div>
                                <div className='num'>5</div>
                                <div className='num'>6</div>
                                <div className='num'>7</div>
                                <div className='num'>8</div>
                                <div className='num'>9</div>
                                <div className='num'>10</div>
                            </div>
                            <div className='next'/><div className='last'/>
                        </div>
                    </div>

                    {/* 게시물 제목 클릭시 해당 내용 화면 */}
                    <div className='tableCon v-box' style={{display: this.props.tableOpen === true ? '':'none'}}>
                        <MediaOpen 
                            handleTableClick={this.props.handleTableClick}
                            handleScrollTop={this.props.handleScrollTop}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}


