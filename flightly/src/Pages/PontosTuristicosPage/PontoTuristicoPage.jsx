import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer"


import CristoRedentor_Card from '../../Images/CristoRedentor_Card.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import ArcoTriunfo from '../../Images/Cards_Destinos-Recomendados/Arco-do-Triunfo.png';
import Basilio from '../../Images/Cards_Destinos-Recomendados/Basilio.png';
import FontanaDiTrevi from '../../Images/Cards_Destinos-Recomendados/Fontana-di-Trevi.png';
import Westminster from '../../Images/Cards_Destinos-Recomendados/Westminster.png';


import './style_PTuristico.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopularTuristico from "../../Componentes/Cards/CardPopularTuristico/CardPopularTuristico";

export default function Home() {
    return (
    <>
        <div><NavBar/></div>

        <main>

            {/* ------------------ CARD DE PESQUISA  --------------------- */}

            <div className="pturistico-img-class">
                <img src={CristoRedentor_Card} className="pturistico-img"/>
            </div>

            <div className="card-pturistico">
                <div className="title-pturistico">
                    <label>Pontos</label>
                    <label>Turísticos</label>
                </div>
                <div className="title-pturistico-cel">
                    <label>Pontos Turísticos</label>
                </div>

                <div className="form-card-pturistico">
                    <div className="etiqueta-class-pturistico">
                        <label className="etiqueta">Local</label>
                    </div>
                    <div className="input-class-pturistico">
                        <input type="text" className="input-pturistico" placeholder="Ex: Rio de Janeiro"
                            style={{ backgroundImage: `url(${destinoIcon})` }}/>
                    </div>

                    <div className="btn-pesquisar-pturistico">
                        <button className="btn-submit-pturistico">Pesquisar</button>
                    </div>
                </div>
            </div>

            {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}

            {/* ------------------ DESTINOS MAIS POPULARES  --------------------- */}

            <div className="geral-popular-pturistico">

                <div className="title-popular-pturistico">
                    <label>Destinos Mais Populares</label>
                </div>

                <div className="cards-popular-pturistico">
                    
                    <PopularTuristico imgDestino= {ArcoTriunfo} legenda = "Arco do Triunfo"/>
                    <PopularTuristico imgDestino= {Basilio} legenda = "Catedral S. Basilio"/>
                    <PopularTuristico imgDestino= {FontanaDiTrevi} legenda = "Fontana Di Trevi"/>
                    <PopularTuristico imgDestino= {Westminster} legenda = "P. Westminster"/>
                    
                </div>

                <div className="btn-popular-pturistico">
                    <button className="btn-submit-pturistico">Ver Mais</button>
                </div>

            </div>

            {/* ------------------ FIM DE DESTINOS MAIS POPULARES  --------------------- */}

        </main>
        <div style={{height: 250+'px'}}><Footer/></div>
    </>
    )
}
