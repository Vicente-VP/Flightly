import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import tipoCarro_icon from '../../../Images/Barra_Pesquisa/tipoCarro_icon.png';

import './styleBarraPesquisaCarro.css';

export default function PesquisaCarro(){
    return(
        <>
            <div className="container-search">
                <img src={filter_search_bar} alt="filtros"/>
                <div className="search-local">
                    <div>
                        <span>Destino</span>
                        <input type="text" placeholder="Rio de Janeiro" className="destino" style={{ backgroundImage: `url(${destino_icon})` }}/>
                    </div>
                </div>
                <div className="search-data">
                    <div>
                        <span>Ida</span>
                        <input type="date" required placeholder="21/06/2024" className="ida" style={{ backgroundImage: `url(${ida_volta_icon})` }}/>
                    </div>
                    <div>
                        <span>Volta</span>
                        <input type="date" placeholder="30/06/2024" className="volta" style={{ backgroundImage: `url(${ida_volta_icon})` }}/>
                    </div>
                </div>
                <div className="search-passageiros">
                    <span>Passageiros</span>
                    <select name="TipoCarro" className="passageiro" style={{ backgroundImage: `url(${passageiro_icon})` }}>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="6+">6+</option>
                    </select>
                </div>
                <div className="search-tipo">
                    <span>Tipo</span>
                    <select name="TipoCarro" className="tipo" style={{ backgroundImage: `url(${tipoCarro_icon})` }}>
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