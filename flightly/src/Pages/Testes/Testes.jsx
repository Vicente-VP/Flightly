// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import BarraPesquisaCarro from "../../Componentes/BarraPesquisa/PontoTuristico/BarraPesquisaPontoTuristico"

import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>

                <div className="conteudo-testes">               
                 <BarraPesquisaCarro />
                </div>


            <div className="footer-testes"><Footer/></div>
        </>
    )
}
