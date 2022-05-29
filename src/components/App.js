import React from "react";
import '../css/app.css';

import Header from './Header';
import Creator from './Creator';
import CreatorModal from "./CreatorModal";

import { useSelector } from "react-redux";


const App = () => {

    const data = useSelector(state => state.creators);
    const activeId = useSelector(state => state.activeId);
    const logs = useSelector(state => state.donationLogs); //donation record

    console.table(logs); 

    return (
        <div className="app">
            <Header brand="Donation Tracker" />
            <div className="container">
                {data.map(el =>
                    <Creator creator={el} key={el.id}/>
                )}
            </div>
            <CreatorModal creator={data.find((creator) => creator.id === activeId)} />
        </div>
    )
};

export default App;

