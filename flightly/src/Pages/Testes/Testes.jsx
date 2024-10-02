// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import CardDestinoPular from "../../Componentes/Cards/CardDestinoPopular/CardDestinoPular";
import RioJaneiro from '../../Images/img_Destino_Cards.png';

import './style_Testes.css';
import React from 'react';

export default function Testes() {
    return (
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">
                <CardDestinoPular imgDestinoPopular={RioJaneiro} nomeDesninoPopular="Rio de Janeiro" />
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
