import React, { useState } from 'react';
import './styleChatIA.css';
import axios from 'axios';

import setaBaixo from "../../../Images/HomeGenerica/setaBaixo.png";
import btnEnviar from "../../../Images/HomeGenerica/enviar.png";

export default function ChatIA() {
    const [textInInput, setTextInInput] = useState(''); // Estado para o conteúdo do input
    const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens enviadas
    const [loading, setLoading] = useState(false); // Estado para o círculo de carregamento
    const [conversationStarted, setConversationStarted] = useState(false); // Controle para iniciar a conversa

    // Função para enviar a mensagem do usuário
    const handleSendMessage = async () => {
        if (textInInput.trim()) {
            setMessages([...messages, { text: textInInput, sender: 'user' }]);
            setTextInInput(''); // Limpa o input após enviar
            setConversationStarted(true); // Marca a conversa como iniciada

            // Simula o carregamento e a resposta da IA após o envio da primeira mensagem
            setLoading(true);

            try{
                const texto = {
                    msg: textInInput
                };

                const res = await axios.post('https://flightly-ia.onrender.com/bot', texto);
                const reply = res.data.msg;

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: reply || 'Desculpe, algo deu errado?', sender: 'IA' }
                ]);
            }catch(er){
                console.error('Erro ao enviar mensagem para a IA:', er);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Desculpe, não consegui processar sua mensagem.', sender: 'IA' },
                ]);
            } finally {
                setLoading(false); // Para o círculo de carregamento
            }

        }
    };

    // Função para lidar com a tecla "Enter"
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="containerGeral-chatIA">
                <span className="direcionaChatIA">
                    Converse com a nossa IA!
                </span>
                <img src={setaBaixo} alt="" className="setaBaixo-chatIA" />
                <div className="container-chatIA">
                    <span className={`tituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        Olá! Como posso te ajudar?
                    </span>
                    <span className={`alternateTituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        Chat com IA
                    </span>
                    <span className={`subtituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        Estou aqui para te ajudar a criar um plano de viagem totalmente personalizável!
                    </span>
                    <span className={`subtituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        Você pode enviar as especificações da sua viagem da sua maneira
                    </span>
                    <span className={`subtituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        <b>OU</b>
                    </span>
                    <span className={`subtituloChatIA ${conversationStarted ? 'out' : ''}`}>
                        Clicar no “Enter” para iniciar uma conversa com o nosso chat
                    </span>

                    <div className={`container-mensagens-chatIA ${conversationStarted ? 'out' : ''}`}>
                        {/* Renderizando as mensagens no container */}
                        {messages.map((msg, index) => (
                            <div key={index} className={`container-mensagem usuario ${msg.sender}`}>
                                <div className={`mensagemUsuario usuario ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Círculo de carregamento da IA */}
                        {loading && (
                            <div className="container-mensagem IA">
                                <div className="mensagemUsuario IA loading">
                                    <div className="loading-circle"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="container-inputChatIA">
                        <div className="innerContainer-inputChatIA">
                            <input
                                type="text"
                                className="inputChatIA"
                                placeholder="Quero planejar uma viagem"
                                value={textInInput}
                                onChange={(e) => setTextInInput(e.target.value)} // Atualiza o estado com o conteúdo do input
                                onKeyPress={handleKeyPress} // Detecta a tecla "Enter"
                            />
                            <i className="enviar-inputChatIA" onClick={handleSendMessage}>
                                <img src={btnEnviar} alt="Enviar" />
                            </i>
                        </div>
                    </div>
                </div>

                <hr className="hr-baixoChatIA" />
            </div>
        </>
    );
}
