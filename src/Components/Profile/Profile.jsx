/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../services/user';
import UploadImage from '../UploadImage/UploadImage';
import './Profile.css';

function Profile() {
  const patient = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const { user } = patient;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userProfile._id, form);
    setForm({});
    navigate(userProfile.role === 'doctor' ? '/viewerDoctor' : '/viewerPatient');
  };
  useEffect(async () => {
    const person = await getUser(user._id);
    setUserProfile(person);
  }, []);
  return (
    <div>
      <p className="section-heading">Mi perfil</p>
      <div className="box">
        <div>
          <img className="imgPerfil" src={userProfile.avatar} alt="imagen" />
          <UploadImage id={userProfile._id} />
        </div>
        <table>
          <tr>
            <th>Nombres:</th>
            <td rowSpan="4">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    size="20"
                    onChange={handleChange}
                    placeholder="Nombres completos"
                  />
                  <td>
                    <strong>{userProfile.firstName}</strong>
                    {' '}
                  </td>
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    size="20"
                    onChange={handleChange}
                    placeholder="Apellidos completos"
                  />
                  <td>
                    <strong>{userProfile.lastName}</strong>
                    {' '}
                  </td>
                </fieldset>
                <fieldset>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    size="20"
                    onChange={handleChange}
                    placeholder="Número de teléfono"
                  />
                  <td>
                    <strong>{userProfile.phone}</strong>
                    {' '}
                  </td>
                </fieldset>
                <fieldset>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    size="20"
                    min="1940-01-01"
                    onChange={handleChange}
                  />
                  <td><strong>{userProfile.birthDate}</strong></td>
                </fieldset>
                <div className="btn__centered">
                  <button type="submit" className="btn-appointment">
                    Modifica tus datos
                  </button>
                </div>
              </form>
            </td>
          </tr>
          <tr>
            <th>Apellidos:</th>
          </tr>
          <tr>
            <th>Teléfono:</th>
          </tr>
          <tr>
            <th>Fecha de nacimiento:</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Profile;
