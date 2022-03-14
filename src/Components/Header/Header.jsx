import React from "react";
import "./Header.css";

export default function Header() {

  let menu = document.querySelector('#header__menu-btn-responsive');
  let navbar = document.querySelector('.header__navigation');
  const showMenu = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <i className="fa fa-brain"></i> Mental Health
      </a>
      <nav className="header__navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="/login.html" className="btn-users">
          Users
        </a>
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu}></div>
    </header>
  );
}
