import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import BarraPesquisaInfoVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";
import FiltroInfoVoo from "../../Componentes/Filtros/FiltroVoo/FiltroVoo";
import FiltroHosp from "../../Componentes/Filtros/Filtros_Hospedagem/FiltrosHospedagem";
import FiltroCarro from "../../Componentes/Filtros/Filtro_Carro/FiltrosCarro";
import FiltroPt from "../../Componentes/Filtros/Filtro_PontoTuristico/FiltrosPontosTuristico";
import CardInfoVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";
import PesquisaHospedagem from "../../Componentes/BarraPesquisa/Hospedagem/BarraPesquisaHospedagem";
import InfoHosp from "../../Componentes/Card_Informacoes/Hospedagem/Infos_Hosp";
//import InfoCarros from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";

import PopUpAddPlano from "../../Componentes/PopUp_Add_PlanoViagens/PopUpAddPlanoViagens";

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

    
    useEffect(() => {
        // Send asynchronous request based on requestType
        const fetchData = async () => {
            try {
                let response;
        
                switch (requestType) {
                    case 'flight':
                        response = await axios.get('http://144.22.183.38:8080/flights', {
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
                        response = await axios.get('http://144.22.183.38:8080/hotels', {
                            params: {
                                place: params.get('local'),
                                check_in: params.get('check_in'), // Assuming check-in date
                                check_out: params.get('check_out'), // Assuming check-out date
                                adults: params.get('adultos'),
                                children: params.get('crianca') // Assuming you have a way to collect this
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        console.log(response.data);
                        setExternalUrl(response.data[0]?.url); // Assuming the first entry contains a URL
                        setResults(response.data.slice(1)); // Assuming all response data is directly usable
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
                        {params.get('requestType') === 'flight' && (
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
                        />)}
                        
                        {params.get('requestType') === 'hotel' && (
                        <PesquisaHospedagem
                        local={local}
                        check_in={check_in}
                        check_out={check_out}
                        adultos = {params.get('adultos')}
                        criancaIdade = {params.get('crianca')}
                        onLocalChange={setLocal}
                        onCheck_inChange={setCheck_in}
                        onCheck_outChange={setCheck_out}
                        />
                        )}
                    </div>
                </div>
                <div className="main">
                    <div className="filtro-infoPage">
                    {
                        (() => {
                            switch (requestType) {
                                case 'flight':
                                    return <FiltroInfoVoo/>;
                                case 'hotel':
                                    return <FiltroHosp />;
                                case 'carro':
                                    return <FiltroCarro />;
                                case 'pontoTuristico':
                                    return <FiltroPt />;
                                default:
                                    return null;
                            }
                        })()
                    }
                    </div>
                    <div className="container-cards-infoPage">
                        {results.map((result, index) => {
                            switch (requestType) {
                                case 'flight':
                                    if(params.get('travel_type') === 'ow') {
                                    return <CardInfoVoo
                                    key={index} 
                                    index={index}
                                    destino={params.get('destino')}
                                    airport_from={result.airport_from}
                                    airport_to={result.airport_to}
                                    arrival={result.arrival} // This can be used if you have return result details
                                    company={result.company} // This now directly corresponds to the image filename
                                    duration={result.duration} // If needed for future use
                                    price={result.price}
                                    stops={result.stops}
                                    take_off={result.take_off}
                                    onClick={() => {
                                        results = {};
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
                                        setResults({});
                                    }}
                                    />;
                                }
                                case 'hotel':
                                     return <InfoHosp 
                                     key={index}
                                     image={result.image[0] || ""}
                                     hotelName={result.name}
                                     location={params.get('local')}
                                     rating={result.stars}
                                     votes={result.reviews}
                                     price={result.price}
                                     services={result.characteristics}
                                     description=""
                                     />;
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
