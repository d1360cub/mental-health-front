import React from 'react';
import "./HomePage.css";
import home from "../../image/home-mind-img.svg";

export default function HomePage() {
  return (
    <>
      {/* <!-- Home - inicio --> */}
      <section class="home" id="home">
        <div class="home__image">
          <img src={home} alt="home image mental health" />
        </div>
        <div class="home__content">
          <h3>The Emotional Brain</h3>
          <p>
            Diversos autores llaman asi al sistema límbico. Este es el encargado
            de regular las emociones, pero no es su única función, tambien tiene
            un papel importante en el aprendizaje, memoria y en respuestas
            fisiológicas ante ciertos estímulos.
          </p>
          <a href="/login.html" class="btn-appointment">Make an Appointment</a>
        </div>
      </section>
      {/* <!-- Home - fin --> */}
    </>
  )
}
