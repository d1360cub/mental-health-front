import React from "react";
import { Link } from "react-router-dom"
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="title">Mental Health</div>
      <div className="subtitle">Registro</div>
      <div className="question">
        <div className="question__doctor">
          {" "}
          <Link to="/">¿Doctor?</Link>
        </div>
        <div className="question__patient">
          {" "}
          <Link to="/">¿Paciente?</Link>
        </div>
      </div>
      <form action="" method="post">
        <fieldset>
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" />
        </fieldset>
        <fieldset>
          <label for="last-name">Apellido</label>
          <input type="text" id="last-name" name="last-name" />
        </fieldset>
        <fieldset>
          <label for="cellphone">Celular</label>
          <input type="tel" id="cellphone" name="cellphone" />
        </fieldset>
        <fieldset>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <fieldset>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </fieldset>
      </form>
      <div className="session">
        ¿Ya eres un miembro? <a href="/login.html">Inicia sesión</a>
      </div>
      <button className="register">Regístrate</button>
    </div>
  );
}

export default Register;