
const Enlace=({path,url,key})=>{
  return(
    <a className="btn-appointment" href={url} key={key} > {path} </a>
  )
}
export default Enlace;