import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className='nav-list'>
            <h3 className='nav-list-name'>AUTH</h3>
            <ul className="nav-list-item">
                <NavLink to ='/login'>Login</NavLink>
                <NavLink to='/user'>User</NavLink>
            </ul>
        </div>
    )
}

export default Nav;