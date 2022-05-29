import React from "react";
import { useDispatch } from "react-redux";


import '../css/creator.css'


const Creator = ( { creator, handleClick } ) => {
    return (
        <div className="creator" data-id={creator.id} onClick={(e) => { handleClick(creator.id) }}>
            <img src={creator.profileUrl} alt={`${creator.userName}'s image`}/>
            <div className="meta">
                <div className="username">
                    <b>{creator.userName}</b>
                </div>
                <div className="profession">{creator.profession}</div>
            </div>
        </div>
    );
};

export default Creator;