import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Pages/Register/Register';
import ViewerDoctor from "./Pages/ViewerDoctor";
import ViewerPatient from "./Pages/ViewerPatient";
import Login from "./Pages/Login/Login";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Page404 from "./Pages/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login />} />
        <Route element={ <ProtectedRoutes/> } >
          <Route path="/viewerDoctor" element={ <ViewerDoctor />} />
          <Route path="/viewerPatient" element={ <ViewerPatient />} />
        </Route>

        <Route path="*" element={ <Page404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
