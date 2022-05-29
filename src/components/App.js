import React, { useDebugValue, useState } from "react";
import '../css/app.css';

import Header from './Header';
import Creator from './Creator';
import CreatorModal from "./CreatorModal";

import { useSelector, useDispatch } from "react-redux";


const App = (props) => {


    // const [activeId, setActiveId] = useState("");

    // const data = [{
    //     id: "232323",
    //     userName: "Carry Minati",
    //     profileUrl: "https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s176-c-k-c0x00ffffff-no-rj-mo",
    //     profession: "YouTuber"
    // }, {
    //     id: "21321",
    //     userName: "Darth Vadar",
    //     profileUrl: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449498579-darth-vader-star-wars.jpg?resize=768:*",
    //     profession: "Dark lord"
    // }, {
    //     id: "132323",
    //     userName: "BB ki vines",
    //     profileUrl: "https://i.ytimg.com/vi/Io1Y7Fzohk8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCms7Z1CLiH_xzg3Hl5I73l7Ul5Ww",
    //     profession: "Youtuber"
    // }, {
    //     id: "301",
    //     userName: "John Cena",
    //     profileUrl: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/01/john-cena-on-him-being-a-part-of-wrestlemania-38-001.jpg",
    //     profession: "Magician"
    // }];

    const data = useSelector((state) => state.creators);
    const activeId = useSelector((state) => state.activeId);

    const getCreator = (creatorId) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == creatorId) return data[i];
        }
        return null;
    }

    return (
        <div className="app">
            <Header brand="DUCK-CART" />
            <div className="container">
                {data.map(el =>
                    <Creator
                        creator={el}
                        // handleClick={(creatorId) => { setActiveId(creatorId) }}
                    />
                )}
            </div>
            {
                (activeId.length > 0) ?
                    <CreatorModal
                        creator={getCreator(activeId)}
                        // hide={() => { setActiveId("") }}
                    />
                    : null
            }
        </div>
    )
};

export default App;

