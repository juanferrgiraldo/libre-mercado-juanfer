import React from 'react';

const search = (props) => (
    <div>
        <input 
            placeholder="Search..."
            value={props.query}
            onChange={props.changed}            
            />
        <button onClick={props.click}>Search</button>
    </div>
)

export default search;