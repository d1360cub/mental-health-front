
import { useState,useEffect } from 'react';
import CardViewer from '../../Components/CardViewer';
import Welcome from '../../Components/Welcome';
import imageCalender from '../../image/calendario.png';
import {listAllUsers} from '../../services/user';
import '../HomeViewer.css'

const ViewerDoctor=()=>{

  const [patients,setPatients]=useState([])
  const [doctors,setDoctors]=useState([])



  const patientsFilter = patients.filter(element => !element.license)
  const doctorFilter = doctors.filter(element => {return !element.services}).filter(elet=>elet.license==="60877")
  
  useEffect(()=>{
      const listPerson =async()=>{
      const data  = await listAllUsers();
      setPatients(data);
      setDoctors(data);
  }
    listPerson();
  },[])

  const links=[
    { "path":"Chat"  ,   "url":"#" ,  "id":1},
     { "path":"H. clinica"   ,   "url":"#", "id":2 }
   ];

  return(
    <div>  
      <section className="home" id="home">
        {
          doctorFilter.map((element)=>{
            return  <Welcome information={element} key={element.id}/>
          })
        }
      <div className="home_content"> 
        <div className ="home_content--citas" >
          {
            patientsFilter.map((element)=>{
              return(
              <CardViewer information={element} links={links} key={element.id}/>       
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