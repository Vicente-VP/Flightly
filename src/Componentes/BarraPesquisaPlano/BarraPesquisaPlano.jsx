// barra de pesquisa so plano de viagem

import './styleBarraPesquisaPlano.css';

export default function PesquisaPlano(){
    return(
        <>
            <div className="container-bar">
                <input type="text" placeholder="Pesquisar" id="barPesquisa"/>
                <i className="fa fa-search"></i>
            </div>
        </>);
};