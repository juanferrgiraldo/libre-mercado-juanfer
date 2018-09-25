import React from 'react';

import "./Search.css";

const search = (props) => (
    <div className="Search">
        <input className="" type="search"
            placeholder="Search..."
            value={props.query}
            onChange={props.changed}
            onKeyPress={props.keyPress}           
            />
        <button className="btn btn-outline-primary" onClick={props.click}><i className="fa fa-search"></i></button>
    </div>
)

export default search;