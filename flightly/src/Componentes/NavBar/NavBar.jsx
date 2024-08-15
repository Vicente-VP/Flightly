import Logo_Flightly from '../../Images/Logo_Flightly.png';
import Aviao_Icon from '../../Images/NavBar-icons/Aviao_icon.png';
import MalaHospedagem_icon from '../../Images/NavBar-icons/MalaHospedagem_icon.png';
import Carro_icon from '../../Images/NavBar-icons/Carro_icon.png';
import PontoTuristico_icon from '../../Images/NavBar-icons/PontoTuristico_icon.png';
import Planos_icon from '../../Images/NavBar-icons/Planos_icon.png';
import Perfil_icon from '../../Images/NavBar-icons/Perfil_icon.png';
import Notificacoes_popUp from '../../Images/Icones_PopUp/Notificacoes_popUp.png';
import Perfil_popUp from '../../Images/Icones_PopUp/Perfil_popUp.png';
import Plano_popUp from '../../Images/Icones_PopUp/Plano_popUp.png';
import Quiz_popUp from '../../Images/Icones_PopUp/Quiz_popUp.png';
import Sair_popUp from '../../Images/Icones_PopUp/Sair_popUp.png';

import './styleNavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function NavBar() {
  const [isDropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };
  return (
    <header>
      <Link to="/">
        <img src={Logo_Flightly} alt="Logo" className="navbar-Logo"/>
      </Link>

      <nav className="navbar">
        <div className="nav">
          <Link to="/">
            <img src={Aviao_Icon} alt="Voos" id="iconVoo" />
          </Link>
          <Link to="/" className="title_nav">Voos</Link>
        </div>
        <div className="nav">
          <Link to="/Hospedagem">
            <img src={MalaHospedagem_icon} alt="Hospedagens" id="iconHospedagem" />
          </Link>
          <Link to="/Hospedagem" className="title_nav">Hospedagens</Link>
        </div>
        <div className="nav">
          <Link to="/Carros">
            <img src={Carro_icon} alt="Carros" id="iconCarro" />
          </Link>
          <Link to="/Carros" className="title_nav">Carros</Link>
        </div>
        <div className="nav">
          <Link to="/PontosTuristicos">
            <img src={PontoTuristico_icon} alt="Pontos Turísticos" id="iconTuristico" />
          </Link>
          <Link to="/PontosTuristicos" className="title_nav">Pontos Turísticos</Link>
        </div>
      </nav>

      <div id="navbar_buttons">
        <div className="buttons">
          <img src={Planos_icon} alt="Planos de viagem" id="plano" />
          <span className="title_nav">Planos</span>
        </div>
        <div className="perfil-dropdown">
          <div className="buttons" id="perfil-dropdown-btn" onClick={toggleDropdown}>
            <img src={Perfil_icon} alt="Perfil" id="perfil" />
            <span className="title_nav">Perfil</span>
          </div>

          <ul className={`perfil-dropdown-list ${isDropdownActive ? 'active' : ''}`}>
            <span className="title-popUp">Nome do usuário</span>
            <li className="perfil-dropdown-list-item">
              <a>
                <img src={Notificacoes_popUp} alt="Notificações" />
                Notificações
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a>
                <img src={Perfil_popUp} alt="Seu perfil" />
                Seu perfil
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a>
                <img src={Plano_popUp} alt="Planos de viagem" />
                Planos de viagem
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a>
                <img src={Quiz_popUp} alt="Quiz" />
                Quiz
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a>
                <img src={Sair_popUp} alt="Sair" />
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};