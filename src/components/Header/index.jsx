import { HeaderContainer, HeaderTitle, HistoryButton } from "./style";
import { FiLayers } from 'react-icons/fi';

function Header({openModal}){
  return(
    <HeaderContainer>
      <HeaderTitle>Pokémon Trade Checker</HeaderTitle>
      <HistoryButton onClick={openModal}>
        <FiLayers size={"1rem"}/>
        &nbsp;My Trades
      </HistoryButton>
    </HeaderContainer>
  )
}

export default Header;