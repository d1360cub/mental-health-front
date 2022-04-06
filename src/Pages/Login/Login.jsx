import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginImage from '../../image/login.jpg';
import './Login.css';
import { validateUser } from '../../store/actions';

function Login() {
  const dispatch = useDispatch();
  const showPassword = () => {
    const tipo = document.getElementById('password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  };
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm(
      {
        ...form,
        [name]: value,
      },
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(validateUser(form));
    setForm({});
  };
  return (
    <div className="register__landing">
      <section className="register" id="register">
        <div className="subtitle">Iniciar sesión</div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="mail" className="login__label" onChange={handleChange}>
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
            <label htmlFor="password" className="login__label" onChange={handleChange}>
              Contraseña *
              <input
                type="password"
                id="password"
                name="password"
                size="20"
                placeholder="contraseña"
              />
            </label>
            <button className="btn-appointment" onClick={showPassword} type="button">Mostrar contraseña</button>
          </fieldset>
          <div className="click">
            <Link to="/" className="password">¿Olvidaste tu contraseña?</Link>
            <button type="submit" className="btn-appointment">Iniciar sesión</button>
          </div>
        </form>
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
