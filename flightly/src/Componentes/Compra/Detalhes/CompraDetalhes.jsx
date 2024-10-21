import React from "react";
import "./style_CompraPage.css";

export default function DetalhesCompra(props) {
    const { itens } = props;

    // Calcula o preço total
    const precoTotal = itens.reduce((total, item) => total + item.preco, 0);

    return (
        <>
        
            <div className="Details">
            <h1>Detalhes da Compra</h1><br/>
                {itens.map((item, index) => (
                    <div key={index} className="Name_Price_details">
                        <label className="item_details">{item.name}</label>
                        <label className="preco_details">R$ {item.preco.toFixed(2)}</label>
                    </div>
                ))}

                <hr />

                <div className="Name_Price_details">
                    <label className="item_details">Total</label>
                    <label className="preco_details">R$ {precoTotal.toFixed(2)}</label>
                </div>
            </div>
        </>
    );
}
