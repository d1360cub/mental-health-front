
import Enlace from './Enlace'
import './CardViewer.css'

const CardViewer=({information,links,key})=>{

  return(
    <div className="home_content--card" key={key}>
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
          links.map( (element,idx) => {
            return <Enlace path={element.path} url={element.url} key={idx}/> ;      
          })
        } 
      </div>
    </div>
  </div>
  )
}
export default CardViewer;