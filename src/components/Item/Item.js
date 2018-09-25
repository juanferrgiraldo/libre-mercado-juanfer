import React from 'react';

import './Item.css'

const item = (props) => (

    <ul className="Item">
        <div className="row">
            <figure className="col-lg-4">
                <img className="" src={props.image} />
            </figure>            
            <div className="card-body col-lg-8">
                <h5 className="card-title" >{props.title}</h5>
                <h6>$ {props.price}</h6>
                <h6>{props.quantity} items vendidos - {props.city}</h6>                
            </div>
        </div>           
    </ul>
)

export default item;