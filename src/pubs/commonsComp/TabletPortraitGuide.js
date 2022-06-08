import React, { Component, Fragment } from 'react';
import '../../www/css/common.scss';
import '../../www/css/animate.scss';
import '../../www/css/amaranth.scss';

// 태블릿 세로 안내
export default class TabletPortraitGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className='v-box'>
                    <div className='img'/>
                    <div className='logo'/>
                    <div className='text01'>태블릿은 가로 모드에 최적화되어 있습니다.</div>
                    <div className='text02'>보다 원활한 서비스 제공을 위하여</div>
                    <div className='text03'><span className='line'>Amaranth 10 사이트는 가로 모드로 이용</span>해 주시기 바랍니다.
                    </div>
                </div>
            </Fragment>
        );
    }
}


