import CardViewer from '../../Components/CardViewer';
import Welcome from '../../Components/Welcome'
import imageCalender from '../../image/calendario.png'
import '../HomeViewer.css'

const ViewerPatient=({datapatients,datadoctor})=>{
  const links=[
    { "path":"Chat"  ,   "url":"#" }
   ];
  return(
    <div>  
      <section className="home" id="home">
      <Welcome 
      nameDoctor={datapatients[4].name}
      lastNameDoctor={datapatients[4].lastName}
        
       />
      <div className="home_content"> 
        <div className ="home_content--citas" >
              <CardViewer information={datadoctor} links={links}/>       
        </div>
        <div className ="home_content--calender">
          <img src={imageCalender} alt=""/>
        </div>
      </div>
    </section>
</div>
  )
}
export default ViewerPatient;
