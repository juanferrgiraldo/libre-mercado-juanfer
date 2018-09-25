import React from 'react';

const search = (props) => (
    <div>
        <input 
            placeholder="Search..."
            value={props.query}
            onChange={props.changed}
            onKeyPress={props.keyPress}           
            />
        <button className="btn btn-outline-primary" onClick={props.click}><i className="fa fa-search"></i></button>
    </div>
)

export default search;