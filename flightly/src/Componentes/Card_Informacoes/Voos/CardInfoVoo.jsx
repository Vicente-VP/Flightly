import './styleCardInfoVoo.css';

export default function InfoVoo(props){
    return(
        <>
            <div className="container-Card">
                <div className="left">
                    <img src={props.Imagem_Companhia} alt="Logo Companhia"/>
                    <div className="info">
                        <label>Rio de Janeiro</label>
                        <span>Saindo de São Paulo</span>
                        <div className="ida-Volta">
                            <div className="ida">
                                <span className="ida-local"><span>Ida:</span> CGH - SDU</span>
                                <span className="ida-date">21/06/24 - 8:00</span>
                                <span className="ida-scale">Direto</span>
                            </div>
                            <div className="volta">
                                <span className="volta-local"><span>Volta:</span> SDU - CGH</span>
                                <span className="volta-date">30/06/24 - 18:30</span>
                                <span className="volta-scale">1 Escala</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <hr color="#D4D4D4"/>
                    <div className="info-preco">
                        <div className="preco">
                            <label>A partir de:</label>
                            <span className="preco-voo">R$ 1.678</span>
                        </div>
                        <div className="imgs">
                            <img src={props.MalaCor} alt="Mala"/>
                            <img src={props.MalaCor} alt="Mala"/>
                            <img src={props.Mala} alt="Mala"/>
                        </div>
                    </div>
                </div>
                <button className="btnPopup-AddPlano-Compra">
                    <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                </button>
            </div>

        </>
    );
}

