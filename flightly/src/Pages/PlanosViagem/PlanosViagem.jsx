import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import BarraPesquisa from '../../Componentes/BarraPesquisaPlano/BarraPesquisaPlano';
import CardPlanoViagem from '../../Componentes/Cards/Card_Plano_Viagem/CardPlanoViagem';
import Btns_PlanoViagens from '../../Componentes/Btns_PlanoViagens/Btns_PlanoViagens';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PopUpCriarPlano from '../../Componentes/PopUpCriarPlano/PopUpCriarPlano';

import FundoPlano from '../../Images/Card_Plano_Viagem/recife_cardInfo.png';
import FundoPlano2 from '../../Images/Card_Plano_Viagem/Maceio.png';
import FundoPlano3 from '../../Images/Card_Plano_Viagem/Los_Angeles.png';
import FundoPlano4 from '../../Images/Card_Plano_Viagem/Rio_de_Janeiro.png';
import FundoPlano5 from '../../Images/Card_Plano_Viagem/Sampa.png';

import './PlanosViagem.css';

export default function PlanosViagem() {

    const [fundos, setFundos] = useState([FundoPlano, FundoPlano2, FundoPlano3, FundoPlano4, FundoPlano5]);

    const [planos, setPlanos] = useState([
        // Dados fictícios para teste de layout
        { id: 1, nome: 'Viagem para Recife', preco: 'R$ 1.200,00', descricao: 'Conheça as praias incríveis de Recife!', imagem: FundoPlano },
        { id: 2, nome: 'Passeio em Maceió', preco: 'R$ 1.500,00', descricao: 'Explore as maravilhas naturais de Maceió.', imagem: FundoPlano2 },
        { id: 3, nome: 'Tour em Los Angeles', preco: 'R$ 3.200,00', descricao: 'Aproveite o glamour de Hollywood.', imagem: FundoPlano3 },
        { id: 4, nome: 'Rio de Janeiro', preco: 'R$ 1.800,00', descricao: 'Descubra a Cidade Maravilhosa!', imagem: FundoPlano4 },
        { id: 5, nome: 'Visita a São Paulo', preco: 'R$ 1.000,00', descricao: 'Cultura e modernidade em São Paulo.', imagem: FundoPlano5 },
    ]);

    const [clicked, setClicked] = useState(false);

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

            <div className="main-grid-planos-viagem">
                <label className="titulo-planos-viagem">
                    Planos de Viagem
                </label>

                <div className="barra-pesquisa-planos-viagem">
                    <BarraPesquisa />
                </div>

                <div className="grid-cards-planos-viagem">
                {clicked ? <div className="popupadd"><PopUpCriarPlano handleClick={handleClick} /></div> : null}

                    {planos.map((plano, i) => {
                        // Only create a new container when the index is divisible by 4
                        if (i % 4 === 0) {
                            return (
                                <div className="container-cardsPlanoViagem" key={`container-${i}`}>
                                    {planos.slice(i, i + 4).map((subPlano, j) => (
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
                        return null; // Skip rendering here, as the items are handled within the grouped div above.
                    })}


                    <div className='divBtnCriarPlano'>
                        <Btns_PlanoViagens handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </>
    );
}
