import React from 'react';
import './HomePage.css';

import Doctors from '../Doctors/Doctors';
import Home from '../Home/Home';
import About from '../About/About';

export default function HomePage() {
  return (
    <>
      <Home />
      <About />

      {/* <!-- Services - inicio  --> */}
      <section className="services" id="services">
        <h1 className="section-heading"><span>services</span></h1>
        <div className="services__box-container">
          <div className="services__box">
            <i className="fas fa-user-md" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor" />
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>
        </div>
      </section>
      {/* <!-- Services - fin --> */}

      {/* <!-- Doctors - fin --> */}
      <Doctors />
      {/* <!-- Doctors - fin --> */}

      {/* <!-- Footer - inicio --> */}
      <section className="footer">
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
            <a href="#">
              {' '}
              <i className="fa fa-brain" />
              {' '}
              users
            </a>
          </div>

          <div className="footer__box">
            <h3>our services</h3>
            <a href="#services">
              {' '}
              <i className="fa fa-hand-holding" />
              {' '}
              service 1
            </a>
            <a href="#services">
              {' '}
              <i className="fa fa-hand-holding" />
              {' '}
              service 2
            </a>
            <a href="#services">
              {' '}
              <i className="fa fa-hand-holding" />
              {' '}
              service 3
            </a>
            <a href="#services">
              {' '}
              <i className="fa fa-hand-holding" />
              {' '}
              service 4
            </a>
            <a href="services">
              {' '}
              <i className="fa fa-hand-holding" />
              {' '}
              service 5
            </a>
          </div>

          <div className="footer__box">
            <h3>Contact Info</h3>
            <a href="#">
              {' '}
              <i className="fas fa-phone" />
              {' '}
              +51-123-456-789
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-mobile" />
              {' '}
              +51 975275260
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-envelope" />
              {' '}
              team07.topv20
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-whatsapp" />
              {' '}
              +51 945678912
            </a>
            <a href="#">
              {' '}
              <i className="fa fa-map-location" />
              {' '}
              Latinoamerica
            </a>
          </div>

          <div className="footer__box">
            <h3>Follow Us</h3>
            <a href="#">
              {' '}
              <i className="fab fa-linkedin" />
              {' '}
              Linkedin
            </a>
            <a href="#" target="__blank">
              <i className="fab fa-twitter" />
              {' '}
              Twitter
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-facebook-f" />
              {' '}
              Facebook
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-instagram" />
              {' '}
              Instagram
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-pinterest-p" />
              {' '}
              Pinterest
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Footer - fin --> */}
    </>
  );
}
