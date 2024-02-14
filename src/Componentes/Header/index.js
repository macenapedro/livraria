import Opcoesheader from '../OpcoesHeader'
import Opcoesicones from '../Opcoesicones'
import Logo from '../Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return(
        <HeaderContainer>
            <Link to='/'>
            <Logo/>
            </Link>
            <Opcoesheader/>
            <Opcoesicones/>
        </HeaderContainer>
    )
}

export default Header