// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Teste from '../../Componentes/Card_Informacoes/Carros/CardInfoCarros';



import './style_Testes.css';
import React from 'react';
import Filtro from "../../Componentes/Filtros/Filtros_Hospedagem/FiltrosHospedagem";


export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>

                <div className="conteudo-testes"> 
                    <Filtro/> 
                </div>
                
        </>
    )
}
