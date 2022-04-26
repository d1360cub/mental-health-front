/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Developers.css';

function Developers() {
  return (
    <section>
      <h1 className="section-heading"><span>Desarrolladores</span></h1>
      <section className="developers" id="developers">
        <div className="box">
          <img className="fotoperfil" src="https://avatars.githubusercontent.com/u/87741454?v=4" alt="" />
          <h3>
            Alexander Suarez
          </h3>
          <h4>description</h4>
          <p />
          <a className="linkredes" href="https://github.com/AlexSuarezRodriguez">GitHub</a>
          <a className="linkredes" href="https://www.linkedin.com/in/alexander-suarez-rodriguez/">Linkedin</a>
        </div>
        <div className="box">
          <img className="fotoperfil" src="https://avatars.githubusercontent.com/u/95053070?v=4" alt="" />
          <h3>
            Diego Cubides
          </h3>
          <h4>description</h4>
          <p />
          <a className="linkredes" href="https://github.com/d1360cub">GitHub</a>
          <a className="linkredes" href="https://www.linkedin.com/in/diegocubides/">Linkedin</a>
        </div>
        <div className="box">
          <img className="fotoperfil" src="https://avatars.githubusercontent.com/u/78057584?v=4" alt="" />
          <h3>
            Wendy Medina
          </h3>
          <h4>description</h4>
          <p />
          <a className="linkredes" href="https://github.com/endyleyms" src=" ">GitHub</a>
          <a className="linkredes" href="https://www.linkedin.com/in/wendy-medina-9205/">Linkedin</a>
        </div>
        <div className="box">
          <img className="fotoperfil" src="https://avatars.githubusercontent.com/u/14990458?v=4" alt="" />
          <h3>
            Pool Hijuela
          </h3>
          <h4>description</h4>
          <p />
          <a className="linkredes" href="https://github.com/popehiflo">GitHub</a>
          <a className="linkredes" href="https://www.linkedin.com/in/popehiflo/">Linkedin</a>
        </div>

      </section>

    </section>

  );
}

export default Developers;
