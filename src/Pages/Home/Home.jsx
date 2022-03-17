import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import brain from "../../image/home-mind-img.svg";


function Home(){
  return (
    <section className="home" id="home">
    <div className="home__image">
      <img src={brain} alt="mental health" />
    </div>
    <div className="home__content">
      <h3>The Emotional Brain</h3>
      <p>
        Diversos autores llaman así al sistema límbico. Este es el encargado
        de regular las emociones, pero no es su única función, tambien tiene
        un papel importante en el aprendizaje, memoria y en respuestas
        fisiológicas ante ciertos estímulos.
      </p>
      <Link to="../login" className="btn-appointment">Make an Appointment</Link>
    </div>
  </section>
  )
}

export default Home;