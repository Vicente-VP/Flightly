import ImgHosp from '../../Images/Infos_Hosp/Img_Hosp.png';
import Star_Info_Hosp from '../../Images/Infos_Hosp/Star_Info_Hosp.png';
import Wifi_Info_Hosp from '../../Images/Infos_Hosp/Wifi_Info_Hosp.png';
import Refeicao_Info_Hosp from '../../Images/Infos_Hosp/Refeicao_Info_Hosp.png';
import Cafe_Info_Hosp from '../../Images/Infos_Hosp/Cafe_Info_Hosp.png';
import Psicina_Info_Hosp from '../../Images/Infos_Hosp/Pscina_Info_Hosp.png';
import './Infos_Hosp.css';

export default function InfoHosp(){
    return(
        <>
            <div className="container-Card">

                <div className="left">
                    <img src={ImgHosp} alt="ImgHosp" className='imghosp'/>
                    <div className="info">
                        <label className='titleinfohosp'>Hotel Atlântico Business</label>
                        <span className='localinfohosp'>São Paulo, Peruíbe</span>
                        <div>
                            <img src={Star_Info_Hosp} alt="Star_Info_Hosp" className='starinfohosp'/>
                            <span className='numstarinfohosp'>4.0</span>
                            <span className='numvotinfohosp'>(9000)</span>
                        </div>
                        <div>
                            <span className='descinfohosp'>Situado em uma localização privilegiada, a poucos passos das deslumbrantes praias de areia dourada e águas cristalinas, o Hotel Sol Nascente oferece a combinação perfeita de conforto e conveniência.</span>
                        </div>
                        <div>
                            <label className='localinfohosp'>Inclui:</label>
                        </div>
                        <div className='services'>
                            <div className='cardwifiinfohosp'>Wi-fi Grátis</div>
                            <div className='cardrefeicaoinfohosp'>Restaurante</div>
                            <div className='cardcafeinfohosp'>Café da Manhã</div>
                            <div className='cardpsicinainfohosp'>Pscina</div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <hr className='hr'/>
                    <div className="info-preco">
                        <div className="preco">
                            <label className='titleprecoinfohosp'>A partir de:</label>
                            <span className="precoinfohosp">R$ 1.678</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}