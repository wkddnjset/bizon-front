import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext({});

export { Consumer, ContextProvider };

export default class ContextProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.setData = this.setData.bind(this);
    }

    setData(key, value) {
        const newState = { [key]: value };
        this.setState(newState);
    }

    render() {
        const context = {
            ...this.state,
            setData: this.setData
        };

        return (
            <Provider value={context}>
                {this.props.children}
            </Provider>
        );
    }

}