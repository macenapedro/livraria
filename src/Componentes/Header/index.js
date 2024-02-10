import Opcoesheader from '../OpcoesHeader'
import Opcoesicones from '../Opcoesicones'
import Logo from '../Logo'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return(
        <HeaderContainer>
            <Logo/>
            <Opcoesheader/>
            <Opcoesicones/>
        </HeaderContainer>
    )
}

export default Header