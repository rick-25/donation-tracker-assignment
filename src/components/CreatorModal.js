import React, { useState } from "react";

import '../css/creatormodal.css'


const CreatorModal = ({ creator, hide }) => {

    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="creator-modal">
            <div className="modal-frame" onClick={(e) => { hide() }}>
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <div className="title">
                        <img src={creator.profileUrl} alt={`${creator.userName}'s image`} />
                        {creator.userName}
                    </div>
                    <div className="container">
                        <div className="message">Send your love to {creator.userName} to become a real fan</div>
                        <form onSubmit={(e) => hide()}>
                            <div className="amount input-border">
                                <span>$</span>
                                <input type="number" placeholder="200" onChange={(e) => setAmount(e.target.value)} />
                            </div>
                            <input type="text" placeholder="Your name(optional)" className="input-border" onChange={(e) => setName(e.target.value)} />
                            <textarea placeholder="Say something nice(optional)" className="input-border" onChange={(e) => setMessage(e.target.value)} />
                            <button type="submit">Support $ {amount}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorModal;