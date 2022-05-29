import React, { useState } from "react";
import { useDispatch } from "react-redux";

import '../css/creatormodal.css'


const CreatorModal = ({ creator }) => {

    const [amount, setAmount] = useState(5);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [symbol, setSymbol] = useState("$");

    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch({
            type: 'setActive',
            payload: ''
        });
    }

    const addDonation = () => {
        dispatch({
            type: "addTransaction",
            payload: {
                creatorId: creator.id,
                name,
                symbol,
                amount,
                message
            }
        });
        hideModal();
    }

    if (!creator) return null;

    return (
        <div className="creator-modal">
            <div className="modal-frame" onClick={(e) => { hideModal() }}>
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <div className="title">
                        <img src={creator.profileUrl} alt={`${creator.userName}'s image`} />
                        {creator.userName}
                    </div>
                    <div className="container">
                        <div className="message">Send your love to {creator.userName} to become a real fan</div>
                        <form onSubmit={(e) => { addDonation() }}>
                            <div className="amount input-border">
                                <select name="currencySymbol" onChange={(e) => setSymbol(e.target.value)} value={symbol}>
                                    <option value="$">$</option>
                                    <option value="₹">₹</option>
                                    <option value="€">€</option>
                                </select>
                                <input
                                    type="number"
                                    onChange={(e) => setAmount(e.target.value)}
                                    value={amount}
                                    required={true}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Your name(optional)"
                                className="input-border"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <textarea
                                placeholder="Say something nice(optional)"
                                className="input-border"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            <button type="submit">Support {symbol} {amount}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorModal;