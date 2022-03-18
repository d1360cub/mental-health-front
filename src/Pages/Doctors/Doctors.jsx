import React, { useState } from 'react';
import "./Doctors.css";
import Doctorcard from '../../Components/Doctorcard/Doctorcard';
import doctorsList from '../../DB/doctors'
import Searchdoctor from '../../Components/Doctorcard/Searchdoctor';
import Pagination from '../../Components/Doctorcard/Pagination';



export default function Doctors() {
  const[card, setCard]=useState(1)
  const[porCard, setPorCard]=useState(4)
  const maximo= doctorsList.length / porCard;
   
  return (
    <section className="doctors" id="doctors">
      <h1 className="section-heading"><span>Doctors</span></h1>
      <div>
        <Searchdoctor/>    
        
      </div>
      <div>
        <Pagination card={card} setCard={setCard} maximo={maximo} />
      </div>
      <div className="doctors__box-container">
        {doctorsList.slice(
          (card -1) * porCard, 
          (card-1) * porCard + porCard
          ).map((doctor, index)=> <Doctorcard key={index} image={doctor.image} name={doctor.name} services={doctor.services} description={doctor.description} id={doctor.id}/>)}
      </div>
    </section>
  )
}
