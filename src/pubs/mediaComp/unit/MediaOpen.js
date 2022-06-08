import React, { Component, Fragment } from 'react';

// 공지사항 게시물
export default class MediaSub04 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectBoxOpen01: false,
            inTxt01: '제목+내용',

        }
    }

    handleSelectValue = (txt) => {this.setState({ inTxt01:txt });}

    render() {
        return (
            <Fragment>
                <div className='h-box ac'>
                    <div className='label'>공지</div>
                    <div className='tableTit'>[~소진 시까지] Amaranth 10 ‘DX One Pack 프로모션’</div>
                </div>
                <div className='h-box timeCheck'>
                    <div className='time'>2022.03.01</div>
                    <div>조회<em>412</em></div>
                </div>

                <div className='board v-box'>
                    <div className='boardTop v-box'>
                        <div className='h-box topAc'>
                            <span className='file'/><div>[첨부1] DX One Pack 프로모션 안내문.pdf</div><img src={require("../../../www/images/sub/media/ic-download-m-normal@2x.png").default} alt='다운로드'/>
                        </div>
                        <div className='h-box topAc'>
                            <span className='file'/><div>[첨부1] DX One Pack 프로모션 안내문.pdf</div><img src={require("../../../www/images/sub/media/ic-download-m-normal@2x.png").default} alt='다운로드'/>
                        </div>
                    </div>

                    <div className='boardMid flex-1'>
                        <img src={require("../../../www/images/sub/media/img-dx-one-pack-e-dm@2x.png").default} alt='이미지'/>
                    </div>

                    <div className='boardBt v-box'>
                        <div className='inven h-box'>
                            <em className='prev'>이전글</em>[Live] 소프트웨이브  X 더존비즈온<b className='flex-1'>2022.03.01</b>
                        </div>
                        <div className='inven noAticle h-box'>
                            <em className='next'>다음글</em>다음 글이 없습니다.
                        </div>
                        <button onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleScrollTop();this.props.handleTableClick('2');}}>목록</button>
                    </div>
                </div>
            </Fragment>
            );
        }
    }