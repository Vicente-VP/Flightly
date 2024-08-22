import React from 'react';
import '../Login/Style_Login.css';
import NavBar from "../../Componentes/NavBar/NavBar";

import icon_apple from '../../Images/Icones_Login_e_Cad/icon_apple.png';
import icon_google from '../../Images/Icones_Login_e_Cad/icon_google.png';
import icon_face from '../../Images/Icones_Login_e_Cad/icon_face.png';
  
export default function Login (){
    return (
        <>
            <div style={{height: 76+'px'}}><NavBar/></div>
        <div className="body_login">
            <div className="container">
            <div className="card-login-esq">
                <div className="forms">
                    <div>
                        <h1 className="title_forms">Login</h1>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="thiago.elias@gmail.com" className="input" />
                    </div>
                    <div style={{ marginBottom: '23px', marginTop: '24px' }}>
                        <label htmlFor="senha">Senha</label>
                        <a href="" className="link_forms">Esqueceu sua senha?</a>
                        <input type="text" id="senha" name="senha" placeholder="*******" className="input" />
                        
                        <input type="checkbox" id="manter_conectado" name="manter_conectado" className="check-box" />
                        <label htmlFor="manter_conectado" className="manter_conectado">Manter-me conectado</label>
                    </div>
                    <div>
                    <img src={icon_google} alt="icon_apple" id="icon_google" className="img_log_cad" />
                            <img src={icon_apple} alt="icon_apple" id="icon_apple" className="img_log_cad"/>
                            <img src={icon_face} alt="icon_apple" id="icon_face" className="img_log_cad"/>
                    </div>
                    <div>
                        <button type="submit" className="btn-submit">Login</button>
                    </div>
                </div>
            </div>
            <div className="card-login-dir">
                <div className="cad">
                    <h1 className="title_cad position_title_cad">Seja bem-vindo de volta!</h1>
                    <a href="Cadastro_page.html" className="link_cad">É novo aqui?</a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}