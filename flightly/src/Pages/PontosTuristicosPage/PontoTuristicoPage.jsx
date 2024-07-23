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

                <div className="form-card-pturistico">
                    <div className="etiqueta-class-pturistico">
                        <label className="etiqueta">Local</label>
                    </div>
                    <div className="input-class-pturistico">
                        <input type="text" className="input-pturistico" placeholder="Rio de Janeiro"
                            style={{ backgroundImage: `url(${destinoIcon})` }}/>
                    </div>

                    <div className="btn-pesquisar-pturistico">
                        <button className="btn-submit-pturistico">
                            Pesquisar
                        </button>
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
                    <div className="card-popular-pturistico">
                        <img src={ArcoTriunfo} className="img-card-pturistico"/>
                            <span className="viagem-card-pturistico">Arco do Triunfo</span>
                    </div>
                    <div className="card-popular-pturistico">
                        <img src={Westminster} className="img-card-pturistico"/>
                            <span className="viagem-card-pturistico">P. de Westminster</span>
                    </div>
                    <div className="card-popular-pturistico">
                        <img src={Basilio} className="img-card-pturistico"/>
                            <span className="viagem-card-pturistico">Catedral S. Basílio</span>
                    </div>
                    <div className="card-popular-pturistico">
                        <img src={FontanaDiTrevi} className="img-card-pturistico"/>
                            <span className="viagem-card-pturistico">Fontana di Trevi</span>
                    </div>
                </div>

                <div className="btn-popular-pturistico">
                    <button className="btn-submit-pturistico">
                        Ver Mais
                    </button>
                </div>

            </div>

            {/* ------------------ FIM DE DESTINOS MAIS POPULARES  --------------------- */}

        </main>
    )
}
