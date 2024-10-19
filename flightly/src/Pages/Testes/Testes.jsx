// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Drop from "../../Componentes/DropInput/drop";
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';


import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">
                <Drop imagem={passageirosIcon} widthDrop="201px" topContent="18%" />
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
