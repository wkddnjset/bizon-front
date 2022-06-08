import React, { Component, Fragment } from 'react';
import PopupWrap from '../../commonsComp/PopupWrap';

// ceo 인사이트 팝업 (인사이트 전체 열람하기, 리더스포럼 풀버전 보기 공통으로 사용)
export default class DxInsigtPopUp01 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            error01: false,
            error02: true,

        }
    }

    render() {
        return (
            <Fragment>
                <PopupWrap
                    Type="title"
                    Width={990}
                    Height={894}
                    Title="DX Insight 전체 열람하기" // DX 리더스포럼 풀버전 보기
                    Open={this.props.titlePop} 
                    Close={this.props.handleClickPopupClose}
                    intWindowHeight={this.props.intWindowHeight}
                >
                    <div className='popWrap'>
                        <div className='popBox01'>
                            <div className='h-box'>
                                <div className='popTxtBox flex-1'>
                                    <div className='popTxt01'>DX Insight를 처음 열람 하시나요?</div> {/* DX 리더스포럼을 처음 열람 하시나요? */}
                                    <div className='popTxt02'>열람을 위해 신규 정보 입력 및 동의가 필요합니다.</div>
                                </div>
                                <button className='dxBtn' onClick={()=>{this.props.handleClickPopupClose();this.props.handleClickSave('8');}}>신규 열람 등록하기</button>
                            </div>
                        </div>

                        <div className='popBox02'>
                            <div className='v-box'>
                                <div className='popTxtBox'>
                                    <div className='popTxt01'>이미 열람 정보를 한 번 입력하셨나요?</div>
                                    <div className='popTxt02'>이미 정보를 등록하여 열람하신 고객님은 이름과 연락처를 입력하여 진입이 가능합니다.</div>
                                </div>

                                <div className='tableBox h-box'>
                                    <div className='tableTit flex-1'>열람정보 확인</div>
                                    <div className='tableTxt'><em>*</em> 표기는 필수 선택 및 입력 항목입니다.</div>
                                </div>

                                <table className='ceoTable'>
                                    <tr>
                                        <th>이름<em>*</em></th>
                                        <td>
                                            <div className="InputBox h-box">
                                                <input className="InputText" type="text" placeholder="이름을 입력해주세요."/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>연락처<em>*</em></th>
                                        <td>
                                            <div className="InputBox h-box">
                                                <input className="InputText" type="text" placeholder="‘-’ 없이 숫자만 입력해 주세요"/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>

                                {/* 에러 : 보유기간 지나 정보 삭제되었거나 등록된 정보 없을때 활성화 */}
                                <div className='inputError' style={{display: this.state.error01 ? '':'none'}}>개인정보 수집 이용동의에 따른 보유 기간(1년)이 지나 정보가 삭제되었거나, 등록된 정보가 없습니다.<br/>신규 열람 등록하기를 통해 정보를 입력해 주세요.</div>
                                {/* 에러 : 입력한 정보 일치하지 않을 때 활성화 */}
                                <div className='inputError' style={{display: this.state.error02 ? '':'none'}}>입력하신 정보가 일치하지 않습니다. 사전 입력하신 이름과 연락처를 정확히 입력해 주세요.</div>
                            </div>
                        </div>
 
                        <div className='popBtnBox h-box'>
                            <button className='popBtn close' onClick={()=>{this.props.handleClickPopupClose();}}>취소</button>
                            <button className='popBtn save' onClick={()=>{this.props.handleClickPopupClose();this.props.handleClickSave('9');}}>확인</button>
                        </div>
                    </div>
                </PopupWrap>
            </Fragment>
        );
    }
}