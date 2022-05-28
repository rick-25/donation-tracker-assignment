import React from "react";


const CreatorModal = ({ creator }) => {
    return (
        <div className="creator-modal">
            <div className="title">{creator.userName}</div>
            <div className="container">
                <div className="message">Send your love to {creator.userName} to become a real fan</div>
            </div>
            <div className="form">
                <form>
                    <div className="amount">
                        <i>Hello</i>
                        <input type="text" placeholder="200"/>
                    </div>
                    <input type="text" placeholder="Your name(optional)"/>
                    <textarea placeholder=""/>
                </form>
            </div>
        </div>
    );    
};

export default CreatorModal;