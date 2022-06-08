import React, { Fragment,Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData01 from '../json/combinationStop.json';
import animationData02 from '../json/combinationRepeat.json';

export default class Combination extends Component {
    render() {
        const defaultOptions01 = {
            loop: false,
            autoplay: true,
            animationData: animationData01,
        };
        const defaultOptions02 = {
            loop: true,
            autoplay: true,
            animationData: animationData02,
        };
        return (
            <Fragment>
                <div className="lottieBox">
                    <Lottie
                        options={defaultOptions01}
                        width={1920}
                        height={980}
                    />
                </div>
                <div className="lottieBox">
                    <Lottie
                        options={defaultOptions02}
                        width={1920}
                        height={980}
                    />
                </div>
            </Fragment>

        )
    }
}