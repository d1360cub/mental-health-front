import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faHandHolding, faMapLocation, faPhone, faMobile, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faTwitter, faFacebook, faInstagram, faPinterestP} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () =>{
    return(
    <section className="footer">
        <div className="footer__box-container">
            <div className="footer__box">
                <h3>mental health</h3>
                <a href="#home">
                    <i className="fa fa-brain"><FontAwesomeIcon icon={faBrain}/></i> home
                </a>
                <a href="#about">
                    <i className="fa fa-brain"><FontAwesomeIcon icon={faBrain}/></i> about
                </a>
                <a href="#services">
                    <i className="fa fa-brain"><FontAwesomeIcon icon={faBrain}/></i> services
                </a>
                <a href="#doctors">
                    <i className="fa fa-brain"><FontAwesomeIcon icon={faBrain}/></i> doctors
                </a>
                <a href="#">
                    <i className="fa fa-brain"><FontAwesomeIcon icon={faBrain}/></i> users
                </a>
            </div>

            <div className="footer__box">
                <h3>our services</h3>
                <a href="#services">
                    <i className="fa fa-hand-holding"><FontAwesomeIcon icon={faHandHolding}/></i> service 1
                </a>
                <a href="#services">
                    <i className="fa fa-hand-holding"><FontAwesomeIcon icon={faHandHolding}/></i> service 2
                </a>
                <a href="#services">
                    <i className="fa fa-hand-holding"><FontAwesomeIcon icon={faHandHolding}/></i> service 3
                </a>
                <a href="#services">
                    <i className="fa fa-hand-holding"><FontAwesomeIcon icon={faHandHolding}/></i> service 4
                </a>
                <a href="services">
                    <i className="fa fa-hand-holding"><FontAwesomeIcon icon={faHandHolding}/></i> service 5
                </a>
            </div>

            <div className="footer__box">
                <h3>Contact Info</h3>
                <a href="#">
                    <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone}/></i> +51-123-456-789
                </a>
                <a href="#">
                    <i className="fas fa-mobile"><FontAwesomeIcon icon={faMobile}/></i> +51 975275260
                </a>
                <a href="#">
                    <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope}/></i> team07.topv20
                </a>
                <a href="#">
                    <i className="fab fa-whatsapp"></i> +51 945678912
                </a>
                <a href="#">
                    <i className="fa fa-map-location"><FontAwesomeIcon icon={faMapLocation}/></i> Latinoamerica
                </a>
            </div>

            <div className="footer__box">
                <h3>Follow Us</h3>
                <a href="#">
                    <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></i> Linkedin
                </a>
                <a href="#" target="__blank">
                    <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i> Twitter
                </a>
                <a href="#">
                    <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook}/></i> Facebook
                </a>
                <a href="#">
                    <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></i> Instagram
                </a>
                <a href="#">
                    <i className="fab fa-pinterest-p"><FontAwesomeIcon icon={faPinterestP}/></i> Pinterest
                </a>
            </div>
        </div>
  </section>
    
    )
}


export default Footer