import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;    
    min-width: 120px;
`

   
const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoesheader = () => {

    return(
        <Opcoes>
        {textOpcoes.map( (texto) => (
           <Opcao> {texto} </Opcao> 
        ))}                
    </Opcoes>
    )
}
export default Opcoesheader