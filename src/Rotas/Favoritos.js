import Header from '../Componentes/Header';
import styled from 'styled-components';
import Pesquisa from '../Componentes/Pesquisa';
import UltimosLancamentos from '../Componentes/UltimosLancamentos';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }
`

function Favoritos() {
    return (
      <AppContainer>
        <Pesquisa/>
      </AppContainer>
    );
  }
  
  export default Favoritos;