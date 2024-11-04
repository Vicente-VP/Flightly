import React, { useState } from 'react';
import sinalMais from '../../../Images/sinalMais.png';
import './styleCardInfoVoo.css';
import InfoVooVolta from './Volta/CardInfoVooVolta';
import companhia from "../../../Images/Card_Informacoes_Voo/Imagem_Companhia.png";

export default function InfoVoo(props) {
    const [hover, setHover] = useState(false);

    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleInfo = () => {
        setIsClicked(prev => !prev);
    };

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };

    // Alterar para mostrar conforme o BD
    const vooData = [
        { id: 'option1', idalocal: "CGH - SDU", dataida: "21/06/24", horarioida: "08:00", escalaida: "Direto", voltalocal: "SDU - CGH", datavolta: "30/06/24", horariovolta: "18:30", escalavolta: "1 Escala", Preco: "1.655" },
        { id: 'option2', idalocal: "CGH - GIG", dataida: "22/06/24", horarioida: "09:00", escalaida: "Direto", voltalocal: "GIG - CGH", datavolta: "29/06/24", horariovolta: "17:00", escalavolta: "Direto", Preco: "1.700" },
        { id: 'option3', idalocal: "CGH - BSB", dataida: "23/06/24", horarioida: "10:00", escalaida: "1 Escala", voltalocal: "BSB - CGH", datavolta: "28/06/24", horariovolta: "16:30", escalavolta: "Direto", Preco: "1.800" },
        { id: 'option4', idalocal: "CGH - POA", dataida: "24/06/24", horarioida: "11:00", escalaida: "Direto", voltalocal: "POA - CGH", datavolta: "27/06/24", horariovolta: "15:00", escalavolta: "1 Escala", Preco: "1.750" },
        { id: 'option5', idalocal: "CGH - MAO", dataida: "25/06/24", horarioida: "12:00", escalaida: "Direto", voltalocal: "MAO - CGH", datavolta: "26/06/24", horariovolta: "14:00", escalavolta: "Direto", Preco: "1.600" }
    ];
  
    return (
        <>
            <div className="containerGeral-infoVoo">
                <div className={`container-Card ${hover ? 'hover-active' : ''} ${isClicked ? 'selected' : ''}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={toggleInfo}
                    >
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
                    className="btnPopup-AddPlano-Compra-VOOS"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                </button>

                
            </div>

            {isClicked && (
                <div className="info-voo-volta">
                    {vooData.map((voo) => (
                        <InfoVooVolta
                            key={voo.id}
                            Imagem_Companhia={companhia}
                            Saída="São Paulo"
                            Chegada="Rio de Janeiro"
                            idalocal={voo.idalocal}
                            dataida={voo.dataida}
                            horarioida={voo.horarioida}
                            escalaida={voo.escalaida}
                            voltalocal={voo.voltalocal}
                            datavolta={voo.datavolta}
                            horariovolta={voo.horariovolta}
                            escalavolta={voo.escalavolta}
                            Preco={voo.Preco}
                            selectedOption={selectedOption}
                            onRadioChange={handleRadioChange}
                            id={voo.id} 
                        />
                    ))}
                </div>
            )}

        </>
    );
}
