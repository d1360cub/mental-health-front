/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { validateUser } from '../../store/actions';
import LoginImage from '../../image/login.jpg';
import './Login.css';

function Login() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const preAppointment = useSelector((state) => state.preAppointment);
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
  const onSubmit = async () => {
    // event.preventDefault();
    const { error, user } = await dispatch(validateUser(form));
    if (error) {
      setError('email', { type: 'custom', message: error.message });
      setError('password', { type: 'custom', message: error.message });
      if (!user) {
        setError('email', { type: 'custom', message: 'El Usuario no existe' });
        setError('password', { type: 'custom', message: 'El Usuario no existe' });
      }
    }
    if (user) {
      if (user?.role === 'patient') {
        if (Object.keys(preAppointment).length !== 0) {
          navigate(`/perfil-doctor/${preAppointment.doctorId}`);
        } else {
          navigate('/viewerPatient');
        }
      } else if (user.role === 'doctor') {
        navigate('/viewerDoctor');
      } else {
        navigate('/viewerAdmin');
      }
      setForm({});
    }
  };
  return (
    <div className="register__landing">
      <section className="register" id="register">
        <div className="subtitle">Iniciar sesión</div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El email es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              <br />
              {errors.email && <span className="validationP">{errors.email.message}</span>}
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
                {...register('password', {
                  required: {
                    value: true,
                    message: 'La contraseña es requerida',
                  },
                  minLength: {
                    value: 3,
                    message: 'La contraseña debe tener al menos 3 caracteres',
                  },
                })}
              />
              <br />
              {errors.password && <span className="validationP">{errors.password.message}</span>}
            </label>
            <button className="btn-appointment" onClick={showPassword} type="button">Mostrar contraseña</button>
          </fieldset>
          <div className="click">
            <Link to="/" className="password">¿Olvidaste tu contraseña?</Link>
            <button type="submit" className="btn-appointment" data-cy="login-button">Iniciar sesión</button>
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
