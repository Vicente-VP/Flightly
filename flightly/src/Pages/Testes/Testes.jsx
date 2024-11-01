// ARQUIVO DEDICADO PARA TESTE DE COMPONENTES

import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";

import './style_Testes.css';
import React from 'react';
import CompraDetalhes from "../../Componentes/FIltros/Filtro_Planos/FiltroPlano";

export default function Testes() {
    const itensCompra = [
        { name: "Item 1", preco: 10.0 },
        { name: "Item 2", preco: 20.0 },
        { name: "Item 3", preco: 30.0 },
    ];
    return (
        <>

            <div className="navbar-testes"><NavBar/></div>

            <div className="conteudo-testes">

                <CompraDetalhes />
            </div>

            <div className="footer-testes"><Footer/></div>
        </>
    )
}
