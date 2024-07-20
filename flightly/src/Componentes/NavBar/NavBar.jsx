import Logo_Flightly from '../../Images/Logo_Flightly.png';
import Aviao_Icon from '../../Images/NavBar-icons/Aviao_icon.png';
import MalaHospedagem_icon from '../../Images/NavBar-icons/MalaHospedagem_icon.png';
import Carro_icon from '../../Images/NavBar-icons/Carro_icon.png';
import PontoTuristico_icon from '../../Images/NavBar-icons/PontoTuristico_icon.png';
import Perfil_icon from '../../Images/NavBar-icons/Perfil_icon.png';
import Notificacoes_popUp from '../../Images/Icones_PopUp/Notificacoes_popUp.png';
import Perfil_popUp from '../../Images/Icones_PopUp/Perfil_popUp.png';
import Plano_popUp from '../../Images/Icones_PopUp/Plano_popUp.png';
import Quiz_popUp from '../../Images/Icones_PopUp/Quiz_popUp.png';
import Sair_popUp from '../../Images/Icones_PopUp/Sair_popUp.png';

import {Header} from './NavBar_Styled';

import React, { useState } from 'react';



export default function NavBar() {
  const [isDropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };
  return (
    <Header>
      <a href="Voo_page.html">
        <img src={Logo_Flightly} alt="Logo" className="navbar-Logo"/>
      </a>

      <nav className="navbar">
        <div className="nav">
          <a href="Voo_page.html">
            <img src={Aviao_Icon} alt="Voos" id="iconVoo" />
          </a>
          <a href="Voo_page.html" className="title_nav">Voos</a>
        </div>
        <div className="nav">
          <a href="Hospedagem_page.html">
            <img src={MalaHospedagem_icon} alt="Hospedagens" id="iconHospedagem" />
          </a>
          <a href="Hospedagem_page.html" className="title_nav">Hospedagens</a>
        </div>
        <div className="nav">
          <a href="Carro_page.html">
            <img src={Carro_icon} alt="Carros" id="iconCarro" />
          </a>
          <a href="Carro_page.html" className="title_nav">Carros</a>
        </div>
        <div className="nav">
          <a href="PTuristico_page.html">
            <img src={PontoTuristico_icon} alt="Pontos Turísticos" id="iconTuristico" />
          </a>
          <a href="PTuristico_page.html" className="title_nav">Pontos Turísticos</a>
        </div>
      </nav>

      <div id="navbar_buttons">
        <div className="buttons">
          <img src="./Images/NavBar-icons/Planos_icon.png" alt="Planos de viagem" id="plano" />
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
              <a href="#">
                <img src={Notificacoes_popUp} alt="Notificações" />
                Notificações
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a href="#">
                <img src={Perfil_popUp} alt="Seu perfil" />
                Seu perfil
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a href="#">
                <img src={Plano_popUp} alt="Planos de viagem" />
                Planos de viagem
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a href="#">
                <img src={Quiz_popUp} alt="Quiz" />
                Quiz
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <a href="#">
                <img src={Sair_popUp} alt="Sair" />
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
};

