import './CardDestinoPular.css';
import React from 'react';

export default function CardDestinoPular(props) {
    return (
        <>

            <div className="card-destinoPopular">
                <img src={props.imgDestinoPopular} className="img-card-pturistico" />
                <span className="viagem-card-pturistico">{props.nomeDesninoPopular}</span>
            </div>

        </>
    )
}
