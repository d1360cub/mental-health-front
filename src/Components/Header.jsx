import React from "react";
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faBars} from '@fortawesome/free-solid-svg-icons'


const Header = () =>{
    return(
    <header className="header">
        <a href="#" className="header__logo">
            <div className="fa fa-brain">
                <FontAwesomeIcon icon={faBrain}/> Mental Health
            </div>
            
        </a>
        <nav className="header__navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="/login.html" className="btn-users">Users</a>
        </nav>

        <div id="header__menu-btn-responsive" className="fas fa-bars">
            <FontAwesomeIcon icon= {faBars}/>
        </div>
    </header>
    )
}


export default Header