import React, { useDebugValue, useState } from "react";
import '../css/app.css';

import Header from './Header';
import Creator from './Creator';
import CreatorModal from "./CreatorModal";

import { useSelector } from "react-redux";


const App = (props) => {

    const data = useSelector(state => state.creators);
    const activeId = useSelector(state => state.activeId);
    const logs = useSelector(state => state.donationLogs); //donation record

    console.table(logs); 

    return (
        <div className="app">
            <Header brand="DUCKCART" />
            <div className="container">
                {data.map(el =>
                    <Creator creator={el} />
                )}
            </div>
            <CreatorModal creator={data.find((creator) => creator.id === activeId)} />
        </div>
    )
};

export default App;

