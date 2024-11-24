import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import CardRec from "../../Componentes/Cards/CardRecCarro/cardRecCarro";

import Carro_Form from '../../Images/Carro_Card.png';
import Origem_Form from '../../Images/Icones-Cards/origem.png';
import IdaVolta_Form from '../../Images/Icones-Cards/ida-volta.png';

import Loc_Allauto from '../../Images/Cards_Locadoras_Populares/Allauto.png';
import Loc_Rental from '../../Images/Cards_Locadoras_Populares/Rental.png';
import Loc_Citta from '../../Images/Cards_Locadoras_Populares/Citta.png';
import Loc_Blue from '../../Images/Cards_Locadoras_Populares/Blue.png';

import Rec_Eco from '../../Images/Card_Recomendacao_Carro/Rec_Eco.png';
import Rec_Inter from '../../Images/Card_Recomendacao_Carro/Rec_Inter.png';
import Rec_Lux from '../../Images/Card_Recomendacao_Carro/Rec_Lux.png';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import './Style_carro.css';

export default function Carro_page() {
    const [locadoras, setLocadoras] = useState([
        { legenda: "Allauto", image: Loc_Allauto },
        { legenda: "Rental", image: Loc_Rental },
        { legenda: "Citta", image: Loc_Citta },
        { legenda: "Blue", image: Loc_Blue },
    ]);


    const verMais = () => {
        const novasLocadoras = [
            { legenda: "Locadora X", image: Loc_Allauto },
            { legenda: "Locadora Y", image: Loc_Rental },
            { legenda: "Locadora X", image: Loc_Allauto },
            { legenda: "Locadora Y", image: Loc_Rental },
        ];
        setLocadoras([...locadoras, ...novasLocadoras])
    }

    const navigate = useNavigate();

    function PesquisarCarro() {
        // Coleta os dados do formulário na página
        let place = document.querySelector('input[name="pick-location"]').value;
        let data_retirada = document.querySelector('input[name="pickup-date"]').value;
        let hora_retirada = document.querySelector('select[name="pickup-hour"]').value;
        let data_devolucao = document.querySelector('input[name="return-date"]').value;
        let hora_devolucao = document.querySelector('select[name="return-hour"]').value;

        // Define os parâmetros como no exemplo do voo
        const params = new URLSearchParams({
            requestType: 'car',
            place,
            data_retirada,
            hora_retirada,
            data_devolucao,
            hora_devolucao,
        }).toString();

        // Navega para a página InformacoesPage com os parâmetros
        navigate(`/InformacoesPage?${params}`);
    }

    const [localInput, setLocalInput] = useState("");
    const [localSuggestions, setLocalSuggestions] = useState([]);
    const [isLocalFocused, setIsLocalFocused] = useState(false);

    const handleLocalChange = (e) => {
        const value = e.target.value;
        setLocalInput(value);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (localInput) {
                axios.get(`http://localhost:8080/suggestion/cars?typed=${localInput}`)
                    .then(response => setLocalSuggestions(response.data))
                    .catch(error => console.error("Error fetching local suggestions:", error));
            } else {
                setLocalSuggestions([]);
            }
        }, 1000); // 1-second delay


        return () => clearTimeout(delayDebounce); // Clear timeout if localInput changes before 1 seconds
    }, [localInput]);

    const handleLocalSuggestionClick = (suggestion) => {
        setLocalInput(suggestion);
        setLocalSuggestions([]);
        setIsLocalFocused(false);
    };

    const handleLocalBlur = () => {
        setTimeout(() => {
            setIsLocalFocused(false);
        }, 300);
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const formattedHour = hour.toString().padStart(2, "0");
                const formattedMinute = minute.toString().padStart(2, "0");
                const timeValue = `${formattedHour}:${formattedMinute}`;
                options.push(
                    <option key={timeValue} value={timeValue}>
                        {timeValue}
                    </option>
                );
            }
        }
        return options;
    };    

    return (
        <>
            <div><NavBar /></div>

            <main>
                {/* ------------------ CARRO FORM INICIO  --------------------- */}
                <div className="card-carro">
                    <div className="car-title">
                        <label>Aluguel de Carros</label>
                    </div>
<div className="car-space">
    <div className="car-image">
        <img src={Carro_Form} alt="Carro esportivo" />
    </div>
</div>

<div className="form-cardcarro">
    <div className="car-grid-inputs">
        <div className="car-input-form">
            <div className="car-etiqueta-className">
                <label className="car-etiqueta">Local de retirada</label>
            </div>
            <div className="car-input-className">
                <input
                    type="text"
                    className="car-input"
                    name="pick-location"
                    id="pick-location"
                    placeholder="São Paulo"
                    style={{ backgroundImage: `url(${Origem_Form})` }}
                    value={localInput}
                    onChange={handleLocalChange}
                    onFocus={() => setIsLocalFocused(true)}
                    onBlur={handleLocalBlur}
                />
                {localSuggestions.length > 0 && isLocalFocused && (
                    <ul className="suggestions-list">
                        {localSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleLocalSuggestionClick(suggestion.suggestion)}
                                className="suggestion-item"
                            >
                                {suggestion.suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

        <div className="car-input-form">
            <div className="car-etiqueta-className">
                <label className="car-etiqueta">Data e Hora de Retirada</label>
            </div>
            <div className="car-input-className">
                <div>
                    <input
                        type="date"
                        className="car-input"
                        id="pickup-date"
                        name="pickup-date"
                        placeholder="21/06/2024"
                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}
                    />
                    <select
                        className="car-input selectHours"
                        id="pickup-time"
                        name="pickup-hour"
                    >
                        {generateTimeOptions()}
                    </select>
                </div>
            </div>
        </div>

        <div className="car-input-form">
            <div className="car-etiqueta-className">
                <label className="car-etiqueta">Data e Hora de Devolução</label>
            </div>
            <div className="car-input-className">
                <div>
                    <input
                        type="date"
                        className="car-input"
                        id="return-date"
                        name="return-date"
                        placeholder="30/06/2024"
                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}
                    />
                    <select
                        className="car-input selectHours"
                        id="return-time"
                        name="return-hour"
                    >
                        {generateTimeOptions()}
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div className="car-btn-pesquisar">
        <button className="car-pesquisar" onClick={PesquisarCarro}>
            Pesquisar
        </button>
    </div>
</div>


                {/* ------------------ CARRO FORM FIM  --------------------- */}


                {/* ------------------ LOCADORAS MAIS POPULARES INICIO --------------------- */}

                <div className="locadoras-popular">

                    <div className="title-locadora">
                        <label>Locadoras Populares</label>
                    </div>

                    <div className="space-locadora-popular">
                        {locadoras.map((locadora, index) => (
                            <CardRec key={index} legenda={locadora.legenda} image={locadora.image} />
                        ))}
                    </div>

                    <div className="locadora-btn-popular">
                        <button className="car-pesquisar" onClick={verMais}>Ver Mais</button>
                    </div>
                </div>
                {/* ------------------ LOCADORAS MAIS POPULARES FIM --------------------- */}

                {/* ------------------ RECOMENDAÇÃO DE CARRO INICIO --------------------- */}

                <div className="recomendacao-carro">

                    <div className="title-recomendacao">
                        <label>Carros para seu orçamento</label>
                    </div>

                    <div className="space-recomendacao-carro">

                        <div className="card-recomendacao-carro">
                            <img src={Rec_Eco} className="img-card-recomendacao-eco" />
                            <span className="carro-card-recomendacao-eco">Econômico</span>
                            <div className="recomendacao-btn-eco">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                        </div>

                        <div className="card-recomendacao-carro">
                            <span className="carro-card-recomendacao-inter">Intermediário</span>
                            <div className="recomendacao-btn-inter">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                            <img src={Rec_Inter} className="img-card-recomendacao-inter" />
                        </div>

                        <div className="card-recomendacao-carro">
                            <img src={Rec_Lux} className="img-card-recomendacao-lux" />
                            <span className="carro-card-recomendacao-lux">Luxuoso</span>
                            <div className="recomendacao-btn-lux">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------ RECOMENDAÇÃO DE CARRO FIM --------------------- */}
            </main>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>
    )

}