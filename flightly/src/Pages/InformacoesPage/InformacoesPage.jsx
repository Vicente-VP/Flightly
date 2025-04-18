import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import FiltroInfoVoo from "../../Componentes/Filtros/FiltroVoo/FiltroVoo";
import FiltroHosp from "../../Componentes/Filtros/Filtros_Hospedagem/FiltrosHospedagem";
import FiltroCarro from "../../Componentes/Filtros/Filtro_Carro/FiltrosCarro";
import FiltroPt from "../../Componentes/Filtros/Filtro_PontoTuristico/FiltrosPontosTuristico";

import CardInfoVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";
import InfoHosp from "../../Componentes/Card_Informacoes/Hospedagem/Infos_Hosp";
import CardInfoCarros from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";
import CardInfoPTuristicos from "../../Componentes/Card_Informacoes/PontosTuristicos/CardInfoPTuristicos"

import BarraPesquisaInfoVoo from "../../Componentes/BarraPesquisa/Voo/BarraPesquisaVoo";
import PesquisaHospedagem from "../../Componentes/BarraPesquisa/Hospedagem/BarraPesquisaHospedagem";
import BarraPesquisaCarro from "../../Componentes/BarraPesquisa/Carro/BarraPesquisaCarro"
import BarraPesquisaPontoTuristico from "../../Componentes/BarraPesquisa/PontoTuristico/BarraPesquisaPontoTuristico"
//import InfoCarros from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";
import PopUpCarregamento from "../../Componentes/PopUpCarregamento/PopUpCarregamento";

import './styleInformacoesPage.css';
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function InformacoesPage() {
    var [results, setResults] = useState([]);
    const [externalUrl, setExternalUrl] = useState(null);
    const location = useLocation(); // Get location object to access query parameters
    const params = new URLSearchParams(location.search); // Parse query parameters
    const [loading, setLoading] = useState(true);

    const requestType = params.get('requestType'); // Get request type


    const [origem, setOrigem] = useState(params.get('origem') || "");
    const [destino, setDestino] = useState(params.get('destino') || "");
    const [ida, setIda] = useState(params.get('ida') || "");
    const [volta, setVolta] = useState(params.get('volta') || "");
    const [classe, setClasse] = useState(params.get('classe') || "");

    const [local, setLocal] = useState(params.get('local') || "");
    const [check_in, setCheck_in] = useState(params.get('check_in') || "");
    const [check_out, setCheck_out] = useState(params.get('check_out') || "");

    const [place, setPlace] = useState(params.get('place') || "");
    const [dataRetirada, setDataRetirada] = useState(params.get('data_retirada') || "");
    const [horaRetirada, setHoraRetirada] = useState(params.get('hora_retirada') || "");
    const [dataDevolucao, setDataDevolucao] = useState(params.get('data_devolucao') || "");
    const [horaDevolucao, setHoraDevolucao] = useState(params.get('hora_devolucao') || "");

    const [attraction, setAttraction] = useState(params.get('attraction') || "");



    const fetchData = async () => {
        try {
            let response;

            switch (requestType) {
                case 'flight':
                    try{
                    response = await axios.get('http://144.22.183.38:8080/flights', {
                        // http://localhost:8080
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
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setResults([]);

                }
                finally {
                    setLoading(false);
                }
                    break;

                case 'hotel':
                    try{
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
                }
                catch (error) {
                    console.error("Error fetching data:", error);
                    setResults([]);
                }
                finally {
                    setLoading(false);
                }
                    break;
    
                case 'car':
                    try{
                    response = await axios.get('http://144.22.183.38:8080/cars', {
                        params: {
                            place: params.get('place'),
                            data_retirada: params.get('data_retirada'),
                            hora_retirada: params.get('hora_retirada'),
                            data_devolucao: params.get('data_devolucao'),
                            hora_devolucao: params.get('hora_devolucao'),
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setExternalUrl(response.data[0]?.url);
                    setResults(response.data.slice(1)); // Assuming all response data is directly usable
                }
                catch(error){
                    console.error("Error fetching data:", error);
                    setResults([]);
                }
                finally {
                    setLoading(false);
                }
                    break;

                case 'pturistico':
                    try{
                    response = await axios.get('http://144.22.183.38:8080/attractions', {
                        params: {
                            place: params.get('place')
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setExternalUrl(response.data[0]?.url);
                    setResults(response.data.slice(1)); // Assuming all response data is directly usable
                }
                catch(error){
                    console.error("Error fetching data:", error);
                    setResults([]);
                }
                finally {
                    setLoading(false);
                }
                    break;
                case 'filteredflight':
                    try{
                        const data = {
                            "url":params.get('url'),
                            "filters": {
                                "max_price": params.get('price'),
                                "take_off": params.get('partida'),
                                "company": params.get('companies').split(',')
                            }
                        }
                    response = await axios.post('http://144.22.183.38:8080/flights/filter', data,{
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setResults(response.data.slice(1)); // Assuming all response data is directly usable
                    setExternalUrl(response.data[0]?.url);
                    }
                    catch(error){
                        console.error("Error fetching data:", error);
                        setResults([]);
                    }
                    finally {
                        setLoading(false);
                    }
                    break;

                default:
                    console.error("Invalid request type");
                    return;
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const hasFetched = useRef(false); //Para evitar duas requisições

    useEffect(() => {
        if(hasFetched.current) return;
        fetchData();
        hasFetched.current = true;
    }, []);

    return (
        <>
            <div style={{ height: 75 + 'px' }}><NavBar /></div>

            {loading && (
                <>
                        <PopUpCarregamento texto="Aguarde enquanto realizamos a busca!" />
                </>
            )}

            <div className="container-informacoes">
                <div className="barra-pesquisa-infoPage">
                    <span className="titulo-infoPage">Encontre voos e adicione aos seus planos de viagem</span>
                    <div>
                        {(params.get('requestType') === 'flight' || params.get('requestType') === 'filteredflight') && (
                            <BarraPesquisaInfoVoo
                                origem={origem}
                                destino={destino}
                                ida={ida}
                                volta={volta}
                                adultos={params.get('adultos')}
                                criancaIdade={params.get('criancaIdade')}
                                criancaAssento={params.get('criancaAssento')}
                                criancaColo={params.get('criancaColo')}
                                classe={params.get('classe')}
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
                                adultos={params.get('adultos')}
                                criancaIdade={params.get('crianca')}
                                onLocalChange={setLocal}
                                onCheck_inChange={setCheck_in}
                                onCheck_outChange={setCheck_out}
                            />
                        )}
                        {params.get('requestType') === 'car' && (
                            <BarraPesquisaCarro
                                place={place}
                                dataRetirada={dataRetirada}
                                dataDevolucao={dataDevolucao}
                            />
                        )}

                        {params.get('requestType') === 'pturistico' && (
                            <BarraPesquisaPontoTuristico 
                                attraction={attraction}
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
                                    case 'filteredflight':
                                        return <FiltroInfoVoo
                                            origem={origem}
                                            destino={destino}
                                            ida={ida}
                                            volta={volta}
                                            adultos={params.get('adultos')}
                                            criancaIdade={params.get('criancaIdade')}
                                            criancaAssento={params.get('criancaAssento')}
                                            criancaColo={params.get('criancaColo')}
                                            classe={params.get('classe')} 
                                            externalUrl={externalUrl}
                                            travelType={params.get('travel_type')}
                                        />;
                                    case 'hotel':
                                        return <FiltroHosp />;
                                    case 'car':
                                        return <FiltroCarro />;
                                    case 'pturistico':
                                        return <FiltroPt />;
                                    default:
                                        return null;
                                }
                            })()
                        }
                    </div>
                    <div className={'container-cards-infoPage ' + (requestType==='pturistico' ? 'pt' : '')}>
                        {loading && (
                            <>

                                <div class="loadingCard">
                                    <div class="loading-overlay"></div>
                                    <div class="skeleton-title skeleton"></div>
                                    <div class="skeleton-line skeleton"></div>
                                    <div class="skeleton-line skeleton" style={{ width: "80%" }}></div>
                                </div>
                                <div class="loadingCard">
                                    <div class="loading-overlay"></div>
                                    <div class="skeleton-title skeleton"></div>
                                    <div class="skeleton-line skeleton"></div>
                                    <div class="skeleton-line skeleton" style={{ width: "80%" }}></div>
                                </div>
                                <div class="loadingCard">
                                    <div class="loading-overlay"></div>
                                    <div class="skeleton-title skeleton"></div>
                                    <div class="skeleton-line skeleton"></div>
                                    <div class="skeleton-line skeleton" style={{ width: "80%" }}></div>
                                </div>
                                <div class="loadingCard">
                                    <div class="loading-overlay"></div>
                                    <div class="skeleton-title skeleton"></div>
                                    <div class="skeleton-line skeleton"></div>
                                    <div class="skeleton-line skeleton" style={{ width: "80%" }}></div>
                                </div>
                                <div class="loadingCard">
                                    <div class="loading-overlay"></div>
                                    <div class="skeleton-title skeleton"></div>
                                    <div class="skeleton-line skeleton"></div>
                                    <div class="skeleton-line skeleton" style={{ width: "80%" }}></div>
                                </div>
                            </>
                        )}
                        {(results.length <= 0)  && !loading ? (<div className="notFound">No results found ...</div>):
                        results.map((result, index) => {
                            switch (requestType) {
                                case 'flight':
                                case 'filteredflight':
                                    console.log('a')
                                    if (params.get('travel_type') === 'ow') {
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
                                                setResults([]);
                                            }}
                                        />;
                                    }
                                case 'hotel':
                                    return <InfoHosp
                                        key={index}
                                        image={result.image || ""}
                                        hotelName={result.name}
                                        location={params.get('local')}
                                        rating={result.stars}
                                        votes={result.reviews}
                                        price={result.price}
                                        services={result.characteristics}
                                        description=""
                                    />;
                                case 'car':
                                    return <CardInfoCarros
                                        key={index}
                                        carImage={result.image || ""}
                                        locImage={result.companyImage || ""}
                                        retirada={params.get('place')}
                                        assento={result.assentos}
                                        cambio={result.cambio}
                                        locadora={result.company}
                                        marca={result.marca}
                                        modelo={result.modelo}
                                        //porta={result.}
                                        //malaPeq={result.}
                                        //malaGr={result.}
                                        preco={result.price}
                                        tipo={result.tipo}
                                    />;
                                case 'pturistico':
                                    return <CardInfoPTuristicos
                                        key={index}
                                        titulo={result.name}
                                        image={result.image}
                                        preco={result.price}
                                        estrelas={result.stars}
                                        reviews={parseFloat((result.reviews).match(/\d+(\.\d+)?/)[0])}
                                    />
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
