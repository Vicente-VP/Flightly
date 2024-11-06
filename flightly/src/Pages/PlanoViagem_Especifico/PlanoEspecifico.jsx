import React, { useState, useEffect } from 'react';
import NavBar from "../../Componentes/NavBar/NavBar";
import Footer from "../../Componentes/Footer/Footer";
import Filtro from "../../Componentes/Filtros/Filtro_Planos/FiltroPlano";
import CardVoo from "../../Componentes/Card_Informacoes/Voos/CardInfoVoo";
import CardHospedagem from "../../Componentes/Card_Informacoes/Hospedagem/Infos_Hosp";
import CardPTuristico from "../../Componentes/Card_Informacoes/PontosTuristicos/CardInfoPTuristicos";
import CardCarro from "../../Componentes/Card_Informacoes/Carros/CardInfoCarros";
import CompraTotal from "../../Componentes/Compra/CompraTotalPlano/CompraTotal";

import './stylePlanoEspecifico.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fetchPlanoDataSimulado = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const temConteudo = 1;
            resolve(temConteudo ? {
                temConteudo: 1,
                conteudo: []
            } : {
                temConteudo: 0,
                conteudo: []
            });
        }, 1000);
    });
};

export default function PlanoEspecifico() {
    const [conteudoPlano, setConteudoPlano] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeFilters, setActiveFilters] = useState({
        voos: true,
        hospedagens: true,
        carros: true,
        pontosTuristicos: true,
    });
    const [compraTotalVisible, setCompraTotalVisible] = useState(true);
    const [checkboxVisible, setCheckboxVisible] = useState({
        voos: false,
        hospedagens: false,
        carros: false,
        pontosTuristicos: false,
    }); // Estado para visibilidade de cada checkbox

    const [voos, setVoos] = useState([]);
    const [hospedagens, setHospedagens] = useState([]);
    const [carros, setCarros] = useState([]);
    const [pontosTuristicos, setPontosTuristicos] = useState([]);

    const params = new URLSearchParams(window.location.search);

    useEffect(() => {
        axios.get(`https://flightlydbapi.onrender.com/getPlanoVoo?id_plano=${params.get('id')}`)
            .then(response => {
                console.log(response.data);
                setVoos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`https://flightlydbapi.onrender.com/getPlanoHospedagem?id_plano=${params.get('id')}`)
            .then(response => {
                console.log(response.data);
                setHospedagens(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`https://flightlydbapi.onrender.com/getPlanoCarro?id_plano=${params.get('id')}`)
            .then(response => {
                console.log(response.data);
                setCarros(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`https://flightlydbapi.onrender.com/getPlanoPontoTuristico?id_plano=${params.get('id')}`)
            .then(response => {
                console.log(response.data);
                setPontosTuristicos(response.data);
            })
            .catch(error => {
                console.log(error);
            }).finally(() => { setLoading(false); });
    }, []);

    function getCheckedCheckboxIdsVoo() {
        const checkedIds = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkbox-deleteVoo"]');
    
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                checkedIds.push(checkbox.getAttribute('idVoo'));
            }
        });
    
        return checkedIds;
    }

    function getCheckedCheckboxIdsHospedagem() {
        const checkedIds = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkbox-deleteHospedagem"]');
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                checkedIds.push(checkbox.getAttribute('idHospedagem'));
            }
        });
    
        return checkedIds;
    }

    async function DeleteItems() {
        const checkedIdsVoo = getCheckedCheckboxIdsVoo();
        const checkedIdsHospedagem = getCheckedCheckboxIdsHospedagem();
    
        console.log(checkedIdsVoo);
        console.log(checkedIdsHospedagem);
    
        try {
            // Create an array of promises for the "voo" delete requests
            const vooPromises = checkedIdsVoo.map(id =>
                axios.delete(`https://flightlydbapi.onrender.com/deletePlanoItem`, {
                    data: {
                        tipo: 'voo',
                        id_item: id,
                        id_plano: params.get('id')
                    }
                })
                .then(() => alert(`Voo ${id} deletado com sucesso`))
                .catch(error => {
                    console.error(error);
                    alert(`Erro ao deletar voo ${id}`);
                })
            );
    
            // Create an array of promises for the "hospedagem" delete requests
            const hospedagemPromises = checkedIdsHospedagem.map(id =>
                axios.delete(`https://flightlydbapi.onrender.com/deletePlanoItem`, {
                    data: {
                        tipo: 'hospedagem',
                        id_item: id,
                        id_plano: params.get('id')
                    }
                })
                .then(() => alert(`Hospedagem ${id} deletada com sucesso`))
                .catch(error => {
                    console.error(error);
                    alert(`Erro ao deletar hospedagem ${id}`);
                })
            );
    
            // Wait for all delete requests to complete
            await Promise.all([...vooPromises, ...hospedagemPromises]);
    
            // Reload the page once all deletions are completed
            window.location.reload();
        } catch (error) {
            console.error("An error occurred while deleting items:", error);
        }
    }

    const handleFilterChange = (newActiveFilters) => {
        setActiveFilters(newActiveFilters);
    };

    const handleEditButtonClick = () => {
        setCompraTotalVisible(!compraTotalVisible);
        setCheckboxVisible((prevState) => ({
            voos: !prevState.voos,
            hospedagens: !prevState.hospedagens,
            carros: !prevState.carros,
            pontosTuristicos: !prevState.pontosTuristicos,
        })); // Alterna a visibilidade de todas as checkboxes ao clicar no botão de editar
    };
    var total = 0;
    var items = 0;

    return (
        <>
            <div style={{ height: 76 + 'px' }}><NavBar /></div>

            <div className="bodyPlanoEspecifico">
                <div className="auxilioNavegacao">
                    <Link to="/PlanosViagem" className="link-planoViagem">Plano de Viagem</Link>
                    <span className="planoViagem-Atual"> / Viagem Formatura</span>
                </div>

                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <>
                        <Filtro
                            onFilterChange={handleFilterChange}
                            onEditButtonClick={handleEditButtonClick} // Passa a função para JSX1
                            DeleteItems={DeleteItems}
                        />
                        <div className="conteudo-plano">
                            <div className="containerCard-planoEspecifico">
                                {activeFilters.voos && voos.map((voo, index) => {
                                    console.log("aaa")
                                    total += voo[5];
                                    items++;
                                    return (
                                        <div className="cardInterno-planoEspecifico voo">
                                            <input
                                                type="checkbox"
                                                name="checkbox-deleteVoo"
                                                id="checkbox-deleteVoo"
                                                idVoo={voo[11]}
                                                className={`checkboxDelete-planoEspecifico ${checkboxVisible.voos ? 'visible' : ''}`}
                                            />
                                            <CardVoo
                                                key={index}
                                                id={voo[11]}
                                                company={voo[0]}
                                                destino={voo[10]}
                                                duration={voo[1]}
                                                take_off={voo[2]}
                                                arrival={voo[3]}
                                                airport_to={voo[9]}
                                                stops={voo[4]}
                                                price={voo[5]}
                                                crianca={voo[6]}
                                                adulto={voo[7]}
                                                airport_from={voo[8]}

                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="containerCard-planoEspecifico">
                                {activeFilters.hospedagens && hospedagens.map((hospedagem, index) => {
                                    total += hospedagem[3];
                                    items++;
                                    return (
                                        <div className="cardInterno-planoEspecifico">
                                            <input
                                                type="checkbox"
                                                name="checkbox-deleteHospedagem"
                                                id="checkbox-deleteHospedagem"
                                                idHospedagem={hospedagem[10]}
                                                className={`checkboxDelete-planoEspecifico ${checkboxVisible.hospedagens ? 'visible' : ''}`}
                                            />
                                            <CardHospedagem
                                                key={index}
                                                id={hospedagem[10]}
                                                hotelName={hospedagem[0]}
                                                check-in={hospedagem[1]}
                                                check-out={hospedagem[2]}
                                                price={hospedagem[3]}
                                                rating={hospedagem[4]}
                                                votes={`(${hospedagem[5]})`}
                                                services={hospedagem[6].split(',')}
                                                adulto={hospedagem[7]}
                                                crianca={hospedagem[8]}
                                                image={hospedagem[9]}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="containerCard-planoEspecifico">
                                {activeFilters.carros && carros.map((carros, index) => {
                                    return (
                                        <div className="cardInterno-planoEspecifico">
                                            <input
                                                type="checkbox"
                                                name="checkbox-deleteCarro"
                                                id="checkbox-deleteCarro"
                                                className={`checkboxDelete-planoEspecifico ${checkboxVisible.carros ? 'visible' : ''}`}
                                            />
                                            <CardCarro
                                                key={index}
                                                id={carros[index]}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="containerCard-planoEspecifico-Pt">
                                {activeFilters.pontosTuristicos && carros.map((pontosTuristicos, index) => {
                                    return (
                                        <>
                                            <input
                                                type="checkbox"
                                                name="checkbox-deletePTuristico"
                                                id="checkbox-deletePTuristico"
                                                className={`checkboxDelete-planoEspecifico ${checkboxVisible.pontosTuristicos ? 'visible' : ''}`}
                                            />
                                            <CardPTuristico

                                            />
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                        {compraTotalVisible && (
                            <div className='container-compraTotal'>
                                <CompraTotal preco={total} items={items}/>
                            </div>
                        )}
                    </>
                )
                    // :( 
                    //     <div className='pagina-Vazia'>
                    //         <span className="vazioTitulo-PlanoEspecifico">
                    //             Parece que esse plano está vazio
                    //         </span>
                    //         <span className="subtiulo-PlanoEspecifico">
                    //             Navegue pelo nosso site para incrementar o plano Viagem Formatura
                    //         </span>
                    //     </div>
                    // )
                }
            </div>

            <div style={{ height: 250 + 'px' }}><Footer /></div>
        </>
    );
}