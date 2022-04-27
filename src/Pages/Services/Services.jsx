/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Services.css';
import { HashLink as Link } from 'react-router-hash-link';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { showAllServices } from '../../store/actions';

export default function Services() {
  const dataServices = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllServices());
  }, []);
  return (
    <section className="services" id="services">
      <h1 className="section-heading-services">
        <span>Servicios</span>
      </h1>
      <div className="services__box-container">
        {dataServices.map((servicio) => (
          <ServiceCard
            key={servicio._id}
            id={servicio._id}
            service={servicio.title}
            description={servicio.description}
          />
        ))}
      </div>
      <div className="services__button">
        <Link to="#doctors" className="btn-appointment">
          Encuentra a tu especialista
        </Link>
      </div>
    </section>
  );
}
