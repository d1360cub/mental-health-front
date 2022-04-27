/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './Doctors.css';
import Doctorcard from '../../Components/Doctorcard/Doctorcard';
import Searchdoctor from '../../Components/Doctorcard/Searchdoctor';
import Pagination from '../../Components/Doctorcard/Pagination';
import { getDoctors } from '../../services/doctor';

export default function Doctors() {
  const [users, setUsers] = useState([]);
  const [card, setCard] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [porCard, setPorCard] = useState(8);
  const [query, setQuery] = useState('');

  const doctorFilter = users.filter((element) => element.role === 'doctor' && element.atentionarea.toLowerCase().includes(query));
  const maximo = Math.ceil(doctorFilter.length / porCard);
  const fetchDoctors = async (querys = {}) => {
    const data = await getDoctors(querys);
    setUsers(data);
    setCard(1);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <section className="doctors" id="doctors" data-cy="home-component">
      <h1 className="section-heading-doctors"><span>Doctores</span></h1>
      <div>
        <Searchdoctor setQuery={setQuery} />

      </div>
      <div>
        <Pagination card={card} setCard={setCard} maximo={maximo} />
      </div>
      <div className="doctors__box-container">
        {doctorFilter.slice(
          (card - 1) * porCard,
          (card - 1) * porCard + porCard,
        // eslint-disable-next-line react/no-array-index-key
        // eslint-disable-next-line no-underscore-dangle
        ).map((user) => <Doctorcard key={user._id} image={user.avatar} firstName={user.firstName} lastName={user.lastName} email={user.email} atentionarea={user.atentionarea} id={user._id} />)}
      </div>
    </section>
  );
}
