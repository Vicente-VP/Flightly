
import './styleCardPlanoViagem.css';
import { useState } from 'react';

export default function CardPlanoViagem(props){

    

    return(
        <>
            <div className="plane-card" onClick={props.handleClick}>
                <img src={props.fundos} alt="Imagem do Plano de Viagem" />
                <div className="plane-information">
                    <span className="plane-title">{props.nome}</span>
                    <span className="plane-date"></span>
                    <span className="plane-price"></span>
                </div>
            </div>
        </>
    );
};