import './styleCardQuest.css';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

export default function CardPergunta1(){

    const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

    return(

        <>
            <div className='card-quest-space'>

                <div>
                    <ProgressBar progress={progress} />
                </div>

                <div className='question'>
                    <label htmlFor="quest" className='quest'>Qual seu período de férias?</label>
                </div>

                <div className='answer'>
                    
                </div>

                <div className='next-btn'>

                    <button onClick={handleProgress}>Avançar</button>
                </div>

            </div>
        
        </>
    );
}