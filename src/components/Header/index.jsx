import { HeaderContainer, HeaderTitle, HistoryButton } from "./style";

function Header({openModal}){
  return(
    <HeaderContainer>
      <HeaderTitle>Pokémon Trade Checker</HeaderTitle>
      <HistoryButton onClick={openModal}>
        My Trades
      </HistoryButton>
    </HeaderContainer>
  )
}

export default Header;