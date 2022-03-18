import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {

  const menu = useRef();
  
  const showMenu = () => {
    menu.current.classList.toggle('active');
  }

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <i className="fa fa-brain"></i> Mental Health
      </NavLink>
      <nav className="header__navigation" ref={menu} >
        <NavLink to="#home" className="header__nav-link">Home</NavLink>
        <NavLink to="#about" className="header__nav-link">About</NavLink>
        <NavLink to="#services" className="header__nav-link">Services</NavLink>
        <NavLink to="#doctors" className="header__nav-link">Doctors</NavLink>
        <NavLink to="/login" className="btn-header-users header__nav-link">
          Users
        </NavLink>
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu}></div>
    </header>
  );
}
