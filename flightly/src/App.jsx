import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage';
import CarroPage from './Pages/CarroPage';
import PontoTuristicoPage from './Pages/PontoTuristicoPage';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';

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

