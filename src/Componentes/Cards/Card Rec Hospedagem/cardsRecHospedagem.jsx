import './styleCardRecHospedagem.css' ;

export default function RecHospedagem(props){

    return(
        <>        
          <div className="cards_recomendation_hp" id={props.id}>
                  <div class="text_card_hp">
                  <p>{props.title}</p>
                  </div> 
          </div>
        </>
    );
};