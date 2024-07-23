import NavBar from "../../Componentes/NavBar/NavBar";
import Aviao_Card from '../../Images/Aviao_Card.png';
import Destino_Cards from '../../Images/img_Destino_Cards.png';
import origemIcon from '../../Images/Icones-Cards/origem.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import classeIcon from '../../Images/Icones-Cards/classe.png';

import './style_Voo.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (

        <main>

            <NavBar />

        {/* ------------------ CARD DE PESQUISA  --------------------- */}

                <img src={Aviao_Card} alt="Logo" className="voo-imagem" />

            <div className="card-voo">
                <div className="title-voo">
                    <label>Voos</label>
                </div>

                <div className="grid-imagem"></div>

                <div className="form-cardvoo">
                    <div className="grid-inputs">
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Origem</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="São Paulo"
                                    style={{ backgroundImage: `url(${origemIcon})` }}/>
                            </div>
                        </div>
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Destino</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="Rio de Janeiro"
                                    style={{ backgroundImage: `url(${destinoIcon})` }}/>
                            </div>
                        </div>
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Passageiros</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="1"
                                    style={{ backgroundImage: `url(${passageirosIcon})` }}/>
                            </div>
                        </div>
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Ida</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="21/06/24"
                                    style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                            </div>
                        </div>
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Volta</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="30/06/24"
                                    style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                            </div>
                        </div>
                        <div className="input-form">
                            <div className="etiqueta-class">
                                <label className="etiqueta">Classe</label>
                            </div>
                            <div className="input-class">
                                <input type="text" className="input" placeholder="Executiva"
                                    style={{ backgroundImage: `url(${classeIcon})` }}/>
                            </div>
                        </div>
                    </div>

                    <div className="btn-pesquisar">
                        <button className="btn-submit">
                            Pesquisar
                        </button>
                    </div>
                </div>
            </div>

        {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}
        {/* ------------------ VOOS MAIS POPULARES  --------------------- */}

            <div className="geral-voo-popular">

                <div className="title-voo-popular">
                    <label>Voos Mais Populares</label>
                </div>

                <div className="cards-voo-popular">
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                </div>

                <div className="btn-voo-popular">
                    <button className="btn-submit">
                        Ver Mais
                    </button>
                </div>

            </div>

        {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}
        {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}

            <div className="geral-voo-popular">

                <div className="title-voo-popular">
                    <label>Recomendações Para Você</label>
                </div>

                <div className="cards-voo-popular">
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                    <div className="card-popular">
                        <img src={Destino_Cards} className="img-card"/>
                            <span className="viagem-card">São Paulo - Rio de Janeiro</span>
                            <span className="companhia-card">Latam</span>
                            <span className="data-card">11/07 - 21/07</span>
                            <span className="ida-volta-card">Ida e Volta</span>
                            <span className="preco-card">R$ 450,00</span>
                    </div>
                </div>

                <div className="btn-voo-popular">
                    <button className="btn-submit">
                        Ver Mais
                    </button>
                </div>

            </div>

        {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}

        </main>
    )
}