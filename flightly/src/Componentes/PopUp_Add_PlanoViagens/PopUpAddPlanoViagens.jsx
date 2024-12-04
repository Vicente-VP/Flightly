import './PopUpAddPlanoViagens.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


 

const CardAddPlano = ({ imagem, nome, data, preco, onClick, selected}) => {
    return (
        <div className={`card-addplano ${selected ? 'card-selected' : ''}`} 
        onClick={onClick}>
            <img src={imagem} className="img-cardaddplano" alt="Destino" />
            <span className="nome-cardaddplano">{nome}</span>
            <span className="data-cardaddplano">{data}</span>
            <span className="preco-cardaddplano">{preco}</span>
        </div>
    );
};


export default function PopUpAddPlanoViagens(props){

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState(null);
    const [planos, setPlanos] = useState([]);
    const params = new URLSearchParams(window.location.search);
    
    
    
    const ClosePlano = () =>{
        props.setIsPlano(false);
    } 

    
    const CriarPlano = () =>{
        setDropdownOpen(true);
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const Comprar = async()=>{
        let id = await CriarItem();
        const parametros = new URLSearchParams();

        if(props.tipo === 'Voo'){
            parametros.append("idsVoos[]", id)
        }else if (props.tipo === 'Hospedagem'){
            parametros.append("idsHoteis[]", id)
        }else if (props.tipo === 'Carro'){
            parametros.append("idsCarros[]", id)
        }else if (props.tipo === 'PontoTuristico'){
            parametros.append("idsPontos[]", id)
        }
        navigate(`/Compra?${parametros.toString()}`);
    }

    useEffect(() => {
        axios.get(`https://flightlydbapi.onrender.com/getPlanos?id_usuario=${localStorage.getItem('userid')}`)
            .then(response => {
                console.log(response.data);
                console.log(props.item)
                setPlanos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    async function CriarPlanoViagem(){
        let nome = document.getElementById('nameplano').value;
        try {
            const response = await axios.post(`https://flightlydbapi.onrender.com/createPlano`, {
                nome: nome,
                id: localStorage.getItem('userid')
            });
            console.log(response.data);
            return response.data.id;
        } catch (error) {
            console.log(error);
            return null; // Return null in case of an error
        }
    }

    async function CriarItem(){
        console.log(props.tipo)
        switch(props.tipo){
            case 'Voo':
                console.log(parseInt(params.get('criancaAssento')) + parseInt(params.get('criancaColo')) + parseInt(params.get('criancaIdade')));
                try {
                    const response = await axios.post(`https://flightlydbapi.onrender.com/createVoo`, {
                        companhia: props.item.company,
                        destino: params.get('destino'),
                        aeroporto_ida: props.item.airport_from,
                        aeroporto_chegada: props.item.airport_to,
                        hora_ida: props.item.take_off,
                        hora_chegada: props.item.arrival,
                        preco: parseFloat(props.item.price),
                        data_ida: params.get('ida'),
                        criancas: parseInt(params.get('criancaAssento')) + parseInt(params.get('criancaColo')) + parseInt(params.get('criancaIdade')),
                        adultos: parseInt(params.get('adultos')),
                        paradas: props.item.stops
                    });
                    console.log(response.data);
                    return response.data.id_voo;
                } catch (error) {
                    console.log(error);
                    return null; // Return null in case of an error
                }
            case 'Hospedagem':
                
                try {
                    const response = await axios.post(`https://flightlydbapi.onrender.com/createHospedagem`, {
                        nome: props.item.hotelName,
                        data_checkin: params.get('check_in'),
                        data_checkout: params.get('check_out'),
                        preco: parseFloat(props.item.price.toString().match(/\b\d+\b/)[0]),
                        estrelas: parseFloat(props.item.rating),
                        avaliacoes: parseInt(props.item.votes.replace(/[().]/g, '')),
                        caracteristicas: props.item.services.toString(),
                        adultos: parseInt(params.get('adultos')),
                        criancas: parseInt(params.get('crianca')),
                        imagem: props.item.image
                    });
                    console.log(response.data);
                    return response.data.id_hospedagem;
                }
                catch (error) {
                    console.log(error);
                    return null;
                }
            case 'Carro':
                try{
                    const response = await axios.post(`https://flightlydbapi.onrender.com/createCarro`, {
                        modelo: props.item.modelo,
                        marca: props.item.marca,
                        preco: parseFloat(props.item.preco),
                        tipo: props.item.tipo,
                        fornecedor: props.item.locadora,
                        assentos: parseInt(props.item.assento),
                        localizacao: params.get('place'),
                        cambio: props.item.cambio,
                        imagem: props.item.carImage,
                        imagem_locadora: props.item.locImage
                    })
                    return response.data.id_carro;
                }
                catch(error){
                    console.log(error);
                    return null;
                }
            case 'PontoTuristico':
                try{
                    const response = await axios.post(`https://flightlydbapi.onrender.com/createPontoTuristico`, {
                        nome: props.item.titulo,
                        imagem: props.item.image,
                        estrelas: parseFloat(props.item.estrelas),
                        avaliacao: props.item.reviews,
                        preco: parseFloat(props.item.preco.toString().match(/\b\d+(\.\d+)?\b/)[0])
                    })
                    return response.data.id_pontot;
                }
                catch(error){
                    console.log(error);
                    return null;
                }
                
            
            default:
                return null;

        }
    }

    async function AdicionarItemPlano(){
        if(!selectedOption){
            alert('Selecione um plano para adicionar o item desejado');
        }
        else{
            const id_item = await CriarItem();
            console.log(id_item)
            axios.post(`https://flightlydbapi.onrender.com/add${props.tipo}Plano`,{
                id_item: id_item,
                id_plano: selectedOption
            }).then(response => {
                            console.log(response.data);
                            alert('Item adicionado ao plano com sucesso');
                        })
                        .catch(error => {
                            console.log(error);
                            alert('Erro ao adicionar item ao plano');
                        });
        }
    }

    async function AddToNewPlan(){
        const id_plano = await CriarPlanoViagem();
        console.log(id_plano)
        const id_item = await CriarItem();
        console.log(id_item)
        axios.post(`https://flightlydbapi.onrender.com/add${props.tipo}Plano`,{
            id_item: id_item,
            id_plano: id_plano
        }).then(response => {
                        console.log(response.data);
                        alert('Item adicionado ao plano com sucesso');
                    })
          .catch(error => {
                        console.log(error);
                        alert('Erro ao adicionar item ao plano');
                    });
        }

        function handleDropDown() {
            setDropdownOpen(!dropdownOpen);
        }

        

    return(
        <>
            <div className='container-addplano'>
                <div className='cima-addplano'>
                    <label className="titulo-addplano">Adicionar a um plano de viagem</label>
                    <label className='close-pop' onClick={ClosePlano}>X</label>
                </div>
            {/* POP UP PARA CRIAR PLANO */}
                <div className={`container-criarplano ${dropdownOpen ? 'active' : ''}`}>
                    <div className='top-plano'>
                        <label className="title-criar">Digite o nome do seu plano</label>
                        <label className='close-pop' onClick={handleDropDown}>X</label>
                    </div>
                    <div className='center-criarplano'>
                        <input type="text" name="nameplano" id="nameplano" className="nameplano" placeholder='|'/>
                    </div>
                    <div className='bottom-criarplano'>
                        <button type="submit" className="btn-criaplano" onClick={AddToNewPlan}>Criar novo plano</button>
                    </div>
                </div>
            {/* FIM  */}
                <div className='meio-addplano'>
                    {planos.length > 0 ? (
                        planos.map((plano, index) => (
                            <CardAddPlano
                                key={index}
                                imagem={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg'}
                                nome={plano[1]}
                                data={'02/02/2024'}
                                preco={'R$ 1500,00'}
                                onClick={() => {setSelectedOption(plano[0]); console.log(plano[0])}}
                                selected={selectedOption === plano[0]}
                            />
                        ))
                    ) : (
                        <p>Você ainda não fez um plano de viagem :(</p>

                            
                    )}
                </div>
                <div className='baixo-addplano'>
                    <button type="submit" className="btn-addplano" onClick={CriarPlano}>Adicionar a novo plano</button>
                    <button type="submit" className="btn-addplano" onClick={AdicionarItemPlano}>Adicionar</button>
                    <button type="submit" className="btn-addplano" onClick={Comprar}>Comprar</button>
                </div>

                
            </div>
           
        </>
    );
}