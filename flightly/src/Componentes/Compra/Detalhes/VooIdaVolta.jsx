import React from "react";
import './styleVooIdaVolta.css';

import iconeAviao from "../../../Images/Compra/aviao.png";
import iconeRemover from "../../../Images/Compra/Menos.png";
import Gol from "../../../Images/Card_Informacoes_Voo/Gol.png";
import Azul from "../../../Images/Card_Informacoes_Voo/AZUL.png";
import LATAM from "../../../Images/Card_Informacoes_Voo/LATAM.png";
import Avianca from "../../../Images/Card_Informacoes_Voo/Avianca.png";
import Voepass from "../../../Images/Card_Informacoes_Voo/VOEPASS.png";
import SkyAirline from "../../../Images/Card_Informacoes_Voo/Sky_Airline.png";

const companyImage = {
    Gol: Gol,
    Azul: Azul,
    LATAM: LATAM,
    Avianca: Avianca,
    VOEPASS: Voepass,
    SkyAirline: SkyAirline
}


export default function VooIdaVolta(props) {
    
    //  const [voos, hotel, carros, ptTuristico] = useState([]) este é só uma ideia da implementação futura de como utlizaremos para o mapeamento dos itens
    return (
        <>
            <div className="container-cardVoo-Compra">
                <div className="nav-cardVooCompra">
                    <img src={iconeAviao} alt="" className="iconeAviao-Compra" />
                    <img src={iconeRemover} alt="" className="iconeRemover-Compra" />
                </div>
                <div className="div-origemDestino">
                    <h1>{props.destino}</h1>
                    <p>{props.passageiros} passageiro(s)</p>
                </div>
                <div className="div-data">
                    {props.data}
                </div>
                <div className="div-horarios">
                    <div>
                        <label>{props.aeroportoIda}</label>
                        <p>{props.horarioIda}</p>
                    </div>
                    <div>
                        <label className="hr-Horarios">{props.escala}</label>
                    </div>
                    <div>
                        <label>{props.aeroportoVolta}</label>
                        <p>{props.horarioVolta}</p>
                    </div>
                </div>
                <div className="div-logo">
                    <img src={companyImage[props.companhia]} alt={props.companhia} />
                </div>
            </div>
        </>
    );
}