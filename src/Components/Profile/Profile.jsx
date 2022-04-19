/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser, updateUser } from '../../services/user';
import UploadImage from '../UploadImage/UploadImage';

function Profile() {
  const patient = useSelector((state) => state.user);
  const [form, setForm] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const { user } = patient;
  useEffect(async () => {
    const person = await getUser(user._id);
    setUserProfile(person);
  }, []);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log('form', form);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userProfile._id, form);
    setForm({});
  };
  return (
    <div>
      <UploadImage />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstName" className="register__label">
            {`Nombres: ${userProfile.firstName}`}
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              size="30"
              onChange={handleChange}
              placeholder="Nombres completos"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName" className="register__label">
            {`Apellidos: ${userProfile.lastName}`}
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              size="30"
              onChange={handleChange}
              placeholder="Apellidos completos"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="phone" className="register__label">
            {`Celular: ${userProfile.phone}`}
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              size="30"
              onChange={handleChange}
              placeholder="Número de teléfono"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="birthDate" className="register__label">
            {`Fecha de nacimiento: ${userProfile.birthDate}`}
            <br />
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              size="30"
              min="1940-01-01"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <div className="btn__centered">
          <button type="submit" className="btn-appointment">
            Modifica tus datos
          </button>
        </div>
      </form>
    </div>
  );
}
export default Profile;
