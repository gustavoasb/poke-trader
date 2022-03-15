import { TradeBoxWrapper, TradeButtonWrapper, TradeButton, IconWrapper } from './style'
import { FiRepeat } from 'react-icons/fi';
import TradeTeamBox from './TradeTeamBox';

function TradeBox({pokemonsBlue, pokemonsRed, checkTrade}) {
  return (
    <TradeBoxWrapper>
      <TradeTeamBox color={"#E3EEFF"} pokemons={pokemonsBlue} />
      <TradeButtonWrapper>
        <IconWrapper>
          <FiRepeat size={50} color={"#272955"}/>
        </IconWrapper>
        <TradeButton onClick={checkTrade}>Check Trade</TradeButton>
      </TradeButtonWrapper>
      <TradeTeamBox color={"#FFE3E3"} pokemons={pokemonsRed} />
    </TradeBoxWrapper>
  );
}

export default TradeBox;