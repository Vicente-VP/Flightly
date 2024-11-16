import React, { useState, useRef  } from "react";
import "./style_FiltrosHospedagem.css";

export default function FiltrosHospedagem() {

  const [precoHosp, setPrecoHosp] = useState(100)

  const handleChangePriceHosp = (event) => {
    const newValue = event.target.value;
    setPrecoHosp(newValue);

    // Calcula o percentual de preenchimento do slider
    const percent = ((newValue - 100) / (10000 - 100)) * 100;
    event.target.style.setProperty('--progress', `${percent}%`);
};

  return (
    <>
      <div className="container-filtrohosp">
        <div>
          <label htmlFor="TipoHospedagem" className="lbl-filtrohosp1">
            Tipo de Hospedagem
          </label>
          <select name="TipoHospedagem" className="select-filtroshosp-tipohosp">
            <option value="Nenhum">Nenhuma</option>
            <option value="hotel">Hotel</option>
            <option value="hotelfazenda">Hotel Fazenda</option>
            <option value="hostel">Hostel</option>
            <option value="motel">Motel</option>
            <option value="pousada">Pousada</option>
            <option value="resort">Resort</option>
            <option value="pensao">Pensão</option>
            <option value="airbnb">Airbnb</option>
          </select>
        </div>
        <div>
          <label htmlFor="Avaliacao" className="lbl-filtrohosp2">
            Avaliação
          </label>
          <select name="Avaliacao" className="select-filtroshosp-avaliacao">
            <option value="Nenhum">Nenhuma</option>
            <option value="0stars">0 Estrelas</option>
            <option value="1stars">1 Estrela</option>
            <option value="2stars">2 Estrelas</option>
            <option value="3stars">3 Estrelas</option>
            <option value="4stars">4 Estrelas</option>
            <option value="5stars">5 Estrelas</option>
          </select>
        </div>
        <div>
          <label htmlFor="Comodidades" className="lbl-filtrohosp3">
            Comodidades
          </label>
          <select name="Comodidades" className="select-filtroshosp-comodidades">
            <option value="Nenhum">Nenhuma</option>
            <option value="psicina">Piscina</option>
            <option value="vistmar">Vista para o mar</option>
            <option value="peareia">Pé na areia</option>
            <option value="servicoquarto">Serviço de quarto</option>
            <option value="frigobar">Frigobar</option>
            <option value="wifi">Wi-fi</option>
            <option value="academia">Academia</option>
          </select>
        </div>
        <label className="lbl-filtrohosp4">Preço</label>
        <div className="price-hosp">
          <div className='values-priceHosp'>
              <label className='valor-hosp'>R$100</label>
              <label className='valor-hosp'>R${Number(precoHosp).toLocaleString('pt-BR')}</label>
          </div>
          <div className='slider-Hosp'>
              <input type="range" min="100" max="10000" value={precoHosp}
              onChange={handleChangePriceHosp}
              style={{
                  '--progress': `${((precoHosp - 100) / (10000 - 100)) * 100}%`
              }}/>
          </div>
        </div>
        <div>
          <button type="submit" className="btn-pesq-filtrohosp">
            Pesquisar
          </button>
        </div>
      </div>
    </>
  );
}