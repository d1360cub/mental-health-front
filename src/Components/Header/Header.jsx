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
    <header className="header" data-cy="home-component">
      <NavLink to="/" className="header__logo">
        <i className="fa fa-brain" />
        {' '}
        Mental Health
      </NavLink>
      <nav className="header__navigation" ref={menu}>
        <NavHashLink to="/" className="header__nav-link">Inicio</NavHashLink>
        {!token && (
        <>
          <NavHashLink to="/#about" className="header__nav-link">Acerca de</NavHashLink>
          <NavHashLink to="/#services" className="header__nav-link" smooth>Servicios</NavHashLink>
          <NavHashLink to="/#doctors" className="header__nav-link">Doctores</NavHashLink>
          <Link to="/login" className="btn-header-users header__nav-link">
            Usuarios
          </Link>
        </>
        )}
        {token && (
        <>
          {user?.role === 'patient' && (
            <>
              <NavHashLink to="/doctors" className="header__nav-link">Doctores</NavHashLink>
              <NavHashLink to={userPage} className="header__nav-link">Mis Citas</NavHashLink>
              <NavHashLink to="/profile" className="header__nav-link">Mi Perfil</NavHashLink>
              <button onClick={onLogout} className="btn-header-users header__nav-link">
                Salir
              </button>
            </>
          )}
          {user?.role === 'doctor' && (
          <>
            <NavHashLink to={userPage} className="header__nav-link">Mis Citas</NavHashLink>
            <NavHashLink to="/profile" className="header__nav-link" data-cy="button-profile">Mi Perfil</NavHashLink>
            <button onClick={onLogout} className="btn-header-users header__nav-link" data-cy="button-log-out">
              Salir
            </button>
          </>
          )}
          {user?.role === 'admin' && (
          <>
            <NavHashLink to="/viewerAdmin/:adminId" className="header__nav-link" data-cy="button-profile">Portal</NavHashLink>
            <button onClick={onLogout} className="btn-header-users header__nav-link" data-cy="button-log-out">
              Salir
            </button>
          </>
          )}

        </>
        )}
      </nav>

      <div id="header__menu-btn-responsive" className="fas fa-bars" onClick={showMenu} aria-hidden="true" />
    </header>
  );
}
