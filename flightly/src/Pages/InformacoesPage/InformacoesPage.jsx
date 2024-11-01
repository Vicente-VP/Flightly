import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import BarraPesquisaInfoVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";
import FiltroInfoVoo from "../../Componentes/Filtros/FiltroVoo/FiltroVoo";
import CardInfoVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";
//import InfoHosp from "../../Componentes/Card_Informacoes/Hospedagem/Infos_Hosp";
//import InfoCarros from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";

import './styleInformacoesPage.css';
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function InformacoesPage() {
    var [results, setResults] = useState([]);
    const [externalUrl, setExternalUrl] = useState(null);
    const location = useLocation(); // Get location object to access query parameters
    const params = new URLSearchParams(location.search); // Parse query parameters

    const requestType = params.get('requestType'); // Get request type
    

    const [origem, setOrigem] = useState(params.get('origem') || "");
    const [destino, setDestino] = useState(params.get('destino') || "");
    const [ida, setIda] = useState(params.get('ida') || "");
    const [volta, setVolta] = useState(params.get('volta') || "");
    const [classe, setClasse] = useState(params.get('classe') || "");
    
    const [local, setLocal] = useState(params.get('local') || "");
    const [check_in, setCheck_in] = useState(params.get('check_in') || "");
    const [check_out, setCheck_out] = useState(params.get('check_out') || "");
    const [adults, setAdults] = useState(params.get('adults') || "");
    const [children, setChildren] = useState(params.get('children') || "");
    
    useEffect(() => {
        // Send asynchronous request based on requestType
        const fetchData = async () => {
            try {
                let response;
        
                switch (requestType) {
                    case 'flight':
                        response = await axios.get('http://localhost:8080/flights', {
                            params: {
                                type: params.get('travel_type'), // Round trip or one way
                                from: params.get('origem'),
                                to: params.get('destino'),
                                departure: params.get('ida'),
                                return: params.get('volta'),
                                class: params.get('classe'),
                                adults: params.get('adultos'),
                                children: params.get('criancaIdade'), // Assuming you have a way to collect this
                                infants_seat: params.get('criancaAssento'),
                                infants_lap: params.get('criancaColo')
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
        
                        // Separate the URL from the rest of the data
                        const urlData = response.data[0]; // The first element containing the URL
                        const flightData = response.data.slice(1); // Remaining data
        
                        // Store the URL and flight data in state
                        setExternalUrl(urlData?.url); // Assuming the first entry contains a URL
                        setResults(flightData); // Remaining data for flights
                        
                        break;
        
                    case 'hotel':
                        response = await axios.get('http://localhost:8080/hotels', {
                            params: {
                                place: params.get('destino'),
                                check_in: params.get('checkIn'), // Assuming check-in date
                                check_out: params.get('checkOut'), // Assuming check-out date
                                adults: params.get('adultos'),
                                children: params.get('criancas') // Assuming you have a way to collect this
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        setResults(response.data); // Assuming all response data is directly usable
                        break;
        
                    case 'car':
                        response = await axios.get('http://localhost:8080/cars', {
                            params: {
                                pickupLocation: params.get('origem'),
                                dropoffLocation: params.get('destino'),
                                pickupDate: params.get('pickupDate'), // Assuming pickup date
                                dropoffDate: params.get('dropoffDate') // Assuming dropoff date
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        setResults(response.data); // Assuming all response data is directly usable
                        break;
        
                    default:
                        console.error("Invalid request type");
                        return;
                }
        
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [location.search, requestType]);
    return (
        <>
            <div style={{height: 75+'px'}}><NavBar/></div>
            

            <div className="container-informacoes">
                <div className="barra-pesquisa-infoPage">
                    <span className="titulo-infoPage">Encontre voos e adicione aos seus planos de viagem</span>
                    <div>
                        <BarraPesquisaInfoVoo 
                        origem={origem}
                        destino={destino}
                        ida={ida}
                        volta={volta}
                        adultos = {params.get('adultos')}
                        criancaIdade = {params.get('criancaIdade')}
                        criancaAssento = {params.get('criancaAssento')}
                        criancaColo = {params.get('criancaColo')}
                        classe = {params.get('classe')}
                        onOrigemChange={setOrigem}
                        onDestinoChange={setDestino}
                        onIdaChange={setIda}
                        onVoltaChange={setVolta}
                        onClasseChange={setClasse}
                        />
                    </div>
                </div>
                <div className="main">
                    <div className="filtro-infoPage"><FiltroInfoVoo/></div>
                    <div className="container-cards-infoPage">
                        {results.map((result, index) => {
                            switch (requestType) {
                                case 'flight':
                                    if(params.get('travel_type') === 'ow') {
                                    return <CardInfoVoo
                                    key={index} 
                                    index={index}
                                    airport_from={result.airport_from}
                                    airport_to={result.airport_to}
                                    arrival={result.arrival} // This can be used if you have return result details
                                    company={result.company} // This now directly corresponds to the image filename
                                    duration={result.duration} // If needed for future use
                                    price={result.price}
                                    stops={result.stops}
                                    take_off={result.take_off}
                                    onClick={() => {
                                        results = [];
                                    }}
                                />;
                                }
                                else {
                                    return <CardInfoVoo
                                    key={index} 
                                    index={index}
                                    airport_from={result.airport_from}
                                    airport_to={result.airport_to}
                                    arrival={result.arrival} // This can be used if you have return result details
                                    company={result.company} // This now directly corresponds to the image filename
                                    duration={result.duration} // If needed for future use
                                    price={result.price}
                                    stops={result.stops}
                                    take_off={result.take_off}
                                    onClick={() => {
                                        results = [];
                                    }}
                                    />;
                                }
                                // case 'hotel':
                                //     return <InfoHosp key={index} {...result} />;
                                // case 'car':
                                //     return <InfoCarros key={index} {...result} />;
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
                <Footer/>       
            </div>
        </>
    )
}
