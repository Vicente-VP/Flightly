import './stylePopUpCancelarReserva.css';
import axios from 'axios';

export default function PopUpCancelarReserva(props){

    const cancelarReserva = (idvoo, iduser) => {
        axios.delete('https://flightlydbapi.onrender.com/deleteVooHistorico', {
            data: {
                id_voo: idvoo,
                id_usuario: iduser
            }
        }).then(() => {
            console.log("Reserva cancelada com sucesso");
            getHistoricoVoo();
        }).catch(() => {
            console.log("Erro ao cancelar reserva");
        }
        )
        hidePop(); // Hide the pop-up
    }

    return(
        <>
            <div className='container-criarplan'>
                <div className='center-criarplan'>
                    <label className="title-create">Tem certeza que deseja cancelar esta reserva?</label>
                </div>
                <div className='bottom-criarplan'>
                    <button type="submit" className="btn-criaplan" onClick={()=>cancelarReserva(voo[11], localStorage.getItem('userid'))}>Sim</button>
                    <button type="submit" className="btn-cancelaplan"onClick={handleClick}>Não</button>
                </div>
            </div>
        </>
    );
}