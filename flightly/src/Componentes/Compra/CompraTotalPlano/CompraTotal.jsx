import React, { useEffect, useState } from 'react';
import './style_CompraTotal.css';
import { useNavigate } from 'react-router-dom';

export default function CompraTotal( props ) {
    const navigate = useNavigate();

    const [priceTot, setPriceTot] = useState();
    const [voos, setVoos] = useState([]);
    const [hospedagens, setHospedagens] = useState([]);
    const [carros, setCarros] = useState([]);
    const [pontosTuristicos, setPontosTuristicos] = useState([]);

    
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

const handleNavigate = () => {
  const queryParams = new URLSearchParams();

  // Append idsVoos
  if (props.idsVoos && props.idsVoos.length > 0) {
    props.idsVoos.forEach((id) => queryParams.append("idsVoos[]", id));
  }

  // Append idsHoteis
  if (props.idsHoteis && props.idsHoteis.length > 0) {
    props.idsHoteis.forEach((id) => queryParams.append("idsHoteis[]", id));
  }

  // Append idsCarros
  if (props.idsCarros && props.idsCarros.length > 0) {
    props.idsCarros.forEach((id) => queryParams.append("idsCarros[]", id));
  }

  // Append idsPontos
  if (props.idsPontos && props.idsPontos.length > 0) {
    props.idsPontos.forEach((id) => queryParams.append("idsPontos[]", id));
  }

  // Navigate with constructed query parameters
  navigate(`/Compra?${queryParams.toString()}`);
};

return (
    <>
        <div className={`Block_Preco ${isSticky ? 'sticky' : 'fixed'}`} id='preco-total'>
            <div className="conteudo_preco">
                <label className='txt-telaCompra' htmlFor="Total_preco">Subtotal: R$ </label>
                <span>{props.preco}</span>
            </div>

            <div className="conteudo_preco">
                <label className='txt-telaCompra' htmlFor="Num_items">Quantidade de Itens: </label>
                <span>{props.items}</span>
            </div>

            <button onClick={handleNavigate} className="btn-submit">Comprar</button>
        </div>
    </>
);
}
