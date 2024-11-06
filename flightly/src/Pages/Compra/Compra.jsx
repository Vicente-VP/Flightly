import React from "react";
import CompraFormaPag from "../../Componentes/Compra/Detalhes/CompraFormaPag";
import CompraTotal from "../../Componentes/Compra/CompraTotalPlano/CompraTotal";
import NavBar from "../../Componentes/NavBar/NavBar";
import "./style.css";
import CompraDados from "../../Componentes/Compra/Detalhes/CompraDados";
import CompraDetalhes from "../../Componentes/Compra/Detalhes/CompraDetalhes";


export default function Compra(){

    const itensCompra = [
        { name: "Item 1", preco: 10.0 },
        { name: "Item 2", preco: 20.0 },
        { name: "Item 3", preco: 30.0 },
    ];

    return(
        <>
        <div className="save_navbar">
        <NavBar/>
        </div>
        <div className="ConteudoCompra">
            <CompraDetalhes itens={itensCompra}/>
            <div className="double-item">
            <CompraDados/>
            <CompraFormaPag/>
            </div>

            </div>
        </>       
    );
}