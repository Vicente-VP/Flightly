import React from "react";
import './style_CompraPage.css';


export default function CompraFormaPag(){
    //  const [voos, hotel, carros, ptTuristico] = useState([]) este é só uma ideia da implementação futura de como utlizaremos para o mapeamento dos itens
    return(
        <>
        <div className="FormaPag">
            <h1>Forma de Pagamento</h1>
            <div className="formas_pag">
                
                <div className="Row_Type">
                    <input type="radio" name="FP" value="CC"/>
                    <label for="FP" >Cartão de Credito</label>
                </div>

                <hr className="divisionFormPag"/>
                <div className="Row_Type">
                    <input type="radio" name="FP" value="CD"/>
                    <label for="FP" >Cartão de Debito</label>
                </div>

                <hr className="divisionFormPag"/>
                <div className="Row_Type">
                    <input type="radio" name="FP" value="BL"/>
                    <label for="FP" >Boleto</label>
                </div>

                <hr className="divisionFormPag"/>
                <div className="Row_Type">
                    <input type="radio" name="FP" value="PIX"/>
                    <label for="FP" >Pix</label>
                </div>
            </div> 
        </div>
        </>   );
}