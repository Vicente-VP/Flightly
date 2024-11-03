import companhia from "../../../../Images/Card_Informacoes_Voo/Imagem_Companhia.png";
import '.././styleCardInfoVoo.css';

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
            <div className="left-volta">
                        <div className="info-volta">
                            <img src={companhia} alt="Logo Companhia" className="img-volta"/>
                            <div className='CompDest-volta'>
                                <label className='destino-volta'>SÃO PAULO</label>
                                <label className='companhia-volta'>Latam</label>
                            </div>

                            <div className='HoraLocal-volta'>
                                <label className='horario-volta'> {props.horariovolta}</label>
                                <label className='aeroporto-volta'>{props.voltalocal}</label>
                            </div>

                            <div className='DuracaoEsc-volta'>
                                <label className='duracao-volta'>2h50min</label>
                                <label className='escala-volta'>{props.escalavolta}</label>
                            </div>

                          
                        </div>
                    </div>
                <div className="right-volta">
                    <hr color="#D4D4D4" />
                    <div className="info-preco-volta">
                        <div className="preco-volta">
                            <label>A partir de:</label>
                            <span className="preco-voo -volta">R$1000</span>
                        </div>
                        <div className="categoria-volta">
                                <label className='tipo-volta'> Ida e Volta</label>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
