import PropTypes from 'prop-types';
import './Welcome.css';

function Welcome({ information }) {
  return (
    <div className="home-Welcome">
      <div className="home-Welcome__message">
        {' '}
        Bienvenid@
        {information.role === 'doctor' ? <span>  Dr.</span> : <div />}
        <h4 id="home-Welcome--doctor">
          {information.fullName}
        </h4>
      </div>
      {
        information.role === 'doctor'
          ? (
            <div className="home_content__parrafo">
              <p>
                {' '}
                <strong> Tus proximas citas son :</strong>
                {' '}
              </p>
            </div>
          )
          : (
            <div className="home_content__parrafo">
              <p>
                {' '}
                <strong> Tu proxima cita es con :</strong>
                {' '}
              </p>
            </div>
          )
}
    </div>
  );
}
Welcome.propTypes = {
  information: PropTypes.objectOf(PropTypes.string),
};
Welcome.defaultProps = {
  information: {},
};
export default Welcome;
