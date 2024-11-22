import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import tipoCarro_icon from '../../../Images/Barra_Pesquisa/tipoCarro_icon.png';

import './styleBarraPesquisaCarro.css';
import { useCallback, useState } from 'react';

export default function PesquisaCarro(props) {
    const [passageiros, setPassageiros] = useState(props.passageiros || "2");
    const [tipoCarro, setTipoCarro] = useState(props.tipoCarro || "economico");

    const handlePassageirosChange = useCallback((e) => {
        setPassageiros(e.target.value);
        if (props.onPassageirosChange) {
            props.onPassageirosChange(e.target.value);
        }
    }, [props]);

    const handleTipoCarroChange = useCallback((e) => {
        setTipoCarro(e.target.value);
        if (props.onTipoCarroChange) {
            props.onTipoCarroChange(e.target.value);
        }
    }, [props]);

    return (
        <>
            <div className="container-search-car">
                <img src={filter_search_bar} alt="filtros" />
                <div className="search-local">
                    <div>
                        <span>Local de Retirada</span>
                        <input 
                            type="text" 
                            placeholder="Rio de Janeiro" 
                            className="destino" 
                            style={{ backgroundImage: `url(${destino_icon})` }} 
                            value={props.localRetirada} 
                            onChange={(e) => props.onDestinoChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-data-car">
                    <div>
                        <span>Retirada</span>
                        <input 
                            type="date" 
                            required 
                            placeholder="21/06/2024" 
                            className="ida" 
                            style={{ backgroundImage: `url(${ida_volta_icon})` }} 
                            value={props.dataRetirada} 
                            onChange={(e) => props.onDataIdaChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Devolução</span>
                        <input 
                            type="date" 
                            placeholder="30/06/2024" 
                            className="volta" 
                            style={{ backgroundImage: `url(${ida_volta_icon})` }} 
                            value={props.dataDevolucao} 
                            onChange={(e) => props.onDataVoltaChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-tipo">
                    <span>Tipo</span>
                    <select 
                        name="TipoCarro" 
                        className="tipo" 
                        style={{ backgroundImage: `url(${tipoCarro_icon})` }} 
                        value={tipoCarro} 
                        onChange={handleTipoCarroChange}
                    >
                        <option value="economico">Econômico</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="luxo">Luxo</option>
                    </select>
                </div>
                <div className="btn-pesquisar-voo">
                    <button className="btn-submit-voo">Pesquisar</button>
                </div>
            </div>
        </>
    );
}
