import './styleCardRecCarro.css';

export default function cardRecCarro(props){
    return (
        <>
            <div className="card-locadora-popular">
                <img src={props.image}/>
                <span classNameName="carro-card-locadora">{props.legenda}</span>
            </div>
        </>
    );
};
