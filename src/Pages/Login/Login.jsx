import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { validateUser } from '../../store/actions';
import LoginImage from '../../image/login.jpg';
import './Login.css';

function Login() {
  // role = useSelector((state) => state.user.role);
  const navigate = useNavigate();
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await dispatch(validateUser(form));
    setForm({});
    navigate(result.user.role === 'doctor' ? '/viewerDoctor' : '/viewerPatient');
  };
  return (
    <div className="register__landing">
      <section className="register" id="register">
        <div className="subtitle">Iniciar sesión</div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="email" className="login__label" onChange={handleChange}>
              Email *
              <br />
              <input
                type="email"
                id="email"
                name="email"
                size="25"
                placeholder="correo@dominio.com"
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password" className="login__label" onChange={handleChange}>
              Contraseña *
              <br />
              <input
                type="password"
                id="password"
                name="password"
                size="25"
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
