import './PopUpAddPlanoViagens.css';

import x from "../../Images/Icones_PopUpAddPlanoViagens/x.png";

const CardAddPlano = ({ imagem, nome, data, preco }) => {
    return (
      <div className="card-addplano">
        <img src={imagem} className="img-cardaddplano" alt="Destino" />
        <span className="nome-cardaddplano">{nome}</span>
        <span className="data-cardaddplano">{data}</span>
        <span className="preco-cardaddplano">{preco}</span>
      </div>
    );
};

export default function PopUpAddPlanoViagens(){
    const planos = [
        {
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
            nome: 'Plano 1',
            data: '02/02/2024',
            preco: 'R$ 1500,00'
        },
        {
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
            nome: 'Plano 2',
            data: '02/02/2024',
            preco: 'R$ 1500,00'
        },
        {
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
            nome: 'Plano 3',
            data: '02/02/2024',
            preco: 'R$ 1500,00'
        },
        {
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg',
            nome: 'Plano 4',
            data: '02/02/2024',
            preco: 'R$ 1500,00'
        }
    ];

    return(
        <>
            <div className='container-addplano'>
                <div className='cima-addplano'>
                    <label className="titulo-addplano">Adicionar a um plano de viagem</label>
                    <img src={x} className="x-addplano"/>
                </div>
                <div className='meio-addplano'>
                    {planos.length > 0 ? (
                        planos.map((plano, index) => (
                            <CardAddPlano
                                key={index}
                                imagem={plano.imagem}
                                nome={plano.nome}
                                data={plano.data}
                                preco={plano.preco}
                            />
                        ))
                    ) : (
                        <p>Você ainda não fez um plano de viagem :( </p>
                    )}
                </div>
                <div className='baixo-addplano'>
                    <button type="submit" className="btn-addplano">Criar novo plano</button>
                    <button type="submit" className="btn-addplano">Adicionar</button>
                    <button type="submit" className="btn-addplano">Comprar</button>
                </div>
            </div>
        </>
    );
}
