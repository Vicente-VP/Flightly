import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Rec_Hospedagem from "../../Componentes/Cards/Card Rec Hospedagem/cardsRecHospedagem";
import FIltroPT from "../../Componentes/Filtros/Filtro_PontoTuristico/FiltrosPontosTuristico";

import Mala_Card from '../../Images/Mala_Card.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import quartosIcon from '../../Images/Icones-Cards/quartos.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';

//import img_economico from '../../Images/RecomendacaoHospedagem/hp_economico.jpg';

import './style_Hospedagem.css';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div><NavBar/></div>

            <main>
                {/* ------------------ CARD DE PESQUISA  --------------------- */}

                <img src={Mala_Card} className="hospedagem-imagem"/>

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
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Check-out</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="21/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Local</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="Rio de Janeiro"
                                        style={{ backgroundImage: `url(${destinoIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Quartos</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="1"
                                        style={{ backgroundImage: `url(${quartosIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Hóspedes</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="1"
                                        style={{ backgroundImage: `url(${passageirosIcon})` }}/>
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

                <FIltroPT/>
                {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}

                {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}
                <section id="Recommendations_HOSPEDAGENS">
                    <Rec_Hospedagem title="Economico" id="cards_recomendation_hp_ec"/>
                    <Rec_Hospedagem title="Intermediario" id="cards_recomendation_hp_inter"/>
                    <Rec_Hospedagem title="Luxo" id="cards_recomendation_hp_lux"/>
                </section>
                {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
        
    )
}
