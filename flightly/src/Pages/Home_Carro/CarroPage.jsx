import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import CardRec from "../../Componentes/Cards/CardRecCarro/cardRecCarro";

import Carro_Form from '../../Images/Carro_Card.png';
import Origem_Form from '../../Images/Icones-Cards/origem.png';
import IdaVolta_Form from '../../Images/Icones-Cards/ida-volta.png';

import Loc_Allauto from '../../Images/Cards_Locadoras_Populares/Allauto.png';
import Loc_Rental from '../../Images/Cards_Locadoras_Populares/Rental.png';
import Loc_Citta from '../../Images/Cards_Locadoras_Populares/Citta.png';
import Loc_Blue from '../../Images/Cards_Locadoras_Populares/Blue.png';

import Rec_Eco from '../../Images/Card_Recomendacao_Carro/Rec_Eco.png';
import Rec_Inter from '../../Images/Card_Recomendacao_Carro/Rec_Inter.png';
import Rec_Lux from '../../Images/Card_Recomendacao_Carro/Rec_Lux.png';

import './Style_carro.css';

export default function Carro_page (){
    return (
        <>
            <div><NavBar/></div>

            <main>
                    {/* ------------------ CARRO FORM INICIO  --------------------- */}
                <div className="card-carro">
                    <div className="car-title">
                        <label>Aluguel de Carros</label>
                    </div>

                    <div className="car-space">
                    </div>

                    <div className="form-cardcarro">
                        <div className="car-grid-inputs">
                            <div className="car-input-form">
                                <div className="car-etiqueta-className">
                                    <label className="car-etiqueta">Local de retirada</label>
                                </div>
                                <div className="car-input-className">
                                    <input type="text" className="car-input" name="pick-location" id="pick-location"
                                        placeholder="São Paulo" style={{ backgroundImage: `url(${Origem_Form})` }}/>
                                </div>
                            </div>
                            <div className="car-input-form">
                                <div className="car-etiqueta-className">
                                    <label className="car-etiqueta">Data de Retirada</label>
                                </div>
                                <div className="car-input-className">
                                    <input type="date" className="car-input" id="pickup-date" name="pickup-date" placeholder="21/06/2024"
                                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}/>
                                </div>
                            </div>
                            <div className="car-input-form">
                                <div className="car-etiqueta-className"></div>
                                <div className="car-input-className"></div>
                            </div>
                            <div className="car-input-form">
                                <div className="car-etiqueta-className">
                                    <label className="car-etiqueta">Data de devolução</label>
                                </div>
                                <div className="car-input-className">
                                    <input type="date" className="car-input" id="return-date" name="return-date" placeholder="30/06/2024"
                                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}/>
                                </div>
                            </div>
                        </div>
                        <div className="car-btn-pesquisar">
                            <button className="car-pesquisar">Pesquisar</button>
                        </div>
                    </div>
                </div>

                <div className="car-image"><img src={Carro_Form} alt=""/></div>
                    {/* ------------------ CARRO FORM FIM  --------------------- */}

                    
                {/* ------------------ LOCADORAS MAIS POPULARES INICIO --------------------- */}
                
                <div className="locadoras-popular">

                    <div className="title-locadora">
                        <label>Locadoras Populares</label>
                    </div>
                        
                    <div className="space-locadora-popular">
                        <CardRec legenda="Allauto" image={Loc_Allauto}/>
                        <CardRec legenda="Rental" image={Loc_Rental}/>
                        <CardRec legenda="Citta" image={Loc_Citta}/>
                        <CardRec legenda="Blue" image={Loc_Blue}/>
                    </div>
                        
                    <div className="locadora-btn-popular">
                        <button className="car-pesquisar">Ver Mais</button>
                    </div>
                </div>
                {/* ------------------ LOCADORAS MAIS POPULARES FIM --------------------- */}

                {/* ------------------ RECOMENDAÇÃO DE CARRO INICIO --------------------- */}

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

                {/* ------------------ RECOMENDAÇÃO DE CARRO FIM --------------------- */}
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}