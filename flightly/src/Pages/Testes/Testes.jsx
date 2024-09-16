// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import FiltroPlano from "../../Componentes/Filtros/Filtro_Planos/FiltroPlano";

import './style_Testes.css';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">
                <FiltroPlano/>
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
