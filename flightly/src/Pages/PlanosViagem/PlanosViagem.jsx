import React from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import BarraPesquisa from '../../Componentes/BarraPesquisaPlano/BarraPesquisaPlano';
import CardPlanoViagem from '../../Componentes/Cards/Card_Plano_Viagem/CardPlanoViagem';
import Btns_PlanoViagens from '../../Componentes/PlanoViagem/Btns_PlanoViagens/Btns_PlanoViagens';
import PopUpCriarPlano from '../../Componentes/PlanoViagem/PopUp/popUp';

import './PlanosViagem.css';

export default function PlanosViagem() {

    return (
        <>
            <PopUpCriarPlano />

            <div style={{ height: '76px' }}>
                <NavBar />
            </div>

            <div className="main-grid-planos-viagem">
                <label className="titulo-planos-viagem">
                    Planos de Viagem
                </label>

                <div className="barra-pesquisa-planos-viagem">
                    <BarraPesquisa />
                </div>

                <div className="grid-cards-planos-viagem">
                    <div></div>
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <div>
                        <Btns_PlanoViagens />
                    </div>
                    <div></div>
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <CardPlanoViagem />
                    <div></div>
                </div>
            </div>
        </>
    );
}
