import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Services.css';
// import getAllServices from '../../services/serviceServices';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { showAllServices } from '../../store/actions';

export default function Services() {
  // const [services, setServices] = useState([]);
  const dataServices = useSelector((state) => state.services);
  const dispatch = useDispatch();
  /* const getServices = async () => {
    const data = await getAllServices();
    setServices(data);
  }; */

  useEffect(() => {
    dispatch(showAllServices());
  }, []);
  console.log(dataServices);
  return (
    <section className="services" id="services">
      <h1 className="section-heading">
        <span>Servicios</span>
      </h1>
      <div className="services__box-container">
        {dataServices.map((servicio) => (
          <ServiceCard
            // eslint-disable-next-line no-underscore-dangle
            key={servicio._id}
            // eslint-disable-next-line no-underscore-dangle
            id={servicio._id}
            service={servicio.title}
            description={servicio.description}
          />
        ))}
      </div>
    </section>
  );
}
