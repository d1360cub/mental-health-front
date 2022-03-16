
import CardViewer from '../Components/CardViewer';
import Welcome from '../Components/Welcome'
import imageCalender from '../image/calendario.png'
import './HomeViewer.css'

const ViewerDoctor=({datapatients,datadoctor})=>{

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
            datapatients.map(element=>{
              return(
              <CardViewer information={element} />       
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