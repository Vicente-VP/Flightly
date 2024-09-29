import './styleCardQuest.css';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

export default function CardPergunta1(){

    const [progress, setProgress] = useState(0);

    const [changeAnswer, setchangeAnswer] = useState(false);
    const [changeAnswer3, setchangeAnswer3] = useState(false);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const [changeQuestion, setchangeQuestion] = useState('Teste sua Personalidade!');

    const [contagem, setContagem] = useState(0);
    const [BackButton, setBackButton] = useState(false);

   // let check = false;

  const handleProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  
  const changeAnswers = () =>{
    setchangeAnswer(true);
    
    
    if(contagem === 0){
        setAnswer1("Começo / Final do ano"); 
        setAnswer2("Meio do ano")
    }
    if(contagem === 1){
        setchangeAnswer3(true);
        setAnswer1("Litoral/Praia");
        setAnswer3("Rural")
        setAnswer2("Urbano")
    }
    if(contagem === 2){
        setchangeAnswer3(false);
        setAnswer1("Atividades Internas");
        setAnswer2("Atividades Externas")
    }
    if(contagem === 3){
        setAnswer1("Reservados");
        setAnswer2("Animados")
    }
    if(contagem === 4){
        setAnswer1("Agitados");
        setAnswer2("Tranquilos")
    }
    if(contagem === 5){
        setAnswer1("Sim");
        setAnswer2("Não")
    }
    if(contagem === 6){
        setAnswer1("Sozinho");
        setAnswer2("Em Grupo")
    }
    if(contagem === 7){
        setAnswer1("Curtas");
        setAnswer2("Longas")
    }
    if(contagem === 8){
        setAnswer1("Tours Guiados");
        setAnswer2("Sozinho")
    }
    if(contagem === 9){
        setAnswer1("Quentes");
        setAnswer2("Frios")
    }
    }

    const changeQuestions = () =>{
        if(contagem === 0){
            setchangeQuestion('Qual seu período de férias ?')
        }
        if(contagem === 1){
            setchangeQuestion('Selecione sua preferência')
        }
        if(contagem === 2){
            setchangeQuestion('Selecione sua preferência')
        }
        if(contagem === 3){
            setchangeQuestion('Gosta de ir a lugares mais reservados ou mais animados ?')
        }
        if(contagem === 4){
            setchangeQuestion('Prefere passeios mais agitados ou tranquilos ?')
        }
        if(contagem === 5){
            setchangeQuestion('Você gosta de experimentar a culinária local ?')
        }
        if(contagem === 6){
            setchangeQuestion('Você costuma sair sozinho ou em grupo ?')
        }
        if(contagem === 7){
            setchangeQuestion('Suas viagens são curtas ou longas ?')
        }
        if(contagem === 8){
            setchangeQuestion('Você gosta de participar de tours guiados ou prefere ir sozinho ?')
        }
        if(contagem === 9){
            setchangeQuestion('Você prefere destinos mais quentes ou frios ?')
        }
    }

    const Next = () =>{
      setContagem(contagem + 1);
      handleProgress();
      changeAnswers();
      changeQuestions();

      if(contagem >0){
        setBackButton(true)
      }
    }

    const Back = () =>{
        setContagem(contagem - 1);
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
                    {changeAnswer && <button className='btn-answer1' style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer1}</button>}
                    {changeAnswer3 && <button className='btn-answer3' style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer3}</button>}
                    {changeAnswer && <button className='btn-answer2' style={{width: changeAnswer3 ? '339px' : '456px'}}>{answer2}</button>}
                </div>

                <div className='next-btn'>

                    {BackButton && <button className='btn-next' onClick={Back}>Voltar</button>}

                    <button className='btn-next' onClick={Next}>Avançar</button>
                    

                </div>

            </div>
        
        </>
    );
}