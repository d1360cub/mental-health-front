import React from "react";
import { Link } from "react-router-dom"
import LoginImage from "../../image/login.jpg";
import "./Login.css"

function Login() {
  return (
    <div>
      <header className="header">
        <Link to="/" className="header__logo">
          <i class="fa fa-brain"></i> Mental Health
        </Link>
      </header>
      <div className="landing">
        <section className="register" id="register">
          <div className="welcome">Mental Health</div>
          <div className="subtitle">Iniciar sesión</div>
          <form action="login" method="post">
            <fieldset>
              <label for="username">Email *</label>
              <input type="text" id="username" name="username" />
            </fieldset>
            <fieldset>
              <label for="password">Contraseña *</label>
              <input type="password" id="password" name="password" />
            </fieldset>
          </form>
          <div className="click">
            <Link to="/" className="password">¿Olvidaste tu contraseña?</Link>
            <button className="login">Iniciar sesión</button>
          </div>
          <div className="first-time">
            ¿Es tu primera vez?{" "}
            <Link to="/register" className="question">Regístrate</Link>
          </div>
        </section>
        <img src={LoginImage} alt="login" className="image" />
      </div>
    </div>
  );
}

export default Login;
