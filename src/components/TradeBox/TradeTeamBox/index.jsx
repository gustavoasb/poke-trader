import { TradeTeamBoxContainer } from './style'
import PokemonTeamCard from "../../PokemonTeamCard"

function TradeTeamBox({pokemons, color}) {
  return (
    <TradeTeamBoxContainer color={color}>
      {
        pokemons?.map((pokemon, idx) => (
          <PokemonTeamCard key={idx} pokemon={pokemon} />
        ))
      }
    </TradeTeamBoxContainer>
  );
}

export default TradeTeamBox;