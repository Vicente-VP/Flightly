import './styleFiltroPlano.css';
import React, { useState } from 'react';

import Aviao_Icon from '../../../Images/NavBar-icons/Aviao_icon.png';
import MalaHospedagem_icon from '../../../Images/NavBar-icons/MalaHospedagem_icon.png';
import Carro_icon from '../../../Images/NavBar-icons/Carro_icon.png';
import PontoTuristico_icon from '../../../Images/NavBar-icons/PontoTuristico_icon.png';

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
                    <div className="checkbox-container">
                        <input type="checkbox" id="customCheckbox"
                          checked={checked}
                          onChange={handleChange}
                          className="custom-checkbox"
                        />
                        <label htmlFor="customCheckbox" className="custom-label"></label>
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