import React from "react";

import '../css/creator.css'


const Creator = (props) => {
    const data = {
        id: "232323",
        userName: "Carry Minati",
        profileUrl: "",
        profession: "Youtuber"
    };

    return (
        <div className="creator" data-id={data.id}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s176-c-k-c0x00ffffff-no-rj-mo" />
            <div className="meta">
                <div className="username">
                    <b>{data.userName}</b>
                </div>
                <div className="profession">{data.profession}</div>
            </div>
        </div>
    );
};

export default Creator;