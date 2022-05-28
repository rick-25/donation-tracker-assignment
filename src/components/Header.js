import React from "react";

import '../css/header.css'

const Header = (props) => {
    return (
        <div className="header">
            <div className="brand">{props.brand}</div>
        </div>
    )    
};

export default Header;