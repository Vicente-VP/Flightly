import './styleFiltrosPontosTuristico.css';
import React, { useState } from 'react';
import Acessibilidade from '../../../Images/FiltroPontoTuristico/accessibility.png';
import Entretenimento from '../../../Images/FiltroPontoTuristico/entretenimento.png';
import seta from '../../../Images/FiltroCarro/icon-seta.png';
import idade from '../../../Images/FiltroPontoTuristico/idade.png';

export default function FiltrosPontosTuristicos() {
    const [price, setPrice] = useState(100);
    const [activeAmbientes, setActiveAmbientes] = useState([]);

    function handlePriceChange(e) {
        const value = e.target.value;
        setPrice(value);
    }

    const toggleAmbiente = (ambiente) => {
        setActiveAmbientes((prev) => 
            prev.includes(ambiente) ? prev.filter(a => a !== ambiente) : [...prev, ambiente]
        );
    };

    return (
        <>
            <div className='container-filtroturistico'>
                <div className='entretenimento'>
                    <label htmlFor="Entretenimento" className='lbl-filtroturistico1'>
                        Entretenimento
                    </label><br />
                    <select name="entretenimento-selec" id="entretenimento-selec" className='entretenimento-selec'
                    placeholder="Nenhuma" style={{backgroundImage: `url(${Entretenimento}), url(${seta})`}}>
                        <option value="nenhum">Nenhum</option>
                        <option value="trilha">Trilha</option>
                        <option value="museu">Museu</option>
                        <option value="monumentos">Monumentos</option>
                        <option value="cultural">Cultural</option>
                        <option value="bares">Bares</option>
                        <option value="festivais">Festivais</option>
                        <option value="restaurantes">Restaurantes</option>
                        <option value="workshops">Workshops</option>
                        <option value="tours">Tours</option>
                        <option value="parques">Parques</option>
                        <option value="spa">Spa</option>
                        <option value="zoo">Zoológico</option>
                        <option value="esportivo">Esporte</option>
                    </select>
                </div>
                <div className='ambiente'>
                    <label htmlFor="Ambiente" className='lbl-filtroturistico2'>
                        Ambiente
                    </label><br />
                    <button 
                        className={`btn-Ambiente rural ${activeAmbientes.includes('Rural') ? 'active' : ''}`} 
                        onClick={() => toggleAmbiente('Rural')}
                    >
                        Rural
                    </button>
                    <button 
                        className={`btn-Ambiente urbano ${activeAmbientes.includes('Urbano') ? 'active' : ''}`} 
                        onClick={() => toggleAmbiente('Urbano')}
                    >
                        Urbano
                    </button>
                    <button 
                        className={`btn-Ambiente praia ${activeAmbientes.includes('Praia') ? 'active' : ''}`} 
                        onClick={() => toggleAmbiente('Praia')}
                    >
                        Praia
                    </button>
                </div>
                <div className='faixaetaria'>
                    <label htmlFor="FaixaEtaria" className='lbl-filtroturistico3'>
                        Faixa Etária
                    </label><br />
                    <select name="faixaetaria-selec" id="faixaetaria-selec" className='faixaetaria-selec'
                    placeholder="Livre" style={{backgroundImage: `url(${idade}), url(${seta})`}}>
                        <option value="livre">Livre</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                    </select>
                </div>
                <div className='preco'>
                    <label htmlFor="Preco" className='lbl-filtroturistico4'>
                        Preço
                    </label>
                    <div className="search-price">
                        <div className="range">
                            <div className="sliderValue">
                                <span id="span" style={{ left: `${price / 10.6}%` }}>
                                    {price}
                                </span>
                            </div>
                            <div className="field">
                                <div className="value left">R$0</div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={price}
                                    steps="1"
                                    id="input"
                                    onChange={handlePriceChange}
                                    onBlur={() => {
                                        document.getElementById("span").classList.remove("show");
                                    }}
                                    onInput={() => {
                                        document.getElementById("span").classList.add("show");
                                    }}
                                />
                                <div className="value right">R$1000+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='acessibilidade'>
                    <label htmlFor="Acessibilidade" className='lbl-filtroturistico5'>
                        Acessibilidade
                    </label><br />
                    <select name="acessibilidade-selec" id="acessibilidade-selec" className='acessibilidade-selec'
                    placeholder="Nenhum" style={{backgroundImage: `url(${Acessibilidade}), url(${seta})` }}>
                        <option value="nenhum">Nenhum</option>
                        <option value="rampas">Rampas de Acesso</option>
                        <option value="transporte">Transporte Adaptado</option>
                        <option value="banheiro">Banheiros Acessíveis</option>
                        <option value="assento">Assentos Adaptados</option>
                        <option value="estacionamento">Estacionamento Acessível</option>
                        <option value="braille">Guias em Braille</option>
                        <option value="libras">Legendas em Libras</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn-pesq-filtroturis">
                        Pesquisar
                    </button>
                </div>
            </div>
        </>
    );
}
