import { useState, useEffect, useRef } from 'react';
import menos from '../../Images/sinalMenos.png';
import mais from '../../Images/sinalMais.png';
import './styleDrop.css';

export default function Drop({ imagem, widthDrop, topContent, titles, subTitles, onPassengerChange, nAdult: initialNAdult, criancaIdade: initialCriancaIdade, criancaAssento: initialCriancaAssento, criancaColo: initialCriancaColo }) {
    
    const [isActive, setIsActive] = useState(false);
    
    const [nAdult, setNAdult] = useState(parseInt(initialNAdult) || 1);
    const [criancaIdade, setCriancaIdade] = useState(parseInt(initialCriancaIdade) || 0);
    const [criancaAssento, setCriancaAssento] = useState(parseInt(initialCriancaAssento) || 0);
    const [criancaColo, setCriancaColo] = useState(parseInt(initialCriancaColo) || 0);
    const [totalPas, setTotalPas] = useState(nAdult + criancaIdade + criancaAssento + criancaColo);

    const dropdownRef = useRef(null);

    // Update total passengers count
    const calcTotal = () => {
        const total = nAdult + criancaAssento + criancaColo + criancaIdade;
        setTotalPas(total);
    };

    // Update passenger data and calculate total when any state changes
    const updatePassengerData = () => {
        if (onPassengerChange) { // Check if onPassengerChange is defined
            onPassengerChange({
                nAdult,
                criancaIdade,
                criancaAssento,
                criancaColo
            });
            calcTotal()
        }
    };

    useEffect(() => {
        updatePassengerData();

        return () => {
            // Cleanup function to avoid calling onPassengerChange after unmount
            onPassengerChange = () => {};
        };
    }, [nAdult, criancaIdade, criancaAssento, criancaColo]);

    // Handle dropdown click to toggle active state
    const handleClickInside = (event) => {
        event.stopPropagation();
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Increment function for passenger counts
    const increment = (value, setter) => {
        if (value < 9) {
            setter(value + 1);
        }
    };

    // Decrement function for passenger counts
    const decrement = (value, setter, min = 0) => {
        if (value > min) {
            setter(value - 1);
        }
    };

    return (
        <>
            <div className="dropdown" style={{ '--dropdown-width': widthDrop,'--dropdown-min-width': widthDrop,'--dropdown-max-width': widthDrop,}}>
                <div className="dropdown-btn" style={{ width: widthDrop }} onClick={e => setIsActive(!isActive)} ref={dropdownRef}>
                    <img src={imagem} alt="Passageiros" />{totalPas}
                </div>
                {isActive && (
                    <div className="dropdown-content" style={{ top: topContent }} onMouseDown={handleClickInside}>
                        {titles.map((option, index) => (
                            <div className="dropdown-item" key={index}>
                                <div>
                                    <label className='title-label'>{option}</label>
                                    <label className='sub-title'>{subTitles[index]}</label>
                                </div>
                                <div id='value'>
                                    <div className='btn-add' onClick={() => decrement(
                                        index === 0 ? nAdult : index === 1 ? criancaIdade : index === 2 ? criancaAssento : criancaColo,
                                        index === 0 ? setNAdult : index === 1 ? setCriancaIdade : index === 2 ? setCriancaAssento : setCriancaColo,
                                        index === 0 ? 1 : 0
                                    )}><img src={menos} alt="Remover" /></div>
                                    <span>{index === 0 ? nAdult : index === 1 ? criancaIdade : index === 2 ? criancaAssento : criancaColo}</span>
                                    <div className='btn-add' onClick={() => increment(
                                        index === 0 ? nAdult : index === 1 ? criancaIdade : index === 2 ? criancaAssento : criancaColo,
                                        index === 0 ? setNAdult : index === 1 ? setCriancaIdade : index === 2 ? setCriancaAssento : setCriancaColo
                                    )}><img src={mais} alt="Adicionar" /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
