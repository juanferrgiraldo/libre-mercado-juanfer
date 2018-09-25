import React from 'react';

import './Header.css';

const header = (props) => (
    <nav className=" main_navbar navbar navbar-expand-sm">
        <a className="navbar-brand mx-3" href="#">Libre mercado JF</a>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
)

export default header;