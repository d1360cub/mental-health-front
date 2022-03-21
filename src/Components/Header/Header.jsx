import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

export default function Header() {
  const menu = useRef();

  const showMenu = () => {
    menu.current.classList.toggle('active');
  };

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <i className="fa fa-brain" />
        {' '}
        Mental Health
      </NavLink>
      <nav className="header__navigation" ref={menu}>
        <Link to="#home" className="header__nav-link">Home</Link>
        <Link to="#about" className="header__nav-link">About</Link>
        <Link to="#services" className="header__nav-link" smooth>Services</Link>
        <Link to="#doctors" className="header__nav-link">Doctors</Link>
        <Link to="/login" className="btn-header-users header__nav-link">
          Users
        </Link>
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu} aria-hidden="true" />
    </header>
  );
}
