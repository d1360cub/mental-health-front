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
      <div className="landing">
        <div className="subtitle">Registro</div>
        <div className="question">
          <div className="question__doctor">
            {' '}
            <Link to="/">¿Quieres prestar tus servicios con nosotros?</Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">
              Nombre
              <input type="text" id="name" name="name" onChange={handleChange}/>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="last-name">
              Apellido
              <input type="text" id="last-name" name="last-name" onChange={handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="cellphone">
              Celular
              <input type="tel" id="cellphone" name="cellphone" onChange={handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              Email
              <input type="email" id="email" name="email" onChange={handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password">
              Contraseña
              <input type="password" id="password" name="password" onChange={handleChange} />
            </label>
          </fieldset>
          <div className="session">
            ¿Ya eres un miembro?
            <Link to="/login">
              Inicia sesión
            </Link>
          </div>
          <button type="submit" className="btn-appointment">Regístrate</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
