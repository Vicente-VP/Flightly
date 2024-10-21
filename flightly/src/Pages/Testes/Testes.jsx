// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
//import Compra from "../../Pages/Compra/Compra";

import './style_Testes.css';
import React from 'react';
import DetalhesCompra from "../../Componentes/Compra/Detalhes/CompraDetalhes";
import CompraDados from "../../Componentes/Compra/Detalhes/CompraDados";
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

            <CompraDados/>
                
            </div>
            

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
