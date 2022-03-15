import  './Welcome.css'

const Welcome =(props)=>{
  return (
    <div className="home-Welcome">
    <p className="home-Welcome-message">bienvenid@ {props.perfil}
      <br/>
      <span id="home-Welcome--doctor">
        <h3>{props.nameDoctor} {props.lastNameDoctor}</h3>
      </span> 
      </p>
      {
        props.perfil
        ? 
          <div className="home_content__parrafo">
            <p> <strong> Tus proximas citas son:</strong> </p>
          </div>
        :
          <div className="home_content__parrafo">
            <p> <strong> Tu proxima cita es con:</strong> </p>
          </div>
      } 
  </div>
  )
}
export default Welcome;