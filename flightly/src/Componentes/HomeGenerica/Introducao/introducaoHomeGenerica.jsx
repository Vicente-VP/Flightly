import './styleIntroducaoHomeGenerica.css';

import backgroundHomeGenerica from "../../../Images/HomeGenerica/backgroundHome.png";

export default function introducaoHomeGenerica() {
    return (
        <>
            
            <img src={backgroundHomeGenerica} alt="Background Home Generica" className="backgroundHomeGenerica" />

            <div className="fundoInicio-homeGenerica">
                <div className="containerTitulo-homeG">
                    <span className="titulo-homeG">Planeje, explore, viva!</span>
                </div>
                <div className="containerSubTitulo-homeG">
                    <span className="subtitulo-homeG">tudo em um só lugar</span>
                </div>
                <div className="containerVantagens-homeG">
                    <div className="subcontainerVantagens-homeG">
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span><b>Pesquise</b> voos, hospedagens, carros<br />e pontos turísticos</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span><b>Planeje</b> suas viagens</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span><b>Compre</b> de uma vez só</span>
                        </div>
                    </div>
                    <div className="subcontainerVantagens-homeG">
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span>Seja <b>notificado</b> de tudo sobre<br /> a sua viagem</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span>Tenha o <b>histórico</b> de todas as suas<br /> viagens</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span><b>Altere</b> suas reservas com um clique</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="subcontainerVantagens-homeG">
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span>Faça nosso <b>teste</b> de perfil de viajante</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span>Receba <b>recomendações</b> personalizadas</span>
                        </div>
                        <div className="divTextoVantagem-homeG">
                            <span className="circuloVantagem-homeG"></span>
                            <span>Converse com a nossa <b>IA!</b></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
