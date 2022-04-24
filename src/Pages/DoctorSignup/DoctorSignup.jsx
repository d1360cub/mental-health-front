/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sweetalert from 'sweetalert';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/actions';
import './DoctorSignup.css';

function DoctorSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
      role: 'doctor',
    });
  };
  const onSubmit = (event) => {
    // event.preventDefault();
    dispatch(createUser(form));
    setForm({});
    sweetalert({
      icon: 'success',
      title: 'Gracias por registrarte con nosotros.',
      text: 'Para continuar con el proceso revisa tu correo',
      buttons: ['Cancelar', 'Continuar'],
    });
    event.target.reset();
  };
  return (
    <div className="landing__doctor">
      <div className="subtitle__doctor">Bienvenido, Doctor</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="firstName" className="doctors__label">
            Nombre
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              size="30"
              onChange={handleChange}
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.firstName && <span className="validationP">{errors.firstName.message}</span>}
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName" className="doctors__label">
            Apellido
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              size="30"
              onChange={handleChange}
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.lastName && <span className="validationP">{errors.lastName.message}</span>}
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="email" className="doctors__label">
            Email
            <br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              size="30"
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
          <label htmlFor="password" className="doctors__label">
            Contraseña
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              size="30"
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
        </fieldset>
        <fieldset>
          <label htmlFor="phone" className="doctors__label">
            Celular
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              size="30"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.phone && <span className="validationP">{errors.phone.message}</span>}
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="academic" className="doctors__label">
            Formación académica
            <br />
            <input
              type="text"
              id="academic"
              name="academic"
              size="30"
              onChange={handleChange}
              {...register('academic', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.academic && <span className="validationP">{errors.academic.message}</span>}
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="atentionarea" className="doctors__label">
            Areas de atención
            <br />
            <input
              type="text"
              id="atentionarea"
              name="atentionarea"
              size="30"
              onChange={handleChange}
              {...register('atentionarea', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.atentionarea && <span className="validationP">{errors.atentionarea.message}</span>}
          </label>
        </fieldset>
        <div className="table">
          <fieldset>
            <label htmlFor="description" className="doctors__label">
              Descripción de servicios profesionales
              <br />
              <textarea
                id="description"
                name="description"
                rows="8"
                cols="34"
                onChange={handleChange}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              <br />
              {errors.description && <span className="validationP">{errors.description.message}</span>}
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label htmlFor="experience" className="doctors__label">
            Experiencia profesional
            <br />
            <input
              type="text"
              id="experience"
              name="experience"
              size="30"
              onChange={handleChange}
              {...register('experience', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            <br />
            {errors.experience && <span className="validationP">{errors.experience.message}</span>}
          </label>
        </fieldset>
        <input type="hidden" name="role" value="doctor" />
        <div className="btn__centered">
          <button type="submit" className="btn-appointment">
            Regístrate
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorSignup;
