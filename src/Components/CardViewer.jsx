
import FotoPerfil from './FotoPerfil'
import Nombre from './Nombre'
import Enlace from './Enlace'
import './CardViewer.css'


const CardViewer=(props)=>{
  
  return(
    <div className="home_content--card">
    <div className="home_content--imagen">
      <figure>
        <FotoPerfil pictureProfile={props.imagePerfil} alt=""/>
      </figure>  
    </div>
    <div className="home-content__card--perfil">
      <Nombre name={props.name} lastName={props.lastName}/>
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