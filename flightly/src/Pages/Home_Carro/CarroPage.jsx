import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import CardRec from "../../Componentes/Cards/CardRecCarro/cardRecCarro";

import './Style_carro.css';
import Carro_Form from '../../Images/Carro_Card.png';
import Origem_Form from '../../Images/Icones-Cards/origem.png';
import IdaVolta_Form from '../../Images/Icones-Cards/ida-volta.png';

import Loc_Allauto from '../../Images/Cards_Locadoras_Populares/Allauto.png'
import Loc_Rental from '../../Images/Cards_Locadoras_Populares/Rental.png'
import Loc_Citta from '../../Images/Cards_Locadoras_Populares/Citta.png'
import Loc_Blue from '../../Images/Cards_Locadoras_Populares/Blue.png'

export default function Carro_page (){
    return (
        <>
            <div><NavBar/></div>

            <main>
                    {/* ------------------ CARRO FORM INICIO  --------------------- */}
                <div class="card-carro">
                    <div class="car-title">
                        <label>Aluguel de Carros</label>
                    </div>

                    <div class="car-space">
                    </div>

                    <div class="form-cardcarro">
                        <div class="car-grid-inputs">
                            <div class="car-input-form">
                                <div class="car-etiqueta-class">
                                    <label class="car-etiqueta">Local de retirada</label>
                                </div>
                                <div class="car-input-class">
                                    <input type="text" class="car-input" name="pick-location" id="pick-location"
                                        placeholder="São Paulo" style={{ backgroundImage: `url(${Origem_Form})` }}/>
                                </div>
                            </div>
                            <div class="car-input-form">
                                <div class="car-etiqueta-class">
                                    <label class="car-etiqueta">Data de Retirada</label>
                                </div>
                                <div class="car-input-class">
                                    <input type="date" class="car-input" id="pickup-date" name="pickup-date" value="2024-06-21"
                                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}/>
                                </div>
                            </div>
                            <div class="car-input-form">
                                <div class="car-etiqueta-class"></div>
                                <div class="car-input-class"></div>
                            </div>
                            <div class="car-input-form">
                                <div class="car-etiqueta-class">
                                    <label class="car-etiqueta">Data de devolução</label>
                                </div>
                                <div class="car-input-class">
                                    <input type="date" class="car-input" id="return-date" name="return-date" value="2024-06-30"
                                        style={{ backgroundImage: `url(${IdaVolta_Form})` }}/>
                                </div>
                            </div>
                        </div>
                        <div class="car-btn-pesquisar">
                            <button class="car-pesquisar">Pesquisar</button>
                        </div>
                    </div>
                </div>

                <div class="car-image"><img src={Carro_Form} alt="Carro"/></div>
                    {/* ------------------ CARRO FORM FIM  --------------------- */}


                {/* ------------------ LOCADORAS MAIS POPULARES INICIO --------------------- */}
                
                <div class="locadoras-popular">

                    <div class="title-locadora">
                        <label>Locadoras Populares</label>
                    </div>

                    <div class="space-locadora-popular">
                        <CardRec legenda="Allauto" image={Loc_Allauto}/>
                        <CardRec legenda="Rental" image={Loc_Rental}/>
                        <CardRec legenda="Citta" image={Loc_Citta}/>
                        <CardRec legenda="Blue" image={Loc_Blue}/>
                    </div>

                    <div class="locadora-btn-popular">
                        <button class="car-pesquisar">Ver Mais</button>
                    </div>
                </div>
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}