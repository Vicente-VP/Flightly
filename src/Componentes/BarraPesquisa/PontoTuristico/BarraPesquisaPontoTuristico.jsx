import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import avaliacao_icon from '../../../Images/Barra_Pesquisa/avaliacao_icon.png';
import categoria_icon from '../../../Images/Barra_Pesquisa/categoria_icon.png';
import seta_baixo_icon from '../../../Images/Barra_Pesquisa/seta-baixo-pesquisa.png';

import React, { useState } from 'react';

import './styleBarraPesquisaPontoTuristico.css'

export default function PesquisaPontoTuristico(){
    const [price, setPrice] = useState(100);

  function handlePriceChange(e) {
    const value = e.target.value;
    setPrice(value);
  }
    return(
        <>
            <div className="container-search">
                <div className="search-local">
                    <div>
                        <span>Local</span>
                        <input type="text" placeholder="São Paulo" className="origem" style={{ backgroundImage: `url(${destino_icon})` }}/>
                    </div>
                </div>
                <div className="search-price">
                        <span>Preço</span>
                        <div className="range">
                            <div className="sliderValue">
                                <span id="span" style={{left: `${price / 10.6}%`,}}>{price}</span>
                            </div>
                            <div className="field">
                                <div className="value left">R$0</div>
                                <input type="range" min="0" max="1000" value={price} steps="1" id="input" onChange={handlePriceChange} 
                                onBlur={() => 
                                    { 
                                        document.getElementById('span').classList.remove('show');
                                    }} 
                                onInput={() => 
                                    {
                                        document.getElementById('span').classList.add('show');
                                    }}/>
                                <div className="value right">R$1000+</div>
                            </div>
                        </div>
                </div>
                <div className="search-avaliation">
                    <span>Avaliação <img src={seta_baixo_icon} alt="Seta para baixo" className='seta'/></span>

                    <select className="avaliation" style={{ backgroundImage: `url(${avaliacao_icon})` }}>
                        <option value="5" >5</option>
                        <option value="4" >4</option>
                        <option value="3" >3</option>
                        <option value="2" >2</option>
                        <option value="1" >1</option>
                    </select>

                </div>
                <div className="search-category">
                    <span>Categoria <img src={seta_baixo_icon} alt="Seta para baixo" className='seta'/></span>
                    <select className="category" style={{ backgroundImage: `url(${categoria_icon})` }}>
                        <option value="exposicao">Exposições</option>
                        <option value="parque">Parques</option>
                        <option value="trilha">Trilhas</option>
                        <option value="praia">Praias</option>
                        <option value="areaHistorica">Áreas Históricas</option>
                    </select>
                </div>
                <div className="btn-pesquisar-pturistico">
                    <button className="btn-submit-pturistico">Pesquisar</button>
                </div>
            </div>
        </>
    );
}