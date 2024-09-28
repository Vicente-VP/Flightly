import './styleCardQuest.css';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

export default function CardPergunta1(){

    const [progress, setProgress] = useState(0);
    const [changeAnswer, setchangeAnswer] = useState(false);
    const [changeQuestion, setchangeQuestion] = useState('Teste sua Personalidade!');

   // let check = false;

  const handleProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  
  const changeAnswers = () =>{
    setchangeAnswer(true);


    }


    const changeQuestions = () =>{
        
        setchangeQuestion('Pergunta1')
    }

    const Click = () =>{
      handleProgress();
      changeAnswers();
      changeQuestions();
    }

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
                {changeAnswer && <button className='btn-answer1'>Resposta1</button>}
                {changeAnswer && <button className='btn-answer2'>Resposta2</button>}
                </div>

                <div className='next-btn'>

                    <button className='btn-next' onClick={Click}>Avançar</button>
                    
                </div>

            </div>
        
        </>
    );
}