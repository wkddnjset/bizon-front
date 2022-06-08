import React, { Component, Fragment } from 'react';
import MediaSubLnb from './unit/MediaSubLnb';

import CeoPage from './unit/CeoPage';
import AmaranthPage from './unit/AmaranthPage';

// 보도자료
export default class MediaSub02 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            TopLnb01: true,
            TopLnb02: false,
        }
    }

    handleTopClick = (type) => {
        this.setState({
            TopLnb01: type === '1'
            , TopLnb02: type === '2'
        });
    };

    render() {
        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub02">
                    <div className="BG01" />
                    <div className="BG02" />
                    <div className="BG03" />
                    <div className="TopBox h-box">
                        <div className={`TopLnb ${this.state.TopLnb01 ? 'on' : ''}`} onClick={() => { this.handleTopClick('1'); }}>Amaranth 10</div>
                        <div className="LineShort" />
                        <div className={`TopLnb ${this.state.TopLnb02 ? 'on' : ''}`} onClick={() => { this.handleTopClick('2'); }}>CEO 칼럼</div>
                    </div>
                    {/* Amaranth 10 영역 */}
                    {this.state.TopLnb01 && (<AmaranthPage />)}

                    {/* CEO 칼럼 영역 */}
                    {this.state.TopLnb02 && (<CeoPage />)}
                </div>
            </Fragment>
        );
    }
}