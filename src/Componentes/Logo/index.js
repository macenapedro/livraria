import logo from './logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

const Logo = () => {
    return(
        <LogoContainer>
            <LogoImg src={logo} alt='' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo