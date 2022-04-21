import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import ViewerDoctor from './Pages/viewerDoctor/ViewerDoctor';
import ViewerPatient from './Pages/viewerPatient/ViewerPatient';
import Login from './Pages/Login/Login';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Page404 from './Pages/Page404/Page404';
import DoctorSignup from './Pages/DoctorSignup/DoctorSignup';
import Modal from './Components/Modal/Modal';
import InfoDoctor from './Pages/perfilDoctor/InfoDoctor';
import UploadImage from './Components/UploadImage/UploadImage';
import Activate from './Pages/Activate/Activate';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/doctor-warning" element={<Modal />} />
        <Route path="/perfil-doctor/:doctorId" element={<InfoDoctor />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/verify/:token" element={<Activate />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/viewerDoctor" element={<ViewerDoctor />} />
          <Route path="/viewerPatient" element={<ViewerPatient />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
