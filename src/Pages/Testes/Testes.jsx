// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Teste from '../../Componentes/Card_Informacoes/Carros/CardInfoCarros';



import './style_Testes.css';
import React from 'react';
import PesquisaCarro from "../../Componentes/BarraPesquisa/Carro/BarraPesquisaCarro";
import PesquisaVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";
//import CardInfoVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>

                <div className="conteudo-testes">  
                    <PesquisaCarro/><br/    >
                    <PesquisaVoo/>
                </div>
                
        </>
    )
}
