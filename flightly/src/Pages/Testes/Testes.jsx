// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
//import Compra from "../../Pages/Compra/Compra";

import './style_Testes.css';
import React from 'react';
import DetalhesCompra from "../../Componentes/Compra/Detalhes/CompraDetalhes";
//import CompraFormaPag from "../../Componentes/Compra/Detalhes/CompraFormaPag";

export default function Home() {
    const itensCompra = [
        { name: "Item 1", preco: 10.0 },
        { name: "Item 2", preco: 20.0 },
        { name: "Item 3", preco: 30.0 },
    ];
    
    return (
        
        <>
            <div className="navbar-testes"><NavBar/></div>
            
            <div className="conteudo-testes">

            <DetalhesCompra itens={itensCompra} />

            <div className="Details">
                <div className="Name_Price_details">
                        <label className="item_details">Nome produto</label>
                        <label className="preco_details">R$ ....</label>
                </div>
                <hr/>

                <div className="Name_Price_details">
                    <label className="item_details">Total</label>
                    <label className="preco_details">R$ ....</label>
                </div>


            </div>
                
            </div>
            

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
