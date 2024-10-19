import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer"


import Aviao_Card from '../../Images/Aviao_Card.png';
import Destino_Cards from '../../Images/img_Destino_Cards.png';
import origemIcon from '../../Images/Icones-Cards/origem.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import classeIcon from '../../Images/Icones-Cards/classe.png';
import menos from '../../Images/sinalMenos.png';
import mais from '../../Images/sinalMais.png';

import { useState, useRef, useEffect } from 'react';

import './style_Voo.css';

import VooPopular from "../../Componentes/Cards/CadVooPopular/CardVooPopular";

export default function Home() {
    const [isActive, setIsActive] = useState(false);

    const [nAdult, setNAdult] = useState(1);
    const [criancaIdade, setCriancaIdade] = useState(0);
    const [criancaAssento, setCriancaAssento] = useState(0);
    const [criancaColo, setCriancaColo] = useState(0);
    const [totalPas, setTotalPas] = useState(1);

    const dropdownRef = useRef(null);

    const calcTotal = () =>{
        const total = nAdult + criancaAssento + criancaColo + criancaIdade;
        setTotalPas(total)
    }

    const handleClickInside = (event) => {
        event.stopPropagation();
      };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
        calcTotal(); // Atualiza o total quando fecha o dropdown
      }
    };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [nAdult, criancaAssento, criancaColo, criancaIdade]);

    const increment = (value, setter) =>{
        if ( value < 9) setter(value + 1);
    }

    const decrement = (value, setter, min=0) =>{
        if ( value > min) setter(value - 1);
    }

    return (
        <>
            <div><NavBar/></div>
            
            <main>
            {/* ------------------ CARD DE PESQUISA  --------------------- */}


                <div className="card-voo">
                    <div className="title-voo">
                        <label>Voos</label>
                    </div>
                <img src={Aviao_Card} alt="Logo" className="voo-imagem" />

                    <div className="grid-imagem-voo"></div>

                    <div className="form-card-voo" >
                        <div className="grid-inputs-voo">
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Origem</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="São Paulo"
                                        style={{ backgroundImage: `url(${origemIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Destino</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="Rio de Janeiro"
                                        style={{ backgroundImage: `url(${destinoIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Passageiros</label>
                                </div>
                                <div className="dropdown" >
                                    <div className="dropdown-btn" onClick={e=>setIsActive(!isActive)} ref={dropdownRef}><img src={passageirosIcon} alt="Passageiros"/>{totalPas}</div>
                                    {isActive &&(
                                        <div className="dropdown-content" onMouseDown={handleClickInside}>
                                            <div className="dropdown-item">
                                                <label className='title-label'>Adultos</label>
                                                <div id='value'>
                                                    <div className='btn-add' onClick={() => decrement(nAdult, setNAdult, 1)}><img src={menos} alt="Remover"/></div>
                                                    <span>{nAdult}</span>
                                                    <div className='btn-add' onClick={() => increment(nAdult, setNAdult)}><img src={mais} alt="Adicionar"/></div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div>
                                                    <label className='title-label'>Crianças de</label>
                                                    <label className='sub-title'>2 a 11 anos</label>
                                                </div>
                                                <div id='value'>
                                                    <div className='btn-add' onClick={() => decrement(criancaIdade, setCriancaIdade)}><img src={menos} alt="Remover"/></div>
                                                    <span>{criancaIdade}</span>
                                                    <div className='btn-add' onClick={() => increment(criancaIdade, setCriancaIdade)}><img src={mais} alt="Adicionar"/></div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div>
                                                    <label className='title-label'>Crianças</label>
                                                    <label className='sub-title'>no assento</label>
                                                </div>
                                                <div id='value'>
                                                    <div className='btn-add' onClick={() => decrement(criancaAssento, setCriancaAssento)}><img src={menos} alt="Remover"/></div>
                                                    <span>{criancaAssento}</span>
                                                    <div className='btn-add' onClick={() => increment(criancaAssento, setCriancaAssento)}><img src={mais} alt="Adicionar"/></div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div>
                                                    <label className='title-label'>Crianças</label>
                                                    <label className='sub-title'>de colo</label>
                                                </div>
                                                <div id='value'>
                                                    <div className='btn-add' onClick={() => decrement(criancaColo, setCriancaColo)}><img src={menos} alt="Remover"/></div>
                                                    <span>{criancaColo}</span>
                                                    <div className='btn-add' onClick={() => increment(criancaColo, setCriancaColo)}><img src={mais} alt="Adicionar"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Ida</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="21/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Volta</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="30/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Classe</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="Executiva"
                                        style={{ backgroundImage: `url(${classeIcon})` }}/>
                                </div>
                            </div>
                        </div>

                        <div className="btn-pesquisar-voo">
                            <button className="btn-submit-voo">
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
                        
                        <VooPopular  imgDestino = {Destino_Cards} destino = "Salvador - São Paulo" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Rio de Janeiro - Amazonas" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Piauí - Minas Gerais" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Florianópolis - Acre" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>
                        
                        
                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
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
                        
                        <VooPopular  imgDestino = {Destino_Cards} destino = "Salvador - São Paulo" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Rio de Janeiro - Amazonas" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Piauí - Minas Gerais" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Florianópolis - Acre" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
                            Ver Mais
                        </button>
                    </div>

                </div>

            {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}
