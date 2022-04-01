import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

function Enlace({ path }) {
  return (
    <Link to="#modal" className="btn-header-users header__nav-link">
      {path}
    </Link>
  );
}
Enlace.propTypes = {
  path: PropTypes.string,
};
Enlace.defaultProps = {
  path: '',
};
export default Enlace;
