import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage';
import CarroPage from './Pages/CarroPage';
import PontoTuristicoPage from './Pages/PontoTuristicoPage';



export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Hospedagem" element={<HospedagemPage/>}/>
          <Route path="/Carros" element={<CarroPage/>}/>
          <Route path="/PontosTuristicos" element={<PontoTuristicoPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

