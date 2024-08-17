import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import quartos_icon from '../../../Images/Barra_Pesquisa/quartos_icon.png';

import './styleBarraPesquisaHospedagem.css';

export default function PesquisaHospedagem(){
    return(
        <>
            <div className="container-search">
                <img src={filter_search_bar} alt="filtros"/>
                <div className="search-local">
                    <div>
                        <span>Local</span>
                        <input type="text" placeholder="São Paulo" className="local" style={{ backgroundImage: `url(${destino_icon})` }}/>
                    </div>
                </div>
                <div className="search-date">
                    <div>
                        <span>Check-in</span>
                        <input type="date" placeholder="21/06/2024" className="Check-in" style={{ backgroundImage: `url(${ida_volta_icon})` }}/>
                    </div>
                    <div>
                        <span>Check-out</span>
                        <input type="date" placeholder="30/06/2024" className="Check-out" style={{ backgroundImage: `url(${ida_volta_icon})` }}/>
                    </div>
                </div>
                <div className="search-hospedes">
                    <span>Hóspedes</span>
                    <input type="text" placeholder="1" className="hospedes" style={{ backgroundImage: `url(${passageiro_icon})` }}/>
                </div>
                <div className="search-quartos">
                    <span>Quartos</span>
                    <input type="text" placeholder="1" className="quartos" style={{ backgroundImage: `url(${quartos_icon})` }}/>
                </div>
                <div className="btn-pesquisar-hospedagem">
                    <button className="btn-submit-hospedagem">Pesquisar</button>
                </div>
            </div>
        </>
    );
}