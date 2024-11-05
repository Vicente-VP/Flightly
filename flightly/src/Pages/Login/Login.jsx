import React from 'react';
import './style_Login.css';
import NavBar from "../../Componentes/NavBar/NavBar";

import icon_apple from '../../Images/Icones_Login_e_Cad/icon_apple.png';
import icon_google from '../../Images/Icones_Login_e_Cad/icon_google.png';
import icon_face from '../../Images/Icones_Login_e_Cad/icon_face.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
export default function Login (){
    const navigate = useNavigate();
    function Login(){
        let email = document.getElementById('email').value;
        let password = document.getElementById('senha').value;
        console.log(email, password);

        axios.post('https://flightlydbapi.onrender.com/auth', {
            "email": email,
            "password": password
            }, {
            headers:{
            'Content-Type': 'application/json'
        }
    }).then((response)=>{localStorage.setItem('userid', response.data.id[0]); localStorage.setItem('username', response.data.id[1]); navigate("/");}).catch(()=>{alert("Erro ao fazer login")})
    }

    return (
        <>
        <div style={{height: 76+'px'}}><NavBar/></div>


        <main>
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
                                <input type="password" id="senha" name="senha" placeholder="*******" className="input" />

                                <input type="checkbox" id="manter_conectado" name="manter_conectado" className="check-box" />
                                <label htmlFor="manter_conectado" className="manter_conectado">Manter-me conectado</label>
                            </div>
                            <div>
                            <img src={icon_google} alt="icon_apple" id="icon_google" className="img_log_cad" />
                                    <img src={icon_apple} alt="icon_apple" id="icon_apple" className="img_log_cad"/>
                                    <img src={icon_face} alt="icon_apple" id="icon_face" className="img_log_cad"/>
                            </div>
                            <div>
                                <button type="submit" className="btn-submit" onClick={Login}>Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-login-dir">
                        <div className="cad">
                            <h1 className="title_cad position_title_cad">Seja bem-vindo de volta!</h1>
                            <a href="../Cadastro" className="link_cad">É novo aqui?</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}