import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Drop from "../../Componentes/DropInput/drop";


import Aviao_Card from '../../Images/Aviao_Card.png';
import Destino_Rio from '../../Images/img_Destino_Cards.png';
import Destino_Bra from '../../Images/img_Brasilia.png';
import Destino_Bah from '../../Images/img_Bahia.png';
import Destino_Floripa from '../../Images/img_Floripa.png';

import Destino_Tokyo from '../../Images/img_Tokyo.jpg';
import Destino_Texas from '../../Images/img_Texas.jpg';
import Destino_Bombaim from '../../Images/img_Bombaim.jpg';
import Destino_Vanc from '../../Images/img_Vancouver.jpg';

import origemIcon from '../../Images/Icones-Cards/origem.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import classeIcon from '../../Images/Icones-Cards/classe.png';

import './style_Voo.css';

import VooPopular from "../../Componentes/Cards/CadVooPopular/CardVooPopular";

import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export default function Home() {

    const [fundoRec, setFundoRec] = useState([Destino_Tokyo, Destino_Texas, Destino_Bombaim, Destino_Vanc])

    const [toggleStates, setToggleStates] = useState({
        idaVolta: false,
        ida: false,
    });
    


    const handleToggle = (key) => {
        setToggleStates((prevState) => {
            // Reseta ambos os estados para falso e ativa apenas o selecionado
            return key === 'idaVolta'
                ? { idaVolta: true, ida: false }
                : { idaVolta: false, ida: true };
        });
    };

    const navigate = useNavigate();

    const [passengerData, setPassengerData] = useState({
        nAdult: 1,
        criancaIdade: 0,
        criancaAssento: 0,
        criancaColo: 0,
    });

    const handlePassengerChange = useCallback((data) => {
        setPassengerData(data);
    }, []);
    
    function PesquisarVoo() {
    
        // Collect the data as you were already doing
        let origem = document.querySelector('input[name="origem"]').value;
        let destino = document.querySelector('input[name="destino"]').value;
        let ida = document.querySelector('input[name="ida"]').value;
        let travel_type = document.querySelector('input[name="volta"]').value ? 'rt' : 'ow';
        let volta = travel_type === 'rt' ? document.querySelector('input[name="volta"]').value : null;
        let classe = document.querySelector('select[name="classe"]').value;
        let adultos = passengerData.nAdult;
        let criancaAssento = passengerData.criancaAssento;
        let criancaColo = passengerData.criancaColo;
        let criancaIdade = passengerData.criancaIdade;
    
        const params = new URLSearchParams({
            requestType: 'flight',
            origem,
            destino,
            ida,
            volta,
            travel_type,
            classe,
            adultos,
            criancaAssento,
            criancaColo,
            criancaIdade,
        }).toString();
    
        // Navigate to the new page, passing the requestData as state
        navigate(`/InformacoesPage?${params}`);
    }

// State variables for Origem
const [origemInput, setOrigemInput] = useState("");
const [origemSuggestions, setOrigemSuggestions] = useState([]);
const [isOrigemFocused, setIsOrigemFocused] = useState(false);

// State variables for Destino
const [destinoInput, setDestinoInput] = useState("");
const [destinoSuggestions, setDestinoSuggestions] = useState([]);
const [isDestinoFocused, setIsDestinoFocused] = useState(false);

// Handle changes for Origem input
const handleOrigemChange = (e) => {
    const value = e.target.value;
    setOrigemInput(value);
};

// Handle changes for Destino input
const handleDestinoChange = (e) => {
    const value = e.target.value;
    setDestinoInput(value);
};

// Fetch suggestions for Origem
useEffect(() => {
    const delayDebounce = setTimeout(() => {
        if (origemInput) {
            axios.get(`http://144.22.183.38:8080/suggestion/flights/place?typed=${origemInput}`)
                .then(response => setOrigemSuggestions(response.data))
                .catch(error => console.error("Error fetching origem suggestions:", error));
        } else {
            setOrigemSuggestions([]);
        }
    }, 1000); // 1-second delay

    return () => clearTimeout(delayDebounce); // Clear timeout if origemInput changes before 1 seconds
}, [origemInput]);


// Fetch suggestions for Destino
useEffect(() => {
    const delayDebounce = setTimeout(() => {
        if (destinoInput) {
            axios.get(`http://144.22.183.38:8080/suggestion/flights/place?typed=${destinoInput}`)
                .then(response => setDestinoSuggestions(response.data))
                .catch(error => console.error("Error fetching destino suggestions:", error));
        } else {
            setDestinoSuggestions([]);
        }
    }, 1000); // 1-second delay

    return () => clearTimeout(delayDebounce); // Clear timeout if destinoInput changes before 2 seconds
}, [destinoInput]);

// Handle Origem suggestion selection
const handleOrigemSuggestionClick = (suggestion) => {
    setOrigemInput(suggestion);
    setOrigemSuggestions([]);
    setIsOrigemFocused(false);
};

// Handle Destino suggestion selection
const handleDestinoSuggestionClick = (suggestion) => {
    setDestinoInput(suggestion);
    setDestinoSuggestions([]);
    setIsDestinoFocused(false);
};

// Validation on blur for Origem with a delay
const handleOrigemBlur = () => {
    setTimeout(() => {
        setIsOrigemFocused(false);
    }, 300);
};

// Validation on blur for Destino with a delay
const handleDestinoBlur = () => {
    setTimeout(() => {
        setIsDestinoFocused(false);
    }, 300);
};

    return (
        <>
            <div><NavBar/></div>
            
            <main>
            {/* ------------------ CARD DE PESQUISA  --------------------- */}


                <div className="card-voo">
                    <div className="title-voo">
                        <label>Voos</label>
                    </div>
                    <img src={Aviao_Card} alt="Logo" className="voo-imagem" />

                    <div className="grid-imagem-voo"></div>

                    <div className="form-card-voo" >
                        <div className="grid-inputs-voo">
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Origem</label>
                                </div>
                                <div className="input-class-voo">
                                    <input
                                        type="text"
                                        className="input-voo"
                                        placeholder="São Paulo"
                                        name="origem"
                                        style={{ backgroundImage: `url(${origemIcon})` }}
                                        value={origemInput}
                                        onChange={handleOrigemChange}
                                        onFocus={() => setIsOrigemFocused(true)}  // Set focus state
                                        onBlur={handleOrigemBlur}   // Clear focus state
                                    />
                                    {origemSuggestions.length > 0 && isOrigemFocused && (
                                        <ul className="suggestions-list">
                                            {origemSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleOrigemSuggestionClick(suggestion.suggestion)}
                                                    className="suggestion-item"
                                                >
                                                    {suggestion.suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Destino</label>
                                </div>
                                <div className="input-class-voo">
                                    <input
                                        type="text"
                                        className="input-voo"
                                        placeholder="Rio de Janeiro"
                                        name="destino"
                                        style={{ backgroundImage: `url(${destinoIcon})` }}
                                        value={destinoInput}
                                        onChange={handleDestinoChange}
                                        onFocus={() => setIsDestinoFocused(true)}  // Set focus state
                                        onBlur={handleDestinoBlur}   // Clear focus state
                                    />
                                    {destinoSuggestions.length > 0 &&  isDestinoFocused && (
                                        <ul className="suggestions-list">
                                            {destinoSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleDestinoSuggestionClick(suggestion.suggestion)}
                                                    className="suggestion-item"
                                                >
                                                    {suggestion.suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Passageiros</label>
                                </div>
                                <Drop imagem={passageirosIcon} widthDrop="201px" topContent="31%" titles={["Adultos", "Crianças de", "Crianças", "Crinças no"]} subTitles={["", "2 a 11 anos", "no assento", "de colo"]} onPassengerChange={handlePassengerChange}/>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Ida</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="date" className="input-voo" name="ida" placeholder="21/06/24" 
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Volta</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="date" className="input-voo" name="volta" placeholder="30/06/24" 
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}
                                        disabled={toggleStates.ida}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Classe</label>
                                </div>
                                <div className="input-class-voo">
                                    <select name="classe" id="classe" className="input-voo"  style={{ backgroundImage: `url(${classeIcon})` }}>
                                        <option value="selcione" disabled selected className="selecione">Selecione</option>
                                        <option value="econômica">Econômica</option>
                                        <option value="econômica Premium">Econômica Premium</option>
                                        <option value="executiva">Executiva</option>
                                        <option value="erimeira">Primeira</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className="btn-pesquisar-voo" id="btn-pesquisar-voo">
                            <div className="btn-mod-container">
                                <button className={`btn-mod ${toggleStates.idaVolta ? 'active' : ''}`} onClick={() => handleToggle('idaVolta')}>Ida e Volta</button>
                                <button className={`btn-mod ${toggleStates.ida ? 'active' : ''}`} onClick={() => handleToggle('ida')}>Só Ida</button>
                            </div>
                            <button className="btn-submit-voo" onClick={PesquisarVoo}>
                                Pesquisar
                            </button>
                            <div className='empty'></div>
                        </div>
                    </div>
                </div>

            {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}
            
            
            {/* ------------------ VOOS MAIS POPULARES  --------------------- */}

                <div className="geral-voo-popular">

                    <div className="title-voo-popular">
                        <label>Voos Mais Populares</label>
                    </div>

                    <div className="cards-voo-popular">
                        
                        <VooPopular  imgDestino = {Destino_Rio} destino = "Rio de Janeiro - Rio de Janeiro" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Bra} destino = "Goiás - Brasilia" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Bah} destino = "Bahia - Salvador" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Floripa} destino = "Santa Catarina - Florianópolis" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>
                        
                        
                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
                            Ver Mais
                        </button>
                    </div>

                </div>

            {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}
            {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}

                <div className="geral-voo-popular">

                    <div className="title-voo-popular">
                        <label>Recomendações Para Você</label>
                    </div>

                    <div className="cards-voo-popular">
                        
                        <VooPopular  imgDestino ={fundoRec[0]} destino = "China - Tokyo" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino ={fundoRec[1]} destino = "EUA - Texas" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {fundoRec[2]} destino = "India - Bombaim" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino ={fundoRec[3]} destino = "Canadá - Vancouver" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
                            Ver Mais
                        </button>
                    </div>

                </div>

            {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}
