import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import about from '../../image/about-us-img.svg';

function About() {
  return (
    <section className="about" id="about">
      <h1 className="section-heading">
        <span>Nosotros</span>
      </h1>
      <div className="about__row">
        <div className="about__image">
          <img src={about} alt="about us" />
        </div>
        <div className="about__content">
          <h3>
            Sin contratos, paga sólo cuando lo necesites y hazlo desde donde
            quieras
          </h3>
          <p>
            Deja de pagar costosas consultas ambulatorias. Nuestro concepto de
            &apos;consulta por uso&apos; te da la garantía de acceder a un psicólogo de
            forma fácil, rápida y económica.
          </p>
          <p>
            Hay cosas a las que le llega su hora, y es el turno de la
            psicología. Las tecnologías de la información y las comunicaciones
            se han convertido en el principal aliado de esta importante área de
            salud.
          </p>
          <Link to="/login" className="btn-appointment">
            Programa tu cita
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
