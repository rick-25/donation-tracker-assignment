import React from "react";
import { useDispatch } from "react-redux";


import '../css/creator.css'


const Creator = ({ creator }) => {
    const dispatch = useDispatch();
    return (
        <div className="creator">
            <img src={creator.profileUrl} alt={`${creator.userName}'s image`} />
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