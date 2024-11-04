import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Rec_Hospedagem from "../../Componentes/Cards/Card Rec Hospedagem/cardsRecHospedagem";

import Mala_Card from '../../Images/Mala_Card.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import quartosIcon from '../../Images/Icones-Cards/quartos.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';

import CardDestinoPular from "../../Componentes/Cards/CardDestinoPopular/CardDestinoPular";
import RioJaneiro from '../../Images/img_Destino_Cards.png';
import Brasilia from '../../Images/img_Brasilia.png';
import Bahia from '../../Images/img_Bahia.png';
import SantaCatarina from '../../Images/img_SantaCatarina.png';

//import img_economico from '../../Images/RecomendacaoHospedagem/hp_economico.jpg';

import './style_Hospedagem.css';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div><NavBar /></div>

            <main>
                {/* ------------------ CARD DE PESQUISA  --------------------- */}

                <img src={Mala_Card} className="hospedagem-imagem" />

                <div className="card-hospedagem">
                    <div className="title-hospedagem">
                        <label>Hospedagem</label>
                    </div>

                    <div className="form-card-hospedagem">
                        <div className="grid-inputs-hospedagem">
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Check-in</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="21/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Check-out</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="21/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Local</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="Rio de Janeiro"
                                        style={{ backgroundImage: `url(${destinoIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Quartos</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="1"
                                        style={{ backgroundImage: `url(${quartosIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Hóspedes</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="1"
                                        style={{ backgroundImage: `url(${passageirosIcon})` }} />
                                </div>
                            </div>
                            <div className="btn-pesquisar-hospedagem">
                                <button className="btn-submit-hospedagem">
                                    Pesquisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}
                {/* ------------------ VOOS MAIS POPULARES  --------------------- */}

                <div className="destinos-populares-hospedagem">
                    <span className="titulo-populares-hospedagem">Destinos mais Populares</span>
                    <div className="destinos-populares-cards">
                        <CardDestinoPular imgDestinoPopular={RioJaneiro} nomeDesninoPopular="Rio de Janeiro" />
                        <CardDestinoPular imgDestinoPopular={Brasilia} nomeDesninoPopular="Brasília" />
                        <CardDestinoPular imgDestinoPopular={Bahia} nomeDesninoPopular="Bahia" />
                        <CardDestinoPular imgDestinoPopular={SantaCatarina} nomeDesninoPopular="Santa Catarina" />
                    </div>
                    <button className="btn-verMais-hospedagem">Ver Mais</button>
                </div>

                {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}

                {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}
                <div className="recomendacoesOrcamento-hospedagem">
                    <span className="titulo-recomendacoes-hospedagem">Hospedagens para o seu orçamento</span>
                    <div className="recommendations-HOSPEDAGENS-cards">
                         
                        <Rec_Hospedagem title="Economico" id="hosp-eco" />
                        <Rec_Hospedagem title="Intermediario" id="hosp-inter" />
                        <Rec_Hospedagem title="Luxo" id="hosp-lux" />
                    </div>
                    <button className="btn-verMais-hospedagem">Ver Mais</button>
                </div>
                {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>

    )
}
