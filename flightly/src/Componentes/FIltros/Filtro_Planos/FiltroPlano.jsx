import './styleFiltroPlano.css';
import React, { useEffect, useState } from 'react';

export default function FiltroPlanoViagem(){
    
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
    

    const [activeButton, setActiveButton] = useState(null);

    // Função que altera o estado para o botão clicado
    const handleButtonClick = (index) => {
      setActiveButton(index);
    };
    
    return(

        <>
            <div className='filter-container'>
                <div className='filter-space'>
                    <div className='fly-filter'>
                        <button className={`btn-fly ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Voos</button>
                    </div>
                    <div className='hotel-filter'>
                        <button className={`btn-hotel ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Hospedagens</button>
                    </div>
                    <div className='car-filter'>
                        <button className={`btn-car ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>Carros</button>
                    </div>
                    <div className='turistic-filter'>
                        <button className={`btn-turistic ${activeButton === 4 ? 'active' : ''}`} onClick={() => handleButtonClick(4)}>Pontos Turísticos</button>
                    </div>
                    <div className="container-checkbox">
                        <input type="checkbox" id='check' onChange={handleChange} className={checked ? 'checked' : ''}/>
                    </div>
                </div>

                <div className='edit-space'>
                    <button className='btn-edit'></button>
                    <span>Editar</span>
                </div>

            </div>
        </>
    );
}