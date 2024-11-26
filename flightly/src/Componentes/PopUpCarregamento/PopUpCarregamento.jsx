import './stylePopUpCarregamento.css';

export default function PopUpCarregamento(props) {

    return (
        <>
            <div className="containerExterno-blockClick">
                <div className='container-popUpCarregamento'>
                        <label className="title-popUpCarregamento">{props.texto}</label>
                
                    <div className="container-loadingCircle">
                        <div className="loading-circle popUp"></div>
                    </div>
                </div>
            </div>

        </>
    );
}