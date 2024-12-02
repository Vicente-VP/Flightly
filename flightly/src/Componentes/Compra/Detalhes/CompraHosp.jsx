import React from "react";
import './style_CompraPage.css';
import Hosp_icon from '../../../Images/Compra/Hsopedagem_Icon.png';
import Menos_icon from '../../../Images/Compra/Menos.png';
import Star_icon from '../../../Images/Card-Informacoes-PTuristicos/estrela.png';


export default function CompraCarro(props){
    const nomeHospedagem = props.nomeHotel;

    const isNomeGrande = nomeHospedagem.length > 20;
    return(
        <>
        <div className="ContainerPag-hosp">
            <div className="titlePag-hosp">
                <img src={Hosp_icon} alt="Icone Hospedagem" className="iconeHosp"/>
                <div className="subTitlePag-hosp">
                    <label className={isNomeGrande ? "nomeGrande" : "nomeNormal"}>{nomeHospedagem}</label>
                    <div>
                        <span>{props.estrelas}</span>
                        <img src={Star_icon} alt="Icone Retirar" className="iconeStar"/>
                    </div>
                </div>
                <img src={Menos_icon} alt="Icone Retirar" className={isNomeGrande ? "iconeMenosGrande" : "iconeMenos"}/>
            </div>
            <div className="conteudoPag-hosp">
                <label>Check-in:</label>
                <span>{props.dataCheckIn}</span>
                <label>Check-out:</label>
                <span>{props.dataCheckOut}</span>
            </div>
        </div>
        </>   
    );
}