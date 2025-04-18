import './styleCardQuest.css';
import ProgressBar from './ProgressBar';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PopUpCarregamento from "../../../Componentes/PopUpCarregamento/PopUpCarregamento";

export default function CardPergunta1() {

    const [progress, setProgress] = useState(0);

    const [changeAnswer, setchangeAnswer] = useState(false);
    const [changeAnswer3, setchangeAnswer3] = useState(false);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const [changeQuestion, setchangeQuestion] = useState('Bem-Vindo ao nosso Quiz!');

    const [contagem, setContagem] = useState(0);

    const [activeButton, setActiveButton] = useState(null);

    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [buttonText, setButtonText] = useState('Avançar');

    const [loading, setLoading] = useState(false);

    const handleButtonClick = (index) => {
        setActiveButton(index);

        setSelectedAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[contagem - 1] = index; // Armazena o índice da resposta atual
            return newAnswers;
        });

        updateData(contagem, index)
    };

    const handleProgress = (increment) => {
        setProgress((prev) => Math.min(Math.max(prev + increment, 10), 100));
    };


    const changeAnswers = useCallback(() => {


        if (contagem === 1) {
            setchangeAnswer(true);
            setchangeAnswer3(false);
            setAnswer1("Começo / Final do ano");
            setAnswer2("Meio do ano")
            setButtonText('Avançar');
            console.log(buttonText);

        }
        else if (contagem === 2) {

            setchangeAnswer3(true);
            setAnswer1("Litoral/Praia");
            setAnswer3("Rural")
            setAnswer2("Urbano")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 3) {
            setchangeAnswer3(false);

            setAnswer1("Atividades Internas");
            setAnswer2("Atividades Externas")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 4) {

            setAnswer1("Reservados");
            setAnswer2("Animados")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 5) {

            setAnswer1("Agitados");
            setAnswer2("Tranquilos")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 6) {
            setAnswer1("Sim");
            setAnswer2("Não")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 7) {
            setAnswer1("Sozinho");
            setAnswer2("Em Grupo")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 8) {
            setAnswer1("Curtas");
            setAnswer2("Longas")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 9) {
            setAnswer1("Tours Guiados");
            setAnswer2("Sozinho")
            setButtonText('Avançar');
            console.log(buttonText);
        }
        else if (contagem === 10) {
            console.log(buttonText);
            setAnswer1("Quentes");
            setAnswer2("Frios")
            setButtonText('Finalizar');
        }
    }, [contagem]);

    const changeQuestions = useCallback(() => {
        if (contagem === 1) {
            setchangeQuestion('Qual seu período de férias ?')
        }
        else if (contagem === 2) {
            setchangeQuestion('Selecione sua preferência')
        }
        else if (contagem === 3) {
            setchangeQuestion('Selecione sua preferência')
        }
        else if (contagem === 4) {
            setchangeQuestion('Gosta de ir a lugares mais reservados ou mais animados ?')
        }
        else if (contagem === 5) {
            setchangeQuestion('Prefere passeios mais agitados ou tranquilos ?')
        }
        else if (contagem === 6) {
            setchangeQuestion('Você gosta de experimentar a culinária local ?')
        }
        else if (contagem === 7) {
            setchangeQuestion('Você costuma sair sozinho ou em grupo ?')
        }
        else if (contagem === 8) {
            setchangeQuestion('Suas viagens são curtas ou longas ?')
        }
        else if (contagem === 9) {
            setchangeQuestion('Você gosta de participar de tours guiados ou prefere ir sozinho ?')
        }
        else if (contagem === 10) {
            setchangeQuestion('Você prefere destinos mais quentes ou frios ?')
        }
    }, [contagem]);

    const Next = () => {
        if (contagem <= 10) {
            setContagem((prev) => prev + 1);
            handleProgress(10);
            changeAnswers();
            changeQuestions();
            setActiveButton(null);
        }


        console.log(selectedAnswers);
    };

    const Back = () => {
        if (contagem > 1) {
            setContagem((prev) => prev - 1);
            handleProgress(-10);
            changeAnswers();
            changeQuestions();

            // Restaura o botão ativo com a resposta anterior
            const previousAnswer = selectedAnswers[contagem - 2];
            setActiveButton(previousAnswer);
        }
    };

    useEffect(() => {
        changeAnswers();
        changeQuestions();
    }, [contagem, changeAnswers, changeQuestions]);

    useEffect(() => {
        const popUP = document.getElementById('btn-finish');
        const containerPOPUP = document.getElementById('POP-Questionario');
        const refazerTESTE = document.getElementById('refazer-teste');
        const quest = document.getElementById('card');

        // Função para exibir o popup
        const togglePopupOpen = () => {
            if (containerPOPUP) {
                containerPOPUP.style.display = 'flex';
                quest.style.display = 'none';
            }
        };

        // Adicionar evento de click para exibir o popup
        if (popUP && buttonText === 'Finalizar') {

            popUP.addEventListener('click', () => {
                if (buttonText === 'Finalizar') {
                    handleSubmit(); // Garante que handleSubmit é chamado apenas no clique
                    togglePopupOpen();
                }
            });
        }


        // Adicionar evento de click para fechar o popup
        refazerTESTE.addEventListener('click', () => {
            window.location.reload();
        });

        // Limpar event listeners ao desmontar componente
        return () => {
            if (popUP) popUP.removeEventListener('click', togglePopupOpen);
        };
    }, [buttonText]);



    const [data, setData] = useState({
        periodo: '',
        tipo_destino: '',
        atividades: '',
        ambiente: '',
        tipo_passeio: '',
        culinaria: '',
        companhia: '',
        passeios: '',
        duracao: '',
        clima: ''
    })

    const [perfil, setPerfil] = useState('');
    const [msg, setMsg] = useState('');
    const [local1, setLocal1] = useState('');
    const [local2, setLocal2] = useState('');
    const [local3, setLocal3] = useState('');
    const [pt1, setPt1] = useState('');
    const [pt2, setPt2] = useState('');
    const [pt3, setPt3] = useState('');

    const handleSubmit = async (event) => {
        setLoading(true); // Exibe o PopUpCarregamento antes de iniciar a busca

        try {
            const res = await axios.post('https://flightly-ia.onrender.com/ia', data);
            const { perfil, msg, local1, local2, local3, pt1, pt2, pt3 } = res.data;

            setPerfil(perfil);
            setMsg(msg);
            setLocal1(local1);
            setLocal2(local2);
            setLocal3(local3);
            setPt1(pt1);
            setPt2(pt2);
            setPt3(pt3);
            
            console.log("2");
            
            // Second request
            await axios.post('https://flightlydbapi.onrender.com/assignPerfil', {
                "perfil": perfil,
                "id_usuario": localStorage.getItem('userid')
            },{
                headers:{
                'Content-Type': 'application/json'
            }
        });
            
            // Handle success
            console.log("deu certo");
            localStorage.setItem('perfil', perfil); // Save 'perfil' correctly
        } catch (err) {
            console.error('Erro ao realizar a busca:', err);
        } finally {
            setLoading(false); // Sempre oculta o PopUpCarregamento após finalizar a busca
        }
    };

    const updateData = (questionNumber, selectedIndex) => {
        setData((prevData) => {
            const newData = { ...prevData };

            switch (questionNumber) {
                case 1:
                    newData.periodo = selectedIndex === 1 ? 'começo / final do ano' : 'meio do ano';
                    break;
                case 2:
                    newData.tipo_destino =
                        selectedIndex === 1 ? 'litoral/praia' :
                            selectedIndex === 2 ? 'urbano' : 'rural';
                    break;
                case 3:
                    newData.atividades = selectedIndex === 1 ? 'atividades internas' : 'atividades externas';
                    break;
                case 4:
                    newData.ambiente = selectedIndex === 1 ? 'reservados' : 'animados';
                    break;
                case 5:
                    newData.tipo_passeio = selectedIndex === 1 ? 'agitados' : 'tranquilos';
                    break;
                case 6:
                    newData.culinaria = selectedIndex === 1 ? 'sim' : 'não';
                    break;
                case 7:
                    newData.companhia = selectedIndex === 1 ? 'sozinho' : 'em Grupo';
                    break;
                case 8:
                    newData.duracao = selectedIndex === 1 ? 'curtas' : 'longas';
                    break;
                case 9:
                    newData.passeios = selectedIndex === 1 ? 'tours guiados' : 'sozinho';
                    break;
                case 10:
                    newData.clima = selectedIndex === 1 ? 'quentes' : 'frios';
                    break;
                default:
                    break;
            }
            console.log('Data Atualizado:', newData); // Debug: Exibe o objeto atualizado no console
            return newData;
        });
    };

    return (

        <>
            {loading && (
                <>
                    <PopUpCarregamento texto="Aguarde enquanto calculamos seu perfil!" />
                </>
            )}

            {/* POPUP */}
            <div id='POP-Questionario'>
                <section className='result-sec'>
                    <div className='text-result'>
                        <span>O seu perfil de viajante é</span>
                        <button id='refazer-teste'>Refazer teste</button>
                    </div>
                    <span>{perfil}</span>
                </section>
                <p>{msg}</p>
                <span>Principais recomendações</span>
                <section className='card-sec1'>
                    <span className='title'>Destinos</span>
                    <div className='card-flex'>
                        <div className='card-rec'>
                            1.{local1}
                        </div>
                        <div className='card-rec'>
                            2.{local2}
                        </div>
                        <div className='card-rec'>
                            3.{local3}
                        </div>
                    </div>
                </section>
                <section className='card-sec2'>
                    <span className='title'>Pontos Turísticos</span>
                    <div className='card-flex'>
                        <div className='card-rec'>
                            1.{pt1}
                        </div>
                        <div className='card-rec'>
                            2.{pt2}
                        </div>
                        <div className='card-rec'>
                            3.{pt3}
                        </div>
                    </div>
                </section>
                <Link className='link-btn' to="/"><button className='concluir-btn'>Concluir</button></Link>
            </div>
            {/* POPUP */}

            <div className='card-quest-space' id='card'>

                <div className='container-barraProgresso'>
                    {changeQuestion && <ProgressBar progress={progress} />}
                </div>

                <div className='question'>
                    <label htmlFor="quest" className='quest'>{changeQuestion}</label>
                </div>

                <div className='answer'>
                    {changeAnswer && <button className={`btn-answer1 ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)} style={{ width: changeAnswer3 ? '339px' : '456px' }}>{answer1}</button>}
                    {changeAnswer3 && <button className={`btn-answer3 ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)} style={{ width: changeAnswer3 ? '339px' : '456px' }}>{answer3}</button>}
                    {changeAnswer && <button className={`btn-answer2 ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)} style={{ width: changeAnswer3 ? '339px' : '456px' }}>{answer2}</button>}
                </div>

                <div className='next-btn'>

                    {contagem > 1 && <button className='btn-next' onClick={Back}>Voltar</button>}

                    <button
                        className='btn-next'
                        id='btn-finish'
                        onClick={() => {
                            if (buttonText === 'Finalizar') {
                                handleSubmit(); // Só chama aqui
                            }
                            Next();
                        }}
                    >
                        {buttonText}
                    </button>


                </div>

            </div>



        </>
    );
}