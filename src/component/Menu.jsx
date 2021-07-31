import React from 'react';
import {  NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>

                     <li className="nav-item">
                       <NavLink exact activeClassName="active-menu" to="/" className="nav-link">Home</NavLink>
                        </li> 

                        <li className="nav-item">
                       <NavLink activeClassName="active-menu" to="/Portfolio" className="nav-link">Portfolio</NavLink>
                        </li> 

                        <li className="nav-item">
                       <NavLink activeClassName="active-menu" to="/Experience" className="nav-link">Experience</NavLink>
                        </li> 


                        <a class="btn fw-500 ms-lg-4 btn-primary" href="tel:9555009232">
                                    Call Me
                       </a>

        </>

        
    )
}

export default Menu;