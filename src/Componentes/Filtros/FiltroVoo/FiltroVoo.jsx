import React, { useState, useEffect, useRef } from 'react';

import Azul_logo from '../../../Images/Filtros/azul_logo.png';
import Gol_logo from '../../../Images/Filtros/gol_logo.png';
import Latam_logo from '../../../Images/Filtros/latam_logo.png';
import Escala_icon from '../../../Images/Filtros/escala_icon.png';
import FiltroRes from '../../../Images/Filtros/filtroRes.png';

import './styleFiltroVoo.css';

export default function FiltroVoo(props){
    const [toggleStates, setToggleStates] = useState({
        promocao: false,
        verao: false,
        inverno: false,
        outono: false,
        primavera: false,
        gol: false,
        latam: false,
        azul: false
    });

    const [precoVoo, setPrecoVoo] = useState(10000)
    const [partidaVoo, setPartidaVoo] = useState(23)

    const handleChangePriceVoo = (event) => {
        const newValue = event.target.value;
        setPrecoVoo(newValue);

        // Calcula o percentual de preenchimento do slider
        const percentage = ((newValue - 1500) / (29350 - 1500)) * 100;
        event.target.style.setProperty('--progress', `${percentage}%`);
    };

    const handleChangePartidaVoo = (event) => {
        const newValor = event.target.value;
        setPartidaVoo(newValor);

        // Calcula o percentual de preenchimento do slider
        const percentagem = ((newValor - 0) / (23 - 0)) * 100;
        event.target.style.setProperty('--progress', `${percentagem}%`);
    };
  
    const formatHora = (valor) => valor.toString().padStart(2, '0');

    const handleToggle = (key) => {
        if (['promocao', 'verao', 'inverno', 'outono', 'primavera',].includes(key)) {
            alert(`desativada!`);
        }
        setToggleStates(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const Filtrar = () => {
        const companies = Object.keys(toggleStates).filter(key => toggleStates[key]);
        
        window.location.href = `/InformacoesPage?requestType=filteredflight&companies=${companies.join(',')}&price=${precoVoo}&partida=${partidaVoo}:00&travel_type=${props.travelType}&origem=${props.origem}&destino=${props.destino}&ida=${props.ida}&volta=${props.volta}&adultos=${props.adultos}&criancaIdade=${props.criancaIdade}&criancaColo=${props.criancaColo}&criancaAssento=${props.criancaAssento}&classe=${props.classe}&url=${props.externalUrl}`;
    }

    const [isResponsive, setIsResponsive] = useState(false);
    const [sF, setSF] = useState(false);

    const showFiltro = () => {
        setIsResponsive(!isResponsive);
        setSF(true);
    }
    return (
        <div className='container-FiltroVoo'>
            <div  id="filtro" onClick={() => showFiltro()}>
                <img src={FiltroRes} alt="Filtro" /> 
                <span>Filtros</span>
            </div>
            <div className={`container-all-filter ${isResponsive ? "active" : ""}`} >
                <div className="section-filters">
                    <div className="promotion"> 
                        <span>Promoção</span>
                        <button
                            onClick={() => handleToggle('promocao')}
                            className={`btnTogglePromocao ${toggleStates.promocao ? 'active' : ''}`}
                        >
                            Promoção
                        </button>
                    </div>
                    <div className="seasons" >
                        <span>Estações</span>
                        <div className="button-seasons" >
                            <button
                                onClick={() => handleToggle('verao')}
                                className={`set-buttons verao ${toggleStates.verao ? 'active' : ''}`}
                            >
                                Verão
                            </button>
                            <button
                                onClick={() => handleToggle('inverno')}
                                className={`set-buttons inverno ${toggleStates.inverno ? 'active' : ''}`}
                                >
                                Inverno
                            </button>
                            <button
                                onClick={() => handleToggle('outono')}
                                className={`set-buttons outono ${toggleStates.outono ? 'active' : ''}`}
                                >
                                Outono
                            </button>
                            <button
                                onClick={() => handleToggle('primavera')}
                                className={`primavera ${toggleStates.primavera ? 'active' : ''}`}
                                >
                                Primavera
                            </button>
                        </div>
                    </div>
                    <div className="scales">
                        <span>Escalas</span>
                        <div className="custom-select">
                            <select name="scales" className="scales-select" style={{ backgroundImage: `url(${Escala_icon})` }}>
                                <option>Nenhuma</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3 ou mais</option>
                            </select>
                        </div>
                    </div>
                    <div className="price-voo">
                        <div className="preco-voo">
                            <span>Preço</span>
                            <div className='values-priceVoo'>
                                <label className='valor'>R$ 0</label>
                                <label className='valor'>R$ {Number(precoVoo).toLocaleString('pt-BR')}</label>
                            </div>
                            <div className='slider-voo'>
                                <input type="range" min="1500" max="29350" value={precoVoo}
                                onChange={handleChangePriceVoo}
                                style={{
                                    '--progress': `${((precoVoo - 1500) / (29350 - 1500)) * 100}%`
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="partida-voo">
                        <span>Partida</span>
                        <div className='values-partidaVoo'>
                                <label className='hora'>00:00</label>
                                <label className='hora'>{formatHora(partidaVoo)}:00</label>
                            </div>
                            <div className='slider-partida'>
                                <input type="range" min="0" max="23" value={partidaVoo}
                                onChange={handleChangePartidaVoo}
                                style={{
                                    '--progress': `${((partidaVoo - 0) / (23 - 0)) * 100}%`
                                }}/>
                            </div>
                    </div>
                    <div className="companies">
                        <span>Companhias</span>
                        <div>
                            <button
                                onClick={() => handleToggle('Gol')}
                                className={`button-companies-gol ${toggleStates.Gol ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${Gol_logo})` }}
                            >
                                Gol
                            </button>
                            <button
                                onClick={() => handleToggle('LATAM')}
                                className={`button-companies-latam ${toggleStates.LATAM ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${Latam_logo})` }}
                                >
                                Latam
                            </button>
                            <button
                                onClick={() => handleToggle('Azul')}
                                className={`button-companies-azul ${toggleStates.Azul ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${Azul_logo})` }}
                                >
                                Azul
                            </button>
                        </div>
                    </div>
                </div>
                <div className="btn-filtro-voo">
                    <button className="btn-filt-voo" onClick={Filtrar}>Pesquisar</button>
                </div>
            </div>
    </div>
    );
}