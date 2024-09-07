import './styleCardInfoCarros.css';

import ferrari from '../../../Images/Carro_Card.png';
import movida from '../../../Images/FiltroCarro/movida-logo.png'
import people from '../../../Images/Info-Car-Icon/people-icon.png';
import small_bag from '../../../Images/Info-Car-Icon/small-bag.png';
import cambio from '../../../Images/Info-Car-Icon/transmission.png';
import porta from '../../../Images/Info-Car-Icon/car-door.png';
import large_bag from '../../../Images/Info-Car-Icon/travelling-bag.png';

export default function InfoCarros(){
    return(
        <>
    <div class="card-horizontal">
        <div class="card-image">
            <img src={ferrari} className='card-image-car'/>
            <img src={movida} className='card-image-locadora'/>
        </div>
        <div class="card-content">
            <div className='title-car'>
                <label htmlFor="carro" className='lbl-carro'>Fiat Mobi</label>
            </div>
            <div className='sub-car'>
            <label htmlFor="local" className='lbl-local'>São Paulo - Juscelino Kubitscheck</label>
            </div>
            <div className='info-left'>
                <img src={people} className='icon-assento' /> 
                <label htmlFor="number-assento" className='lbl-assento'> 5</label><label htmlFor="assento" className='lbl-assento'> Assentos</label>
                <br />
                <img src={cambio} className='icon-cambio' /> 
                <label htmlFor="cambio" className='lbl-cambio'> Cambio Manual</label>
                <br />
                <img src={porta} className='icon-porta' /> 
                <label htmlFor="number-porta" className='lbl-porta'> 4</label><label htmlFor="porta" className='lbl-porta'> Portas</label>
            </div>
            <div className='info-right'>
            <img src={small_bag} className='icon-bag'/>
            <label htmlFor="number-mala" className='lbl-mala'> 1</label><label htmlFor="mala" className='lbl-mala'> Bagagem Pequena</label>
            <br />
            <img src={large_bag} className='icon-bag'/>
            <label htmlFor="number-mala" className='lbl-mala'> 1</label><label htmlFor="mala" className='lbl-mala'> Bagagem Grande</label>
            </div>


        </div>
            <hr color='D4D4D4'/>
        <div class="card-price">
            <p><strong>Preço:</strong></p>
            <p class="price-value">R$ 150,00</p>
            <p class="price-period">por diária</p>
        </div>
    </div>

        </>
    )

}