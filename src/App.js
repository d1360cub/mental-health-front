<<<<<<< HEAD
import Login from "./Components/Login"
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> develop
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Components/Register'

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Login />
    </div>
=======
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/register" element={ <Register />} />
      </Routes>
    </BrowserRouter>
>>>>>>> develop
  );
}

export default App;
