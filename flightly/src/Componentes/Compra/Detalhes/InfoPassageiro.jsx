import aviao from "../../../Images/TelaCompra/aviao.png";
import adicionar from "../../../Images/TelaCompra/adicionar.png";

import './style_InfoPassageiro.css';
import React from 'react';

export default function InfoPassageiro() {
    return (
        <>
            <div className="container-infoPassageiro-compra">
                <div className="titulo-infoPassageiro-compra">
                    <img src={aviao} alt="Ícone Avião" />
                    <span className="titulo-infoPassageiro">Passageiro</span>
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">Nome</span>
                    <input type="text" name="" id="" className="input-input-infoPassageiro" placeholder="Insira o nome do passageiro" />
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">Sobrenome</span>
                    <input type="text" name="" id="" className="input-input-infoPassageiro" placeholder="Insira o sobrenome do passageiro" />
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">País de Residência</span>
                    <input type="text" name="" id="" className="input-input-infoPassageiro" placeholder="Brasil" />
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">CPF ou Passaporte</span>
                    <input type="text" name="" id="" className="input-input-infoPassageiro" placeholder="Insira o númeo do documento do passageiro" />
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">Data de Nascimento</span>
                    <div className="container-calendario-input-infoPassageiro">
                        <input type="number" name="" id="" className="calendario-input-infoPassageiro" placeholder="Dia" />
                        <input type="number" name="" id="" className="calendario-input-infoPassageiro" placeholder="Mês" />
                        <input type="number" name="" id="" className="calendario-input-infoPassageiro" placeholder="Ano" />
                    </div>
                </div>
                <div className="div-input-infoPassageiro">
                    <span className="etiqueta-input-infoPassageiro">Gênero</span>
                    <div className="container-geral-genero-infoPassageiro">
                        <div className="container-inputs-genero-infoPassageiro">
                            <div className="div-radio-genero-infoPassageiro">
                                <input type="radio" name="radio-genero" id="" className="genero-radio-infoPassageiro" placeholder="Dia" defaultChecked  />
                                <span className="genero-etiqueta-infoPassageiro">Masculino</span>
                            </div>
                            <div className="div-radio-genero-infoPassageiro">
                                <input type="radio" name="radio-genero" id="" className="genero-radio-infoPassageiro" placeholder="Mês" />
                                <span className="genero-etiqueta-infoPassageiro">Feminino</span>
                            </div>
                            <div className="div-radio-genero-infoPassageiro">
                                <input type="radio" name="radio-genero" id="" className="genero-radio-infoPassageiro" placeholder="Ano" />
                                <span className="genero-etiqueta-infoPassageiro">Outro</span>
                            </div>
                        </div>
                        <div></div> {/* Div para separar botão de adicionar */}
                        <button type="button" className="btnAddPassageiro-infoPassageiro">
                            <img src={adicionar} alt="Ícone Adicionar" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
