// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import Compra from "../../Componentes/Compra/Detalhes/CompraHosp";

import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>

                <div className="conteudo-testes">               
                    <Compra/>
                </div>


            <div className="footer-testes"><Footer/></div>
        </>
    )
}
