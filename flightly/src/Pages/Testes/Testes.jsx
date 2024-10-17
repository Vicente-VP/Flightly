// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import CardPergunta1 from "../../Componentes/Cards/PerguntaQuest/CardPergunta1";

import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">

                <CardPergunta1 perfil='Aventureiro' local1='Canada' local2='EUA' local3='Egito' local4='Xangai' local5='SBC' local6='Albania' msg='Seu foco é em viagens radicais! O que você acha de uma fazer trilhas ou pular de parequedas? '/>
            
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
