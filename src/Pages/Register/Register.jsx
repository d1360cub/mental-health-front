import React, {useState} from "react";
import { Link } from "react-router-dom"
import "./Register.css";
import newUser from "../../services/user";

function Register() {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const {value,name} = event.target;
    setForm({
      ...form,
      [name]: value
    });
    console.log(form)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(form);
    setForm({});
  }
  return (
    <div className="register">
      <div className="title">Mental Health</div>
      <div className="subtitle">Registro</div>
      <div className="question">
        <div className="question__doctor">
          {" "}
          <Link to="/">¿Doctor?</Link>
        </div>
        <div className="question__patient">
          {" "}
          <Link to="/">¿Paciente?</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label for="last-name">Apellido</label>
          <input type="text" id="last-name" name="last-name" onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label for="cellphone">Celular</label>
          <input type="tel" id="cellphone" name="cellphone" onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" onChange={handleChange}/>
        </fieldset>
      <div className="session">
        ¿Ya eres un miembro? <a href="/login.html">Inicia sesión</a>
      </div>
      <button type="submit">Regístrate</button>
      </form>
    </div>
  );
}

export default Register;
