
import CardViewer from '../Components/CardViewer';
import Welcome from '../Components/Welcome'
import imagePerfil from '../image/doc-350x350.png'
import imageCalender from '../image/calendario.png'
 import './HomeViewerDoctor.css'
import './pageHome.css'

const characters=Array.from({length:6},(_,i)=>(i))

const informationCard =
{
  "imagePerfil":imagePerfil,
  "name":"alexander",
  "lastName":"Suarez",
  "enlaces":[
    { "path":"Chat"  ,   "url":"#" },
    { "path":"H. clinica"   ,   "url":"#" }
  ]
}
const DateDoctos=
{
  "nameDoctor":"rodolfo",
  "lastNameDoctor":"castillo",
  "profile":"Dr"
}
const ViewerDoctor=()=>{
  return(
    <div>  
      <section className="home" id="home">
      <Welcome 
      nameDoctor={DateDoctos.nameDoctor}
      lastNameDoctor={DateDoctos.lastNameDoctor}
      perfil={DateDoctos.profile}
       />
      <div className="home_content"> 
        <div className ="home_content--citas" >
          {
            characters.map(()=>{
              return(
              <CardViewer 
              imagePerfil={informationCard.imagePerfil} 
              name={informationCard.name} 
              lastName={informationCard.lastName}
              enlaces={informationCard.enlaces}
              />       
              )
            })
          }
        </div>
        <div className ="home_content--calender">
          <img src={imageCalender} alt=""/>
        </div>
      </div>
    </section>
</div>
  )
}
export default ViewerDoctor;