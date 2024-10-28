// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import CardInfo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";

import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">

                <CardInfo/>

            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
