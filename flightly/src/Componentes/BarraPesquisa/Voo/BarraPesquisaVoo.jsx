import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import Origem_icon from '../../../Images/Barra_Pesquisa/Origem_icon.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import classe_icon from '../../../Images/Barra_Pesquisa/classe_icon.png';


import './styleBarraPesquisaVoo.css';

export default function PesquisaVoo() {
    return(
        <>
            <div className="container-search">
                <img src={filter_search_bar} alt="filtros"/>
                <div className="search-local">
                    <div>
                        <span>Origem</span>
                        <input type="text" placeholder="São Paulo" className="origem" style={{ backgroundImage: `url(${Origem_icon})` }}/>
                    </div>
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
                    <select name="classe" className="passageiro" style={{ backgroundImage: `url(${passageiro_icon})` }}>
                        <option value="2a4">2 a 4</option>
                        <option value="5a8">5 a 8</option>
                    </select>
                </div>
                <div className="search-classe">
                    <span>Classe</span>
                    <select name="classe" className="classe" style={{ backgroundImage: `url(${classe_icon})` }}>
                        <option value="economica">Econômica</option>
                        <option value="primeira">Primeira classe</option>
                    </select>
                </div>
                <div className="btn-pesquisar-voo">
                    <button className="btn-submit-voo">Pesquisar</button>
                </div>
            </div>
        </>
    );
}