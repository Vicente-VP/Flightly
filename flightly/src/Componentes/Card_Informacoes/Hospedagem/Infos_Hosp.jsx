import './Infos_Hosp.css';

export default function InfoHosp(props){
    return(
        <>
            <div className="container-Card">

                <div className="left">
                    <img src={props.image} alt={props.hotelName} className='imghosp'/>
                    <div className="info">
                        <label className='titleinfohosp'>{props.hotelName}</label>
                        <span className='localinfohosp'>{props.location}</span>
                        <div className='star-rating'>
                            <div className='starinfohosp'/>
                            <span className='numstarinfohosp'>{props.rating}</span>
                            <span className='numvotinfohosp'>{props.votes}</span>
                        </div>
                        <div>
                            <span className='descinfohosp'>{props.description}</span>
                        </div>
                        <div>
                            <label className='localinfohosp'>Inclui:</label>
                        </div>
                        <div className='services'>
                            {props.services && props.services.length > 0 ? (
                            props.services.map((service, index) => (
                            <div key={index} className='card'>
                                {service}
                            </div>
                            ))
                            ) : (
                            <div>Nenhum serviço disponível</div>
                        )}
                        </div>
                    </div>
                </div>

                <div className="right">
                    <hr className='hr'/>
                    <div className="info-preco">
                        <div className="preco">
                            <label className='titleprecoinfohosp'>A partir de:</label>
                            <span className="precoinfohosp">R$ {props.price.match(/\b\d+\b/)[0]}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
