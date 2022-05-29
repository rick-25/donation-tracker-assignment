import React from "react";
import { useDispatch } from "react-redux";


import '../css/creator.css'


const Creator = ({ creator }) => {
    const dispatch = useDispatch();
    return (
        <div className="creator"
            data-id={creator.id}
            // onClick={(e) => { handleClick(creator.id) }}
            onClick={(e) => { dispatch({ type: 'setActive', payload: creator.id }) }}
        >
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