import React from "react";
import './popUp.css';

export default function PopUpCriarPlano({ isPopupOpen, setIsPopupOpen }) {
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={`container-popUp-CriarPlano ${isPopupOpen ? "active" : ""}`}>
            <span className="titulo-popUp-CriarPlano">Novo Plano</span>
            <input type="text" className="nome-popUp-CriarPlano" placeholder='Digite o Nome' />
            <div className="container-botoes-popUp-CriarPlano">
                <button className="btn-CriarPlano">Criar</button>
                <button className="cancelar-popUp-CriarPlano" onClick={handleClosePopup}>Cancelar</button>
            </div>
        </div>
    );
}
