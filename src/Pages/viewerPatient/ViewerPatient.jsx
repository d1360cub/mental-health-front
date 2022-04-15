/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardViewer from '../../Components/CardViewer';
import Checklist from '../../Components/Checklist/Checklist';
import Welcome from '../../Components/Welcome';
import { getAppointmentsByPatientId } from '../../services/appointments';
import Calendar from '../../Components/Calendar';
import '../HomeViewer.css';

function ViewerPatient() {
  const [appointment, setAppointment] = useState([]);
  const patient = useSelector((state) => state.user);
  const { user, token } = patient;

  useEffect(async () => {
    const data = await getAppointmentsByPatientId(user._id);
    setAppointment(data);
  }, [token]);

  return (
    <div>
      <section className="home" id="home">
        <div>
          <Welcome information={user} key={user._id} />
        </div>
        <div className="home_content">
          <div className="home_content--citas">
            {appointment.map((element) => (
              <CardViewer
                viewer={false}
                information={element.doctorId._id}
                start={element.start}
                end={element.end}
                key={user._id}
              />
            ))}
            <div>
              <Calendar events={appointment} />
            </div>
          </div>
          <div>
            <Checklist />
          </div>
        </div>
      </section>
    </div>
  );
}
export default ViewerPatient;
