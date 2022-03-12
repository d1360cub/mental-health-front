import CardViewer from '../Components/CardViewer'
import imagePerfil from '../image/doc-350x350.png'
import Welcome from '../Components/Welcome'

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

const ViewerDoctor = ( )=>{
  return(
    <>
      <Welcome 
      nameDoctor={DateDoctos.nameDoctor}
      lastNameDoctor={DateDoctos.lastNameDoctor}
      perfil={DateDoctos.profile}
       />
      <CardViewer 
        imagePerfil={informationCard.imagePerfil} 
        name={informationCard.name} 
        lastName={informationCard.lastName}
        enlaces={informationCard.enlaces}
      />
    </>
  )
}
export default ViewerDoctor;