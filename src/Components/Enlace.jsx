/* eslint-disable react/prop-types */
function Enlace({ path, url }) {
  return (
    <a className="btn-appointment" href={url}>
      {path}
    </a>
  );
}
export default Enlace;
