import React, { useState } from 'react';
import "./Doctors.css";
import Doctorcard from '../../Components/Doctorcard/Doctorcard';
import doctorsList from '../../DB/doctors'



export default function Doctors(props) {

   
  return (
    <section className="doctors" id="doctors">
      <h1 className="section-heading"><span>Doctors</span></h1>
      <form action="#" method="post" target="_blank">
        <fieldset>
          <label for="search">Encuentra a tu especialista...</label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Nombre, ciudad, especialidad..."
          />
          <input type="submit" value="Buscar" className="btn-search" />
        </fieldset>
      </form>
      <div>Pagination</div>
      <div className="doctors__box-container">
        {doctorsList.map((doctor)=> <Doctorcard image={doctor.image} name={doctor.name} services={doctor.services} description={doctor.description} id={doctor.id}/>)}
      </div>
    </section>
  )
}
