import FundoPlano from '../../../Images/Card_Plano_Viagem/recife_cardInfo.png';
import './styleCardPlanoViagem.css';

export default function CardPlanoViagem(){
    return(
        <>
            <div className="plane-card">
                <img src={FundoPlano} alt="Imagem do Plano de Viagem"/>
                <div className="plane-information">
                    <span className="plane-title">São Paulo</span>
                    <span className="plane-date">11/07 - 21/07</span>
                    <span className="plane-price">R$450,00</span>
                </div>
            </div>
        </>
    );
};