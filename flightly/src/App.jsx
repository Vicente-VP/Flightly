import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home_Voo/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage/HospedagemPage';
import CarroPage from './Pages/Home_Carro/CarroPage';
import PontoTuristicoPage from './Pages/PontosTuristicosPage/PontoTuristicoPage';
import Cadastro from './Pages/Cadastro/Cadastro';
import Login from './Pages/Login/Login';
import Testes from './Pages/Testes/Testes';
import Perfil from './Pages/Perfil/Perfil';
import PlanosViagem from './Pages/PlanosViagem/PlanosViagem';


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
          <Route path="/Testes" element={<Testes/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>
          <Route path="/PlanosViagem" element={<PlanosViagem/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

