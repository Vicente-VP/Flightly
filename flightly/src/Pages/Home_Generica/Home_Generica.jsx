import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer"

import IntroducaoHomeGenerica from '../../Componentes/HomeGenerica/Introducao/introducaoHomeGenerica';
import ChatIA from "../../Componentes/HomeGenerica/ChatIA/chatIA";
import TutorialHomeGenerica from "../../Componentes/HomeGenerica/Tutorial/tutorialHomeGenerica";

import PopularTuristico from "../../Componentes/Cards/CardPopularTuristico/CardPopularTuristico";
import ArcoTriunfo from '../../Images/Cards_Destinos-Recomendados/Arco-do-Triunfo.png';
import Basilio from '../../Images/Cards_Destinos-Recomendados/Basilio.png';
import FontanaDiTrevi from '../../Images/Cards_Destinos-Recomendados/Fontana-di-Trevi.png';
import Westminster from '../../Images/Cards_Destinos-Recomendados/Westminster.png';

import Rec_Hospedagem from "../../Componentes/Cards/Card Rec Hospedagem/cardsRecHospedagem";

import Rec_Eco from '../../Images/Card_Recomendacao_Carro/Rec_Eco.png';
import Rec_Inter from '../../Images/Card_Recomendacao_Carro/Rec_Inter.png';
import Rec_Lux from '../../Images/Card_Recomendacao_Carro/Rec_Lux.png';

export default function HomeGenerica() {
    return (
        <>
            <div><NavBar/></div>
            
            <IntroducaoHomeGenerica />

            <ChatIA />

            <TutorialHomeGenerica />

            <div className="geral-popular-pturistico">

                <div className="title-popular-pturistico">
                    <label>Aqui você pode planejar uma viagem para ver</label>
                </div>

                <div className="cards-popular-pturistico">
                    
                    <PopularTuristico imgDestino= {ArcoTriunfo} legenda = "Arco do Triunfo"/>
                    <PopularTuristico imgDestino= {Basilio} legenda = "Catedral S. Basilio"/>
                    <PopularTuristico imgDestino= {FontanaDiTrevi} legenda = "Fontana Di Trevi"/>
                    <PopularTuristico imgDestino= {Westminster} legenda = "P. Westminster"/>
                    
                </div>

            </div>

            <div className="recomendacoesOrcamento-hospedagem">
                    <span className="titulo-recomendacoes-hospedagem">Ficar num lugar sob de seu orçamento</span>
                    <div className="recommendations-HOSPEDAGENS-cards">
                        
                        <Rec_Hospedagem title="Economico" id="hosp-eco" />
                        <Rec_Hospedagem title="Intermediario" id="hosp-inter" />
                        <Rec_Hospedagem title="Luxo" id="hosp-lux" />
                    </div>
            </div>

            <div className="recomendacao-carro">

                    <div className="title-recomendacao">
                        <label>Carros para seu orçamento</label>
                    </div>

                    <div className="space-recomendacao-carro">

                        <div className="card-recomendacao-carro">
                            <img src={Rec_Eco} className="img-card-recomendacao-eco"/>
                            <span className="carro-card-recomendacao-eco">Econômico</span>
                            <div className="recomendacao-btn-eco">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                        </div>

                        <div className="card-recomendacao-carro">
                            <span className="carro-card-recomendacao-inter">Intermediário</span>
                            <div className="recomendacao-btn-inter">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                            <img src={Rec_Inter} className="img-card-recomendacao-inter"/>
                        </div>

                        <div className="card-recomendacao-carro">
                            <img src={Rec_Lux} className="img-card-recomendacao-lux"/>
                            <span className="carro-card-recomendacao-lux">Luxuoso</span>
                            <div className="recomendacao-btn-lux">
                                <button className="car-pesquisar">Ver Mais</button>
                            </div>
                        </div>
                    </div>
            </div>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}
