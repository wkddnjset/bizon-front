import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import utils from '../utils/utils';
import MainPopup from './MainPopup';
import Section01 from './sections/Section01';
import Section02 from './sections/Section02';
import Section03 from './sections/Section03';
import Section04 from './sections/Section04';
import Section05 from './sections/Section05';
import Section06 from './sections/Section06';
import Section07 from './sections/Section07';
import Section08 from './sections/Section08';
import Section09 from './sections/Section09';
import Section10 from './sections/Section10';

// 메인
export default class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainHeight: 22800,
        }
    }

    render() {
        let position = Math.round(this.props.scrollPercent * this.props.intTotScrollHeight / 100);
        let fadeLength02 = 400;
        let fadeLength03 = 100;
        let fadeLength04 = 300;
        let fadeLength05 = 200;
        let fadeLength06 = 100;
        let fadeLength07 = 300;
        let fadeLength08 = 200;
        let fadeLength09 = 300;
        let fadeLength10 = 100;
        return (
            <Fragment>
                <div className="mainIn" style={{ height: this.state.mainHeight + 'px' }}>
                    {utils.getPositionCheck(position, 0, 1300) ? <Section01 position={position} heightLength={1300} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 1300 - fadeLength02, 2300) ? <Section02 position={position - (1300 - fadeLength02)} heightLength={1000 + fadeLength02} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 2300 - fadeLength03, 6700) ? <Section03 position={position - (2300 - fadeLength03)} heightLength={4400 + fadeLength03} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 6700 - fadeLength04, 8700) ? <Section04 position={position - (6700 - fadeLength04)} heightLength={2000 + fadeLength04} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 8700 - fadeLength05, 11700) ? <Section05 position={position - (8700 - fadeLength05)} heightLength={3000 + fadeLength05} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 11700 - fadeLength06, 12800) ? <Section06 position={position - (11700 - fadeLength06)} heightLength={1100 + fadeLength06} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 12800 - fadeLength07, 14800) ? <Section07 position={position - (12800 - fadeLength07)} heightLength={2000 + fadeLength07} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 14800 - fadeLength08, 16800) ? <Section08 position={position - (14800 - fadeLength08)} heightLength={2000 + fadeLength08} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {utils.getPositionCheck(position, 16800 - fadeLength09, 19800) ? <Section09 position={position - (16800 - fadeLength09)} heightLength={3000 + fadeLength09} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}
                    {/* 01 ~ 09까지 구간이 아닐 시 마지막 Section10 노출 */}
                    {!utils.getPositionCheck(position, 0, 19800 - fadeLength10) ? <Section10 position={position - (19800 - fadeLength10)} heightLength={3000 + fadeLength10} intWindowHeight={this.props.intWindowHeight} handleGnbMenu={this.props.handleGnbMenu}/> : null}

                </div>
                
                <MainPopup mainPopOpen={this.props.mainPopOpen} handleClickMainPopClose={this.props.handleClickMainPopClose}/>
            </Fragment>
        );
    }
}