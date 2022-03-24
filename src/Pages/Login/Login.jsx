import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../../image/login.jpg';
import './Login.css';

function Login() {
  const showPassword = () => {
    const tipo = document.getElementById('password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  };
  return (
    <div className="landing">
      <section className="register" id="register">
        <div className="subtitle">Iniciar sesión</div>
        <form action="login" onSubmit="">
          <fieldset>
            <label htmlFor="mail">
              Email *
              <input
                type="email"
                id="mail"
                name="mail"
                size="25"
                placeholder="correo@dominio.com"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password">
              Contraseña *
              <input
                type="password"
                id="password"
                name="password"
                size="20"
                placeholder="contraseña"
              />
            </label>
            <button className="btn-appointment" type="submit" onClick={showPassword}>Mostrar contraseña</button>
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
