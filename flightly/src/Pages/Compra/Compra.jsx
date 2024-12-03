import React from "react";
import NavBar from "../../Componentes/NavBar/NavBar";
import "./style.css";

import CompraDetalhes from "../../Componentes/Compra/Detalhes/CompraDetalhes";
import InfoPassageiro from "../../Componentes/Compra/Detalhes/InfoPassageiro";
import VooIdaVolta from "../../Componentes/Compra/Detalhes/VooIdaVolta";
import CompraCarro from "../../Componentes/Compra/Detalhes/CompraCarro";
import CompraHosp from "../../Componentes/Compra/Detalhes/CompraHosp";
import CompraDados from "../../Componentes/Compra/Detalhes/CompraDados";
import CompraFormaPag from "../../Componentes/Compra/Detalhes/CompraFormaPag";

import logoGol from "../../Images/TelaCompra/companhia.png";

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Compra() {

    const navigate = useNavigate();

    const itensCompra = [
        { name: "Item 1", preco: 10.0 },
        { name: "Item 2", preco: 20.0 },
        { name: "Item 3", preco: 30.0 },
    ];

    const vooSimulado = {
        origem: "São Paulo",
        destino: "Rio de Janeiro",
        passageiros: 1,
        data: "27 de Julho de 2024",
        aeroportoIda: "GRU",
        horarioIda: "10:00 AM",
        aeroportoVolta: "SDU",
        horarioVolta: "06:00 PM",
        duracaoVoo: "1h 30min",
        companhia: "Gol",
        logoCompanhia: logoGol,
    };

    const [voos, setVoos] = useState([]);
    const [hoteis, setHoteis] = useState([]);
    const [carros, setCarros] = useState([]);

    const [itens, setItens] = useState([]);

    const params = new URLSearchParams(window.location.search);
    const idsVoos = params.getAll("idsVoos[]") || "";
    const idsHoteis = params.getAll("idsHoteis[]") || "";
    const idsCarros = params.getAll("idsCarros[]") || "";

    const [loading, setLoading] = useState(true);

    const hasFetched = useRef(false); // To track if requests have been sent

    const fetchDetails = async () => {
      try {
        let fetchedVoos = [];
        let fetchedHoteis = [];
        let fetchedCarros = [];
  
        // Fetch voos
        if (idsVoos.length > 0) {
          const voosResponse = await axios.get(
            "https://flightlydbapi.onrender.com/getDetalhesVooHistorico",
            { params: { "ids_voos[]": idsVoos } }
          );
          fetchedVoos = voosResponse.data;
          setVoos(fetchedVoos);
          console.log("Voos fetched:", fetchedVoos);
        }
  
        // Fetch hoteis
        if (idsHoteis.length > 0) {
          const hoteisResponse = await axios.get(
            "https://flightlydbapi.onrender.com/getDetalhesHospedagemHistorico",
            { params: { "ids_hospedagens[]": idsHoteis } }
          );
          fetchedHoteis = hoteisResponse.data;
          setHoteis(fetchedHoteis);
          console.log("Hoteis fetched:", fetchedHoteis);
        }
  
        // Fetch carros
        if (idsCarros.length > 0) {
          const carrosResponse = await axios.get(
            "https://flightlydbapi.onrender.com/getDetalhesCarroHistorico",
            { params: { "ids_carros[]": idsCarros } }
          );
          fetchedCarros = carrosResponse.data;
          setCarros(fetchedCarros);
          console.log("Carros fetched:", fetchedCarros);
        }
  
        // Combine all items into one array
        const combinedItens = [
          ...fetchedVoos.map((voo, index) => ({
            name: `Voo ${index + 1}`,
            preco: voo[5],
          })),
          ...fetchedHoteis.map((hotel, index) => ({
            name: `Hotel ${index + 1}`,
            preco: hotel[3],
          })),
          ...fetchedCarros.map((carro, index) => ({
            name: `Carro ${index + 1}`,
            preco: carro[4],
          })),
        ];
  
        setItens(combinedItens);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
  
    useEffect(() => {
      if (!hasFetched.current) {
        hasFetched.current = true; // Mark as fetched only once
        fetchDetails(); // Call fetch logic
        console.log(voos);
      }
    }, [idsVoos, idsHoteis, idsCarros]); // Run whenever these dependencies change

    const comprarItens=async()=>{
        setLoading(true);
        try{
            idsVoos.forEach(async (idVoo) => {
                await axios.post("https://flightlydbapi.onrender.com/comprarVoo", {
                    id_voo: idVoo,
                    id_usuario: localStorage.getItem("userid"),
                });
            });
            idsHoteis.forEach(async (idHotel) => {
                await axios.post("https://flightlydbapi.onrender.com/comprarHospedagem", {
                    id_hospedagem: idHotel,
                    id_usuario: localStorage.getItem("userid"),
                });
            });
            idsCarros.forEach(async (idCarro) => {
                await axios.post("https://flightlydbapi.onrender.com/comprarCarro", {
                    id_carro: idCarro,
                    id_usuario: localStorage.getItem("userid"),
                });
            });

        }
        catch(error){
            console.error("Error buying items:", error);
        }
        finally{
            setLoading(false);
            alert("Compra realizada com sucesso!");
            navigate("/Perfil");
        }
    }

    return (
        <>
            <NavBar />

            <h1 className="title-paginaCompra">
                Finalize sua compra!
            </h1>

            <div className="finalizar-compra">
                <CompraDetalhes itens={itens}/>
                <div className="container-infoEvoos">
                    <div className="card-passageiro">
                        <InfoPassageiro />
                    </div>
                    <div></div>
                    <div className="container-cardsVoos">
                        {voos.length > 0 ? (
                            voos.map((voo, index) => (
                                <VooIdaVolta
                                    key={index} // Use a key prop for mapping
                                    destino={voo[10]}
                                    passageiros={voo[6] + voo[7]}
                                    data={voo[1]}
                                    companhia={voo[0]}
                                    aeroportoIda={voo[8]}
                                    horarioIda={voo[2]}
                                    aeroportoVolta={voo[9]}
                                    horarioVolta={voo[3]}
                                    escala={voo[4]}
                                />
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                { carros?.length > 0 ? (
                    carros.map((carro, index) => (
                        <CompraCarro
                            key={index}
                            modelo={carro[0]}
                            dataRetirada={carro[1]}
                            dataDevolucao={carro[2]}
                        />
                    ))
                ) : (
                    <></>
                )}

                {hoteis?.length > 0 ? (
                    hoteis.map((hotel, index) => (
                        <CompraHosp
                            key={index}
                            nomeHotel={hotel[0]}
                            dataCheckIn={hotel[1]}
                            dataCheckOut={hotel[2]}
                            estrelas={hotel[4]}
                        />
                    ))
                ) : (
                    <></>
                )}
                <div className="card-confirmarEformaPag">
                    <CompraDados />
                    <div></div>
                    <CompraFormaPag />
                </div>

                <div className="divBotao-comprar">
                    <button className="botao-comprar" onClick={comprarItens}>Comprar</button>
                </div>
            </div>


        </>
    );
}