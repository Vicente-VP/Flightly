// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import './style_Testes.css';
import React from 'react';
import CompraDados from "../../Componentes/Compra/Detalhes/CompraDados";
import CompraFormaPag from "../../Componentes/Compra/Detalhes/CompraFormaPag";

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">

            <CompraDados/>

            </div>
            
            <div className="footer-testes"><Footer/></div>
        </>
    )
}
