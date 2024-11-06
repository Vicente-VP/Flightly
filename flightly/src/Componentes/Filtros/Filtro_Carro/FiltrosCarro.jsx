import './styleFiltrosCarros.css';
import React, { useState } from "react";

import foco from '../../../Images/FiltroCarro/foco-logo.png';
import movida from '../../../Images/FiltroCarro/movida-logo.png';
import localiza from '../../../Images/FiltroCarro/localiza-logo.png';
import spec from '../../../Images/FiltroCarro/spec-image.png';
import seta from '../../../Images/FiltroCarro/icon-seta.png';

export default function FiltrosCarros() {
    const [price, setPrice] = useState(100);
    const [selectedCompanies, setSelectedCompanies] = useState({
        movida: false,
        localiza: false,
        foco: false
    });

    function handlePriceChange(e) {
        const value = e.target.value;
        setPrice(value);
    }

    function updatePeople(p) {
        const peopleInput = document.querySelector('#people_capacity');
        let currentValue = parseInt(peopleInput.value);
    
        if (isNaN(currentValue)) currentValue = 1;
    
        const newValue = Math.min(Math.max(currentValue + p, 1), 5);
        peopleInput.value = newValue;
    }

    function updateBag(b) {
        const bagInput = document.querySelector('#bag_capacity');
        let currentValue = parseInt(bagInput.value);
    
        if (isNaN(currentValue)) currentValue = 1;
    
        const newValue = Math.min(Math.max(currentValue + b, 1), 9);
        bagInput.value = newValue;
    }

    function toggleCompany(company) {
        setSelectedCompanies(prevState => ({
            ...prevState,
            [company]: !prevState[company]
        }));
    }

    return (
        <>
            <div className="container-filtrocar">
                <div className='capacidade'>
                    <label htmlFor="CapacidadeCarro" className="lbl-filtrocar1">
                        Capacidade
                    </label><br />
                    <label htmlFor="people" className="label-people">Pessoas</label><br/>
                    <button onClick={() => updatePeople(-1)} className='btn-capacidade-esq'>-</button> 
                    <input type="number" className='input-capacidade' id="people_capacity" min="1" max="5" defaultValue={0} />
                    <button onClick={() => updatePeople(1)} className='btn-capacidade-dir'>+</button><br /><br />
                    <label htmlFor="bag" className="label-bag">Malas</label><br />
                    <button onClick={() => updateBag(-1)} className='btn-capacidade-esq'>-</button>
                    <input type="number" className='input-capacidade' id="bag_capacity" min="1" max="9" defaultValue={0} />
                    <button onClick={() => updateBag(1)} className='btn-capacidade-dir'>+</button>
                </div>

                <div className='especificacao'>
                    <label htmlFor="Especificacao" className="lbl-filtrocar2">
                        Especificações
                    </label><br />
                    <select 
                        name="Especificacao" 
                        className='select-filtrocar-especificacao' 
                        placeholder="Nenhuma" 
                        id="especificacao-select"
                        style={{ backgroundImage: `url(${spec}), url(${seta})` }}
                    >
                        <option value="Nenhum">Nenhuma</option>
                        <option value="off-road">Off-Road</option>
                        <option value="esportivo">Esportivo</option>
                        <option value="familia">Família</option>
                        <option value="4x4">4x4</option>
                    </select>
                </div>
                
                <div className='preco'>
                    <label className="lbl-filtrocar4">Preço</label>
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

                <div className='companhias'>
                    <label htmlFor="Companhias" className="lbl-filtrocar3">
                        Locadoras
                    </label>
                    <div className="btn-companias">
                        <button 
                            onClick={() => toggleCompany("movida")}
                            className={`button-companies-movida ${selectedCompanies.movida ? "active" : ""}`}
                            style={{ backgroundImage: `url(${movida})` }}
                        >
                            Movida
                        </button>
                        <button 
                            onClick={() => toggleCompany("localiza")}
                            className={`button-companies-localiza ${selectedCompanies.localiza ? "active" : ""}`}
                            style={{ backgroundImage: `url(${localiza})` }}
                        >
                            Localiza
                        </button>
                        <button 
                            onClick={() => toggleCompany("foco")}
                            className={`button-companies-foco ${selectedCompanies.foco ? "active" : ""}`}
                            style={{ backgroundImage: `url(${foco})` }}
                        >
                            Foco
                        </button>
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn-pesq-filtrocar">
                        Pesquisar
                    </button>
                </div>
            </div>
        </>
    );
}
