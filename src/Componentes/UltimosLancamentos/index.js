import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
import { Titulo } from '../Titulos'

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const UltimosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = () => {
    return(
        <LancamentosContainer>
            <Titulo cor='#EB9B00' 
                tamanhoDaFonte=''>
                ÚLTIMOS LANÇAMENTOS
                </Titulo>
                <UltimosLivros>
                    {livros.map( livro => (
                        <img src={livro.src}></img>
                    ))}
                </UltimosLivros>
                <CardRecomenda
                    titulo='Talvez você se interesse por...'
                    subtitulo='Angular 11'
                    descricao='Construindo uma aplicação com a plataforma Google'
                    imagem={imagemLivro}
                />                
        </LancamentosContainer>
    )
}

export default UltimosLancamentos