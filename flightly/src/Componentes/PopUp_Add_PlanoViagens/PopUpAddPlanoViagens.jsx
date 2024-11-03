import './PopUpAddPlanoViagens.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import PopUpCriarPlano from '../PopUpCriarPlano/PopUpCriarPlano';



const CardAddPlano = ({ imagem, nome, data, preco, onClick}) => {
    return (
      <div className="card-addplano" onClick={onClick}>
        <img src={imagem} className="img-cardaddplano" alt="Destino" />
        <span className="nome-cardaddplano">{nome}</span>
        <span className="data-cardaddplano">{data}</span>
        <span className="preco-cardaddplano">{preco}</span>
      </div>
    );
};

export let checked;

export default function PopUpAddPlanoViagens(props){
    // const planos = [
    //     {
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
    //         nome: 'Plano 1',
    //         data: '02/02/2024',
    //         preco: 'R$ 1500,00'
    //     },
    //     {
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
    //         nome: 'Plano 2',
    //         data: '02/02/2024',
    //         preco: 'R$ 1500,00'
    //     },
    //     {
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
    //         nome: 'Plano 3',
    //         data: '02/02/2024',
    //         preco: 'R$ 1500,00'
    //     },
    //     {
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
    //         nome: 'Plano 4',
    //         data: '02/02/2024',
    //         preco: 'R$ 1500,00'
    //     }
    // ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [planos, setPlanos] = useState([]);
    const params = new URLSearchParams(window.location.search);

    const [IsCriaPlano, setIsCriaPlano] = useState(false);

    

    const CriarPlano = () =>{
        setIsCriaPlano(true);
        checked = true;

    }
        
    

    useEffect(() => {
        axios.get(`http://localhost:5000/getPlanos?id_usuario=${localStorage.getItem('userid')}`)
            .then(response => {
                console.log(response.data);
                console.log(props.item)
                setPlanos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    async function CriarItem(){
        console.log(props.tipo)
        switch(props.tipo){
            case 'Voo':
                console.log(parseInt(params.get('criancaAssento')) + parseInt(params.get('criancaColo')) + parseInt(params.get('criancaIdade')));
            try {
                const response = await axios.post(`http://localhost:5000/createVoo`, {
                    companhia: props.item.company,
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
            axios.post(`http://localhost:5000/add${props.tipo}Plano`,{
                id_voo: id_item,
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

    return(
        <>
            <div className='container-addplano'>
                <div className='cima-addplano'>
                    <label className="titulo-addplano">Adicionar a um plano de viagem</label>
                    {/*<img src={x} className="x-addplano"/>*/}
                </div>
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
                            />
                        ))
                    ) : (
                        <p>Você ainda não fez um plano de viagem :(</p>
                    )}
                </div>
                <div className='baixo-addplano'>
                    <button type="submit" className="btn-addplano" onClick={CriarPlano}>Criar novo plano</button>
                    <button type="submit" className="btn-addplano" onClick={AdicionarItemPlano}>Adicionar</button>
                    <button type="submit" className="btn-addplano">Comprar</button>
                </div>

                {IsCriaPlano && <PopUpCriarPlano CriarItem={CriarItem} AdicionarItemPlano={AdicionarItemPlano}/>}
            </div>
        </>
    );
}