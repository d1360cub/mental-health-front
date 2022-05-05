import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <section className="footer" data-cy="home-component">
      <div className="footer__box-container">
        <div className="footer__box">
          <h3>mental health</h3>
          <a href="#home">
            {' '}
            <i className="fa fa-brain" />
            {' '}
            home
          </a>
          <a href="#about">
            {' '}
            <i className="fa fa-brain" />
            {' '}
            about
          </a>
          <a href="#services">
            {' '}
            <i className="fa fa-brain" />
            {' '}
            services
          </a>
          <a href="#doctors">
            {' '}
            <i className="fa fa-brain" />
            {' '}
            doctors
          </a>
          <Link to="/login">
            {' '}
            <i className="fa fa-brain" />
            {' '}
            users
          </Link>
        </div>

        <div className="footer__box">
          <h3>Desarrolladores</h3>
          <a href="mailto:endyleyms@gmail.com" className="lowercase">
            {' '}
            <i className="fas fa-envelope" />
            {' '}
            endyleyms@gmail.com
          </a>
          <a href="mailto:alexsuarez@gmail.com" className="lowercase">
            {' '}
            <i className="fas fa-envelope" />
            {' '}
            alexsuarez@gmail.com
          </a>
          <a href="mailto:diegofernandocubides@gmail.com" className="lowercase">
            {' '}
            <i className="fas fa-envelope" />
            {' '}
            diegofernandocubides@gmail.com
          </a>
          <a href="mailto:poolpeterhijuel@gmail.com" className="lowercase">
            {' '}
            <i className="fas fa-envelope" />
            {' '}
            poolpeterhijuel@gmail.com
          </a>
        </div>

        <div className="footer__box">
          <h3>Nuestro proyectos</h3>
          <a href="https://github.com/endyleyms" target="__blank">
            {' '}
            <i className="fab fa-github" />
            {' '}
            Wendy Medina
          </a>
          <a href="https://github.com/AlexSuarezRodriguez" target="__blank">
            {' '}
            <i className="fab fa-github" />
            {' '}
            Alexander Suarez
          </a>
          <a href="https://github.com/d1360cub" target="__blank">
            {' '}
            <i className="fab fa-github" />
            {' '}
            Diego Cubides
          </a>
          <a href="https://github.com/popehiflo" target="__blank">
            {' '}
            <i className="fab fa-github" />
            {' '}
            Pool Hijuela
          </a>
        </div>

        <div className="footer__box">
          <h3>Síguenos</h3>
          <a href="https://www.linkedin.com/in/wendy-medina-9205/" target="__blank">
            {' '}
            <i className="fab fa-linkedin" />
            {' '}
            Wendy Medina
          </a>
          <a href="https://www.linkedin.com/in/alexander-suarez-rodriguez/" target="__blank">
            <i className="fab fa-linkedin" />
            {' '}
            Alexander Suarez
          </a>
          <a href="https://www.linkedin.com/in/diegocubides/" target="__blank">
            {' '}
            <i className="fab fa-linkedin" />
            {' '}
            Diego Cubides
          </a>
          <a href="https://www.linkedin.com/in/popehiflo/" target="__blank">
            {' '}
            <i className="fab fa-linkedin" />
            {' '}
            Pool Hijuela
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
