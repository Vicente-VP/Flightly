import './styleCardInfoPTuristicos.css';

import estrelaPturisticos from '../../../Images/Card-Informacoes-PTuristicos/estrela.png';

export default function InfoPTutisticos(props){
    return(
        <>
            <div className="container-card-info-pturisticos">
                <img src={props.imgInfoPTuristicos} alt="Foto do Ponto de Interesse" className="img-card-info-pturisticos" />
                <span className="titulo-card-info-pturisticos">{props.titulo}</span>
                <div className="div-rating-pturisticos">
                    <img src={estrelaPturisticos} alt="Estrela de Nota do Ponto de Interesse" className="estrela-card-info-pturisticos" />
                    <span className="nota-card-info-pturisticos">{props.nota}</span>
                    <span className="qtdVotos-card-info-pturisticos">({props.votos})</span>
                </div>
                <span className="descricao-card-info-pturistico">{props.descricao}</span>
            </div>
        </>
    )

}