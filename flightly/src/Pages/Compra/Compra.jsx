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

export default function Compra() {

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
        logoCompanhia: logoGol,
    };

    return (
        <>
            <NavBar />

            <h1 className="title-paginaCompra">
                Finalize sua compra!
            </h1>

            <div className="finalizar-compra">
                <CompraDetalhes />
                <div className="container-infoEvoos">
                    <div className="card-passageiro">
                        <InfoPassageiro />
                    </div>
                    <div></div>
                    <div className="container-cardsVoos">
                        <VooIdaVolta
                            origem={vooSimulado.origem}
                            destino={vooSimulado.destino}
                            passageiros={vooSimulado.passageiros}
                            data={vooSimulado.data}
                            aeroportoIda={vooSimulado.aeroportoIda}
                            horarioIda={vooSimulado.horarioIda}
                            aeroportoVolta={vooSimulado.aeroportoVolta}
                            horarioVolta={vooSimulado.horarioVolta}
                            duracaoVoo={vooSimulado.duracaoVoo}
                            logoCompanhia={vooSimulado.logoCompanhia}
                        />
                        <VooIdaVolta
                            origem={vooSimulado.origem}
                            destino={vooSimulado.destino}
                            passageiros={vooSimulado.passageiros}
                            data={vooSimulado.data}
                            aeroportoIda={vooSimulado.aeroportoIda}
                            horarioIda={vooSimulado.horarioIda}
                            aeroportoVolta={vooSimulado.aeroportoVolta}
                            horarioVolta={vooSimulado.horarioVolta}
                            duracaoVoo={vooSimulado.duracaoVoo}
                            logoCompanhia={vooSimulado.logoCompanhia}
                        />
                    </div>
                </div>
                <CompraCarro />
                <CompraHosp />
                <div className="card-confirmarEformaPag">
                    <CompraDados />
                    <div></div>
                    <CompraFormaPag />
                </div>

                <div className="botao-comprar">

                </div>
            </div>


        </>
    );
}