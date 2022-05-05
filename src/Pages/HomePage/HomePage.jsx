/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './HomePage.css';

import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Doctors />
      <Footer />
    </>
  );
}
