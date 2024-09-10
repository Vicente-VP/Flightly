// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import CardInfoPTutisticos from "../../Componentes/Card_Informacoes/PontosTuristicos/CardInfoPTuristicos";

import './style_Testes.css';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">
                <CardInfoPTutisticos/>
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
