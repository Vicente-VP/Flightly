import "../Btns_PlanoViagens/Style_Btns_PlanoViagens.css";

import icon_tipoprop from "../../Images/Icones_PlanoViagens/icon_criar_planoViagens.png";
import icon_avaliacao from "../../Images/Icones_PlanoViagens/icon_editar_planoViagens.png";
import axios from 'axios';
import { useState } from "react";
import PopUpCriarPlano from "../PopUpCriarPlano/PopUpCriarPlano";

export default function FiltrosHospedagem(props) {





  return (
    <>
      
        <div className="btn-wrapper">
          <button type="submit" className="btn-criar-planoViagens" name="btn-criar-planoViagens" onClick={props.handleClick}></button>
          <label className="lbls-btns-planoViagens">Criar</label>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn-editar-planoViagens" name="btn-editar-planoViagens"></button>
          <label className="lbls-btns-planoViagens">Editar</label>
        </div>      
    </>
  );
}