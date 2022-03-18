import { useState,useEffect } from 'react';
import CardViewer from '../../Components/CardViewer';
import Welcome from '../../Components/Welcome'
import imageCalender from '../../image/calendario.png'
import listAllUsers from '../../services/user'
import '../HomeViewer.css'

const ViewerPatient=()=>{

  const [patients,setPatients]=useState([])
  const [doctors,setDoctors]=useState([])

  const listPerson=async()=>{
  const data  = await listAllUsers();
  setPatients(data);
  setDoctors(data);
  }
  
  const doctorFilter = doctors.filter(element => {
    return !element.services})
    .filter(elet => elet.license==="65635")

  const patientsFilterOnly = patients.filter(element => {
    return !element.license})
    .filter(elet =>elet.id===5)
  
  useEffect(()=>{
    listPerson();
  },[])

  const links=[
    { "path":"Chat"  ,   "url":"#" },
   ];

  return(
    <div>  
      <section className="home" id="home">
        {
          patientsFilterOnly.map((element, index)=>{
            return  <Welcome information={element} key={index}/>
          })
        }
      <div className="home_content"> 
        <div className ="home_content--citas" >
          {
            doctorFilter.map((element,index)=>{
              return(
              <CardViewer information={element} links={links} key={index}/>       
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
export default ViewerPatient;
