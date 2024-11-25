import filter_search_bar from '../../../Images/Barra_Pesquisa/filter-search-bar.png';
import destino_icon from '../../../Images/Barra_Pesquisa/destino_icon.png';
import ida_volta_icon from '../../../Images/Barra_Pesquisa/ida_volta_icon.png';
import passageirosIcon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import Drop from '../../DropInput/drop';
import passageiro_icon from '../../../Images/Barra_Pesquisa/passageiro_icon.png';
import quartos_icon from '../../../Images/Barra_Pesquisa/quartos_icon.png';


import './styleBarraPesquisaHospedagem.css';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PesquisaHospedagem(props){
    
    const [GuestData, setGuestData] = useState({
        nAdult: props.adultos,
        criancaIdade: props.criancaIdade,
        criancaAssento: (props.criancaAssento || 0),
        criancaColo: (props.criancaColo || 0),
    });

    const handleGuestChange = useCallback((data) => {
        setGuestData(data);
        if (props.onGuestChange) {
            props.onGuestChange(data);
        }
    }, [props]);

    const navigate = useNavigate();

    function PesquisarHotel() {
    
        // Collect the data as you were already doing
        let local = document.querySelector('input[name="local"]').value;
        let check_in = document.querySelector('input[name="check_in"]').value;
        let check_out = document.querySelector('input[name="check_out"]').value;
        let adultos = GuestData.nAdult;
        let crianca = GuestData.criancaIdade;
    
        const params = new URLSearchParams({
            requestType: 'hotel',
            local,
            check_in,
            check_out,
            adultos,
            crianca,
        }).toString();
    
        // Navigate to the new page, passing the requestData as state
        navigate(`/InformacoesPage?${params}`);
        window.location.reload();
    }

    return(
        <>
            <div className="container-search">
                <img src={filter_search_bar} alt="filtros"/>
                <div className="search-local">
                    <div>
                        <span>Local</span>
                        <input type="text" placeholder="São Paulo" name='local' className="local" style={{ backgroundImage: `url(${destino_icon})` }} value={props.local} onChange={(e)=>{props.onLocalChange(e.target.value)}}/>
                    </div>
                </div>
                <div className="search-date">
                    <div>
                        <span>Check-in</span>
                        <input type="date" placeholder="21/06/2024" name='check_in' className="Check-in" style={{ backgroundImage: `url(${ida_volta_icon})` }} value={props.check_in} onChange={(e)=>{props.onCheck_inChange(e.target.value)}}/>
                    </div>
                    <div>
                        <span>Check-out</span>
                        <input type="date" placeholder="30/06/2024" name='check_out' className="Check-out" style={{ backgroundImage: `url(${ida_volta_icon})` }} value={props.check_out} onChange={(e)=>{props.onCheck_outChange(e.target.value)}} />
                    </div>
                </div>
                <div className="search-hospedes">
                    <span>Hóspedes</span>

                    <Drop imagem={passageirosIcon} widthDrop="126px" topContent="69.5%" titles={["Adultos", "Crianças"]} subTitles={[]} nAdult={props.adultos}
                    criancaIdade={props.criancaIdade}
                    criancaAssento={props.criancaAssento}
                    criancaColo={props.criancaColo}
                    onPassengerChange={handleGuestChange}/>
                   

                </div>
                <div className="btn-pesquisar-hospedagem">
                    <button className="btn-submit-hospedagem" onClick={PesquisarHotel}>Pesquisar</button>
                </div>
            </div>
        </>
    );
}