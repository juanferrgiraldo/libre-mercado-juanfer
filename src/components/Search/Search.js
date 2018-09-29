import React from 'react';

import "./Search.css";
import libremercadojf from '../../assets/libre-mercado2.png';

const search = (props) => (
    <div className="row Search">
        <div className="col-lg-4">
            <a className="navbar-brand mx-3" href="#"> <img className="logo" src={libremercadojf} alt="brand" /> </a>            
        </div>
        <div className="col-lg-8">
            <input className="" type="search"
                placeholder="Search..."            
                onChange={props.changed}
                onKeyPress={props.keyPress} />                    
            <button className="btn btn-outline-primary" onClick={props.click}><i className="fa fa-search"></i></button>
        </div>            
    </div>
)

export default search;