import React, { useState, useEffect } from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import Footer from '../../Componentes/Footer/Footer';
import BarraPesquisa from '../../Componentes/BarraPesquisaPlano/BarraPesquisaPlano';
import CardPlanoViagem from '../../Componentes/Cards/Card_Plano_Viagem/CardPlanoViagem';
import Btns_PlanoViagens from '../../Componentes/Btns_PlanoViagens/Btns_PlanoViagens';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PopUpCriarPlano from '../../Componentes/PopUpCriarPlano/PopUpCriarPlano';
import PopUpCarregamento from '../../Componentes/PopUpCarregamento/PopUpCarregamento'; // Adicionando o componente de carregamento

import FundoPlano from '../../Images/Card_Plano_Viagem/recife_cardInfo.png';
import FundoPlano2 from '../../Images/Card_Plano_Viagem/Maceio.png';
import FundoPlano3 from '../../Images/Card_Plano_Viagem/Los_Angeles.png';
import FundoPlano4 from '../../Images/Card_Plano_Viagem/Rio_de_Janeiro.png';
import FundoPlano5 from '../../Images/Card_Plano_Viagem/Sampa.png';

import './PlanosViagem.css';

export default function PlanosViagem() {
    const [fundos, setFundos] = useState([FundoPlano, FundoPlano2, FundoPlano3, FundoPlano4, FundoPlano5]);
    const [planos, setPlanos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar o loading
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        axios.get(`https://flightlydbapi.onrender.com/getPlanos?id_usuario=${localStorage.getItem('userid')}`)
            .then(response => {
                console.log(response.data);
                setPlanos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); // Desativa o *loading* após a requisição
            });
    }, []);

    function handleClick() {
        setClicked(!clicked);
        console.log(clicked);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
            <div style={{ height: '76px' }}>
                <NavBar />
            </div>

            {loading ? (
                <PopUpCarregamento texto="Carregando planos de viagem..." />
            ) : (
                <div className="main-grid-planos-viagem">
                    <label className="titulo-planos-viagem">
                        Planos de Viagem
                    </label>

                    <div className="barraBotoes-container">
                        <div className="barra-pesquisa-planos-viagem">
                            <BarraPesquisa />
                        </div>
                        <Btns_PlanoViagens handleClick={handleClick} />
                    </div>

                    <div className="grid-cards-planos-viagem">
                        {clicked ? <div className="popupadd"><PopUpCriarPlano handleClick={handleClick} /></div> : null}

                        {planos.map((plano, i) => {
                            // Agrupando os planos em containers
                            if (i % 4 === 0) {
                                return (
                                    <div className="container-cardsPlanoViagem" key={`container-${i}`}>
                                        {planos.slice(i, i + 5).map((subPlano, j) => (
                                            <Link to={`/PlanoEspecifico?id=${subPlano[0]}&nome=${subPlano[1]}`} className='LinkPlanos' key={subPlano[0]}>
                                                <CardPlanoViagem
                                                    index={i + j}
                                                    fundos={fundos[getRandomInt(5)]}
                                                    id={subPlano[0]}
                                                    nome={subPlano[1]}
                                                    preco={subPlano.preco}
                                                    descricao={subPlano.descricao}
                                                    imagem={subPlano.imagem}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
}
