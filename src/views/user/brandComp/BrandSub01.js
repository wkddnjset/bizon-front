import React, { Component, Fragment } from 'react';
import BrandSubLnb from './unit/BrandSubLnb';
import Combination from './jsonComp/Combination';

import { Link } from 'react-router-dom';
import { default as MenuUrl } from '../../context/url'; 

// 새롭게 정의하다
export default class BrandSub01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoSrc: {
                video01: require('../../../www/images/sub/brand/temp/video_1.mp4').default,
                video02: require('../../../www/images/sub/brand/temp/video_2.mp4').default,
                video03: require('../../../www/images/sub/brand/temp/video_3.mp4').default,
                video04: require('../../../www/images/sub/brand/temp/video_4.mp4').default
            }
        }
    }

    render() {
        return (
            <Fragment>
                <div id="BrandSub01">
                    <BrandSubLnb
                        brandSub01={this.props.brandSub01}
                        brandSub02={this.props.brandSub02}
                        brandSub03={this.props.brandSub03}
                        handleGnbMenu={this.props.handleGnbMenu}
                        Titletext02={this.props.Titletext02}
                    />
                    {/* 1 */}
                    <div className="itemBox01">
                        <div className="centerBox">
                            <div className="item-01">
                                <span className="txt01">모든 생명, 새로운 존재.</span>
                            </div>
                            <div className="item-02">
                                <div className="videoBox">
                                    <video width="100%" height="100%" loop autoPlay muted playsInline>
                                        <source src={this.state.videoSrc.video01} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="itemBox02">
                        <div className="centerBox">
                            <div className="item-01 v-box">
                                <span className="txt02">
                                    이것은 <span className='txblack'>화학적 결합</span>으로<br/>
                                    탄생한다.
                                </span>
                                <span className="txt03 mt30">
                                    우리의 환경은 공유결합, 이온결합, 금속결합, <br/>
                                    화학결합 등 다양한 형태의 화합물로 연결되어 있습니다.<br/> 
                                    그 밖에도 자연뿐 아니라 우주에서도 <br/>
                                    수없이 많은 물질이 생성되고, 발견됩니다. 
                                </span>
                            </div>
                            <div className="item-02">
                                <div className="videoBox">
                                    <video width="100%" height="100%" loop autoPlay muted playsInline>
                                        <source src={this.state.videoSrc.video02} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="itemBox03">
                        <div className="centerBox">
                            <div className="item-01 v-box">
                                <span className="txt02">
                                    우리에게 익숙한 물, 소금 등<br/>
                                    이온결합 화합물을 포함해<br/>
                                    탄생한 <span className='txblack'>유일한 존재들.</span>
                                </span>
                                <span className="txt03 mt30">
                                    소금은 나트륨이온과 염소이온이 <br/>
                                    서로 결합해서 생긴 이온결합 화합물입니다.<br/>
                                    우리가 말하는 보통 명사들을 통해 <br/>
                                    일상생활의 규칙이 정해지고, 공생하며, <br/>
                                    또 다른 물질들로 생성되고 발전해 나아갑니다.
                                </span>
                            </div>
                            <div className="item-02">
                                <div className="videoBox">
                                    <video width="100%" height="100%" loop autoPlay muted playsInline>
                                        <source src={this.state.videoSrc.video03} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="item-03" />
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="itemBox04">
                        <div className="centerBox">
                            <div className="item-01 v-box">
                                <span className="txt02">
                                    새로움이란 정의.<br/>
                                    <span className='txblack'>유일무이(唯一無二)한 <br/>
                                    존재</span>가 되기까지.
                                </span>
                                <span className="txt03 mt30">
                                    더존은 물리적 통합이 아닌 화학적 결합을 통해  <br/>
                                    솔루션의 새로운 정의와 경험을 선사하기 위해  <br/>
                                    수많은 도전과 연구를 지속해 왔습니다.
                                </span>
                            </div>
                            <div className="item-02">
                                <div className="videoBox">
                                    <video width="100%" height="100%" loop autoPlay muted playsInline>
                                        <source src={this.state.videoSrc.video04} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="itemBox05">
                        <div className="centerBox">
                            <div className="item-01">
                                <span className="txt04">
                                    <span className="color">솔루션</span>도 마찬가지.<br />
                                </span>
                            </div>
                            <div className="item-02">
                                <span className="txt04">
                                    물리적 결합이 아닌,<br />
                                    <span className="color">화학적 결합</span>으로 만들어진<br />
                                    새로운 탄생.
                                </span>
                            </div>
                            <div className="item-03">
                                <Combination />
                            </div>
                        </div>
                    </div>

                    {/* logo */}
                    <div className="itemBox06">
                        <div className="item-01 v-box">
                            <span className="txt05">
                                경계선을 허물어 세상에 존재하지 않았던<br />
                                새로운 비즈니스 솔루션을 정의하다
                            </span>
                            <div className="logo"/>
                        </div>
                    </div>

                    {/* banner */}
                    <div className="BannerBox">
                        <div className="boxIn">
                            <div className="BannerBlue">Amaranth 10 Brand Story</div>
                            <div className="BannerTitle">기업의 지속가능한 성장을 지원하는</div>
                            <div className="TextBold">Amaranth 10의 브랜드 스토리를 만나보세요</div>
                            <div className="BannerBtnBox">
                                <Link to={MenuUrl.BRAND_B002} onClick={()=>{this.props.handleGnbMenu('brand','2')}}> 
                                    <div className="Btn h-box">
                                        <div className="BtnText">브랜드 스토리</div>
                                        <div className="ArrR"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="Banner"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}