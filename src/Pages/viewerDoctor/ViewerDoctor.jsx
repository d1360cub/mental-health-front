
import CardViewer from '../../Components/CardViewer';
import Welcome from '../../Components/Welcome'
import imageCalender from '../../image/calendario.png'
import '../HomeViewer.css'

const ViewerDoctor=({datapatients,datadoctor})=>{
  const links=[
    { "path":"Chat"  ,   "url":"#" },
     { "path":"H. clinica"   ,   "url":"#" }
   ];
  return(
    <div>  
      <section className="home" id="home">
      <Welcome 
      nameDoctor={datadoctor.name}
      lastNameDoctor={datadoctor.lastName}
      profile={datadoctor.profile}   
       />
      <div className="home_content"> 
        <div className ="home_content--citas" >
          {
            datapatients.map((element,idx)=>{
              return(
              <CardViewer information={element} links={links} key={idx}/>       
              )
            } )
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