import Azul_logo from '../../../Images/Filtros/azul_logo.png';
import Gol_logo from '../../../Images/Filtros/gol_logo.png';
import Latam_logo from '../../../Images/Filtros/latam_logo.png';
import Escala_icon from '../../../Images/Filtros/escala_icon.png';

import React, { useState, useEffect, useRef } from 'react';

import './styleFiltroVoo.css';

export default function FiltroVoo(){
    const [price, setPrice] = useState(0);
    const [hours, setHours] = useState(0);
    const priceRef = useRef(null);
    const hoursRef = useRef(null);

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };


    const handleHourChange = (e) => {
        setHours(e.target.value);
    };

    useEffect(() =>{
        const slideValue = priceRef.current;
        const updatePriceSlider = () =>{
            let value = price;
            slideValue.textContent = value;
            slideValue.style.left = (value / 155.6) + "%";
            slideValue.classList.add("show");
        };

        const removePriceSlider = () =>{
            slideValue.classList.remove("show");
        };

        updatePriceSlider();

        const inputSlider = document.getElementById("input");
        inputSlider.addEventListener('blur', removePriceSlider);

        return () => {
            inputSlider.removeEventListener('blur', removePriceSlider);
        };
    }, [price]); 


    useEffect(() => {
        const valueSlide = hoursRef.current;
        const updateDepartureSlider = () => {
            let value = hours;
            valueSlide.textContent = value;
            valueSlide.style.left = (value / 0.35) + "%";
            valueSlide.classList.add("show");
        };

        const removeDepartureSlider = () => {
            valueSlide.classList.remove("show");
        };

        updateDepartureSlider();

        const sliderInput = document.getElementById("horas");
        sliderInput.addEventListener('blur', removeDepartureSlider);

        return () => {
            sliderInput.removeEventListener('blur', removeDepartureSlider);
        };
    }, [hours]);

    return(
        <>
            <div className="container-all-filter">
                <div className="section-filters">
                    <div className="promotion">
                        <span>Promoção</span>
                        <button>Promoção</button>
                    </div>
                    <div className="seasons">
                        <span>Estações</span>
                        <div className="button-seasons">
                            <button className="set-buttons verao">Verão</button>
                            <button className="set-buttons inverno">Inverno</button>
                            <button className="set-buttons outono">Outono</button>
                            <button className="primavera">Primavera</button>
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
                    <div className="price">
                        <span>Preço</span>
                        <div className="range">
                            <div className="sliderValue">
                                <span id="span" ref={priceRef}>{price}</span>
                            </div>
                            <div className="field">
                                <div className="value left">R$50</div>
                                <input type="range" min="0" max="10000" value={price} steps="1" id="input" onChange={handlePriceChange}/>
                                <div className="value right">R$10 000+</div>
                            </div>
                        </div>
                    </div>
                    <div className="duration">
                        <span>Partida</span>
                        <div className="variety">
                            <div className="valueSlider">
                                <span id="valor"  ref={hoursRef}>{hours}</span>
                            </div>
                            <div className="campo">
                                <div className="valor esquerda">0:00</div>
                                <input type="range" min="0" max="23" value={hours} steps="1" id="horas" onChange={handleHourChange}/>
                                <div className="valor direita">23:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="companies">
                        <span>Companhias</span>
                        <div>
                            <button className="button-companies-gol" style={{ backgroundImage: `url(${Gol_logo})` }}>Gol</button>
                            <button className="button-companies-latam" style={{ backgroundImage: `url(${Latam_logo})` }}>Latam</button>
                            <button className="button-companies-azul" style={{ backgroundImage: `url(${Azul_logo})` }}>Azul</button>
                        </div>
                    </div>
                </div>
                <div className="btn-filtro-voo">
                    <button className="btn-filt-voo">Pesquisar</button>
                </div>
            </div>
        </>
    );
};