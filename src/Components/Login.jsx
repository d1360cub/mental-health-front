import React from "react";
import LoginImage from "../image/login.jpg";
import "./Login.css"

function Login() {
  return (
    <div>
      <header className="header">
        <a href="/index.html" className="header__logo">
          <i class="fa fa-brain"></i> Mental Health
        </a>
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
          <a href="#" className="password">
            ¿Olvidaste tu contraseña?
          </a>
          <button className="login">Iniciar sesión</button>
          <div className="first-time">
            ¿Es tu primera vez?{" "}
            <a href="/register.html" className="question">
              Regístrate
            </a>
          </div>
        </section>
        <img src={LoginImage} alt="login" className="image" />
      </div>
    </div>
  );
}

export default Login;
