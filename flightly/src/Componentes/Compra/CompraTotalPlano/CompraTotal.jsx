import React, { useEffect, useState } from 'react';
import './style_CompraTotal.css';

export default function CompraTotal({ props }) {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer');
            const precoTotal = document.getElementById('preco-total');
      
            if (footer && precoTotal) {
              const footerTop = footer.getBoundingClientRect().top;
              const precoTotalHeight = precoTotal.offsetHeight;
      
              // Checa se o rodapé está visível e, se sim, fixa o componente acima dele
              if (footerTop <= window.innerHeight - precoTotalHeight + 105) {
                setIsSticky(true);
              } else {
                setIsSticky(false);
              }
            }
          };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <>
        <div className={`Block_Preco ${isSticky ? 'sticky' : 'fixed'}`} id='preco-total'>
            <div className="conteudo_preco">
                <label className='txt-telaCompra' htmlFor="Total_preco">Subtotal: </label>
                <span>R$50000</span>
            </div>

            <div className="conteudo_preco">
                <label className='txt-telaCompra' htmlFor="Num_items">Quantidade de Itens : </label>
                <span>5</span>
            </div>

            <button onClick={() => window.location.href = "../../../Pages/Compra/Compra.jsx"} className="btn-submit">Comprar</button>
        </div>
    </>
);
}
