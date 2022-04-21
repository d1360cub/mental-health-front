/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUsers } from '../../store/actions';
import './Header.css';

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    e.preventDefault();
  };

  dispatch(LogoutUsers());

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
        <NavHashLink to="/#home" className="header__nav-link">Home</NavHashLink>
        {!user && (
        <>
          <NavHashLink to="/#about" className="header__nav-link">About</NavHashLink>
          <NavHashLink to="/#services" className="header__nav-link" smooth>Services</NavHashLink>
          <NavHashLink to="/#doctors" className="header__nav-link">Doctors</NavHashLink>
          <Link to="/login" className="btn-header-users header__nav-link">
            Users
          </Link>
        </>
        )}
        {user && (
        <button onClick={onLogout} className="btn-header-users header__nav-link">
          Logout
        </button>
        )}
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu} aria-hidden="true" />
    </header>
  );
}
