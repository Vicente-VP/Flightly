import React, { useState, useRef  } from "react";
import "./style_FiltrosHospedagem.css";

export default function FiltrosHospedagem() {
  const [price, setPrice] = useState(100);
  const priceSpanRef = useRef(null);

  function handlePriceChange(e) {
    const value = e.target.value;
    setPrice(value);
  }
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
        <div className="search_price">
          <div className="rangeH">
            <div className="sliderValor">
              <span id="span" style={{ left: `${price / 10.6}%` }} className={priceSpanRef.current && "show"}>
                {price}
              </span>
            </div>
            <div className="campo">
              <div className="valor left">R$0</div>
              <input
                type="range"
                min="0"
                max="1000" 
                value={price}
                steps="1"
                onChange={handlePriceChange}
                onInput={() => priceSpanRef.current.classList.add("show")}
                onBlur={() => priceSpanRef.current.classList.remove("show")}
              />
              <div className="valor right">R$1000+</div>
            </div>
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