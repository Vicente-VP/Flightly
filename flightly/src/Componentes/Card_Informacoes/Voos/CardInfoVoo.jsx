import React, { useState } from 'react';
import sinalMais from '../../../Images/sinalMais.png';
import './styleCardInfoVoo.css';

export default function InfoVoo(props) {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className="containerGeral-infoVoo">
                <div className={`container-Card ${hover ? 'hover-active' : ''}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className="left">
                        <img src={props.Imagem_Companhia} alt="Logo Companhia" />
                        <div className="info">
                            <label>{props.cidadeDestino}</label>
                            <span>Saindo de {props.cidadeOrigem}</span>
                            <div className="ida-Volta">
                                <div className="ida">
                                    <span className="ida-local">
                                        <span>Ida:</span> {props.idaLocal}
                                    </span>
                                    <span className="ida-date">{props.idaData}</span>
                                    <span className="ida-scale">{props.idaEscala}</span>
                                </div>
                                <div className="volta">
                                    <span className="volta-local">
                                        <span>Volta:</span> {props.voltaLocal}
                                    </span>
                                    <span className="volta-date">{props.voltaData}</span>
                                    <span className="volta-scale">{props.voltaEscala}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <hr color="#D4D4D4" />
                        <div className="info-preco">
                            <div className="preco">
                                <label>A partir de:</label>
                                <span className="preco-voo">{props.precoVoo}</span>
                            </div>
                            <div className="imgs">
                                <img src={props.MalaCor} alt="Mala" />
                                <img src={props.MalaCor} alt="Mala" />
                                <img src={props.Mala} alt="Mala" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="btnPopup-AddPlano-Compra"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                </button>
            </div>
        </>
    );
}
