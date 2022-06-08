import React, { Component, Fragment } from 'react';
import '../../../www/css/common.scss';
import '../../../www/css/animate.scss';
import '../../../www/css/amaranth.scss';

// 모바일 리다이렉트 안내
export default class MobileRedirectGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        document.querySelector("meta[name='viewport']").setAttribute("content","width=device-width, initial-scale=1.0");
    }

    render() {
        return (
            <Fragment>
                <div className='v-box'>
                    <div className='img'/>
                    <div className='logo'/>
                    <div className='text01'>모바일 서비스 준비중입니다.</div>
                    <div className='text02'>
                        보다 원활한 서비스 제공을 위하여 <br/>
                        모바일 최적화 준비중에 있습니다. <br/>
                        빠른 시일내에 준비하여 찾아뵙겠습니다.
                    </div>
                    <div className='text03'>
                        기업의 디지털 전환(DX)에 새로운 방향을 제시하는 <br/>
                        <span className='line'>Amaranth 10의 정보는 PC환경</span>에서 확인해 주세요.
                    </div>
                    <div className='btn'>
                        <span className="txt" onClick={()=>{window.open('https://mv.amaranth10.co.kr');}}>가상체험관 바로가기</span>
                    </div>
                </div>
            </Fragment>
        );
    }
}


