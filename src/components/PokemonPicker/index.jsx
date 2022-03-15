import { PickerContainer, SearchBarContainer, PokemonList } from "./style";
import PokemonCard from "../PokemonCard"

function PokemonPicker({pokemons, getPokemon}){
  return(
    <PickerContainer>
      <SearchBarContainer>
        
      </SearchBarContainer>
      <PokemonList>
        {
        pokemons.map((pokemon, idx) => (
          <PokemonCard key={idx} pokemonUrl={pokemon.url} getPokemon={getPokemon} />
        ))
        }
      </PokemonList>
    </PickerContainer>
  )
}

export default PokemonPicker;