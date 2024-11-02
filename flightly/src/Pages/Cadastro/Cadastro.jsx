import React, { useState } from 'react';
import './style_Cadastro.css';
import NavBar from "../../Componentes/NavBar/NavBar";
import { useNavigate } from 'react-router-dom';

import icon_apple from '../../Images/Icones_Login_e_Cad/icon_apple.png';
import icon_google from '../../Images/Icones_Login_e_Cad/icon_google.png';
import icon_face from '../../Images/Icones_Login_e_Cad/icon_face.png';
import axios from 'axios';
  
export default function Cadastro (){


    const navigate = useNavigate();





    function Register(){
        let name = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('data_nascimento').value;
        let password = document.getElementById('senha').value;
        console.log(name, email, date, password);
        
        axios.post('http://localhost:5000/register', {
            name: name,
            email: email,
            birthdate: date,
            password: password
        }, {
            headers:{
            'Content-Type': 'application/json'
        }
    }).then(()=>{alert("Cadastro realizado com sucesso!"); navigate('/Login')}).catch(()=>{alert("Erro ao cadastrar")})

    }  

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    const SubmitRegister = () =>{

        if(document.getElementById('senha').value === document.getElementById('confirmar_senha').value){
            Register();
        }
        else{
            openPop();
            console.log("Senhas diferentes")
        }
    }


    const [isPopOpen, setIsPopOpen] = useState(false);

  // Função para abrir o modal
  const openPop = () => {
    setIsPopOpen(true);
  };

  // Função para fechar o modal
  const closePop = () => {
    setIsPopOpen(false);
  };

    return (
        <>
            <div style={{height: 76+'px'}}><NavBar/></div>

            <div className="body_cad">
                <div className="container">
                    <div className="card-cadastro-esq">
                        <div className="position_title_log">
                            <h1 className="title_log">Seja bem-vindo ao Flightly!</h1>
                            <a href="../Login" className="link_log">Já tem cadastro?</a>
                        </div>
                    </div>
                    <div className="card-cadastro-dir">
                        <div className="forms">
                            <div>
                                <h1 className="title_forms">Cadastro</h1>
                            </div>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Thiago Elias" className="input" />
                            </div>
                            <div style={{ marginTop: '14px' }}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="thiago.elias@gmail.com" className="input" />
                            </div>
                            <div style={{ marginTop: '14px' }}>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha" placeholder="*******" className="input" />
                            </div>
                            <div style={{ marginTop: '14px' }}>
                                <label htmlFor="confirmar_senha">Confirmação de senha</label>
                                <input type="password" id="confirmar_senha" name="confirmar_senha" placeholder="*******" className="input" />
                            </div>
                            <div style={{ marginTop: '14px' }}>
                                <label htmlFor="data_nascimento">Data de nascimento</label>
                                <input type="date" id="data_nascimento" name="data_nascimento" placeholder="30/06/2025" className="input" />
                                <div className="checkbox-container">
                                    <input type="checkbox" id="customCheckbox"
                                    checked={checked}
                                    onChange={handleChange}
                                    className="custom-checkbox"
                                    />
                                    <label htmlFor="customCheckbox" className="custom-label"></label>
                                    <label htmlFor="manter_conectado" className="manter_conectado">Manter-me conectado</label>
                                </div>
                            </div>
                            <div>
                                <img src={icon_google} alt="icon_apple" id="icon_google" className="img_log_cad" />
                                <img src={icon_apple} alt="icon_apple" id="icon_apple" className="img_log_cad"/>
                                <img src={icon_face} alt="icon_apple" id="icon_face" className="img_log_cad"/>
                            </div>
                            <div>
                                <button type="submit" className="btn-submit" onClick={SubmitRegister}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isPopOpen && (
        <div className="pop-overlay">
          <div className="pop-content">
            <h2>Senhas Diferentes</h2>
            <p>Confira as senhas novamente.</p>

            {/* Botão para fechar o modal */}
            <button className="closepop" onClick={closePop}>Fechar</button>
          </div>
        </div>
      )}
        </>
    )
}