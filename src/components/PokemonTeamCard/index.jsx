import { CardContainer, IconContainer, PokemonName, PokemonImage, IconWrapper } from "./style";
import { FiX } from 'react-icons/fi';

function PokemonTeamCard({idx, pokemon, removePokemon, isBlue}){
  return(
    <CardContainer>
      <PokemonImage src={pokemon?.sprites?.front_default}></PokemonImage>
      <PokemonName>{pokemon?.name}</PokemonName>
      <IconContainer>
        <IconWrapper onClick={() => removePokemon(idx, isBlue)}>
          <FiX size={24} color={"#272955"}/>
        </IconWrapper>
      </IconContainer>
    </CardContainer>
  )
}

export default PokemonTeamCard;