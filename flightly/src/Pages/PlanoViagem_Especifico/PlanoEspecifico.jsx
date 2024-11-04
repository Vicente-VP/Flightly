import React, { useState, useEffect } from 'react';
import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Filtro from "../../Componentes/FIltros/Filtro_Planos/FiltroPlano";
import CardVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";
import CardHospedagem from "../../Componentes/Card_Informacoes/Hospedagem/Infos_Hosp";
import CardPTuristico from "../../Componentes/Card_Informacoes/PontosTuristicos/CardInfoPTuristicos";
import CardCarro from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";
import CompraTotal from "../../Componentes/Compra/CompraTotalPlano/CompraTotal";

import './stylePlanoEspecifico.css';
import { Link } from 'react-router-dom';

const fetchPlanoDataSimulado = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const temConteudo = 1;
            resolve(temConteudo ? {
                temConteudo: 1,
                conteudo: []
            } : {
                temConteudo: 0,
                conteudo: []
            });
        }, 1000);
    });
};

export default function PlanoEspecifico() {
    const [conteudoPlano, setConteudoPlano] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeFilters, setActiveFilters] = useState({
        voos: true,
        hospedagens: true,
        carros: true,
        pontosTuristicos: true,
    });
    const [compraTotalVisible, setCompraTotalVisible] = useState(true);
    const [checkboxVisible, setCheckboxVisible] = useState({
        voos: false,
        hospedagens: false,
        carros: false,
        pontosTuristicos: false,
    }); // Estado para visibilidade de cada checkbox

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

    const handleFilterChange = (newActiveFilters) => {
        setActiveFilters(newActiveFilters);
    };

    const handleEditButtonClick = () => {
        setCompraTotalVisible(!compraTotalVisible);
        setCheckboxVisible((prevState) => ({
            voos: !prevState.voos,
            hospedagens: !prevState.hospedagens,
            carros: !prevState.carros,
            pontosTuristicos: !prevState.pontosTuristicos,
        })); // Alterna a visibilidade de todas as checkboxes ao clicar no botão de editar
    };

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
                    <>
                        <Filtro 
                            onFilterChange={handleFilterChange} 
                            onEditButtonClick={handleEditButtonClick} // Passa a função para JSX1
                        />
                        <div className="conteudo-plano">
                            <div className="containerCard-planoEspecifico">
                                <input 
                                    type="checkbox" 
                                    name="checkbox-deleteVoo" 
                                    id="checkbox-deleteVoo" 
                                    className={`checkboxDelete-planoEspecifico ${checkboxVisible.voos ? 'visible' : ''}`} 
                                />
                                {activeFilters.voos && <CardVoo />}
                            </div>

                            <div className="containerCard-planoEspecifico">
                                <input 
                                    type="checkbox" 
                                    name="checkbox-deleteHospedagem" 
                                    id="checkbox-deleteHospedagem" 
                                    className={`checkboxDelete-planoEspecifico ${checkboxVisible.hospedagens ? 'visible' : ''}`} 
                                />
                                {activeFilters.hospedagens && <CardHospedagem />}
                            </div>

                            <div className="containerCard-planoEspecifico">
                                <input 
                                    type="checkbox" 
                                    name="checkbox-deleteCarro" 
                                    id="checkbox-deleteCarro" 
                                    className={`checkboxDelete-planoEspecifico ${checkboxVisible.carros ? 'visible' : ''}`} 
                                />
                                {activeFilters.carros && <CardCarro />}
                            </div>

                            <div className="containerCard-planoEspecifico">
                                <input 
                                    type="checkbox" 
                                    name="checkbox-deletePTuristico" 
                                    id="checkbox-deletePTuristico" 
                                    className={`checkboxDelete-planoEspecifico ${checkboxVisible.pontosTuristicos ? 'visible' : ''}`} 
                                />
                                {activeFilters.pontosTuristicos && <CardPTuristico />}
                            </div>
                        </div>
                        {compraTotalVisible && (
                            <div className='container-compraTotal'>
                                <CompraTotal />
                            </div>
                        )}
                    </>
                ) : (
                    <div className='pagina-Vazia'>
                        <span className="vazioTitulo-PlanoEspecifico">
                            Parece que esse plano está vazio
                        </span>
                        <span className="subtiulo-PlanoEspecifico">
                            Navegue pelo nosso site para incrementar o plano Viagem Formatura
                        </span>
                    </div>
                )}
            </div>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>
    );
}
