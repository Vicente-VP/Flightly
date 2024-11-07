import './styleFiltroPlano.css';
import React, { useState } from 'react';

export default function FiltroPlanoViagem({ onFilterChange, onAllFiltersDeactivated, onEditButtonClick, DeleteItems }) {
    const [checked, setChecked] = useState(true);
    const [activeButtons, setActiveButtons] = useState({
        voos: true,
        hospedagens: true,
        carros: true,
        pontosTuristicos: true
    });
    const [activeCount, setActiveCount] = useState(4);
    const [btnEdit, setBtnEdit] = useState(false);

    const allFilterActive = (newCount) => {
        setChecked(newCount === 4);
        if (newCount === 0 && onAllFiltersDeactivated) {
            onAllFiltersDeactivated();
        }
    };

    const handleChange = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);

        const newActiveState = {
            voos: newCheckedState,
            hospedagens: newCheckedState,
            carros: newCheckedState,
            pontosTuristicos: newCheckedState
        };

        setActiveCount(newCheckedState ? 4 : 0);
        setActiveButtons(newActiveState);
        onFilterChange(newActiveState);
    };
    

    const handleButtonClick = (buttonKey) => {
        setActiveButtons((prevActiveButtons) => {
            const isActive = prevActiveButtons[buttonKey];
            const newActiveButtons = {
                ...prevActiveButtons,
                [buttonKey]: !isActive
            };

            const newCount = isActive ? activeCount - 1 : activeCount + 1;
            setActiveCount(newCount);
            allFilterActive(newCount);

            onFilterChange(newActiveButtons);
            return newActiveButtons;
        });
    };
    const handleBtnEdit = () => {
        setBtnEdit(!btnEdit);
        if (onEditButtonClick) {
            onEditButtonClick(); // Chama a função de callback ao clicar no botão
        }
    };

    return (
        <div className='filter-container'>
            <div className='filter-space'>
                <div className='fly-filter'>
                    <button
                        className={`btn-fly ${activeButtons.voos ? 'active' : ''}`}
                        onClick={() => handleButtonClick('voos')}
                    >
                        Voos
                    </button>
                </div>
                <div className='hotel-filter'>
                    <button
                        className={`btn-hotel ${activeButtons.hospedagens ? 'active' : ''}`}
                        onClick={() => handleButtonClick('hospedagens')}
                    >
                        Hospedagens
                    </button>
                </div>
                <div className='car-filter'>
                    <button
                        className={`btn-car ${activeButtons.carros ? 'active' : ''}`}
                        onClick={() => handleButtonClick('carros')}
                    >
                        Carros
                    </button>
                </div>
                <div className='turistic-filter'>
                    <button
                        className={`btn-turistic ${activeButtons.pontosTuristicos ? 'active' : ''}`}
                        onClick={() => handleButtonClick('pontosTuristicos')}
                    >
                        Pontos Turísticos
                    </button>
                </div>
                <div className="container-checkbox">
                    <input
                        type="checkbox"
                        id='checkBox-filtroPlano'
                        checked={checked}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='edit-space'>
                <div className="edit-innerSpace">
                    <button className={`btn-edit edit ${btnEdit ? 'active' : ''}`} onClick={handleBtnEdit}></button>
                    <span>Editar</span>
                </div>
                <div className={`edit-innerSpace delete ${btnEdit ? 'active' : ''}`}>
                    <button className={`btn-edit delete ${btnEdit ? 'active' : ''}`} onClick={DeleteItems}></button>
                    <span className={`spanDelete ${btnEdit ? 'active' : ''}`} >Apagar</span>
                </div>
            </div>
        </div>
    );
}
