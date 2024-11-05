import FundoPlano from '../../../Images/Card_Plano_Viagem/recife_cardInfo.png';
import './styleCardPlanoViagem.css';

export default function CardPlanoViagem(props){
    return(
        <>
            <div className="plane-card">
                <img src={FundoPlano} alt="Imagem do Plano de Viagem"/>
                <div className="plane-information">
                    <span className="plane-title">{props.nome}</span>
                    <span className="plane-date"></span>
                    <span className="plane-price"></span>
                </div>
            </div>
        </>
    );
};