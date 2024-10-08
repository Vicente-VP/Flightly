import './styleCardVooVolta.css';

export default function InfoVooVolta(props) {
    const { selectedOption, onRadioChange, id, ...rest } = props; 

    return (
        <div className='CardVolta-Geral'>
            <div className="radio-group">
                <label className="custom-radio">
                    <input
                        type="radio"
                        name="options"
                        value={id} 
                        checked={selectedOption === id}
                        onChange={() => onRadioChange(id)}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className={`container-Info ${selectedOption === id ? 'selected' : ''}`}>
                <div className="left">
                    <img src={rest.Imagem_Companhia} alt="Logo Companhia" />
                    <div className="info">
                        <label>{rest.Saída}</label>
                        <span>Voltando de {rest.Chegada}</span>
                        <div className="ida-Volta">
                            <div className="ida">
                                <span className="ida-local"><span>Ida:</span> {rest.idalocal}</span>
                                <span className="ida-date">{rest.dataida} - {rest.horarioida}</span>
                                <span className="ida-scale">{rest.escalaida}</span>
                            </div>
                            <div className="volta">
                                <span className="volta-local"><span>Volta:</span> {rest.voltalocal}</span>
                                <span className="volta-date">{rest.datavolta} - {rest.horariovolta}</span>
                                <span className="volta-scale">{rest.escalavolta}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <hr color="#D4D4D4" />
                    <div className="info-preco">
                        <div className="preco">
                            <label>A partir de:</label>
                            <span className="preco-voo">R$ {rest.Preco}</span>
                        </div>
                        <div className="imgs">
                            <img src={rest.MalaCor} alt="Mala" />
                            <img src={rest.MalaCor} alt="Mala" />
                            <img src={rest.Mala} alt="Mala" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
