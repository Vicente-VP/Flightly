import React from "react";
import './style_CompraPage.css';
import passageirosIcon from '../../../Images/Compra/Pessoas_Dados.png';
import idaVoltaIcon from '../../../Images/Compra/Data_Dados.png';
import quartosIcon from '../../../Images/Compra/Hotel_Dados.png';
import Carro_icon from '../../../Images/Compra/Carro_Dados.png';


export default function CompraDados(){
    //  const [voos, hotel, carros, ptTuristico] = useState([]) este é só uma ideia da implementação futura de como utlizaremos para o mapeamento dos itens
    return(
        <>
        <div className="ConfirmDados">
            <h1>Confirmar Dados</h1>
            <div className="confirm_dados">


                <div className="Dados">
                <img src={idaVoltaIcon} alt="Data" className="iconData" />  Data
                <p> ida: 27 de setembro de 2024</p>
                <p> volta: 10 de outubro de 2024</p>
                </div>

                <div className="Dados">
                <img src={quartosIcon} alt="Hotel" className="iconHospedagem" />  Hotel - Estadia de Yamata
                <p> check-in: 28 de setembro de 2024</p>
                <p> check-out: 10 de outubro de 2024</p>
                </div>
                
                <div className="Dados">
                <img src={Carro_icon} alt="Carros" className="iconCarro" />  Aluguel de Carros
                <p>Chevrolet Onix</p>
                </div>

                <div className="Dados">
                <img src={passageirosIcon} alt="Passageiros" className="iconPassageiro" />  Passageiros
                <p> Nome</p>
                <p> Cpf</p>
                </div>

                <div className="price">
                    <label>Total</label>
                </div>
                <div className="price">
                    <label>R$ ....</label>
                </div>
            </div> 
        </div>
        </>   );
}