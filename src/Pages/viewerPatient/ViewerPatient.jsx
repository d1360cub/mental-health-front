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
  const appointment = useSelector((state) => state.listAppointments);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(showAppointmentPatient(user._id));
  }, []);

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
                appointmentId={element._id}
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
