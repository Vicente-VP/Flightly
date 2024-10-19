import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Drop from "../../Componentes/DropInput/drop";


import Aviao_Card from '../../Images/Aviao_Card.png';
import Destino_Cards from '../../Images/img_Destino_Cards.png';
import origemIcon from '../../Images/Icones-Cards/origem.png';
import destinoIcon from '../../Images/Icones-Cards/destino.png';
import passageirosIcon from '../../Images/Icones-Cards/passageiros.png';
import idaVoltaIcon from '../../Images/Icones-Cards/ida-volta.png';
import classeIcon from '../../Images/Icones-Cards/classe.png';

import './style_Voo.css';

import VooPopular from "../../Componentes/Cards/CadVooPopular/CardVooPopular";

export default function Home() {
    return (
        <>
            <div><NavBar/></div>
            
            <main>
            {/* ------------------ CARD DE PESQUISA  --------------------- */}


                <div className="card-voo">
                    <div className="title-voo">
                        <label>Voos</label>
                    </div>
                <img src={Aviao_Card} alt="Logo" className="voo-imagem" />

                    <div className="grid-imagem-voo"></div>

                    <div className="form-card-voo" >
                        <div className="grid-inputs-voo">
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Origem</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="São Paulo"
                                        style={{ backgroundImage: `url(${origemIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Destino</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="text" className="input-voo" placeholder="Rio de Janeiro"
                                        style={{ backgroundImage: `url(${destinoIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Passageiros</label>
                                </div>
                                <Drop imagem={passageirosIcon} widthDrop="201px" topContent="30%" titles={["Adultos", "Crianças de", "Crianças", "Crinças no"]} subTitles={["", "2 a 11 anos", "no assento", "de colo"]}/>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Ida</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="date" className="input-voo" name="ida" placeholder="21/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Volta</label>
                                </div>
                                <div className="input-class-voo">
                                    <input type="date" className="input-voo" name="volta" placeholder="30/06/24"
                                        style={{ backgroundImage: `url(${idaVoltaIcon})` }}/>
                                </div>
                            </div>
                            <div className="input-form-voo">
                                <div className="etiqueta-class-voo">
                                    <label className="etiqueta-voo">Classe</label>
                                </div>
                                <div className="input-class-voo">
                                    <select name="classe" id="classe" className="input-voo" style={{ backgroundImage: `url(${classeIcon})` }}>
                                        <option value="econômica">Econômica</option>
                                        <option value="econômica Premium">Econômica Premium</option>
                                        <option value="executiva">Executiva</option>
                                        <option value="erimeira">Primeira</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className="btn-pesquisar-voo">
                            <button className="btn-submit-voo">
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </div>

            {/* ------------------ FIM DO CARD DE PESQUISA  ----------------- */}
            {/* ------------------ VOOS MAIS POPULARES  --------------------- */}

                <div className="geral-voo-popular">

                    <div className="title-voo-popular">
                        <label>Voos Mais Populares</label>
                    </div>

                    <div className="cards-voo-popular">
                        
                        <VooPopular  imgDestino = {Destino_Cards} destino = "Salvador - São Paulo" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Rio de Janeiro - Amazonas" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Piauí - Minas Gerais" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Florianópolis - Acre" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>
                        
                        
                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
                            Ver Mais
                        </button>
                    </div>

                </div>

            {/* ------------------ FIM DE VOOS MAIS POPULARES  --------------------- */}
            {/* ------------------ RECOMENDAÇÕES PARA VOCÊ  ------------------------ */}

                <div className="geral-voo-popular">

                    <div className="title-voo-popular">
                        <label>Recomendações Para Você</label>
                    </div>

                    <div className="cards-voo-popular">
                        
                        <VooPopular  imgDestino = {Destino_Cards} destino = "Salvador - São Paulo" 
                        companhia = "Gol" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Rio de Janeiro - Amazonas" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Piauí - Minas Gerais" 
                        companhia = "Azul" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                        <VooPopular  imgDestino = {Destino_Cards} destino = "Florianópolis - Acre" 
                        companhia = "Latam" dataIdaVolta = "21/10/24 - 31/10/24" idaVolta = "Ida - Volta"
                         preco = "1.800,00"/>

                    </div>

                    <div className="btn-voo-popular">
                        <button className="btn-submit-voo">
                            Ver Mais
                        </button>
                    </div>

                </div>

            {/* ------------------ FIM DE RECOMENDAÇÕES PARA VOCÊ  --------------------- */}
            </main>

            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}
