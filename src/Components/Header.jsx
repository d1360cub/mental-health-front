import React from "react";
import './Header.css'

const Header = () =>{
    return(
    <header className="header">
        <a href="#" className="header__logo">
            <i className="fa fa-brain"></i> Mental Health
        </a>
        <nav className="header__navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="/login.html" className="btn-users">Users</a>
        </nav>

        <div id="header__menu-btn-responsive" className="fas fa-bars"></div>
    </header>
    )
}


export default Header