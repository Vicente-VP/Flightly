import './styleFiltrosPontosTuristico.css';
import React, { useState } from 'react';
import Acessibilidade from '../../../Images/FiltroPontoTuristico/accessibility.png';
import Entretenimento from '../../../Images/FiltroPontoTuristico/entretenimento.png';
import seta from'../../../Images/FiltroCarro/icon-seta.png';


export default function FiltrosPontosTuristicos(){

    const [price, setPrice] = useState(100);

    function handlePriceChange(e){
        const value = e.target.value;
        setPrice(value);
    }

    return(
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
                        <option value="cultaral">Cultural</option>
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
                    <input type="checkbox" name="Rural" id="Rural" className='checkRural'/> 
                    <label htmlFor="Rural" className='lbl-checkRural'>Rural</label> <br />
                    <input type="checkbox" name="Urbano" id="Urbano" className='checkUrbano'/>
                    <label htmlFor="Urbano" className='lbl-checkUrbano'>Urbano</label>
                </div>
                <div className='faixaetaria'>
                    <label htmlFor="FaixaEtaria" className='lbl-filtroturistico3'>
                        Faixa Etária
                    </label><br />
                    <input type="checkbox" name="Livre" id="livre" />
                    <label htmlFor="Livre" className='lbl-checkLivre'>Livre</label> <br />
                    <input type="checkbox" name="10" id="10" />
                    <label htmlFor="Dez" className='lbl-check10'>10</label> <br />
                    <input type="checkbox" name="12" id="12" />
                    <label htmlFor="doze" className='lbl-check12'>12</label> <br /> 
                    <input type="checkbox" name="14" id="14" />
                    <label htmlFor="14" className='lbl-check14'>14</label> <br />
                    <input type="checkbox" name="16" id="16" />
                    <label htmlFor="16" className='lbl-check16'>16</label> <br />
                    <input type="checkbox" name="18" id="18" />
                    <label htmlFor="18" className='lbl-check18'>18</label>
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
                        <option value="banheiro"> Banheiros Acessíveis</option>
                        <option value="assento">Assentos Adaptados</option>
                        <option value="estacionamento">Estacionamento Acessível</option>
                        <option value="braille">Guias em Braille</option>
                        <option value="libras">Legendas em Libras</option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn-pesq-filtroturis">
                    Pesquisar
                    </button>
                </div>
            </div>


        </>
    )
}