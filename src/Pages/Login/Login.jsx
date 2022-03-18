import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../../image/login.jpg';
import './Login.css';

function Login() {
  return (
    <div>
      <header className="header">
        <Link to="/" className="header__logo">
          <i className="fa fa-brain" />
          Mental Health
        </Link>
      </header>
      <div className="landing">
        <section className="register" id="register">
          <div className="welcome">Mental Health</div>
          <div className="subtitle">Iniciar sesión</div>
          <form action="login" onSubmit="">
            <fieldset>
              <label htmlFor="username">
                Email *
                <input type="text" id="username" name="username" />
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="password">
                Contraseña *
                <input type="password" id="password" name="password" />
              </label>
            </fieldset>
          </form>
          <div className="click">
            <Link to="/" className="password">¿Olvidaste tu contraseña?</Link>
            <button className="login" type="submit">Iniciar sesión</button>
          </div>
          <div className="first-time">
            ¿Es tu primera vez?
            {' '}
            <Link to="/register" className="question">Regístrate</Link>
          </div>
        </section>
        <img src={LoginImage} alt="login" className="image" />
      </div>
    </div>
  );
}

export default Login;
