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

import { BrowserRouter, Route } from 'react-router-dom';
import { Cookies } from "react-cookie";
import { default as MenuUrl } from '../context/url'; 

// 레이아웃
export default class AdminLayout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
            admin: this.isLoginCheck(),

            //관리자 정보
            adminInfo: {

            },

            // 메뉴별 레이아웃
            popupLayout: this.isShowLayout([ MenuUrl.ADMIN_MGR_POPUP_LIST ]),                  // 팝업관리
            popup01: true,
            popup02: false,

            introductionLayout: this.isShowLayout([ MenuUrl.ADMIN_MGR_INTRO_LIST ]),          // 도입문의
            introduction01: false,
            introduction02: false,

            mediaLayout: this.isShowLayout([ MenuUrl.ADMIN_MGR_AD_LIST, MenuUrl.ADMIN_MGR_REPORT_LIST, MenuUrl.ADMIN_MGR_MEDIA_LIST ]),  // 미디어센터
            media01: false,
            media02: false,
            media03: false,
            media04: false,
            media05: false,
            media06: false,

        }
    }

    isLoginCheck = () => {

        const cookies = new Cookies();

        // 1. 쿠키를 존재여부 체크
        const aToken = cookies.get('aToken');
        const rToken = cookies.get('rToken');

        if(aToken === undefined || rToken === undefined){
            return false;
        }

        if(aToken === '' || rToken === '') {
            return false;
        }

        return true;
    }

    isShowLayout = (arrMatchURL) => {
        
        const urlPath = window.location.pathname;
        return arrMatchURL.includes(urlPath);

    }

    // 메뉴 전환
    handleGnbMenu = (menuType, num) => {
        if (menuType === 'popup') {
            
            this.setState({
                popupLayout: true, introductionLayout: false, mediaLayout: false,
                popup01: num === '1' ? true : false, 
                popup02: num === '2' ? true : false
            })

        }else if (menuType === 'introduction') {
            this.setState({
                popupLayout: false, introductionLayout: true, mediaLayout: false,
                introduction01: num === 1 ? true : false,
                introduction02: num === 2 ? true : false
            })
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
                <BrowserRouter>
                    <div id="all" className="h-box">
                        {/* 로그인 페이지 */}
                        <Route exact path={MenuUrl.ADMIN_MAIN} render={() => 
                                                                <div id="login" style={{display: this.state.admin ? 'none':''}}>
                                                                        <Login 
                                                                            handleGnbMenu={this.handleGnbMenu} 
                                                                        />
                                                                </div>
                                                        }
                        />
                        {/* 관리자 화면 페이지 */}
                        <div id="header" style={{display: this.state.admin ? '':'none'}}>
                            <AdminGnb 
                                    handleGnbMenu={this.handleGnbMenu} 
                            />
                        </div>
                        <div id="container" style={{display: this.state.admin ? '':'none'}}>
                            {/* 팝업관리 레이아웃 */}
                            <Route exact path={MenuUrl.ADMIN_MGR_POPUP_LIST} render={(props) => 
                                                                <div style={{display: this.state.popupLayout ? '':'none'}}>
                                                                    <PopUp {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_POPUP} render={(props) => 
                                                                <div style={{display: this.state.popupLayout ? '':'none'}}>
                                                                    <Pop01 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />

                            {/* 도입문의 레이아웃 */}
                            <Route exact path={MenuUrl.ADMIN_MGR_INTRO_LIST} render={(props) => 
                                                                <div style={{display: this.state.introductionLayout ? '':'none'}}>
                                                                    <Introduction {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_INTRO} render={(props) => 
                                                                <div style={{display: this.state.introductionLayout ? '':'none'}}>
                                                                    <Intro01 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />

                            {/* 미디어센터 레이아웃 */}
                            <Route exact path={MenuUrl.ADMIN_MGR_AD_LIST} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <MediaCenter01 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_AD} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <Media01 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_REPORT_LIST} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <MediaCenter02 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_REPORT} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <Media02 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_MEDIA_LIST} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <MediaCenter03 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                            <Route exact path={MenuUrl.ADMIN_MGR_MEDIA} render={(props) => 
                                                                <div style={{display: this.state.mediaLayout ? '':'none'}}>
                                                                    <Media03 {...props} handleGnbMenu={this.handleGnbMenu}/>
                                                                </div>
                                                        }
                            />
                        </div>
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}