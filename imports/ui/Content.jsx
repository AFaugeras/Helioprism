import React, { Component, PropTypes } from 'react';

// Tab component - represents a single todo item
export default class Content extends Component {
    render() {
        return (
            <ul>
                {this.props.tabs.map((tab) =>
                <li key={tab.key}>{tab.content}</li>)}
            </ul>
        );
    }
}

Content.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tabs: PropTypes.array.isRequired,
};