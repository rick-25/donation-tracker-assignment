import React from "react";
import '../css/app.css';

import Header from './Header';
import Creator from './Creator';

const App = (props) => {
    return (
        <div className="app">
            <Header brand="DUCKCART"/>
            <div className="container">
                <Creator/>
                <Creator/>
                <Creator/>
                <Creator/>
                <Creator/>
                <Creator/>
                <Creator/>
                <Creator/>
            </div>
        </div>
    )
};

export default App;

