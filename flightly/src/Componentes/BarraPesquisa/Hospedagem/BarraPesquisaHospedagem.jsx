import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageirosIcon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import Drop from '../../DropInput/drop';
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

                    <Drop imagem={passageirosIcon} widthDrop="126px" topContent="69.5%" titles={["Adultos", "Crianças"]} subTitles={[]}/>
                    <select name="hospedes" className="hospedes" style={{ backgroundImage: `url(${passageiro_icon})` }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>

                </div>
                <div className="search-quartos">
                    <span>Camas</span>
                    <select name="camas" className="quartos" style={{ backgroundImage: `url(${quartos_icon})` }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                </div>
                <div className="btn-pesquisar-hospedagem">
                    <button className="btn-submit-hospedagem">Pesquisar</button>
                </div>
            </div>
        </>
    );
}