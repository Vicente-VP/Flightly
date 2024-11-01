import React from 'react';
import './style_CompraTotal.css';
import NavBar from "../../NavBar/NavBar";

export default function CompraTotal({props}){

    /*function Quantidade(props){
        for(let i=0;i < (props.lenght);i++){

            
            return;
        }
    }*/

    return(
        <>

            <div class="Block_Preco"> 

                <div class="conteudo_preco">
                    <label className='txt-telaCompra' for="Total_preco">Subtotal: </label>
                    <span>R$50000</span>
                </div>

                <div class="conteudo_preco">
                    <label className='txt-telaCompra' for="Num_items">Quantidade de Itens : </label>
                    <span>5</span>
                </div>

                <button onclick="../../../Pages/Compra/Compra.jsx"  className="btn-submit">Comprar</button>

            </div>

        </>        
    );
}
