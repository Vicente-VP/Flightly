import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Rec_Hospedagem from "../../Componentes/Cards/Card Rec Hospedagem/cardsRecHospedagem";
import Drop from "../../Componentes/DropInput/drop";

import Mala_Card from '../../Images/Mala_Card.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';

import CardDestinoPular from "../../Componentes/Cards/CardDestinoPopular/CardDestinoPular";
import RioJaneiro from '../../Images/img_Destino_Cards.png';
import Brasilia from '../../Images/img_Brasilia.png';
import Bahia from '../../Images/img_Bahia.png';
import SantaCatarina from '../../Images/img_SantaCatarina.png';

//import img_economico from '../../Images/RecomendacaoHospedagem/hp_economico.jpg';

import './style_Hospedagem.css';
//import { Link } from 'react-router-dom';

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const [guestData, setGuestData] = useState({
        nAdult: 1,
        criancaIdade: 0,
        criancaAssento: 0,
        criancaColo: 0,
    });

    const handleGuestChange = useCallback((data) => {
        setGuestData(data);
    }, []);
    


    function PesquisarHotel() {
    
        // Collect the data as you were already doing
        let local = document.querySelector('input[name="local"]').value;
        let check_in = document.querySelector('input[name="check_in"]').value;
        let check_out = document.querySelector('input[name="check_out"]').value;
        let adultos = guestData.nAdult;
        let crianca = guestData.criancaIdade;
    
        const params = new URLSearchParams({
            requestType: 'hotel',
            local,
            check_in,
            check_out,
            adultos,
            crianca,
        }).toString();
    
        // Navigate to the new page, passing the requestData as state
        navigate(`/InformacoesPage?${params}`);
    }

    return (
        <>
            <div><NavBar /></div>

            <main>
                {/* ------------------ CARD DE PESQUISA  --------------------- */}

                <img src={Mala_Card} className="hospedagem-imagem" alt="Mala" />

                <div className="card-hospedagem">
                    <div className="title-hospedagem">
                        <label>Hospedagem</label>
                    </div>

                    <div className="form-card-hospedagem">
                        <div className="grid-inputs-hospedagem">
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Check-in</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="date" className="input-hospedagem" placeholder="21/06/24" name="check_in"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Check-out</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="date" className="input-hospedagem" placeholder="21/06/24" name="check_out"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Local</label>
                                </div>
                                <div className="input-hospedagem">
                                    <input type="text" className="input-hospedagem" placeholder="Ex: Rio de Janeiro" name="local"
                                        style={{ backgroundImage: `url(${destinoIcon})` }} />
                                </div>
                            </div>
                            <div className="input-form-hospedagem">
                                <div className="etiqueta-hospedagem">
                                    <label className="etiqueta-hospedagem">Hóspedes</label>
                                </div>
                                <Drop imagem={passageirosIcon} widthDrop="180px" topContent="46.5%" titles={["Adultos", "Crianças"]} subTitles={[]} onPassengerChange={handleGuestChange} />
                            </div>
                            <div className="btn-pesquisar-hospedagem">
                                <button className="btn-submit-hospedagem" onClick={PesquisarHotel}>
                                    Pesquisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}
                {/* ------------------ VOOS MAIS POPULARES  --------------------- */}

                <div className="destinos-populares-hospedagem">
                    <span className="titulo-populares-hospedagem">Destinos mais Populares</span>
                    <div className="destinos-populares-cards">
                        <CardDestinoPular imgDestinoPopular={RioJaneiro} nomeDesninoPopular="Rio de Janeiro" />
                        <CardDestinoPular imgDestinoPopular={Brasilia} nomeDesninoPopular="Brasília" />
                        <CardDestinoPular imgDestinoPopular={Bahia} nomeDesninoPopular="Bahia" />
                        <CardDestinoPular imgDestinoPopular={SantaCatarina} nomeDesninoPopular="Santa Catarina" />
                    </div>
                    <button className="btn-verMais-hospedagem">Ver Mais</button>
                </div>

                {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}

                {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}
                <div className="recomendacoesOrcamento-hospedagem">
                    <span className="titulo-recomendacoes-hospedagem">Hospedagens para o seu orçamento</span>
                    <div className="recommendations-HOSPEDAGENS-cards">
                        <Rec_Hospedagem title="Economico" id="hosp-eco" />
                        <Rec_Hospedagem title="Intermediario" id="hosp-inter" />
                        <Rec_Hospedagem title="Luxo" id="hosp-lux" />
                    </div>
                    <button className="btn-verMais-hospedagem">Ver Mais</button>
                </div>
                {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>

    )
}
