import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import newUser from '../../services/user';

function Register() {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(form);
    setForm({});
  };
  return (
    <div className="register">
      <div className="landingReg">
        <div className="subtitleReg">Registro</div>
        <div className="question">
          <Link to="/">¿Quieres prestar tus servicios con nosotros?</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                size="20"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="last-name">
              Apellido
              <input
                type="text"
                id="last-name"
                name="last-name"
                onChange={handleChange}
                size="20"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="cellphone">
              Celular
              <input
                type="tel"
                id="cellphone"
                name="cellphone"
                onChange={handleChange}
                size="20.5"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                size="22"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                size="17"
              />
            </label>
          </fieldset>
        </form>
        <div className="session">
          ¿Ya eres un miembro?
          <Link to="/login">Inicia sesión</Link>
        </div>
        <Link to="/ViewerDoctor">
          <button type="submit" className="btn-appointment">
            Regístrate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
