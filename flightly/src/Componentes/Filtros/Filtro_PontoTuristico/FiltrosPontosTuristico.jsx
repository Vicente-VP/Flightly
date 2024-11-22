import './styleFiltrosPontosTuristico.css';
import React, { useState } from 'react';
import Acessibilidade from '../../../Images/FiltroPontoTuristico/accessibility.png';
import Entretenimento from '../../../Images/FiltroPontoTuristico/entretenimento.png';
import seta from '../../../Images/FiltroCarro/icon-seta.png';
import idade from '../../../Images/FiltroPontoTuristico/idade.png';

export default function FiltrosPontosTuristicos() {
    const [pricePt, setPricePt] = useState(100);
    const [activeAmbientes, setActiveAmbientes] = useState([]);

    const handleChangePricePt = (event) => {
        const newValue = event.target.value;
        setPricePt(newValue);
    
        // Calcula o percentual de preenchimento do slider
        const per = ((newValue - 1500) / (29350 - 1500)) * 100;
        event.target.style.setProperty('--progress', `${per}%`);
    };

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
                <div className='preco-pt'>
                    <label htmlFor="Preco" className='lbl-filtroturistico4'>
                        Preço
                    </label>
                    <div className="search-pricePt">
                        <div className='values-pricePt'>
                            <label className='valor-pt'>R$0</label>
                            <label className='valor-pt'>R${Number(pricePt).toLocaleString('pt-BR')}</label>
                        </div>
                        <div className='slider-pt'>
                            <input type="range" min="0" max="1000" value={pricePt}
                            onChange={handleChangePricePt}
                            style={{
                                '--progress': `${((pricePt - 0) / (1000 - 0)) * 100}%`
                            }}/>
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
