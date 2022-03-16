import { PickerContainer, PokemonList } from "./style";
import PokemonCard from "../PokemonCard"
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function PokemonPicker({pokemons, getPokemon, nextPage, previousPage, goToNext, goToPrevious}){
  return(
    <PickerContainer>
      <FiArrowLeft size={30} color={previousPage ? "#272955" : "grey"} style={previousPage && {cursor: "pointer"}} onClick={goToPrevious}/>
      <PokemonList>
        {
        pokemons.map((pokemon, idx) => (
          <PokemonCard key={idx} pokemonUrl={pokemon.url} getPokemon={getPokemon} />
        ))
        }
      </PokemonList>
      <FiArrowRight size={30} color={nextPage ? "#272955" : "grey"} style={nextPage && {cursor: "pointer"}} onClick={goToNext}/>
    </PickerContainer>
  )
}

export default PokemonPicker;