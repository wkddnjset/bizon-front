import React, { Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/watch.json';

export default class Watch extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <Lottie
                options={defaultOptions}
                width={377}
                height={302}
            />

        )
    }
}