import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
           
            
            <p className="headerTitle">BLOCKBUSTER 3.0</p>
            <div className="navigate">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/logout">Logout</NavLink>
              
            </div>
        </header>
    )

}

export default Header;