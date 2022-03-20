import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../../image/login.jpg';
import './Login.css';

function Login() {
  return (
    <div className="landing">
      <section className="register" id="register">
        <div className="subtitle">Iniciar sesión</div>
        <form action="login" onSubmit="">
          <fieldset>
            <label htmlFor="username">
              Email *
              <input type="text" id="username" name="username" size="25" />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password">
              Contraseña *
              <input type="password" id="password" name="password" size="20" />
            </label>
          </fieldset>
        </form>
        <div className="click">
          <Link to="/" className="password">¿Olvidaste tu contraseña?</Link>
          <Link to="/ViewerPatient" className="question">
            <button className="btn-appointment" type="submit">Iniciar sesión</button>
          </Link>
        </div>
        <div className="first-time">
          ¿Es tu primera vez?
          <Link to="/register" className="question">Regístrate</Link>
        </div>
      </section>
      <img src={LoginImage} alt="login" className="image" />
    </div>
  );
}

export default Login;
