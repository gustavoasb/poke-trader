import { HeaderContainer, HeaderTitle, HistoryButton } from "./style";

function Header(){
  return(
    <HeaderContainer>
      <HeaderTitle>Pokémon Trade Checker</HeaderTitle>
      <HistoryButton>
        My Trades
      </HistoryButton>
    </HeaderContainer>
  )
}

export default Header;