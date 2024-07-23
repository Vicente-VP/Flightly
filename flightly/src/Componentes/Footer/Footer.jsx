import Logo_Flightly from '../../Images/Logo_Flightly.png';

import './styleFooter.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


export default function Footer(){
    return(
        <>
            <footer>
                <section className="container-logo">
                    <Link to="/">
                        <img src={Logo_Flightly} alt="Logo" className="footer-Logo"/>
                    </Link>
                </section>
                <section className="footer-links">
                    <div className="container-redes-sociais">
                        <a href="#" alt="">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" alt="">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="container-links"> 
                        <Link to="/Ajuda">
                            <span>Ajuda</span> 
                            <i class="bi bi-arrow-up-right"></i>
                        </Link>
                        <Link to="/Segurança">
                            <span>Segurança</span> 
                            <i class="bi bi-arrow-up-right"></i>
                        </Link>
                        <Link to="/Termos">
                            <span>Termos e Condições</span> 
                            <i class="bi bi-arrow-up-right"></i>
                        </Link>
                    </div>
                </section>
                
            </footer>
        </>
    );

}