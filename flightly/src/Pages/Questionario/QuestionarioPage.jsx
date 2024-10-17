import NavBar from '../../Componentes/NavBar/NavBar';
import CardQuestionario from '../../Componentes/Cards/PerguntaQuest/CardPergunta1';
import './styleQuestionario.css';


export default function Questionario(){
    return(
        <>
            <div className='back'>
                
                    <NavBar />
                    <CardQuestionario perfil='Aventureiro' local1='Canada' local2='EUA' local3='Egito' local4='Xangai' local5='SBC' local6='Albania' msg='Seu foco é em viagens radicais! O que você acha de uma fazer trilhas ou pular de parequedas? '/>
            </div>
        </>
    )
}