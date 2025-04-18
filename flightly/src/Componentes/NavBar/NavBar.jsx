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
import Fechar_popUpNot from '../../Images/Icones_PopUp/botao-fechar.png';

import './styleNavBar.css';
import React, { useState, useEffect, useRef} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function NavBar() {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isDropdownActiveNot, setDropdownActiveNot] = useState(false);
  const [isDropdownActiveMenu, setDropdownActiveMenu] = useState(false);

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Usar o hook para acessar a URL atual
  
  // Atualiza o link ativo baseado na URL atual
  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === '/Voo') {
      setActiveLink('voos');
    } else if (currentPath.includes('Hospedagem')) {
      setActiveLink('hospedagem');
    } else if (currentPath.includes('Carros')) {
      setActiveLink('carros');
    } else if (currentPath.includes('PontosTuristicos')) {
      setActiveLink('pt');
    } 
  }, [location]);

  const [notificacoes, setNotificacoes] = useState([]);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && localStorage.getItem('userid')) {
      const fetchNotifications = async () => {
        try {
          const response = await axios.get('https://flightlydbapi.onrender.com/getNotificacoes', {
            params: { id_usuario: localStorage.getItem('userid') },
          });
          console.log(response.data);
          setNotificacoes(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchNotifications();
      hasFetched.current = true; // Mark as fetched
    }
  }, []); // Empty dependency array


  const navigate = useNavigate();
  
  function handleClick() {
    if(localStorage.getItem('userid'))
    toggleDropdown();
    else
      navigate('/Login');
    
  }

  function LogOut() {
    localStorage.clear();
    window.location.reload();
    useNavigate('/')
  }


  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };
  const toggleDropdownMenu = () => {
    setDropdownActiveMenu(!isDropdownActiveMenu);
  };

  const toggleDropdownNot = () => {
    setDropdownActiveNot(!isDropdownActiveNot);
  };
  return (
    <header>

      <a href="#" className="toggle-button" onClick={toggleDropdownMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className={`toggle-dropdown-list ${isDropdownActiveMenu ? 'active' : ''}`}>
        <li className="toggle-dropdown-list-item">
          <Link to="/Voo">
          <img src={Aviao_Icon} alt="Voos" id="iconVoo" className="links_dropdowm"/> 
          Voos
          </Link>
          
        </li>
        <li className="toggle-dropdown-list-item">
          <Link to="/Hospedagem">
          <img src={MalaHospedagem_icon} alt="Hospedagens" id="iconHospedagem" className="links_dropdowm"/> 
          Hospegdagens
          </Link>
          
        </li>
        <li className="toggle-dropdown-list-item">
          <Link to="/Carros">
          <img src={Carro_icon} alt="Carros" id="iconCarro" className="links_dropdowm"/>  
          Carros
          </Link>
        </li>
        <li className="toggle-dropdown-list-item">
          <Link to="/PontosTuristicos">
          <img src={PontoTuristico_icon} alt="Pontos Turísticos" id="iconTuristico" className="links_dropdowm"/>   
          Pontos turisticos
          </Link> 
          
        </li>
      </ul>



      <Link to="/">
        <img src={Logo_Flightly} alt="Logo" className="navbar-Logo"/>
      </Link>

      <nav className="navbar">
        <div className="nav" id='linkVoo'>
          <Link to="/Voo">
            <img src={Aviao_Icon} alt="Voos" id="iconVoo" />
          </Link>
          <Link to="/Voo" className={`title_nav ${activeLink === 'voos' ? 'active' : ''}`}
          >Voos</Link>
        </div>
        <div className="nav" id='linkHospedagem' >
          <Link to="/Hospedagem">
            <img src={MalaHospedagem_icon} alt="Hospedagens" id="iconHospedagem" />
          </Link>
          <Link to="/Hospedagem" className={`title_nav ${activeLink === 'hospedagem' ? 'active' : ''}`}>Hospedagens</Link>
        </div>
        <div className="nav" id='linkCarro'>
          <Link to="/Carros">
            <img src={Carro_icon} alt="Carros" id="iconCarro" />
          </Link>
          <Link to="/Carros" className={`title_nav ${activeLink === 'carros' ? 'active' : ''}`}>Carros</Link>
        </div>
        <div className="nav" id='linkPt'>
          <Link to="/PontosTuristicos">
            <img src={PontoTuristico_icon} alt="Pontos Turísticos" id="iconTuristico" />
          </Link>
          <Link to="/PontosTuristicos" className={`title_nav ${activeLink === 'pt' ? 'active' : ''}`}>Pontos Turísticos</Link>
        </div>
      </nav>

      <div id="navbar_buttons">
        {localStorage.getItem('userid') && (<div className="buttons">
          <Link to="/PlanosViagem">
            <img src={Planos_icon} alt="Planos de viagem" id="plano" className="plano"/>
          </Link>
          <Link to="/PlanosViagem" className="title_nav">Planos</Link>
        </div>)}
        
        <div className="perfil-dropdown">
        
          <div className="buttons" id="perfil-dropdown-btn" onClick={handleClick}>
            <img src={Perfil_icon} alt="Perfil" id="perfil" />
            <span className="title_nav">{localStorage.getItem('username') ?? "Perfil"}</span>
          </div>

          <ul className={`perfil-dropdown-list ${isDropdownActive ? 'active' : ''}`}>
            <span className="title-popUp">Nome do usuário</span>
            <li className="perfil-dropdown-list-item">
              <a onClick={toggleDropdownNot}>
                <img src={Notificacoes_popUp} alt="Notificações" />
                Notificações
              </a>
            </li>
            <li className="perfil-dropdown-list-item">
              <Link to="/Perfil">
                <img src={Perfil_popUp} alt="Seu perfil" />
                Seu perfil
              </Link>
            </li>
            <li className="perfil-dropdown-list-item">
              <Link to="/PlanosViagem">
                <img src={Plano_popUp} alt="Planos de viagem" />
                Planos de viagem
              </Link>
            </li>
            <li className="perfil-dropdown-list-item">
              <Link to="/Questionario">
                <img src={Quiz_popUp} alt="Quiz" />
                Quiz
              </Link>
            </li>
            <li className="perfil-dropdown-list-item">
              <a onClick={LogOut}>
                <img src={Sair_popUp} alt="Sair" />
                Sair
              </a>
            </li>
          </ul>

          {/* dropdow Notificações */}
          <ul className={`not-dropdown-list ${isDropdownActiveNot ? 'active' : ''}`}>
            <span className="title-popUp-not"><img src="" />Notificações<img src={Fechar_popUpNot} id='img-fechar' alt="fechar" onClick={toggleDropdownNot}/></span>
            <hr />
            {notificacoes.map((notificacao, index) => {
              console.log(notificacao[2]);
              return (
                <li key={index} className="perfil-dropdown-list-item-not">
                  <div className="Not-layout">
                    <span><p>{notificacao[3]}</p></span>
                    <p>{notificacao[2]}</p>
                  </div>
                  <hr />
                </li>
              );
            })}
            <li className="perfil-dropdown-list-item-not">
              <div className="Not-layout"> 
                {/* Colocar conteúdo da notificação */}
                <span><p>Titulo</p></span>
                <p>Aqui mostramos os melhores pontos turísticos</p>
              </div>
              <hr />
            </li>
            <li className="perfil-dropdown-list-item-not">
              <div className="Not-layout">
                {/* Colocar conte className=""údo da notificação */}
                <span><p>Titulo</p> <aside>Urgente</aside></span>
                <p>Sua viagem para Salvador mudou de data</p>
              </div>
              <hr />
            </li>
            <li className="perfil-dropdown-list-item-not">
              <div  className="Not-layout">
                {/* Colocar conteúdo da notificação */}
                <span><p>Titulo</p></span>
                <p>Novas promoções de viagens</p>
              </div>
              <hr />
            </li> 
            <li className="perfil-dropdown-list-item-not">
              <div className="Not-layout">
                {/* Colocar conteúdo da notificação */}
                <span><p>Titulo</p></span>
                <p>Vamos viajar! 10% de desconto nas hospedagens</p>
              </div>
              <hr />
            </li>
            <li className="perfil-dropdown-list-item-not">
              <div className="Not-layout">
                {/* Colocar conteúdo da notificação */}
                <span><p>Titulo</p><aside>Urgente</aside></span>
                <p>Sua viagem para Salvador mudou de data</p>
              </div>
              <hr />
            </li>
            <li className="perfil-dropdown-list-item-not">
              <div className="Not-layout">
                {/* Colocar conteúdo da notificação */}
                <span><p>Titulo</p><aside>Urgente</aside></span>
                <p>Sua viagem para Salvador mudou de data</p>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};