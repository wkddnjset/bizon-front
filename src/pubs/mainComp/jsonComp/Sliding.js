import React, { Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/sliding.json';

export default class Sliding extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <Lottie
                options={defaultOptions}
                width={this.props.width}
                height={this.props.height}
            />

        )
    }
}