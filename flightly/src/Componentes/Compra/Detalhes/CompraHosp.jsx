import React from "react";
import './style_CompraPage.css';
import Hosp_icon from '../../../Images/Compra/Hsopedagem_Icon.png';
import Menos_icon from '../../../Images/Compra/Menos.png';
import Star_icon from '../../../Images/Card-Informacoes-PTuristicos/estrela.png';


export default function CompraCarro(){
    const nomeHospedagem = "Estadia de Yamata";

    const isNomeGrande = nomeHospedagem.length > 20;
    return(
        <>
        <div className="ContainerPag-hosp">
            <div className="titlePag-hosp">
                <img src={Hosp_icon} alt="Icone Hospedagem" className="iconeHosp"/>
                <div className="subTitlePag-hosp">
                    <label className={isNomeGrande ? "nomeGrande" : "nomeNormal"}>{nomeHospedagem}</label>
                    <div>
                        <span>3,5</span>
                        <img src={Star_icon} alt="Icone Retirar" className="iconeStar"/>
                    </div>
                </div>
                <img src={Menos_icon} alt="Icone Retirar" className={isNomeGrande ? "iconeMenosGrande" : "iconeMenos"}/>
            </div>
            <div className="conteudoPag-hosp">
                <label>Check-in:</label>
                <span>28 de Julho de 2024</span>
                <label>Check-out:</label>
                <span>13 de Novembro de 2024</span>
            </div>
        </div>
        </>   
    );
}