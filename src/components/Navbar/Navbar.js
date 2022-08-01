import React from 'react';
import './navbar.css'
import logo from './../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="nav">
            <div className='nav-container'>
           <div className="nav-items">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-pages">
                <ul>
                   <div className="nav-link-style"> <li className='nav-link'> home</li></div>
                    <li> home</li>
                    <li> home</li>
                    <li> home</li>
                </ul>
            </div>
            <div className="nav-search">
                <input placeholder="input something"type="text"  />
                <FontAwesomeIcon className='search-icon' icon={faSearch}/>
            </div>
           </div>
            
        </div>
        </div>
    );
};

export default Navbar;