import React, { Component } from 'react';

import Tabs from './Tabs.jsx';
import AppHeader from './AppHeader.jsx';
import Content from './Content.jsx';

import "/public/stylesheets/font-awesome.min.css";
import "/public/stylesheets/app-header.css";
import "/public/stylesheets/app.css";

// App component - represents the whole app
export default class App extends Component {
    getTabs() {
        return [
            {
                key: 1,
                title: "Home",
                content: " Glouglouglou"
            },
            {
                key: 2,
                title: "Trick 1",
                content: "Ahbrglbrlgblr"
            },
            {
                key: 3,
                title: "Trick 2",
                content: "Hodor!"
            }
        ];
    }

    render() {
        return (
            <div>
                HODOR
                <AppHeader tabs={this.getTabs()}/>
                <div className="container rounded">
                    <div className="row">
                        <Content tabs={this.getTabs()}/>
                    </div>
                </div>
            </div>
        );
    }
}