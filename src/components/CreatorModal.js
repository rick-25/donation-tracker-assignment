import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";

import '../css/creatormodal.css'


const CreatorModal = ({ creator }) => {

    const [amount, setAmount] = useState(5);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

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
                reciverId: creator.id,
                name,
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
                                <span>$</span>
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
                            />
                            <textarea
                                placeholder="Say something nice(optional)"
                                className="input-border"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Support $ {amount}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorModal;