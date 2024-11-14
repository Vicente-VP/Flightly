import React, { useState } from 'react';
import './styleCardInfoVoo.css';

import sinalMais from "../../../Images/sinalMais.png";
import InfoVooVolta from './Volta/CardInfoVooVolta';
import Gol from "../../../Images/Card_Informacoes_Voo/Gol.png";
import Azul from "../../../Images/Card_Informacoes_Voo/AZUL.png";
import LATAM from "../../../Images/Card_Informacoes_Voo/LATAM.png";
import Avianca from "../../../Images/Card_Informacoes_Voo/Avianca.png";
import Voepass from "../../../Images/Card_Informacoes_Voo/VOEPASS.png";
import SkyAirline from "../../../Images/Card_Informacoes_Voo/Sky_Airline.png";


import PopUpAddPlano from '../../PopUp_Add_PlanoViagens/popUpAddPlanoViagens';


export default function CardInfoVoo(props) {
    const [hover, setHover] = useState(false);

    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const [IsPlano, setIsPlano] = useState(false);

    const companyImage = {
        Gol: Gol,
        Azul: Azul,
        LATAM: LATAM,
        Avianca: Avianca,
        VOEPASS: Voepass,
        SkyAirline: SkyAirline
    }

    // const toggleInfo = () => {
    //     setIsClicked(prev => !prev);
    // };

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };

    const ShowPlano = () =>{

        if(localStorage.getItem('userid')){
            setIsPlano(true);
        }
             
    };

    // Construct the company image path


    return (
        <>

            {IsPlano && <PopUpAddPlano tipo={'Voo'} item={props} setIsPlano={setIsPlano}/>}
            <div className="containerGeral-infoVoo">
                <div className={`container-Card-voo ${hover ? 'hover-active' : ''} ${isClicked ? 'selected' : ''}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    // onClick={toggleInfo}
                    >
                    <div className="left-voo">
                        <div className="info-voo">
                            <img src={companyImage[props.company]} alt={props.company} className='img-voo'/>
                            <div className='CompDest-voo'>
                                <label className='destino-voo'>{props.destino}</label>
                                <label className='companhia-voo'>{props.company}</label>
                            </div>

                            <div className='HoraLocal-voo'>
                                <label className='horario-voo'>{props.take_off} - {props.arrival}</label>
                                <label className='aeroporto-voo'>{props.airport_from} - {props.airport_to}</label>
                            </div>

                            <div className='DuracaoEsc-voo'>
                                <label className='duracao-voo'>{props.duration}</label>
                                <label className='escala-voo'>{props.stops}</label>
                            </div>

                          
                        </div>
                    </div>
                    <div className="right-voo">
                        <hr color="#D4D4D4" />
                        <div className="info-preco-voo">
                            <div className="preco-voo">
                                <label>A partir de:</label>
                                <span className="preco-voo-voo">R$ {props.price}</span>
                            </div>
                            <div className="categoria-voo">
                                <label className='tipo-voo'></label>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="btnPopup-AddPlano-Compra-VOOS"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={ShowPlano}
                >
                    <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                </button>

                
            </div>

            {isClicked && (
                <div className="info-voo-volta">
                    <InfoVooVolta
                        key={props.id}
                        Imagem_Companhia={companyImage}
                        Saída={props.airport_from}
                        Chegada={props.airport_to}
                        idalocal={`${props.airport_from} - ${props.airport_to}`} // Using the data structure
                        dataida={props.take_offDate} // Assuming dataida refers to the departure time
                        horarioida={props.take_off}
                        escalaida={props.stops}
                        voltalocal={`${props.airport_to} - ${props.airport_from}`} // Use appropriate values for return trip
                        datavolta={props.arrivalDate} // Use appropriate value for return date
                        horariovolta={props.arrival}
                        escalavolta={props.stops}
                        Preco={props.price}
                        selectedOption={selectedOption}
                        onRadioChange={handleRadioChange}
                    />
                </div>
            )}

        </>
    );
}
