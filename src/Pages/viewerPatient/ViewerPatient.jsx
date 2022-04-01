/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CardViewer from '../../Components/CardViewer';
import Checklist from '../../Components/Checklist/Checklist';
import InfoPersonal from '../../Components/InfoPersonal/InfoPersonal';
import { listAllUsers, getUser } from '../../services/user';
import '../HomeViewer.css';

function ViewerPatient() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [infoPer, setInfoper] = useState({});

  const doctorFilter = doctors
    .filter((element) => !element.services).filter((elet) => elet.license === '65635');

  const patientsFilterOnly = patients
    .filter((element) => !element.license).filter((elet) => elet.id === 5);

  const fetchInfopersonal = async () => {
    const data = await getUser(1);
    setInfoper(data);
  };
  useEffect(() => {
    const listPerson = async () => {
      const data = await listAllUsers();
      setPatients(data);
      setDoctors(data);
    };
    listPerson();
    fetchInfopersonal();
  }, []);

  const links = [{ path: 'Chat', url: '#', id: 1 }];
  return (
    <div>
      <section className="home" id="home">
        <div>
          <InfoPersonal
            key={infoPer?.id}
            name={infoPer?.name}
            lastname={infoPer?.lastName}
            nacionalidad={infoPer?.nacionalidad}
            residencia={infoPer?.residencia}
            mail={infoPer?.mail}
          />

        </div>
        <div className="home_content">
          <div className="home_content--citas">
            {doctorFilter.map((element) => (
              <CardViewer
                viewer={false}
                information={element}
                links={links}
                key={element.id}
              />
            ))}
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
