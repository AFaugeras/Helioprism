import React, { Component, PropTypes } from 'react';

import Menu from "./Menu.jsx";

// Tab component - represents a single todo item
export default class AppHeader extends Component {

    render() {
        return (
            <div>
                <div>
                    <span className="btn waves-effect waves-light grey"><i className="fa fa-bars"></i></span>
                </div>
                <Menu tabs={this.props.tabs}/>
            </div>
        );
    }
}

AppHeader.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tabs: PropTypes.array.isRequired,
};