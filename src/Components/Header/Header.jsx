/* eslint-disable react/button-has-type */
import { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const { token, user } = useSelector((state) => state.user);

  const userPage = (user?.role === 'doctor' ? '/viewerDoctor' : '/viewerPatient');

  const onLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

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
        <NavHashLink to="/" className="header__nav-link">Home</NavHashLink>
        {!token && (
        <>
          <NavHashLink to="/#about" className="header__nav-link">About</NavHashLink>
          <NavHashLink to="/#services" className="header__nav-link" smooth>Services</NavHashLink>
          <NavHashLink to="/#doctors" className="header__nav-link">Doctors</NavHashLink>
          <Link to="/login" className="btn-header-users header__nav-link">
            Users
          </Link>
        </>
        )}
        {token && (
        <>
          <NavHashLink to={userPage} className="header__nav-link">Appoiments</NavHashLink>
          <NavHashLink to="/profile" className="header__nav-link">Profile</NavHashLink>
          <button onClick={onLogout} className="btn-header-users header__nav-link">
            Logout
          </button>
        </>
        )}
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu} aria-hidden="true" />
    </header>
  );
}
