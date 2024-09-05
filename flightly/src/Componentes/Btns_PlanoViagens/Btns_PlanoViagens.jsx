import "../Btns_PlanoViagens/Style_Btns_PlanoViagens.css";

import icon_tipoprop from "../../Images/Icones_PlanoViagens/icon_criar_planoViagens.png";
import icon_avaliacao from "../../Images/Icones_PlanoViagens/icon_editar_planoViagens.png";

export default function FiltrosHospedagem() {
  return (
    <>
        <div className="btn-wrapper">
          <button type="submit" className="btn-criar-planoViagens" name="btn-criar-planoViagens"></button>
          <label className="lbls-btns-planoViagens">Criar</label>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn-editar-planoViagens" name="btn-editar-planoViagens"></button>
          <label className="lbls-btns-planoViagens">Editar</label>
        </div>      
    </>
  );
}