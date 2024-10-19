import { useState, useEffect, useRef } from 'react';

import menos from '../../Images/sinalMenos.png';
import mais from '../../Images/sinalMais.png';
import './styleDrop.css';

export default function Drop({imagem, widthDrop, topContent}){
    const [isActive, setIsActive] = useState(false);

    const [nAdult, setNAdult] = useState(1);
    const [criancaIdade, setCriancaIdade] = useState(0);
    const [criancaAssento, setCriancaAssento] = useState(0);
    const [criancaColo, setCriancaColo] = useState(0);
    const [totalPas, setTotalPas] = useState(1);

    const titles = ["Adultos", "Crianças de", "Crianças", "Crinças no"];
    const subTitles = ["", "2 a 11 anos", "no assento", "de colo"];

    const dropdownRef = useRef(null);

    const calcTotal = () =>{
        const total = nAdult + criancaAssento + criancaColo + criancaIdade;
        setTotalPas(total)
    }

    const handleClickInside = (event) => {
        event.stopPropagation();
      };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
        calcTotal();
      }
    };
    
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [nAdult, criancaAssento, criancaColo, criancaIdade]);

    const increment = (value, setter) =>{
        if ( value < 9) setter(value + 1);
    }

    const decrement = (value, setter, min=0) =>{
        if ( value > min) setter(value - 1);
    }

    return(
        <>
            <div className="dropdown" style={{width: widthDrop}}>
                <div className="dropdown-btn" style={{width: widthDrop}} onClick={e=>setIsActive(!isActive)} ref={dropdownRef}><img src={imagem} alt="Passageiros"/>{totalPas}</div>
                {isActive &&(
                    <div className="dropdown-content" style={{top: topContent}} onMouseDown={handleClickInside}>
                        <div className="dropdown-item">
                            <label className='title-label'>Adultos</label>
                            <div id='value'>
                                <div className='btn-add' onClick={() => decrement(nAdult, setNAdult, 1)}><img src={menos} alt="Remover"/></div>
                                <span>{nAdult}</span>
                                <div className='btn-add' onClick={() => increment(nAdult, setNAdult)}><img src={mais} alt="Adicionar"/></div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div>
                                <label className='title-label'>Crianças de</label>
                                <label className='sub-title'>2 a 11 anos</label>
                            </div>
                            <div id='value'>
                                <div className='btn-add' onClick={() => decrement(criancaIdade, setCriancaIdade)}><img src={menos} alt="Remover"/></div>
                                <span>{criancaIdade}</span>
                                <div className='btn-add' onClick={() => increment(criancaIdade, setCriancaIdade)}><img src={mais} alt="Adicionar"/></div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div>
                                <label className='title-label'>Crianças</label>
                                <label className='sub-title'>no assento</label>
                            </div>
                            <div id='value'>
                                <div className='btn-add' onClick={() => decrement(criancaAssento, setCriancaAssento)}><img src={menos} alt="Remover"/></div>
                                <span>{criancaAssento}</span>
                                <div className='btn-add' onClick={() => increment(criancaAssento, setCriancaAssento)}><img src={mais} alt="Adicionar"/></div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <div>
                                <label className='title-label'>Crianças</label>
                                <label className='sub-title'>de colo</label>
                            </div>
                            <div id='value'>
                                <div className='btn-add' onClick={() => decrement(criancaColo, setCriancaColo)}><img src={menos} alt="Remover"/></div>
                                <span>{criancaColo}</span>
                                <div className='btn-add' onClick={() => increment(criancaColo, setCriancaColo)}><img src={mais} alt="Adicionar"/></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
