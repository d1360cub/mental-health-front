
import Enlace from './Enlace'
import './CardViewer.css'

const CardViewer=({information,links})=>{

  return(
    <div className="home_content--card">
    <div className="home_content--imagen">
      <figure>
        <img src={information.imageprofile} alt=""></img>
      </figure>  
    </div>
    <div className="home-content__card--perfil">
      <h3>{information.name} {information.lastName}</h3>
      <p>
        <span>{information.consultationRequest}, </span>
        <span>{information.age}, </span>
        <span>{information.location}, </span>
      </p>
      <div className="home_content__enlaces">
        {
          links.map( element => {
            return <Enlace path={element.path} url={element.url}/> ;      
          })
        } 
      </div>
    </div>
  </div>
  )
}
export default CardViewer;