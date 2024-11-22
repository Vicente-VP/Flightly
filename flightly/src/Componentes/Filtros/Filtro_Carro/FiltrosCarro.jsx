import './styleFiltrosCarros.css';
import React, { useState } from "react";

import foco from '../../../Images/FiltroCarro/foco-logo.png';
import movida from '../../../Images/FiltroCarro/movida-logo.png';
import localiza from '../../../Images/FiltroCarro/localiza-logo.png';
import spec from '../../../Images/FiltroCarro/spec-image.png';
import seta from '../../../Images/FiltroCarro/icon-seta.png';

export default function FiltrosCarros() {
    const [priceCar, setPriceCar] = useState(100);
    const [selectedCompanies, setSelectedCompanies] = useState({
        movida: false,
        localiza: false,
        foco: false
    });

    const handleChangePriceCar = (event) => {
        const newValue = event.target.value;
        setPriceCar(newValue);
    
        // Calcula o percentual de preenchimento do slider
        const porcento = ((newValue - 100) / (500 - 100)) * 100;
        event.target.style.setProperty('--progress', `${porcento}%`);
    };

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
                    <input type="number" className='input-capacidade' id="people_capacity" min="1" max="5" defaultValue={1} />
                    <button onClick={() => updatePeople(1)} className='btn-capacidade-dir'>+</button><br /><br />
                    <label htmlFor="bag" className="label-bag">Malas</label><br />
                    <button onClick={() => updateBag(-1)} className='btn-capacidade-esq'>-</button>
                    <input type="number" className='input-capacidade' id="bag_capacity" min="1" max="9" defaultValue={1} />
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
                
                <div className='preco-car'>
                    <label className="lbl-filtrocar4">
                        Preço
                    </label>
                    <div className="search-priceCar">
                        <div className='values-priceCar'>
                            <label className='valor-car'>R$100</label>
                            <label className='valor-car'>R${Number(priceCar).toLocaleString('pt-BR')}</label>
                        </div>
                        <div className='slider-car'>
                            <input type="range" min="100" max="500" value={priceCar}
                            onChange={handleChangePriceCar}
                            style={{
                                '--progress': `${((priceCar - 100) / (500 - 100)) * 100}%`
                            }}/>
                        </div>
                    </div>
                </div>

                <div className='locadoras'>
                    <label htmlFor="locadoras" className="lbl-filtrocar3">
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
