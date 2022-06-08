import React, { Component, Fragment } from 'react';

// 공통 팝업
export default class PopupWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        // 팝업 타입
        // title         => 타이틀 팝업
        // contents      => 컨텐츠 팝업

        if (this.props.Type === 'title') {
            return (
                <Fragment>
                    <div className={`popup-wrap v-box animated03s fadeIn ${this.props.PositionReset ? 'posiReset' : ''}`} style={{ display: this.props.Open ? '' : 'none', width: this.props.Width + 'px', height: this.props.intWindowHeight < this.props.Height ? (this.props.intWindowHeight - 50) + 'px' : this.props.Height + 'px', top: this.props.Top, left: this.props.Left, zIndex: this.props.zIndex }}>
                        <div className='popupHeader h-box'>
                            <div className='popTitle flex-1'>{this.props.Title}</div>
                            <div className='popClose' onClick={this.props.Close} />
                        </div>
                        <div className='popupContainer flex-1 v-box'>{this.props.children}</div>
                    </div>
                    <div className="dim" style={{ display: this.props.Open ? this.props.isDim ? '' : 'none' : 'none', zIndex: this.props.zIndex - 1 }} onClick={this.props.Close} />
                </Fragment>
            );
        } else if (this.props.Type === 'contents') {
            return (
                <Fragment>
                    <div className={`popup-wrap v-box animated03s fadeIn ${this.props.PositionReset ? 'posiReset' : ''}`} style={{ display: this.props.Open ? '' : 'none', width: this.props.Width + 'px', height: this.props.Height + 'px', top: this.props.Top, left: this.props.Left, zIndex: this.props.zIndex }}>
                        <div className='popupContainer flex-1 v-box'>{this.props.children}</div>
                    </div>
                    <div className="dim" style={{ display: this.props.Open ? this.props.isDim ? '' : 'none' : 'none', zIndex: this.props.zIndex - 1 }} onClick={this.props.Close} />
                </Fragment>
            );
        }
    }
}