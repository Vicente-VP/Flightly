import React from "react";
import './styleVooIdaVolta.css';

import iconeAviao from "../../../Images/TelaCompra/aviao.png";
import iconeRemover from "../../../Images/TelaCompra/remover.png";
import logoCompanhia from "../../../Images/TelaCompra/companhia.png";

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
                    <h1>{props.origem} – {props.destino}</h1>
                    <p>{props.passageiros} adulto</p>
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
                        <label className="hr-Horarios">Escala</label>
                    </div>
                    <div>
                        <label>{props.aeroportoVolta}</label>
                        <p>{props.horarioVolta}</p>
                    </div>
                    <div>
                        <label>Duração</label>
                        <p>{props.ducacaoVoo}</p>
                    </div>
                </div>
                <div className="div-logo">
                    <img src={props.logoCompanhia} alt="Gol Logo" />
                </div>
            </div>
        </>
    );
}