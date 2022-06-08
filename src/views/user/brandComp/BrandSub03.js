import React, { Component, Fragment } from 'react';
import BrandSubLnb from './unit/BrandSubLnb';

// BI
export default class BrandSub03 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(this.props.history) {
            this.props.handleGnbMenu('brand', '3');
        }
    }

    render() {
        return (
            <Fragment>
                <div id="BrandSub03">
                    <BrandSubLnb
                        brandSub01={this.props.brandSub01}
                        brandSub02={this.props.brandSub02}
                        brandSub03={this.props.brandSub03}
                        handleGnbMenu={this.props.handleGnbMenu}
                        Titletext02={this.props.Titletext02}
                        handleClickAlert={this.props.handleClickAlert}
                    />
                    <div className="Story">
                        <div className="StoryTitleBox">
                            <div className="TopText">Brand Identity</div>
                            <div className="StoryTitle">
                                브랜드 가치를 정의하고 해석하여<br/>
                                차별화된 경험을 고객에게 일관성 있게 제공합니다.
                            </div>
                        </div>
                        <div className="SalesBox" style={{margin:"140px auto"}}>
                            <div className="SalesTitle">BI Design</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10 BI는 솔루션을 상징하는 가장 핵심적이고 대표적인 디자인 요소입니다.
                            </div>
                            <div className="BiImg01"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Design Principle</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10의 브랜드 이미지를 시각적으로 표현하기 위해 브랜드 핵심가치를 기반으로 브랜드 디자인 컨셉을 도출합니다.<br/>
                                또한, 디자인 컨셉을 기반으로 디자인 에센스를 정의하여 브랜드 아이덴티티를 표현할 수 있습니다.
                            </div>
                            <div className="BiImg02"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">BX Planning</div>
                            <div className="LineG"/>
                            <div className="Text">
                                더존 ICT그룹 브랜드디자인의 연계, 브랜드 아이덴티티 측면의 차별적 표현, 세일즈킷 활용성 등 세 가지 요소들을 고려하였습니다.
                            </div>
                            <div className="BiImg03"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Color System</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10 브랜드 컬러의 경우 브랜드 커뮤니케이션 시 배경요소, 비주얼 모티브 등에 한해 그라데이션 컬러를 함께 사용합니다.
                            </div>
                            <div className="SmallTitle">Brand Color</div>
                            <div className="h-box">
                                <div className="BiImg04"/>
                                <div className="BiImg041"/>
                            </div>
                            <div className="SmallTitle">Gradient</div>
                            <div className="BiImg05"/>
                            <div className="h-box">
                                <div className="ColorText">#00AAFF</div>
                                <div className="ColorText">#8168FF</div>
                            </div>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Motif Elements</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10 비주얼 모티브는 그룹사 모티브와 Amaranth 10 그래픽 모티브의 조합으로 구성합니다.
                            </div>
                            <div className="h-box">
                                <div className="v-box" style={{alignItems:"center"}}>
                                    <div className="BiImg06"/>
                                    <div className="BiPlusIcon"/>
                                    <div className="BiImg07"/>
                                    <div className="BiPlusIcon"/>
                                    <div className="BiImg08"/>
                                </div>
                                <div className="v-box">
                                    <div className="MotifBox">
                                        <div className="MotifTitle01">그룹사 모티브</div>
                                        <div className="MotifImg"/>
                                    </div>
                                    <div className="MotifText">
                                        더존 워드마크의 원을 활용하여 일관된 브랜드 이미지를 구축하고<br/>
                                        브랜드 정체성을 강화할 수 있도록 도와줍니다. 
                                    </div>
                                    <div className="MotifBox" style={{marginTop:"210px"}}>
                                        <div className="MotifTitle02">Convergence Ball</div>
                                        <div className="MotifImg"/>
                                    </div>
                                    <div className="MotifText">
                                        원 도형에 공간감을 주어 비주얼 모티브 요소로 사용합니다.
                                    </div>
                                    <div className="MotifBox" style={{marginTop:"270px"}}>
                                        <div className="MotifTitle03">10 (텐)</div>
                                        <div className="MotifImg"/>
                                    </div>
                                    <div className="MotifText">
                                        사용자와 비즈니스를 하나로 연결하는<br/>
                                        제품의 브랜드 속성을 담은 모티브입니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Brand Visual Motif</div>
                            <div className="LineG"/>
                            <div className="Text">
                                원을 기본 요소로 하고 더존의 그래픽 모티브를 함께 사용하여 브랜드 핵심가치를 보여주고 브랜드 연계성을 부여합니다.<br/>
                                새롭게 정의한 그라데이션 컬러를 사용하여 Amaranth 10의  브랜드 아이덴티티를 차별화하여 구현합니다.
                            </div>
                            <div className="BiImg09"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Brand Illust</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10 브랜드 키워드 ‘연결’을 일러스트에 적용하여 아이덴티티를 구현합니다.
                            </div>
                            <div className="BiImg10"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">App Icons</div>
                            <div className="LineG"/>
                            <div className="Text">
                                Amaranth 10의  A와 아마란스의 꽃잎을 형상화하여 새로운 융합, 새로운 경험을 앱 아이콘에 표현합니다.
                            </div>
                            <div className="BiImg11"/>
                        </div>
                        <div className="SalesBox">
                            <div className="SalesTitle">Module Icons</div>
                            <div className="LineG"/>
                            <div className="Text">
                                App icon Motif를 BG로 적용하여, 브랜드를 쉽게 인지하고 구분할 수 있도록 표현합니다.
                            </div>
                            <div className="SmallTitle">Icon symbol guide</div>
                            <div className="BiImg12"/>
                            <div className="SmallTitle">Background color</div>
                            <div className="BiImg13"/>
                            <div className="SmallTitle">Icons</div>
                            <div className="BiImg14"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


