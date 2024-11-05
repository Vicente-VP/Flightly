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
        axios.get(`https://flightlydbapi.onrender.com/getPlanos?id_usuario=${localStorage.getItem('userid')}`)
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
                            <Link to={`/PlanoEspecifico?id=${plano[0]}`}>
                                <CardPlanoViagem
                                    key={plano[0]}
                                    id={plano[0]}
                                    nome={plano[1]}
                                    preco={plano.preco}
                                    descricao={plano.descricao}
                                    imagem={plano.imagem}
                                />
                            </Link>
                        );
                    })}
                    <div>
                        <Btns_PlanoViagens/>
                    </div>
                    <div></div>

                    <div></div>
                </div>
            </div>
        </>
    );
}
