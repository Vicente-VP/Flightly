import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import BarraPesquisaInfoVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";
import FiltroInfoVoo from "../../Componentes/Filtros/Filtros_Hospedagem/FiltrosHospedagem";
import CardInfoVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";

import './styleInformacoesPage.css';
import React from 'react';

export default function InformacoesPage() {
    return (
        <>
            <div style={{height: 75+'px'}}><NavBar/></div>
            
            <div className="container-informacoes">
                <div className="barra-pesquisa-infoPage">
                    <span className="titulo-infoPage">Encontre voos e adicione aos seus planos de viagem</span>
                    <BarraPesquisaInfoVoo/>
                </div>
                <div className="filtro-infoPage"><FiltroInfoVoo/></div>
                <div className="container-cards-infoPage">
                    <CardInfoVoo/>
                    <CardInfoVoo/>
                    <CardInfoVoo/>
                </div>
            </div>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}
