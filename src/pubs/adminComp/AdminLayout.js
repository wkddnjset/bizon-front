import React, { Component, Fragment } from 'react';
import '../../www/css/admin.scss';
import AdminGnb from './AdminGnb';
import PopUp from './popup/PopUp';
import Pop01 from './popup/unit/Pop01';
import Introduction from './introduction/Introduction';
import Intro01 from './introduction/unit/Intro01';
import MediaCenter01 from './mediacenter/MediaCenter01';
import MediaCenter02 from './mediacenter/MediaCenter02';
import MediaCenter03 from './mediacenter/MediaCenter03';
import Media01 from './mediacenter/unit/Media01';
import Media02 from './mediacenter/unit/Media02';
import Media03 from './mediacenter/unit/Media03';
import Login from './Login';


// 레이아웃
export default class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            admin: false,

            // 메뉴별 레이아웃
            popupLayout: true,                  // 팝업관리
            popup01: true,
            popup02: false,

            introductionLayout: false,          // 도입문의
            introduction01: false,
            introduction02: false,

            mediaLayout: false,                 // 미디어센터
            media01: false,
            media02: false,
            media03: false,
            media04: false,
            media05: false,
            media06: false,

        }
    }

    // 로그인 클릭
    handleLoginClick = (type) => {
        if (type === '1') {
            this.setState({ admin: true, })
        }else if (type === '2') {
            this.setState({ admin: false, })
        }
    }

    // 메뉴 전환
    handleGnbMenu = (menuType, num) => {
        if (menuType === 'popup') {
            this.setState({
                popupLayout: true, introductionLayout: false, mediaLayout: false,
            })
            if (num === '1') {
                this.setState({ popup01: true, popup02: false, })
            }else if (num === '2') {
                this.setState({ popup01: false, popup02: true, })
            }
        }else if (menuType === 'introduction') {
            this.setState({
                popupLayout: false, introductionLayout: true, mediaLayout: false,
            })
            if (num === '1') {
                this.setState({ introduction01: true, introduction02: false, })
            }else if (num === '2') {
                this.setState({ introduction01: false, introduction02: true, })
            } 
        }else if (menuType === 'media') {
            this.setState({
                popupLayout: false, introductionLayout: false, mediaLayout: true,
            })
            if (num === '1') {
                this.setState({ media01: true, media02: false, media03: false, media04: false, media05: false, media06: false, })
            }else if (num === '2') {
                this.setState({ media01: false, media02: true, media03: false, media04: false, media05: false, media06: false, })
            }else if (num === '3') {
                this.setState({ media01: false, media02: false, media03: true, media04: false, media05: false, media06: false, })
            }else if (num === '4') {
                this.setState({ media01: false, media02: false, media03: false, media04: true, media05: false, media06: false, })
            }else if (num === '5') {
                this.setState({ media01: false, media02: false, media03: false, media04: false, media05: true, media06: false, })
            }else if (num === '6') {
                this.setState({ media01: false, media02: false, media03: false, media04: false, media05: false, media06: true, })
            }
        }
    }

    render() {
        return (
            <Fragment>
                <div id="all" className="h-box">
                    
                    {/* 로그인 페이지 */}
                    <div Id="login" style={{display: this.state.admin ? 'none':''}}>
                        <Login handleGnbMenu={this.handleGnbMenu} handleLoginClick={this.handleLoginClick}/>
                    </div>

                    {/* 관리자 화면 페이지 */}
                    <div Id="header" style={{display: this.state.admin ? '':'none'}}>
                        <AdminGnb handleGnbMenu={this.handleGnbMenu} handleLoginClick={this.handleLoginClick}/>
                    </div>
                    <div id="container" style={{display: this.state.admin ? '':'none'}}>
                        {/* 팝업관리 레이아웃 */}
                        <div style={{display: this.state.popupLayout ? '':'none'}}>
                            {
                                this.state.popup01 ? <PopUp handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.popup02 ? <Pop01 handleGnbMenu={this.handleGnbMenu}/> : ''
                            }
                        </div>

                        {/* 도입문의 레이아웃 */}
                        <div style={{display: this.state.introductionLayout ? '':'none'}}>
                            {
                                this.state.introduction01 ? <Introduction handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.introduction02 ? <Intro01 handleGnbMenu={this.handleGnbMenu}/> : ''
                            }
                        </div>

                        {/* 미디어센터 레이아웃 */}
                        <div style={{display: this.state.mediaLayout ? '':'none'}}>
                            {
                                this.state.media01 ? <MediaCenter01 handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.media02 ? <MediaCenter02 handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.media03 ? <MediaCenter03 handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.media04 ? <Media01 handleGnbMenu={this.handleGnbMenu}/> : 
                                this.state.media05 ? <Media02 handleGnbMenu={this.handleGnbMenu}/> :
                                this.state.media06 ? <Media03 handleGnbMenu={this.handleGnbMenu}/> : ''
                                
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


