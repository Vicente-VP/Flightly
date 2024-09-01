import React from 'react';
import './style_Cadastro.css';
import NavBar from "../../Componentes/NavBar/NavBar";

import icon_apple from '../../Images/Icones_Login_e_Cad/icon_apple.png';
import icon_google from '../../Images/Icones_Login_e_Cad/icon_google.png';
import icon_face from '../../Images/Icones_Login_e_Cad/icon_face.png';
  
export default function Cadastro (){
    return (
        <>
            <div style={{height: 76+'px'}}><NavBar/></div>

            <div className="container-cadastro">
                <div className="card-cadastro-esq">
                    <div className="position_title_log">
                        <h1 className="title_log">Seja bem-vindo ao Flightly!</h1>
                        <a href="../Login" className="link_log">Já tem cadastro?</a>
                    </div>
                </div>
                <div className="card-cadastro-dir">
                    <div className="forms">
                        <div>
                            <h1 className="title">Cadastro</h1>
                        </div>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Thiago Elias" className="input" />
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="thiago.elias@gmail.com" className="input" />
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <label htmlFor="senha">Senha</label>
                            <input type="text" id="senha" name="senha" placeholder="*******" className="input" />
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <label htmlFor="confirmar_senha">Confirmação de senha</label>
                            <input type="text" id="confirmar_senha" name="confirmar_senha" placeholder="*******" className="input" />
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <label htmlFor="data_nascimento">Data de nascimento</label>
                            <input type="text" id="data_nascimento" name="data_nascimento" placeholder="30/06/2025" className="input" />
                            <input type="checkbox" id="manter_conectado" name="manter_conectado" className="check-box"/>
                            <label htmlFor="manter_conectado" className="manter_conectado label">Manter-me conectado</label>
                        </div>
                        <div>
                            <img src={icon_google} alt="icon google" id="icon_google" className="img_log_cad" />
                            <img src={icon_apple} alt="icon apple" id="icon_apple" className="img_log_cad"/>
                            <img src={icon_face} alt="icon face" id="icon_face" className="img_log_cad"/>
                        </div>
                        <div>
                            <button type="submit" className="btn_submit">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}