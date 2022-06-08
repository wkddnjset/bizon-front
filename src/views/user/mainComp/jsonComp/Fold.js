import React, { Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/fold.json';

export default class Fold extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <Lottie
                options={defaultOptions}
                width={1006}
                height={1244}
            />

        )
    }
}