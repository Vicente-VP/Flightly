import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../../Componentes/NavBar/NavBar';
import { Link } from 'react-router-dom';

import editarBranco from '../../Images/icones-perfil/editar-branco.png';
import fotoPerfil from '../../Images/icones-perfil/foto-perfil.png';
import fechar from '../../Images/icones-perfil/fechar.png';
import editarAzul from '../../Images/icones-perfil/editar-azul.png';
import anterior from '../../Images/icones-perfil/anterior.png';
import seguinte from '../../Images/icones-perfil/seguinte.png';
import logout from '../../Images/icones-perfil/logout.png';
import fotoLocal from '../../Images/icones-perfil/recife.png';
import planoReservado from '../../Images/icones-perfil/plano-reservado.png';
import './style_Perfil.css';

export default function Perfil() {

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

    return (
        <>
            <div style={{ height: '76px' }}>
                <NavBar />
            </div>

            <div id="container-popup-editar-perfil">
                <div className="topo-popup-perfil">
                    <div className="popup-userfoto-perfil">
                        <img src={editarBranco} className="icone-editar-popup-perfil" />
                        <img src={fotoPerfil} className="img-popup-userfoto-perfil" alt="Foto de Perfil do Usuário" />
                    </div>
                    <button className="btn-fechar-popup-perfil" id="btn-fechar-popup-perfil">
                        <img src={fechar} className="img-fechar-popup-perfil"
                            alt="Botão de Editar Perfil" />
                    </button>
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil">Nome</label>
                    <input type="text" className="input-popup-perfil" placeholder="Insira o nome do usuário" />
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil">E-mail</label>
                    <input type="text" className="input-popup-perfil" placeholder="Insira o email do usuário" />
                </div>
                <div className="div-popup-perfil">
                    <label className="label-popup-perfil-data">Data de Nascimento</label>
                    <div className="div-data-popup-perfil">
                        <input type="number" className="input-popup-perfil-data" placeholder="Dia" min="1" max="31" />
                        <input type="number" className="input-popup-perfil-data" placeholder="Mês" min="1" max="12" />
                        <input type="number" className="input-popup-perfil-data" placeholder="Ano" min="1900" max="2024" />
                    </div>
                </div>
                <div className="base-popup-perfil">
                    <button className="btn-alterar-dados-perfil" id="btn-alterar-dados-perfil">Alterar</button>
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
                        <img src={fotoPerfil} className="userfoto-perfil" alt="Foto de Perfil do Usuário" />
                        <label className="usernome-perfil">Thiago Elias</label>
                        <label className="useremail-perfil">thiago.elias@gmail.com</label>
                        <label className="usersenha-perfil">✱✱✱✱✱✱✱</label>
                        <label className="usernasc-perfil">05/01/2000</label>
                    </div>
                    <div className="userperfil-perfil">
                        <hr className="hr-perfil-cima" />
                        <label className="titulo-userperfil">Perfil do Viajante</label>
                        <label className="userperfil">Aventureiro</label>
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
                        <a href="" className="ver-todos-andamento-perfil">Ver Todos</a>
                    </div>
                    <div className="cards-plano-andamento-perfil">
                        <div className="card-andamento-perfil">
                            <img src={fotoLocal} className="foto-local-perfil"
                                alt="Foto Panorâmica de Recife" />
                            <label className="nome-local-perfil">Recife</label>
                            <div className="preco-editar-local-perfil">
                                <label className="preco-local-perfil">R$ 3.500,00</label>
                                <a href="#" className="btn-editar-local-perfil">
                                    <img src={editarAzul} className="btn-editar-local-perfil"
                                        alt="Botão de Editar Viagem em Andamento" />
                                </a>
                            </div>
                        </div>
                        <div className="card-andamento-perfil">
                            <img src={fotoLocal} className="foto-local-perfil"
                                alt="Foto Panorâmica de Recife" />
                            <label className="nome-local-perfil">Recife</label>
                            <div className="preco-editar-local-perfil">
                                <label className="preco-local-perfil">R$ 3.500,00</label>
                                <a href="#" className="btn-editar-local-perfil">
                                    <img src={editarAzul} className="btn-editar-local-perfil"
                                        alt="Botão de Editar Viagem em Andamento" />
                                </a>
                            </div>
                        </div>
                        <div className="card-andamento-perfil">
                            <img src={fotoLocal} className="foto-local-perfil"
                                alt="Foto Panorâmica de Recife" />
                            <label className="nome-local-perfil">Recife</label>
                            <div className="preco-editar-local-perfil">
                                <label className="preco-local-perfil">R$ 3.500,00</label>
                                <a href="#" className="btn-editar-local-perfil">
                                    <img src={editarAzul} className="btn-editar-local-perfil"
                                        alt="Botão de Editar Viagem em Andamento" />
                                </a>
                            </div>
                        </div>
                        <div className="card-andamento-perfil">
                            <img src={fotoLocal} className="foto-local-perfil"
                                alt="Foto Panorâmica de Recife" />
                            <label className="nome-local-perfil">Recife</label>
                            <div className="preco-editar-local-perfil">
                                <label className="preco-local-perfil">R$ 3.500,00</label>
                                <a href="#" className="btn-editar-local-perfil">
                                    <img src={editarAzul} className="btn-editar-local-perfil"
                                        alt="Botão de Editar Viagem em Andamento" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="planos-reservados-perfil">
                    <div className="titulo-planos-reservados-perfil">
                        <label className="titulo-reservados-perfil">Histórico de Planos Reservados</label>
                    </div>
                    <div className="cards-planos-reservados-perfil">
                        <div className="heads-reservados-perfil">
                            <div></div>
                            <label className="headNome-tabela-reservado">Nome</label>
                            <label className="headPreco-tabela-reservado">Preço</label>
                            <label className="headLocalizacao-tabela-reservado">Localizações</label>
                            <div></div>
                        </div>
                        <div className="container-carrossel-reserados">
                            <div className="slide-plano-reservado-perfil">
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Viagem do Balacubaco</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Viagem do Balacubaco</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
                            </div>
                            <div className="slide-plano-reservado-perfil">
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Enzo</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Viagem do Balacubaco</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
                            </div>
                            <div className="slide-plano-reservado-perfil">
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Vinicius</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
                                <div className="planoEspecifico-reservados-perfil">
                                    <img src={planoReservado} className="imagemViagem-reservado-perfil"
                                        alt="Imagem do Plano Reservado" />
                                    <label className="nomeViagem-reservado-perfil">Viagem do Balacubaco</label>
                                    <label className="precoViagem-reservado-perfil">R$ 3500,00</label>
                                    <label className="localizacaoViagem-reservado-perfil">Cancun, Londres, Havaí</label>
                                </div>
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
                                            alt="Botão de Voltar página dos planos reservados"/>
                                    </button>
                                    <button id="btnSeguir-reservado" className="btnSeguir-reservado" onclick="slideProx()">
                                        <img src={seguinte} className="img-seguir-reservado"
                                            alt="Botão de Seguir página dos planos reservados"/>
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
