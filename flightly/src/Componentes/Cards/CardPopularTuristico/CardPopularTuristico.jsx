import './styleCardPopularTuristico.css';

export default function PopularTuristico(props){

    return(

        <>

            <div className="card-popular-pturistico">
                <img src={props.imgDestino} className="img-card-pturistico"/>
                <span className="viagem-card-pturistico">{props.legenda}</span>
            </div>

        </>
    )
}