import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { default as MenuUrl } from '../../../context/url'; 

// Sub LNB
export default class introSubLnb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="SubMainBox">
                    <div className="SubAllImg04">
                        <div className="SubInner v-box">
                            <div className="Menu h-box">
                                <Link to={MenuUrl.MAIN} onClick={()=>{this.props.handleGnbMenu('main')}}>
                                    <div className="MenuIcon"/>
                                </Link> 
                                <div className="RightIcon"/>
                                <div>가상체험관</div>
                            </div>
                            <div className="MenuTitle">가상체험관</div>
                            <div className="MenuText">
                                보고, 공감하고, 이해할 수 있는<br/>
                                Amaranth 10의 사용자 경험을  온라인에서 만나보세요.
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}