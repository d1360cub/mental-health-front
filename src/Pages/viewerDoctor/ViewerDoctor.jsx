/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAppointByDocId } from '../../store/actions';
import CardViewer from '../../Components/CardViewer';
import Welcome from '../../Components/Welcome';
import Calendar from '../../Components/Calendar';
import Loading from '../../Components/Loading';
import './ViewerDoctor.css';

function ViewerDoctor() {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const dataAppointments = useSelector((state) => state.appointments);
  const doctor = useSelector((state) => state.user);
  const { user, token } = doctor;

  function sortAppointment(x, y) {
    return x.start.localeCompare(y.start, 'fr', { ignorePunctuation: true });
  }
  const appointmentsSorted = dataAppointments.sort(sortAppointment);

  useEffect(() => {
    dispatch(showAppointByDocId(user._id));
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, [token]);
  return (
    <div>
      {load
        ? <Loading />
        : (
          <section className="homeDoctor">
            <Welcome information={user} key={user._id} />
            <div className="home_content">
              <div className="home_content--citas">
                {appointmentsSorted.map((element) => (
                  <CardViewer
                    key={element._id}
                    userId={element.patientId._id}
                    viewer
                    appointment_id={element._id}
                  />
                ))}
              </div>
              <div className="home_content--calender">
                <Calendar events={appointmentsSorted} />
              </div>
            </div>
          </section>
        )}

    </div>
  );
}
export default ViewerDoctor;
