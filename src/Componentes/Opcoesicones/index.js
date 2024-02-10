import perfil from './perfil.svg'
import sacola from './sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
` 

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

const Opcoesicones = () => {
    return(
        <Icones>
            {icones.map((img) => (
            <Icone><img src={img} alt=''></img></Icone>
            ))}
        </Icones>
    )
}

export default Opcoesicones