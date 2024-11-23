import "../Btns_PlanoViagens/Style_Btns_PlanoViagens.css";
import React, { useState } from 'react';
import setaIcon from "../../Images/FiltroPlano/icon-seta.png";

export default function FiltrosHospedagem(props) {

  const [btnEdit, setBtnEdit] = useState(false);

  const handleBtnEdit = () => {
    setBtnEdit(!btnEdit);
  };


  return (
    <>
      <div className="container-botoesPlanosViagem">
        <div className="btn-wrapper">
          <button type="submit" className="btn-criar-planoViagens" name="btn-criar-planoViagens" onClick={props.handleClick}></button>
          <label className="lbls-btns-planoViagens">Criar</label>
        </div>
        <div className='edit-space'>
          <div className="edit-innerSpace">
            <button className={`btn-edit openDelete ${btnEdit ? 'active' : ''}`} onClick={handleBtnEdit}></button>
            <span>{btnEdit ? 'Cancelar' : 'Deletar'}</span>
          </div>
          <img src={setaIcon} className={`setaDireita-btnDelete ${btnEdit ? 'active' : ''}`}></img>
          <div className={`edit-innerSpace delete ${btnEdit ? 'active' : ''}`}>
            <button className={`btn-edit confirmDelete ${btnEdit ? 'active' : ''}`}></button>
            <span className={`spanDelete ${btnEdit ? 'active' : ''}`} >Confirmar</span>
          </div>
        </div>
      </div>

    </>
  );
}