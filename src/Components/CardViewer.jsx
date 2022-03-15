
import Enlace from './Enlace'
import './CardViewer.css'

const CardViewer=(props)=>{
  
  return(
    <div className="home_content--card">
    <div className="home_content--imagen">
      <figure>
        <img src={props.imagePerfil} alt=""></img>
      </figure>  
    </div>
    <div className="home-content__card--perfil">
      <h3>{props.name} {props.lastName}</h3>
      <p>
        <span>esquisofremia, </span>
        <span>edad, </span>
        <span>ubicacion, </span>
        <span>palabras claves.</span>
      </p>
      <div className="home_content__enlaces">
        {
          props.enlaces.map( element => {
            return <Enlace path={element.path} url={element.url}/> ;      
          })
        } 
      </div>
    </div>
  </div>
  )
}
export default CardViewer;