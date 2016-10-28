import React, { Component, PropTypes } from 'react';

// Tab component - represents a single todo item
export default class Tab extends Component {
    render() {
        return (
            <li>{this.props.tab.title}</li>
        );
    }
}

Tab.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tab: PropTypes.object.isRequired,
};