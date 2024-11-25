import './styleCardInfoPTuristicos.css';
import React, { useState } from 'react';

import estrelaPturisticos from '../../../Images/Card-Informacoes-PTuristicos/estrela.png';
import sinalMais from '../../../Images/sinalMais.png';

export default function InfoPTuristicos(props) {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div
                className={`containerFora-pTuristico ${hover ? 'hover-active' : ''}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="container-card-info-pturisticos">
                    <img
                        src={props.imgInfoPTuristicos}
                        alt="Foto do Ponto de Interesse"
                        className="img-card-info-pturisticos"
                    />
                    <span className="titulo-card-info-pturisticos">{props.titulo}</span>
                    <div className="div-rating-pturisticos">
                        <img
                            src={estrelaPturisticos}
                            alt="Estrela de Nota do Ponto de Interesse"
                            className="estrela-card-info-pturisticos"
                        />
                        <span className="nota-card-info-pturisticos">{props.nota}</span>
                        <span className="qtdVotos-card-info-pturisticos">({props.votos})</span>
                    </div>
                    <span className="descricao-card-info-pturistico">{props.descricao}</span>
                </div>

                {/* O botão está agora fora do container principal do card */}
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
