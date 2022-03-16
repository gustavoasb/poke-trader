import { TradeBoxWrapper, TradeButtonWrapper, TradeButton, IconWrapper } from './style'
import { FiRepeat } from 'react-icons/fi';
import TradeTeamBox from './TradeTeamBox';

function TradeBox({pokemonsBlue, pokemonsRed, checkTrade, removePokemon}) {
  return (
    <TradeBoxWrapper>
      <TradeTeamBox color={"#E3EEFF"} pokemons={pokemonsBlue} removePokemon={removePokemon} isBlue={true} />
      <TradeButtonWrapper>
        <IconWrapper>
          <FiRepeat size={50} color={"#272955"}/>
        </IconWrapper>
        <TradeButton onClick={checkTrade}>Check Trade</TradeButton>
      </TradeButtonWrapper>
      <TradeTeamBox color={"#FFE3E3"} pokemons={pokemonsRed} removePokemon={removePokemon} isBlue={false} />
    </TradeBoxWrapper>
  );
}

export default TradeBox;