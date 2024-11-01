import './styleCardInfoVoo.css';
import sinalMais from "../../../Images/sinalMais.png";
import InfoVooVolta from './Volta/CardInfoVooVolta';
import { useState } from 'react';

export default function CardInfoVoo(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleInfo = () => {
        setIsClicked(prev => !prev);
    };

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };

    // Construct the company image path
    const companyImage = `${props.company}.png`; // Assuming images are stored in the same folder

    return (
        <>
            <div className='Div-Geral' index={props.index}>
                <div className={`container-Card ${isClicked ? 'selected' : ''}`} onClick={toggleInfo}>
                    <div className="left">
                        <img src={companyImage} alt={props.company} />
                        <div className="info">
                            <label>{props.airport_from} - {props.airport_to}</label>
                            <span>Saindo de {props.airport_from}</span>
                            <div className="ida-Volta">
                                <div className="ida">
                                    <span className="ida-local"><span>Ida:</span> {props.airport_from} - {props.airport_to}</span>
                                    <span className="ida-date">{props.take_off}</span>
                                    <span className="ida-scale">{props.stops}</span>
                                </div>
                                <div className="volta">
                                    <span className="volta-local"><span>Volta:</span> {props.airport_to} - {props.airport_from}</span>
                                    <span className="volta-date">{props.arrival}</span>
                                    <span className="volta-scale">{props.stops}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <hr color="#D4D4D4" />
                        <div className="info-preco">
                            <div className="preco">
                                <label>A partir de:</label>
                                <span className="preco-voo">R$ {props.price}</span>
                            </div>
                        </div>
                    </div>
                    <button className="btnPopup-AddPlano-Compra">
                        <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                    </button>
                </div>
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
