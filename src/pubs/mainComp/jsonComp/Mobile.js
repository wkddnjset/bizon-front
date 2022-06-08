import React, { Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/mobile.json';

export default class Mobile extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <Lottie
                options={defaultOptions}
                width={980}
                height={this.props.height}
            />

        )
    }
}