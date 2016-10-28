import React, { Component, PropTypes } from 'react';

// Tab component - represents a single todo item
export default class Menu extends Component {


    getMenuItem() {
        return this.props.tabs.map((tab) => (
            <li className="nav-item" key={tab.key}>
                <a className="nav-link" href="#">{tab.title}</a>
            </li>
        ));
    }

    render() {
        return (
            <div>
                <div>
                 LOGO
                </div>
                <span className="close-btn btn waves-effect waves-light grey"><i className="fa fa-times"></i></span>
                <ul className="nav nav-pills nav-stacked">
                    {this.getMenuItem()}
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tabs: PropTypes.array.isRequired,
};