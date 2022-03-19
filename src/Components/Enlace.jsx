function Enlace(props) {
  const [path, url] = props;
  return (
    <a className="btn-appointment" href={url}>
      {path}
    </a>
  );
}
export default Enlace;
