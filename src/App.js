import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Components/Register'
import ViewerDoctor from "./Pages/ViewerDoctor";
import ViewerPatient from "./Pages/ViewerPatient";
import datapatients from "./assets/dataPacients"
import datadoctor from './assets/dataDoctor'


function App() {
 console.log(datadoctor)
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/viewerDoctor" element={ <ViewerDoctor datapatients={datapatients} datadoctor={datadoctor} />}/>
        <Route path="/viewerPatient" element={ <ViewerPatient />}  
         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
