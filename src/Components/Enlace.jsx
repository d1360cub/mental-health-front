/* eslint-disable react/prop-types */
import { HashLink as Link } from 'react-router-hash-link';

function Enlace({ path }) {
  return (
    <Link to="/" className="btn-header-users header__nav-link">
      {path}
    </Link>
  );
}
export default Enlace;
