// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";



import './style_Testes.css';
import React from 'react';
import FiltroVoo from "../../Componentes/Filtros/FiltroVoo/FiltroVoo";
import PesquisaVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>

                <div className="conteudo-testes">               
                 <PesquisaVoo/>
                 
                 
                </div>


            <div className="footer-testes"><Footer/></div>
        </>
    )
}
