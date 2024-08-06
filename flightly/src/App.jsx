import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
<<<<<<< HEAD
import Home from './Pages/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage';
import CarroPage from './Pages/CarroPage';
import PontoTuristicoPage from './Pages/PontoTuristicoPage';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
=======
import Home from './Pages/Home_Voo/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage/HospedagemPage';
import CarroPage from './Pages/Home_Carro/CarroPage';
import PontoTuristicoPage from './Pages/PontosTuristicosPage/PontoTuristicoPage';



>>>>>>> 715413d61af1b346d055e5bcca1986bd43ad80ea

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Hospedagem" element={<HospedagemPage/>}/>
          <Route path="/Carros" element={<CarroPage/>}/>
          <Route path="/PontosTuristicos" element={<PontoTuristicoPage/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

