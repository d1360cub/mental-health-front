import PropTypes from 'prop-types';
import Enlace from '../Enlace';
import './CardViewer.css';

function CardViewer({ information, links }) {
  return (
    <div className="home_content--card">
      <div className="home_content--imagen">
        <figure>
          <img src={information.imageprofile} alt="" />
        </figure>
      </div>
      <div className="home-content__card--perfil">
        <h3>
          {information.name}
          {information.lastName}
        </h3>
        <p>
          <span>
            {information.services}
            ,
            {' '}
          </span>
          <span>
            {information.phone}
            ,
            {' '}
          </span>
          <span>
            {information.mail}
            ,
            {' '}
          </span>
        </p>
        <div className="home_content__enlaces">
          {links.map((element) => (
            <Enlace path={element.path} url={element.url} key={element.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
CardViewer.propTypes = {
  information: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.string),
};
CardViewer.defaultProps = {
  information: {},
  links: [],
};

export default CardViewer;
