/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardViewer from '../../Components/CardViewer';
import Checklist from '../../Components/Checklist/Checklist';
import Welcome from '../../Components/Welcome';
import { showAppointmentPatient } from '../../store/actions';
import Calendar from '../../Components/Calendar';
import '../HomeViewer.css';

function ViewerPatient() {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointmentsPatient);
  const patient = useSelector((state) => state.user);
  const { user, token } = patient;

  useEffect(async () => {
    dispatch(showAppointmentPatient(user._id));
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
                userId={element.doctorId._id}
                start={element.start}
                end={element.end}
                key={user._id}
                appointment_id={element._id}
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
