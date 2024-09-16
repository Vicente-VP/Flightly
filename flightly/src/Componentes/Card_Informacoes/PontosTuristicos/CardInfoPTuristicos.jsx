import './styleCardInfoPTuristicos.css';

import estrelaPturisticos from '../../../Images/Card-Informacoes-PTuristicos/estrela.png';

export default function InfoPTutisticos(props){
    return(
        <>
            <div className="container-card-info-pturisticos">
                <img src={props.imgInfoPTuristicos} alt="Foto do Ponto de Interesse" className="img-card-info-pturisticos" />
                <span className="titulo-card-info-pturisticos">Avenida Paulista</span>
                <div className="div-rating-pturisticos">
                    <img src={estrelaPturisticos} alt="Estrela de Nota do Ponto de Interesse" className="estrela-card-info-pturisticos" />
                    <span className="nota-card-info-pturisticos">4.5</span>
                    <span className="qtdVotos-card-info-pturisticos">(29.313)</span>
                </div>
                <span className="descricao-card-info-pturistico">Pontos de Interesse</span>
            </div>
        </>
    )

}