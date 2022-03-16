import { TradeTeamBoxContainer } from './style'
import PokemonTeamCard from "../../PokemonTeamCard"

function TradeTeamBox({pokemons, color, removePokemon, isBlue}) {
  return (
    <TradeTeamBoxContainer color={color}>
      {
        pokemons?.map((pokemon, idx) => (
          <PokemonTeamCard key={idx} idx={idx} pokemon={pokemon} removePokemon={removePokemon} isBlue={isBlue}/>
        ))
      }
    </TradeTeamBoxContainer>
  );
}

export default TradeTeamBox;