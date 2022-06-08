import React, { Component } from 'react' // 리액트 공통
import Lottie from 'react-lottie';
import animationData from '../json/Portlet routine.json';

export default class PortletRoutine extends Component {
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