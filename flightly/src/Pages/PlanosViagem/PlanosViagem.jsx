import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import BarraPesquisa from '../../Componentes/BarraPesquisaPlano/BarraPesquisaPlano';
import CardPlanoViagem from '../../Componentes/Cards/Card_Plano_Viagem/CardPlanoViagem';
import Btns_PlanoViagens from '../../Componentes/Btns_PlanoViagens/Btns_PlanoViagens';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './PlanosViagem.css';

export default function PlanosViagem() {
    const [planos, setPlanos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => {
                console.log(response.data);
                setPlanos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div style={{ height: '76px' }}>
                <NavBar />
            </div>

            <div className="main-grid-planos-viagem">
                <label className="titulo-planos-viagem">
                    Planos de Viagem
                </label>

                <div className="barra-pesquisa-planos-viagem">
                    <BarraPesquisa />
                </div>

                <div className="grid-cards-planos-viagem">
                    <div></div>
                    {planos.map((plano) => {
                        return (
                            <Link to={`/planos-viagem/${plano.id}`}>
                                <CardPlanoViagem
                                    key={plano.id}
                                    id={plano.id}
                                    nome={plano.nome}
                                    preco={plano.preco}
                                    descricao={plano.descricao}
                                    imagem={plano.imagem}
                                />
                            </Link>
                        );
                    })}
                    <div>
                        <Btns_PlanoViagens />
                    </div>
                    <div></div>
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <div></div>
                </div>
            </div>
        </>
    );
}
