import React, { useState } from 'react';
import './styleCardInfoCarros.css';
import ferrari from '../../../Images/Carro_Card.png';
import movida from '../../../Images/FiltroCarro/movida-logo.png';
import people from '../../../Images/Info-Car-Icon/people-icon.png';
import small_bag from '../../../Images/Info-Car-Icon/small-bag.png';
import cambio from '../../../Images/Info-Car-Icon/transmission.png';
import porta from '../../../Images/Info-Car-Icon/car-door.png';
import large_bag from '../../../Images/Info-Car-Icon/travelling-bag.png';
import sinalMais from '../../../Images/sinalMais.png';

export default function InfoCarros(props) {
    const [hover, setHover] = useState(false);

    return (
        <div className="containerGeral-infoCarro" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={`card-horizontal ${hover ? 'hover-active' : ''}`}>
                <div className="card-image">
                    <img src={props.carImage} className="card-image-car" alt="Carro" />
                    <img src={props.locImage} className="card-image-locadora" alt="Locadora" />
                </div>
                <div className="card-content">
                    <div className="title-car">
                        <label htmlFor="carro" className="lbl-carro">{props.nameCar}</label>
                    </div>
                    <div className="sub-car">
                        <label htmlFor="local" className="lbl-local">{props.retirada}</label>
                    </div>
                    <div className="info-left">
                        <img src={people} className="icon-assento" alt="Assentos" />
                        <label htmlFor="number-assento" className="lbl-assento"> {props.assento} Assentos</label>
                        <br />
                        <img src={cambio} className="icon-cambio" alt="Câmbio" />
                        <label htmlFor="cambio" className="lbl-cambio"> {props.cambio}</label>
                        <br />
                        <img src={porta} className="icon-porta" alt="Portas" />
                        <label htmlFor="number-porta" className="lbl-porta"> {props.porta} Portas</label>
                    </div>
                    <div className="info-right">
                        <img src={small_bag} className="icon-bag" alt="Bagagem Pequena" />
                        <label htmlFor="number-mala" className="lbl-mala"> {props.malaPeq} Bagagem Pequena</label>
                        <br />
                        <img src={large_bag} className="icon-bag" alt="Bagagem Grande" />
                        <label htmlFor="number-mala" className="lbl-mala"> {props.malaGr} Bagagem Grande</label>
                    </div>
                </div>
                <hr color="D4D4D4" />
                <div className="card-price">
                    <div className="info-preco">
                        <div className="preco">
                            <label>A partir de:</label>
                            <span className="preco-carro">{props.preco}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={`btnPopup-AddPlano-Compra ${hover ? 'visible' : ''}`}>
                <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
            </button>
        </div>
    );
}
