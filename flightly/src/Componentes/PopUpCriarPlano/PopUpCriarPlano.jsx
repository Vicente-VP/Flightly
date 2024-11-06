import './stylePopUpCriarPlano.css';
import axios from 'axios';

export default function PopUpCriarPlano(props){

    function CriarPlanoViagem(){
        let nome = document.getElementById('nameplan').value;
        if(nome === ''){
            alert("Digite um nome para o plano");
            return;
        }
            axios.post(`https://flightlydbapi.onrender.com/createPlano`, {
                nome: nome,
                id: localStorage.getItem('userid')
            }).then(response => {
                console.log(response.data);
                window.location.reload();
            }).catch(error => {
                console.log(error);
                return null; // Return null in case of an error
            });
    
    }

    return(
        <>
            <div className='container-criarplan'>
                <div className='center-criarplan'>
                    <label className="title-create">Novo Plano</label>

                    <input type="text" name="nameplano" id="nameplan" className="nameplan" placeholder="Digite o nome" />

                </div>
                <div className='bottom-criarplan'>
                    <button type="submit" className="btn-criaplan" onClick={CriarPlanoViagem}>Criar</button>
                    <button type="submit" className="btn-cancelaplan"onClick={props.handleClick}>Cancelar</button>
                </div>
            </div>
        </>
    );
}