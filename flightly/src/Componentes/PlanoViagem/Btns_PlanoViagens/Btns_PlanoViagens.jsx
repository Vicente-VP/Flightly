import React, { useState } from "react";
import "./Style_Btns_PlanoViagens.css";
import PopUpCriarPlano from "../PopUp/popUp"; // Certifique-se de que o caminho está correto

export default function BotoesPlanoViagem() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCreateClick = () => {
        setIsPopupOpen(true);
    };

    return (
        <>
            <div className="btn-wrapper" id="criar-planoViagens">
                <button
                    type="button"
                    className="btn-criar-planoViagens"
                    onClick={handleCreateClick}
                >
                </button>
            </div>
            <div className="btn-wrapper">
                <button
                    type="button"
                    className="btn-editar-planoViagens"
                >
                </button>
            </div>
            {/* Passa o estado e a função para o pop-up */}
            <PopUpCriarPlano isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
        </>
    );
}
