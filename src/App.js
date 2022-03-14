import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Register from './Components/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/register" element={ <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
