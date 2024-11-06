import NavBar from '../../Componentes/NavBar/NavBar';
import CardQuestionario from '../../Componentes/Cards/PerguntaQuest/CardPergunta1';
import './styleQuestionario.css';


export default function Questionario(){
    return(
        <>
            <div className='back'>
                
                    <NavBar />
                    <CardQuestionario/>
            </div>
        </>
    )
}