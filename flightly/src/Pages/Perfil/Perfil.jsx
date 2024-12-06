import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import editarBranco from '../../Images/icones-perfil/editar-branco.png';
import fotoPerfil from '../../Images/icones-perfil/foto-perfil.png';
import fechar from '../../Images/icones-perfil/fechar.png';
import editarAzul from '../../Images/icones-perfil/editar-azul.png';
import anterior from '../../Images/icones-perfil/anterior.png';
import seguinte from '../../Images/icones-perfil/seguinte.png';
import logout from '../../Images/icones-perfil/logout.png';
import Perfil_icon from '../../Images/NavBar-icons/Perfil_icon.png';
import fotoLocal from '../../Images/icones-perfil/recife.png';
import planoReservado from '../../Images/icones-perfil/plano-reservado.png';

import CardPlanoViagem from '../../Componentes/Cards/Card_Plano_Viagem/CardPlanoViagem';
import FundoPlano from '../../Images/Card_Plano_Viagem/recife_cardInfo.png';
import FundoPlano2 from '../../Images/Card_Plano_Viagem/Maceio.png';
import FundoPlano3 from '../../Images/Card_Plano_Viagem/Los_Angeles.png';
import FundoPlano4 from '../../Images/Card_Plano_Viagem/Rio_de_Janeiro.png';
import FundoPlano5 from '../../Images/Card_Plano_Viagem/Sampa.png';
import './style_Perfil.css';

import Gol from "../../Images/Card_Informacoes_Voo/Gol.png";
import Azul from "../../Images/Card_Informacoes_Voo/AZUL.png";
import LATAM from "../../Images/Card_Informacoes_Voo/LATAM.png";
import Avianca from "../../Images/Card_Informacoes_Voo/Avianca.png";
import Voepass from "../../Images/Card_Informacoes_Voo/VOEPASS.png";
import SkyAirline from "../../Images/Card_Informacoes_Voo/Sky_Airline.png";

import calendarioIcon from '../../Images/Icones-Cards/ida-volta.png';

const companyImage = {
    Gol: Gol,
    Azul: Azul,
    LATAM: LATAM,
    Avianca: Avianca,
    VOEPASS: Voepass,
    SkyAirline: SkyAirline
}

export default function Perfil() {

    const navigate = useNavigate();
    const hasFetched = useRef(false);

    function Alterar() {

        let nome = document.getElementById('nomeAlt').value || localStorage.getItem('username');
        let email = document.getElementById('emailAlt').value || localStorage.getItem('email');
        var data_nasc = '';

        if (document.getElementById('diaAlt').value) {
            let dia_nasc = document.getElementById('diaAlt').value;
            let mes_nasc = document.getElementById('mesAlt').value;
            let ano_nasc = document.getElementById('anoAlt').value;

            data_nasc = `${dia_nasc}/${mes_nasc}/${ano_nasc}`;
        }
        else {
            data_nasc = localStorage.getItem('data_nasc');
        }

        let ID = localStorage.getItem('userid');
        let password = localStorage.getItem('password');


        console.log(nome, email, data_nasc);



        axios.post(`https://flightlydbapi.onrender.com/updateUser`, {
            "id_usuario": ID,
            "email": email,
            "senha": password,
            "nome": nome,
            "data_nasc": data_nasc,

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            localStorage.setItem('username', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('data_nasc', data_nasc)
                ; navigate("/Perfil");
        }).catch(() => { alert("Erro ao alterar dados") })

    }
    const [fundos, setFundos] = useState([FundoPlano, FundoPlano2, FundoPlano3, FundoPlano4, FundoPlano5]);
    const [planos, setPlanos] = useState([]);
    const [voos, setVoos] = useState([]);
    const [hoteis, setHoteis] = useState([]);
    const [carros, setCarros] = useState([]);

    const getHistoricoVoo = async () => {
        try {
            const response = await axios.get(`https://flightlydbapi.onrender.com/getVooHistorico?id_usuario=${localStorage.getItem('userid')}`);
            let idsVoos = response.data.map((voo) => voo[0]);
            const vooResponse = await axios.get(`https://flightlydbapi.onrender.com/getDetalhesVooHistorico`, { params: { "ids_voos[]": idsVoos } });
            setVoos(vooResponse.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            axios.get(`https://flightlydbapi.onrender.com/getPlanos?id_usuario=${localStorage.getItem('userid')}`)
                .then(response => {
                    console.log(response.data);
                    setPlanos(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
            getHistoricoVoo();
        }
    }, []);

    useEffect(() => {
        const elementoMes = document.getElementById('mes-calendario');
        const elementoAno = document.getElementById('ano-calendario');
        const elementoDatas = document.getElementById('datas');
        const btnAntMes = document.getElementById('btnAntMes');
        const btnSegMes = document.getElementById('btnSegMes');
        const btnEditarDados = document.getElementById('btn-editar-dados-perfil');
        const btnFecharPopup = document.getElementById('btn-fechar-popup-perfil');
        const containerPopup = document.getElementById('container-popup-editar-perfil');

        let dataAtual = new Date();
        let slideIndex = 0;

        const atualizarCalendario = () => {
            const anoAtual = dataAtual.getFullYear();
            const mesAtual = dataAtual.getMonth();

            const primeiroDia = new Date(anoAtual, mesAtual, 1);
            const ultimoDia = new Date(anoAtual, mesAtual + 1, 0);
            const diasTotais = ultimoDia.getDate();
            const primeiroDiaIndex = primeiroDia.getDay();
            const ultimoDiaIndex = ultimoDia.getDay();

            const stringMes = dataAtual.toLocaleDateString('default', { month: 'long' });
            const stringAno = dataAtual.toLocaleDateString('default', { year: 'numeric' });

            elementoMes.textContent = stringMes;
            elementoAno.textContent = stringAno;

            let datasHTML = '';

            // Dias inativos antes do início do mês
            for (let i = 0; i < primeiroDiaIndex; i++) {
                const dataAnt = new Date(anoAtual, mesAtual, -primeiroDiaIndex + i + 1);
                datasHTML += `<div class="data-inativa">${dataAnt.getDate()}</div>`;
            }

            // Dias do mês atual
            for (let i = 1; i <= diasTotais; i++) {
                const data = new Date(anoAtual, mesAtual, i);
                const classeAtiva = data.toDateString() === new Date().toDateString() ? 'active' : '';
                datasHTML += `<div class="data ${classeAtiva}">${i}</div>`;
            }

            // Dias inativos após o final do mês
            for (let i = 1; i < 7 - ultimoDiaIndex; i++) {
                const dataSeg = new Date(anoAtual, mesAtual + 1, i);
                datasHTML += `<div class="data-inativa">${dataSeg.getDate()}</div>`;
            }

            elementoDatas.innerHTML = datasHTML;


        };

        btnAntMes.addEventListener('click', () => {
            dataAtual.setMonth(dataAtual.getMonth() - 1);
            atualizarCalendario();
        })

        btnSegMes.addEventListener('click', () => {
            dataAtual.setMonth(dataAtual.getMonth() + 1);
            atualizarCalendario();
        })

        const inicializarSlider = () => {
            const slides = document.querySelectorAll(".container-carrossel-reserados .slide-plano-reservado-perfil");
            const pagNum = document.querySelectorAll(".pagNum-plano-reservado");

            if (slides.length > 0) {
                slides[slideIndex].classList.add("mostrarSlide");
                pagNum[slideIndex]?.classList.add("pagAtiva");
            }

            const mostrarSlide = (index) => {
                if (index >= slides.length) {
                    slideIndex = 0;
                } else if (index < 0) {
                    slideIndex = slides.length - 1;
                } else {
                    slideIndex = index;
                }

                slides.forEach(slide => slide.classList.remove("mostrarSlide"));
                pagNum.forEach(pag => pag.classList.remove("pagAtiva"));

                slides[slideIndex].classList.add("mostrarSlide");
                pagNum[slideIndex]?.classList.add("pagAtiva");
            };

            const slideAnt = () => mostrarSlide(slideIndex - 1);
            const slideProx = () => mostrarSlide(slideIndex + 1);

            document.getElementById('btnVoltar-reservado')?.addEventListener('click', slideAnt);
            document.getElementById('btnSeguir-reservado')?.addEventListener('click', slideProx);

            document.querySelectorAll(".pagNum-plano-reservado").forEach((pag, index) => {
                pag.addEventListener('click', () => mostrarSlide(index));
            });

            return () => {
                document.getElementById('btnVoltar-reservado')?.removeEventListener('click', slideAnt);
                document.getElementById('btnSeguir-reservado')?.removeEventListener('click', slideProx);
                document.querySelectorAll(".pagNum-plano-reservado").forEach((pag, index) => {
                    pag.removeEventListener('click', () => mostrarSlide(index));
                });
            };
        };

        const togglePopup = (display) => {
            if (containerPopup) {
                containerPopup.style.display = display;
            }
        };

        if (btnEditarDados) {
            btnEditarDados.addEventListener('click', () => togglePopup("grid"));
        }

        if (btnFecharPopup) {
            btnFecharPopup.addEventListener('click', () => togglePopup("none"));
        }

        atualizarCalendario();
        const cleanupSlider = inicializarSlider();

        return () => {
            if (btnEditarDados) btnEditarDados.removeEventListener('click', () => togglePopup("grid"));
            if (btnFecharPopup) btnFecharPopup.removeEventListener('click', () => togglePopup("none"));
            cleanupSlider();
        };
    }, []);


    const [PopshowIndex, setPopshowIndex] = useState(null); // Tracks which pop-up to show
    const [inputValue, setInputValue] = useState(""); // Tracks the editable input value

    const showPop = (index, initialValue) => {
        setPopshowIndex(index); // Set the index of the flight whose pop-up is shown
        setInputValue(initialValue); // Set initial input value
    };

    const hidePop = () => {
        setPopshowIndex(null); // Hide the pop-up
        setInputValue(""); // Reset input value
    };

    const alterarReserva = (id, data) => {
        axios.post(`https://flightlydbapi.onrender.com/updateVooHistorico`, {
            id_voo: id,
            data: data
        }).then(() => {
            console.log("Reserva alterada com sucesso");
            getHistoricoVoo();
        }).catch(() => {
            console.log("Erro ao alterar reserva");
        });
        hidePop(); // Hide the pop-up
    }

    const cancelarReserva = (idvoo, iduser) => {
        axios.delete('https://flightlydbapi.onrender.com/deleteVooHistorico', {
            data: {
                id_voo: idvoo,
                id_usuario: iduser
            }
        }).then(() => {
            console.log("Reserva cancelada com sucesso");
            getHistoricoVoo();
        }).catch(() => {
            console.log("Erro ao cancelar reserva");
        }
        )
        handleClick(); // Hide the pop-up
    }
    const [popConfirmar, setPopConfirmar] = useState(false);

    const handleClick = () => {
        setPopConfirmar(!popConfirmar);
    }


    return (
        <>
            <div style={{ height: '76px' }}>
                <NavBar />
            </div>

            <div id="container-popup-editar-perfil">
                <div className="topo-popup-perfil">
                    <div className="popup-userfoto-perfil">
                        <img src={editarBranco} className="icone-editar-popup-perfil" />
                        <img src={Perfil_icon} className="img-popup-userfoto-perfil" alt="Foto de Perfil do Usuário" />
                    </div>
                    <button className="btn-fechar-popup-perfil" id="btn-fechar-popup-perfil">
                        <img src={fechar} className="img-fechar-popup-perfil"
                            alt="Botão de Editar Perfil" />
                    </button>
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil">Nome</label>
                    <input type="text" className="input-popup-perfil" id='nomeAlt' placeholder="Insira o nome do usuário" />
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil">E-mail</label>
                    <input type="text" className="input-popup-perfil" id='emailAlt' placeholder="Insira o email do usuário" />
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil-data">Data de Nascimento</label>
                    <div className="div-data-popup-perfil">
                        <input type="number" className="input-popup-perfil-data" id='diaAlt' placeholder="Dia" min="1" max="31" />
                        <input type="number" className="input-popup-perfil-data" id='mesAlt' placeholder="Mês" min="1" max="12" />
                        <input type="number" className="input-popup-perfil-data" id='anoAlt' placeholder="Ano" min="1900" max="2024" />
                    </div>
                </div>
                <div className="base-popup-perfil">
                    <button className="btn-alterar-dados-perfil" id="btn-alterar-dados-perfil" onClick={Alterar}>Alterar</button>
                </div>
            </div>

            <div className="main-grid-perfil">
                <div className="dados-perfil">
                    <div className="titulo-dados-perfil">
                        <label className="titulo-perfil">Perfil</label>
                        <button id="btn-editar-dados-perfil">
                            <img src={editarAzul} className="editar-perfil"
                                alt="Botão de Editar Perfil" />
                        </button>
                    </div>
                    <div className="info-dados-perfil">
                        <img src={Perfil_icon} className="userfoto-perfil" alt="Foto de Perfil do Usuário" />
                        <label className="usernome-perfil">{localStorage.getItem('username')}</label>
                        <label className="useremail-perfil">{localStorage.getItem('email')}</label>
                        <label className="usersenha-perfil">✱✱✱✱✱✱✱</label>
                        <label className="usernasc-perfil">{localStorage.getItem('data_nasc')}</label>
                    </div>
                    <div className="userperfil-perfil">
                        <hr className="hr-perfil-cima" />
                        <label className="titulo-userperfil">Perfil do Viajante</label>
                        <label className="userperfil">{(localStorage.getItem('perfil') ? localStorage.getItem('perfil').toUpperCase() : '')}</label>
                        <hr className="hr-perfil-baixo" />
                    </div>
                    <div className="calendario-perfil">
                        <div className="calendario-box">
                            <div className="header-calendario-perfil">
                                <div className="mesAno-calendario-perfil">
                                    <div id="mes-calendario" className="mes-calendario-perfil"></div>
                                    <div id="ano-calendario" className="ano-calendario-perfil"></div>
                                </div>
                                <div className="btnAntSeg-calendario-perfil">
                                    <button id="btnAntMes" className="btnAnt-calendario">
                                        <img src={anterior} className="ant-calendario-perfil"
                                            alt="Botão de Voltar mês do Calendário" />
                                    </button>
                                    <button id="btnSegMes" className="btnSeg-calendario">
                                        <img src={seguinte} className="seg-calendario-perfil"
                                            alt="Botão de Prosseguir mês do Calendário" />
                                    </button>
                                </div>
                            </div>
                            <div className="semana-calendario-perfil">
                                <label for="" className="diaSemana-calendario">Dom</label>
                                <label for="" className="diaSemana-calendario">Seg</label>
                                <label for="" className="diaSemana-calendario">Ter</label>
                                <label for="" className="diaSemana-calendario">Qua</label>
                                <label for="" className="diaSemana-calendario">Qui</label>
                                <label for="" className="diaSemana-calendario">Sex</label>
                                <label for="" className="diaSemana-calendario">Sab</label>
                            </div>
                            <div className="datas" id="datas"></div>
                        </div>
                    </div>
                    <div className="div-logout-perfil">
                        <hr className="hr-calendario-baixo" />
                        <button className="btn-logout-perfil">
                            <img src={logout} className="img-logout-perfil" alt="Botão de Logout" />
                        </button>
                    </div>
                </div>
                <div className="planos-andamento-perfil">
                    <div className="titulo-planos-andamento-perfil">
                        <label className="titulo-andamento-perfil">Planejamentos em Andamento</label>
                        <Link to="/PlanosViagem" className="ver-todos-andamento-perfil">Ver Todos</Link>
                    </div>
                    <div className="cards-plano-andamento-perfil">
                        <div className="container-cardsPlanoViagem-perfil" key={`container`}>
                            {planos.map((plano, i) => {
                                // Render a new container only when the index is divisible by 4
                                if (i <= 4) {
                                    return (


                                        <Link
                                            to={`/PlanoEspecifico?id=${plano[0]}&nome=${plano[1]}`}
                                            className='LinkPlanos'
                                            key={plano[0]}
                                        >
                                            <CardPlanoViagem
                                                index={i}
                                                fundos={fundos[i]}
                                                id={plano[0]}
                                                nome={plano[1]}
                                                preco={plano.preco}
                                                descricao={plano.descricao}
                                                imagem={plano.imagem}
                                            />
                                        </Link>
                                    )
                                }

                                return null; // Do not render anything if not divisible by 4
                            })
                            }
                        </div>

                    </div>
                </div>
                <div className="planos-reservados-perfil">
                    <div className="titulo-planos-reservados-perfil">
                        <label className="titulo-reservados-perfil">Histórico de Voos Reservados</label>
                    </div>
                    <div className="cards-planos-reservados-perfil">
                        <div className="heads-reservados-perfil">
                            <div></div>
                            <label className="headNome-tabela-reservado">Destino</label>
                            <label className="headPreco-tabela-reservado">Preço</label>
                            <label className="headLocalizacao-tabela-reservado">Data</label>
                            <div></div>
                        </div>
                        <div className="container-carrossel-reserados">
                            <div className="slide-plano-reservado-perfil">
                                {voos.map((voo, index) => (
                                    index <= 1 && (
                                        <div
                                            key={index}
                                            className="planoEspecifico-reservados-perfil"
                                            onClick={() => showPop(index, voo[1])} // Pass the index and initial value
                                        >
                                            <img
                                                src={companyImage[voo[0]]}
                                                className="imagemViagem-reservado-perfil"
                                                alt={voo[0]}
                                            />
                                            <label className="nomeViagem-reservado-perfil">{voo[10]}</label>
                                            <label className="precoViagem-reservado-perfil">R$ {voo[5]}</label>
                                            <label className="localizacaoViagem-reservado-perfil">{voo[1]}</label>

                                            {PopshowIndex === index && ( // Show only for the selected flight
                                                <div className="popEditar">
                                                    <input
                                                        type="text"
                                                        name="datavoo"
                                                        id="datavoo"
                                                        value={inputValue} // Bind to state
                                                        onChange={(e) => setInputValue(e.target.value)} // Update state on change
                                                        className="data-popEditar"
                                                        style={{ backgroundImage: `url(${calendarioIcon})` }}
                                                    />
                                                    <div className="divBtns-popEditar">
                                                        <input
                                                            type="button"
                                                            value="Alterar"
                                                            className="btn-popEditar"
                                                            onClick={() => alterarReserva(voo[11], inputValue)} // Handle "Alterar" logic
                                                        />
                                                        <input
                                                            type="button"
                                                            value="Cancelar"
                                                            className="btn-popEditar"
                                                            onClick={handleClick}// Hide the pop-up
                                                        />
                                                    </div>
                                                    {popConfirmar && (
                                                    <div className='container-cancelarReserva'>
                                                        <div className='center-cancelarReserva'>
                                                            <label className="title-create">Tem certeza que deseja cancelar esta reserva?</label>
                                                        </div>
                                                        <div className='bottom-cancelarReserva'>
                                                            <button type="submit" className="btn-cancelarReserva" onClick={() => cancelarReserva(voo[11], localStorage.getItem('userid'))}>Sim</button>
                                                            <button type="submit" className="btn-cancelaplan" onClick={handleClick}>Não</button>
                                                        </div>
                                                    </div>
                                                    )}
                                                </div>
                                            )}

                                        </div>
                                    )
                                ))}
                            </div>

                            <div className="paginas-plano-reservado-perfil">
                                <div className="numeros-paginas-reservado">
                                    <button className="pagNum-plano-reservado" id="1" onclick="setPage(this.id)">1</button>
                                    <button className="pagNum-plano-reservado" id="2" onclick="setPage(this.id)">2</button>
                                    <button className="pagNum-plano-reservado" id="3" onclick="setPage(this.id)">3</button>
                                    <button className="pagExtras-plano-reservado">...</button>
                                    <button className="pagNum-plano-reservado" id="10" onclick="setPage(this.id)">10</button>
                                </div>
                                <div className="navegar-plano-reservado-perfil">
                                    <button id="btnVoltar-reservado" className="btnVoltar-reservado" onclick="slideAnt()">
                                        <img src={anterior} className="img-voltar-reservado"
                                            alt="Botão de Voltar página dos planos reservados" />
                                    </button>
                                    <button id="btnSeguir-reservado" className="btnSeguir-reservado" onclick="slideProx()">
                                        <img src={seguinte} className="img-seguir-reservado"
                                            alt="Botão de Seguir página dos planos reservados" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
