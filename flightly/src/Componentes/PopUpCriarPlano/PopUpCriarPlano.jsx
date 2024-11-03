import './stylePopUpCriarPlano.css';


export default function PopUpCriarPlano(){

    return(
        <>
            <div className='container-criarplano'>
                <div className='center-criarplano'>
                    <label className="title-criar">Novo Plano</label>

                    <input type="text" name="nameplano" id="nameplano" className="nameplano" placeholder="Digite o nome" />

                </div>
                <div className='bottom-criarplano'>
                    <button type="submit" className="btn-criaplano">Criar</button>
                    <button type="submit" className="btn-cancelaplano">Cancelar</button>
                </div>
            </div>
        </>
    );
}