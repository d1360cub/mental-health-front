import React from "react";
import "./HomePage.css";

import Doctors from "../Doctors/Doctors";
import Home from "../Home/Home";
import About from "../About/About";

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
            <i className="fas fa-user-md"></i>
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor"></i>
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor"></i>
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor"></i>
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor"></i>
            <h3>Psicología clínica</h3>
            <p>
              El especialista trata de identificar y rehabilitar procesos de
              pensamiento o conductas insanas
            </p>
            <a href="" className="btn-appointment">doctors</a>
          </div>

          <div className="services__box">
            <i className="fa fa-user-doctor"></i>
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
            <a href="#home"> <i className="fa fa-brain"></i> home </a>
            <a href="#about"> <i className="fa fa-brain"></i> about </a>
            <a href="#services"> <i className="fa fa-brain"></i> services </a>
            <a href="#doctors"> <i className="fa fa-brain"></i> doctors </a>
            <a href="#"> <i className="fa fa-brain"></i> users </a>
          </div>

          <div className="footer__box">
            <h3>our services</h3>
            <a href="#services"> <i className="fa fa-hand-holding"></i> service 1 </a>
            <a href="#services"> <i className="fa fa-hand-holding"></i> service 2 </a>
            <a href="#services"> <i className="fa fa-hand-holding"></i> service 3 </a>
            <a href="#services"> <i className="fa fa-hand-holding"></i> service 4 </a>
            <a href="services"> <i className="fa fa-hand-holding"></i> service 5 </a>
          </div>

          <div className="footer__box">
            <h3>Contact Info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +51-123-456-789 </a>
            <a href="#"> <i className="fas fa-mobile"></i> +51 975275260 </a>
            <a href="#"> <i className="fas fa-envelope"></i> team07.topv20 </a>
            <a href="#"> <i className="fab fa-whatsapp"></i> +51 945678912 </a>
            <a href="#"> <i className="fa fa-map-location"></i> Latinoamerica </a>
          </div>

          <div className="footer__box">
            <h3>Follow Us</h3>
            <a href="#"> <i className="fab fa-linkedin"></i> Linkedin </a>
            <a href="#" target="__blank">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#"> <i className="fab fa-facebook-f"></i> Facebook </a>
            <a href="#"> <i className="fab fa-instagram"></i> Instagram </a>
            <a href="#"> <i className="fab fa-pinterest-p"></i> Pinterest </a>
          </div>
        </div>
      </section>
      {/* <!-- Footer - fin --> */}
    </>
  );
}
