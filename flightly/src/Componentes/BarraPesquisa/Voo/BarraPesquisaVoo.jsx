    import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import Origem_icon from '../../../Images/Barra_Pesquisa/Origem_icon.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';

import passageirosIcon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import Drop from "../../DropInput/drop";
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import classe_icon from '../../../Images/Barra_Pesquisa/classe_icon.png';


import './styleBarraPesquisaVoo.css';
import { useCallback, useState } from 'react';


export default function PesquisaVoo(props) {
    const [passengerData, setPassengerData] = useState({
        nAdult: props.adultos,
        criancaIdade: props.criancaIdade,
        criancaAssento: props.criancaAssento,
        criancaColo: props.criancaColo,
    });

    const handlePassengerChange = useCallback((data) => {
        setPassengerData(data);
        if (props.onPassengerChange) {
            props.onPassengerChange(data);
        }
    }, [props]);

    return (
        <div className={`container-search ${props.volta === "null" ? "active" : ""}`}>
            <img src={filter_search_bar} alt="filtros"/>
            <div className="search-local">
                <div>
                    <span>Origem</span>
                    <input
                        type="text"
                        placeholder="São Paulo"
                        value={props.origem}
                        onChange={(e) => props.onOrigemChange(e.target.value)}
                        className="origem"
                        style={{ backgroundImage: `url(${Origem_icon})` }}
                    />
                </div>
                <div>
                    <span>Destino</span>
                    <input
                        type="text"
                        placeholder="Rio de Janeiro"
                        value={props.destino}
                        onChange={(e) => props.onDestinoChange(e.target.value)}
                        className="destino"
                        style={{ backgroundImage: `url(${destino_icon})` }}
                    />
                </div>
            </div>
            <div className="search-data">
                <div>
                    <span>Ida</span>
                    <input
                        type="date"
                        required
                        value={props.ida}
                        onChange={(e) => props.onIdaChange(e.target.value)}
                        className={`ida ${props.volta === "null" ? "active" : ""}`}
                        style={{ backgroundImage: `url(${ida_volta_icon})`}}
                    />
                </div>
                {props.volta !== "null" && (
                    <div>
                        <span>Volta</span>
                        <input
                            type="date"
                            value={props.volta}
                            onChange={(e) => props.onVoltaChange(e.target.value)}
                            className="volta"
                            style={{ backgroundImage: `url(${ida_volta_icon})` }}
                        />
                    </div>
                )}
            </div>
            <div className="search-passageiros">
                <span>Passageiros</span>
                <Drop
                    imagem={passageirosIcon}
                    widthDrop="126px"
                    topContent="21.5%"
                    titles={["Adultos", "Crianças de", "Crianças", "Crianças no"]}
                    subTitles={["", "2 a 11 anos", "no assento", "de colo"]}
                    onPassengerChange={handlePassengerChange}
                    nAdult={props.adultos}
                    criancaIdade={props.criancaIdade}
                    criancaAssento={props.criancaAssento}
                    criancaColo={props.criancaColo}
                />
            </div>
            <div className="search-classe">
                <span>Classe</span>
                <select
                    name="classe"
                    className="classe"
                    value={props.classe}
                    onChange={(e) => props.onClasseChange(e.target.value)}
                    style={{ backgroundImage: `url(${classe_icon})` }}
                >
                    <option value="econômica">Econômica</option>
                    <option value="econômica Premium">Econômica Premium</option>
                    <option value="executiva">Executiva</option>
                    <option value="primeira">Primeira</option>
                </select>
            </div>
            <div className="btn-pesquisar-voo">
                <button className="btn-submit-voo" >Pesquisar</button>
            </div>
        </div>
    );
}