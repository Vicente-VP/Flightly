import './styleCardQuest.css';
import ProgressBar from './ProgressBar';
import { useState, useEffect, useCallback } from 'react';

export default function CardPergunta1(){

    const [progress, setProgress] = useState(10);

    const [changeAnswer, setchangeAnswer] = useState(false);
    const [changeAnswer3, setchangeAnswer3] = useState(false);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const [changeQuestion, setchangeQuestion] = useState();

    const [contagem, setContagem] = useState(0);

    const [activeButton, setActiveButton] = useState(null);

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleButtonClick = (index) => {
        setActiveButton(index);

        setSelectedAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[contagem] = index; // Armazena o índice da resposta atual
            return newAnswers;
        });
      };

    const handleProgress = (increment) => {
        setProgress((prev) => Math.min(Math.max(prev + increment, 10), 100));
    };

  
    const changeAnswers = useCallback(() =>{
        setchangeAnswer(true);

        if(contagem === 0){
            setchangeAnswer3(false);
            setAnswer1("Começo / Final do ano"); 
            setAnswer2("Meio do ano")
        }
        else if(contagem === 1){
            setchangeAnswer3(true);
            setAnswer1("Litoral/Praia");
            setAnswer3("Rural")
            setAnswer2("Urbano")
        }
        else if(contagem === 2){
            setchangeAnswer3(false);
            setAnswer1("Atividades Internas");
            setAnswer2("Atividades Externas")
        }
        else if(contagem === 3){
            setAnswer1("Reservados");
            setAnswer2("Animados")
        }
        else if(contagem === 4){
            setAnswer1("Agitados");
            setAnswer2("Tranquilos")
        }
        else if(contagem === 5){
            setAnswer1("Sim");
            setAnswer2("Não")
        }
        else if(contagem === 6){
            setAnswer1("Sozinho");
            setAnswer2("Em Grupo")
        }
        else if(contagem === 7){
            setAnswer1("Curtas");
            setAnswer2("Longas")
        }
        else if(contagem === 8){
            setAnswer1("Tours Guiados");
            setAnswer2("Sozinho")
        }
        else if(contagem === 9){
            setAnswer1("Quentes");
            setAnswer2("Frios")
        }
      }, [contagem]);

    const changeQuestions = useCallback(() =>{
        if(contagem === 0){
            setchangeQuestion('Qual seu período de férias ?')
        }
        else if(contagem === 1){
            setchangeQuestion('Selecione sua preferência')
        }
        else if(contagem === 2){
            setchangeQuestion('Selecione sua preferência')
        }
        else if(contagem === 3){
            setchangeQuestion('Gosta de ir a lugares mais reservados ou mais animados ?')
        }
        else if(contagem === 4){
            setchangeQuestion('Prefere passeios mais agitados ou tranquilos ?')
        }
        else if(contagem === 5){
            setchangeQuestion('Você gosta de experimentar a culinária local ?')
        }
        else if(contagem === 6){
            setchangeQuestion('Você costuma sair sozinho ou em grupo ?')
        }
        else if(contagem === 7){
            setchangeQuestion('Suas viagens são curtas ou longas ?')
        }
        else if(contagem === 8){
            setchangeQuestion('Você gosta de participar de tours guiados ou prefere ir sozinho ?')
        }
        else if(contagem === 9){
            setchangeQuestion('Você prefere destinos mais quentes ou frios ?')
        }
    }, [contagem]);

    const Next = () => {
        if (contagem < 9) {
            setContagem((prev) => prev + 1);
            handleProgress(10);
            changeAnswers();
            changeQuestions();
            setActiveButton(null);
        }
        

        console.log(selectedAnswers);
    };

    const Back = () => {
        if (contagem > 0) {
            setContagem((prev) => prev - 1);
            handleProgress(-10);
            changeAnswers();
            changeQuestions();
            setActiveButton(null);
        }
    };

    useEffect(() => {
        changeAnswers();
        changeQuestions();
    }, [contagem, changeAnswers, changeQuestions]);

    return(

        <>
            <div className='card-quest-space'>

                <div>
                    <ProgressBar progress={progress} />
                </div>

                <div className='question'>
                    <label htmlFor="quest" className='quest'>{changeQuestion}</label>
                </div>

                <div className='answer'>
                    {changeAnswer && <button className={`btn-answer1 ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)} style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer1}</button>}
                    {changeAnswer3 && <button className={`btn-answer3 ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)} style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer3}</button>}
                    {changeAnswer && <button className={`btn-answer2 ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)} style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer2}</button>}
                </div>

                <div className='next-btn'>

                    {contagem > 0 && <button className='btn-next' onClick={Back}>Voltar</button>}

                    <button className='btn-next' onClick={Next}>Avançar</button>
                
                </div>

            </div>

            

        </>
    );
}