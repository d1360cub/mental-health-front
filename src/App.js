

import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import ViewerDoctor from "./Pages/ViewerDoctor";
import ViewerPatient from "./Pages/ViewerPatient";
import Login from "./Pages/Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/viewerDoctor" element={ <ViewerDoctor />} />
        <Route path="/viewerPatient" element={ <ViewerPatient />} />
        <Route path="/login" element={ <Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
