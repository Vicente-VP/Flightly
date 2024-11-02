import React, { useState, useEffect } from 'react';
import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Filtro from "../../Componentes/FIltros/Filtro_Planos/FiltroPlano";
import CardVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";

import './stylePlanoEspecifico.css';

import { Link } from 'react-router-dom';

// Função para simular uma resposta da API
const fetchPlanoDataSimulado = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Altere "temConteudo" para 0 ou 1 para testar os diferentes cenários
            const temConteudo = 1;
            resolve(temConteudo ? {
                temConteudo: 1,
                conteudo: [
                    { nome: 'Passeio na praia', descricao: 'Visita à praia central e trilha costeira.' },
                    { nome: 'Jantar especial', descricao: 'Restaurante com vista panorâmica.' }
                ]
            } : {
                temConteudo: 0,
                conteudo: []
            });
        }, 1000); // 1 segundo de atraso
    });
};

export default function PlanoEspecifico() {
    const [conteudoPlano, setConteudoPlano] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanoData = async () => {
            try {
                const data = await fetchPlanoDataSimulado();
                setConteudoPlano(data.temConteudo ? data.conteudo : null);
            } catch (error) {
                console.error("Erro ao buscar dados do plano", error);
                setConteudoPlano(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanoData();
    }, []);

    return (
        <>
            <div style={{ height: 76 + 'px' }}><NavBar /></div>

            <div className="bodyPlanoEspecifico">
                <div className="auxilioNavegacao">
                    <Link to="/PlanosViagem" className="link-planoViagem">Plano de Viagem</Link>
                    <span className="planoViagem-Atual"> / Viagem Formatura</span>
                </div>

                {loading ? (
                    <p>Carregando...</p>
                ) : conteudoPlano ? (
                    <div className="conteudo-plano">
                        <Filtro></Filtro>

                        <CardVoo></CardVoo>
                    </div>
                ) : (
                    <div className='pagina-Vazia'>
                        <span className="vazioTitulo-PlanoEspecifico">
                            Parece que esse plano está vazio
                        </span>
                        <span className="subtiulo-PlanoEspecifico">
                            Navegue pelo nosso site para para <br></br> incrementar o plano Viagem Formatura
                        </span>
                    </div>
                )}
            </div>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>
    );
}
