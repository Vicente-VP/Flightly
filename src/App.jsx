import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import VooPage from './Pages/Home_Voo/Home_Voo';
import HospedagemPage from './Pages/HospedagemPage/HospedagemPage';
import CarroPage from './Pages/Home_Carro/CarroPage';
import PontoTuristicoPage from './Pages/PontosTuristicosPage/PontoTuristicoPage';
import Cadastro from './Pages/Cadastro/Cadastro';
import Login from './Pages/Login/Login';
import Testes from './Pages/Testes/Testes';
import Perfil from './Pages/Perfil/Perfil';
import PlanosViagem from './Pages/PlanosViagem/PlanosViagem';
import Compra from './Pages/Compra/Compra';
import InformacoesPage from './Pages/InformacoesPage/InformacoesPage';
import Questionario from './Pages/Questionario/QuestionarioPage';
import PlanoEspecifico from './Pages/PlanoViagem_Especifico/PlanoEspecifico';
import HomeGenerica from './Pages/Home_Generica/Home_Generica';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeGenerica/>}/>
          <Route path="/Voo" element={<VooPage/>}/>
          <Route path="/Hospedagem" element={<HospedagemPage/>}/>
          <Route path="/Carros" element={<CarroPage/>}/>
          <Route path="/PontosTuristicos" element={<PontoTuristicoPage/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Testes" element={<Testes/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>
          <Route path="/PlanosViagem" element={<PlanosViagem/>}/>
          <Route path="/Compra" element={<Compra/>}/>
          <Route path="/InformacoesPage" element={<InformacoesPage/>}/>
          <Route path="/Questionario" element={<Questionario/>}/>
          <Route path="/PlanoEspecifico" element={<PlanoEspecifico/>}/>
          <Route path="/PlanoEspecifico" element={<PlanoEspecifico/>}/>
        </Routes>
      </Router>
    </>
  );
}

