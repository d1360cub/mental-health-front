import React from 'react';
import './Page404.css';
import notfound from "../../image/page-not-found.svg";
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="container">
      <img className='container__image' src={notfound} alt="page not found" />
      <h1 className='section-heading'>PAGE NOT FOUND</h1>
      <Link to="/" className="btn-appointment">
        Back to Home
      </Link>
    </div>
  )
}

export default Page404