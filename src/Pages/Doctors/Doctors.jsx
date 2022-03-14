import React from 'react';
import "./Doctors.css";

export default function Doctors() {
  return (
    <section className="doctors" id="doctors">
      <h1 className="section-heading"><span>doctors</span></h1>
      <form action="#" method="post" target="_blank">
        <fieldset>
          <label for="search">Encuentra a tu especialista...</label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Nombre, ciudad, especialidad..."
          />
          <input type="submit" value="Buscar" className="btn-search" />
        </fieldset>
      </form>
      <ul className="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#">1</a></li>
        <li><a className="active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">»</a></li>
      </ul>
      <div className="doctors__box-container">
        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Educacional</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Educacional</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Clínica y de la Salud</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Clínica y de la Salud</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Social Comunitaria</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <img src="image/doc-350x350.png" alt="" />
          <h3>wendy</h3>
          <span>Psicología Social Comunitaria</span>
          <div className="social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
      </div>
    </section>
  )
}
