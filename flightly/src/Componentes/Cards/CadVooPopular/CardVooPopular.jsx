import './styleCardVooPopular.css';

export default function VooPopular(props){
    
    return(
        <>
            <div className="card-popular-voo">
                <img src={props.imgDestino} className="img-card-voo" alt='Imagem de Destino'/>
                <span className="viagem-card-voo">{props.destino}</span>
                <span className="companhia-card-voo">{props.companhia}</span>
                <span className="data-card-voo">{props.dataIdaVolta}</span>
                <span className="ida-volta-card-voo">{props.idaVolta}</span>
                <span className="preco-card-voo">R$ {props.preco}</span>
            </div>
        </>
    );
}