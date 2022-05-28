import React, { useState } from "react";
import '../css/app.css';

import Header from './Header';
import Creator from './Creator';
import CreatorModal from "./CreatorModal";

const App = (props) => {


    const [activeId, setActiveId] = useState("");

    const demodata = {
        id: "232323",
        userName: "Carry Minati",
        profileUrl: "https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s176-c-k-c0x00ffffff-no-rj-mo",
        profession: "YouTuber"
    };
    const data = [demodata, demodata, demodata, demodata, demodata, demodata, demodata, demodata];

    const handleClick = (creatorId) => { setActiveId(creatorId) };

    return (
        <div className="app">
            <Header brand="DUCK-CART" />
            <div className="container">
                {data.map(el =>
                    <Creator
                        creator={el}
                        handleClick={handleClick}
                    />
                )}
            </div>
            <CreatorModal creator={demodata}/>
        </div>
    )
};

export default App;

