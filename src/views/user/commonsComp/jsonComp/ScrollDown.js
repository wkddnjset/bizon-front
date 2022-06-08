import React, { Fragment,Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/ScrollDown.json';

export default class ScrollDown extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <Fragment>
                <Lottie
                    options={defaultOptions}
                    width={14}
                    height={20}
                />
            </Fragment>

        )
    }
}