/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardViewer from '../../Components/CardViewer';
// import Welcome from '../../Components/Welcome';
import { showAppointByDocId } from '../../store/actions';
import Calendar from '../../Components/Calendar';
import './ViewerDoctor.css';

function ViewerDoctor() {
  const dispatch = useDispatch();
  const dataAppointments = useSelector((state) => state.appointments);
  useEffect(() => {
    dispatch(showAppointByDocId('6254af21d8771b229a290688'));
  }, []);
  return (
    <section className="homeDoctor">
      {/* <Welcome information={element} key={element.id} /> */}
      <div className="home_content">
        <div className="home_content--citas">
          {dataAppointments.map((element) => (
            <CardViewer
              key={element._id}
              information={element.patientId._id}
              viewer
            />
          ))}
        </div>
        <div className="home_content--calender">
          <Calendar />
        </div>
      </div>
    </section>
  );
}
export default ViewerDoctor;
