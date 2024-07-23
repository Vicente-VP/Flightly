import NavBar from "../../Componentes/NavBar/NavBar";
import CristoRedentor_Card from '../../Images/CristoRedentor_Card.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import ArcoTriunfo from '../../Images/Cards_Destinos-Recomendados/Arco-do-Triunfo.png';
import Basilio from '../../Images/Cards_Destinos-Recomendados/Basilio.png';
import FontanaDiTrevi from '../../Images/Cards_Destinos-Recomendados/Fontana-di-Trevi.png';
import Westminster from '../../Images/Cards_Destinos-Recomendados/Westminster.png';

import './style_PTuristico.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (

        <main>

            <NavBar />

            {/* ------------------ CARD DE PESQUISA  --------------------- */}

            <div className="pturistico-img-class">
                <img src={CristoRedentor_Card} className="pturistico-img"/>
            </div>

            <div className="card-pturistico">
                <div className="title-pturistico">
                    <label>Pontos</label>
                    <label>Turísticos</label>
                </div>

                <div className="form-cardpturistico">
                    <div className="etiqueta-class">
                        <label className="etiqueta">Local</label>
                    </div>
                    <div className="input-class">
                        <input type="text" className="input" placeholder="Rio de Janeiro"
                            style={{ backgroundImage: `url(${destinoIcon})` }}/>
                    </div>

                    <div className="btn-pesquisar">
                        <button className="btn-submit">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}

            {/* ------------------ DESTINOS MAIS POPULARES  --------------------- */}

            <div className="geral-voo-popular">

                <div className="title-voo-popular">
                    <label>Destinos Mais Populares</label>
                </div>

                <div className="cards-voo-popular">
                    <div className="card-popular">
                        <img src={ArcoTriunfo} className="img-card"/>
                            <span className="viagem-card">Arco do Triunfo</span>
                    </div>
                    <div className="card-popular">
                        <img src={Westminster} className="img-card"/>
                            <span className="viagem-card">P. de Westminster</span>
                    </div>
                    <div className="card-popular">
                        <img src={Basilio} className="img-card"/>
                            <span className="viagem-card">Catedral S. Basílio</span>
                    </div>
                    <div className="card-popular">
                        <img src={FontanaDiTrevi} className="img-card"/>
                            <span className="viagem-card">Fontana di Trevi</span>
                    </div>
                </div>

                <div className="btn-voo-popular">
                    <button className="btn-submit">
                        Ver Mais
                    </button>
                </div>

            </div>

            {/* ------------------ FIM DE DESTINOS MAIS POPULARES  --------------------- */}

        </main>
    )
}