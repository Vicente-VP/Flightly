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
    
    return(

        <>
            <div className='filter-container'>
                <div className='filter-space'>
                    <div className='fly-filter'>
                        <button className='btn-fly' style={{ backgroundImage: `url(${Aviao_Icon})` }}>Voos</button>
                    </div>
                    <div className='hotel-filter'>
                        <button className='btn-hotel' style={{ backgroundImage: `url(${MalaHospedagem_icon})` }}>Hospedagens</button>
                    </div>
                    <div className='car-filter'>
                        <button className='btn-car' style={{ backgroundImage: `url(${Carro_icon})` }}>Carros</button>
                    </div>
                    <div className='turistic-filter'>
                        <button className='btn-turistic' style={{ backgroundImage: `url(${PontoTuristico_icon})` }}>Pontos Turísticos</button>
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
                    <button className='btn-edit'>a</button>
                    <span>Editar</span>
                </div>

            </div>
        </>
    );
}