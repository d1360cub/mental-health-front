/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './Doctors.css';
import Doctorcard from '../../Components/Doctorcard/Doctorcard';
import Searchdoctor from '../../Components/Doctorcard/Searchdoctor';
import Pagination from '../../Components/Doctorcard/Pagination';
import { getDoctors } from '../../services/doctor';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [card, setCard] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [porCard, setPorCard] = useState(8);
  const maximo = doctors.length / porCard;

  const fetchDoctors = async (query = {}) => {
    const data = await getDoctors(query);
    setDoctors(data);
    setCard(1);
  };

  const handleSearch = (searchQuery) => {
    fetchDoctors({ services_like: searchQuery });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <section className="doctors" id="doctors">
      <h1 className="section-heading"><span>Doctors</span></h1>
      <div>
        <Searchdoctor onSearch={handleSearch} />

      </div>
      <div>
        <Pagination card={card} setCard={setCard} maximo={maximo} />
      </div>
      <div className="doctors__box-container">
        {doctors.slice(
          (card - 1) * porCard,
          (card - 1) * porCard + porCard,
        // eslint-disable-next-line react/no-array-index-key
        ).map((doctor) => <Doctorcard key={doctor.id} image={doctor.image} name={doctor.name} services={doctor.services} description={doctor.description} id={doctor.id} />)}
      </div>
    </section>
  );
}
