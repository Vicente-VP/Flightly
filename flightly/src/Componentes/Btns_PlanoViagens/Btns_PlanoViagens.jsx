import "../Btns_PlanoViagens/Style_Btns_PlanoViagens.css";

export default function FiltrosHospedagem(props) {





  return (
    <>
      
        <div className="btn-wrapper">
          <button type="submit" className="btn-criar-planoViagens" name="btn-criar-planoViagens" onClick={props.handleClick}></button>
          <label className="lbls-btns-planoViagens">Criar</label>
        </div>  
    </>
  );
}