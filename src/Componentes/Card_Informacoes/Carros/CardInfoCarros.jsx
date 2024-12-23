import './styleCardInfoCarros.css';
import ferrari from '../../../Images/Carro_Card.png';
import movida from '../../../Images/FiltroCarro/movida-logo.png';
import people from '../../../Images/Info-Car-Icon/people-icon.png';
import small_bag from '../../../Images/Info-Car-Icon/small-bag.png';
import cambio from '../../../Images/Info-Car-Icon/transmission.png';
import porta from '../../../Images/Info-Car-Icon/car-door.png';
import large_bag from '../../../Images/Info-Car-Icon/travelling-bag.png';
import sinalMais from '../../../Images/sinalMais.png';

import { useState, useEffect } from 'react';

export default function InfoCarros(props) {

    const [isMobile, setIsMobile] = useState(false);

  // Função para verificar o tamanho da tela
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 999); // Define true se a largura for <= 580px
  };

  // Hook para monitorar o tamanho da tela
  useEffect(() => {
    handleResize(); // Checa o tamanho na montagem inicial
    window.addEventListener("resize", handleResize); // Adiciona o listener para mudanças de tamanho
    return () => window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar
  }, []);

    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="containerGeral-infoCarro">
                <div className={`card-horizontal ${hover ? 'hover-active' : ''}`}>
                    <div class="card-image">
                        <img src={props.carImage}  className='card-image-car' />
                        <img src={props.locImage} alt={props.company} className='card-image-locadora' />
                    </div>
                    <div className='card-content'>
                        <div className='title-car'>
                            <label htmlFor="carro" className='lbl-carro'>{props.marca} - {props.modelo}</label>
                        </div>
                        <div className="sub-car">
                            <label htmlFor="local" className="lbl-local">{props.retirada}</label>
                        </div>
                        <div className="info-left">
                            <div className='div-assentos'>
                                <img src={people} className="icon-assento" alt="Assentos" />
                                <label htmlFor="number-assento" className="lbl-assento"> {props.assento} Assentos</label>
                            </div>
                            <div className='div-cambio'>
                                <img src={cambio} className="icon-cambio" alt="Câmbio" />
                                <label htmlFor="cambio" className="lbl-cambio"> {props.cambio}</label>
                            </div>
                            <div className='div-porta'>
                                <img src={porta} className="icon-porta" alt="Portas" />
                                <label htmlFor="number-porta" className="lbl-porta"> {props.porta} Portas</label>
                            </div>
                        </div>
                        <div className="info-right">
                            <div className='div-mala'>
                                <img src={small_bag} className="icon-bag" alt="Bagagem Pequena" />
                                <label htmlFor="number-mala" className="lbl-mala"> {props.malaPeq} Bagagem Pequena</label>
                            </div>
                            <div className='div-mala'>
                                <img src={large_bag} className="icon-bag" alt="Bagagem Grande" />
                                <label htmlFor="number-mala" className="lbl-mala"> {props.malaGr} Bagagem Grande</label>
                            </div>
                        </div>
                            {isMobile && (
                                <div className="componente-mobile">
                                    <hr color='D4D4D4'/>
                                    <div className="preco-mobile">
                                        <label className='lbl-preco'>A partir de:</label>
                                        <label className="preco-car">R$ {props.preco}</label>
                                    </div>
                                </div>
                            )}
                    </div>
                    <hr color='D4D4D4' />
                    <div class="card-price">
                        <div className="info-preco">
                            <div className="preco">
                                <label className='lbl-preco'>A partir de:</label>
                                <label className="preco-car">R$ {props.preco}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btnPopup-AddPlano-Compra-CARROS">
                    <img src={sinalMais} alt="Botão de abrir Pop-up de Add Plano Viagem ou Compra" />
                </button>
            </div>
        </>
    )

}
