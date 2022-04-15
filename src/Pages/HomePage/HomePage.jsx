import React from 'react';
import './HomePage.css';

import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Slider from '../../Components/Slider/Slider';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Services />
      <Doctors />
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
            <a href="#home">
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
            <a href="#home">
              {' '}
              <i className="fas fa-phone" />
              {' '}
              +51-123-456-789
            </a>
            <a href="#home">
              {' '}
              <i className="fas fa-mobile" />
              {' '}
              +51 975275260
            </a>
            <a href="#home">
              {' '}
              <i className="fas fa-envelope" />
              {' '}
              team07.topv20
            </a>
            <a href="#home">
              {' '}
              <i className="fab fa-whatsapp" />
              {' '}
              +51 945678912
            </a>
            <a href="#home">
              {' '}
              <i className="fa fa-map-location" />
              {' '}
              Latinoamerica
            </a>
          </div>

          <div className="footer__box">
            <h3>Follow Us</h3>
            <a href="#home">
              {' '}
              <i className="fab fa-linkedin" />
              {' '}
              Linkedin
            </a>
            <a href="#home" target="__blank">
              <i className="fab fa-twitter" />
              {' '}
              Twitter
            </a>
            <a href="#home">
              {' '}
              <i className="fab fa-facebook-f" />
              {' '}
              Facebook
            </a>
            <a href="#home">
              {' '}
              <i className="fab fa-instagram" />
              {' '}
              Instagram
            </a>
            <a href="#home">
              {' '}
              <i className="fab fa-pinterest-p" />
              {' '}
              Pinterest
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
