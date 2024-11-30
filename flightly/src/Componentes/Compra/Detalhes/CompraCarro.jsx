import React from "react";
import './style_CompraPage.css';
import Carro_icon from '../../../Images/Compra/Carro_Dados.png';
import Menos_icon from '../../../Images/Compra/Menos.png';
import Onix from '../../../Images/Compra/Onix.png';


export default function CompraCarro(){
    //  const [voos, hotel, carros, ptTuristico] = useState([]) este é só uma ideia da implementação futura de como utlizaremos para o mapeamento dos itens
    return(
        <>
        <div className="ContainerPag-carro">
            <div className="titlePag-carro">
                <img src={Carro_icon} alt="Icone Carro" className="iconeCar"/>
                <label>Chevrolet Onix</label>
                <img src={Menos_icon} alt="Icone Retirar" className="iconeMenos"/>
            </div>
            <div className="conteudoPag-carro">
                <div className="detalhesPag-carro">
                    <div className="detalhesEntrega-carro">
                        <label>Data:</label>
                        <span>28 de Julho de 2024</span>
                        <label>Hora:</label>
                        <span>11:00</span>
                    </div>
                    <div className="detalhesCliente-carro">
                        <div className="titleDetakhesCliente-carro">
                            <label>Nome:</label>
                            <hr className="divisionDetalhesCliente-carro"/>
                        </div>
                        <span>Victor Silva</span>
                    </div>
                </div>
                <div className="imagemCarroPag-carro">
                    <img src={Onix} alt="imagem Carro"/>
                </div>
            </div>
        </div>
        </>   
    );
}