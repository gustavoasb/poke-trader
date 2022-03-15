import { CardContainer, IconContainer, PokemonName, PokemonImage, IconWrapper } from "./style";
import { FiPlusCircle } from 'react-icons/fi';

function PokemonTeamCard({pokemon}){
  return(
    <CardContainer>
      <PokemonImage src={pokemon?.sprites?.front_default}></PokemonImage>
      <PokemonName>{pokemon?.name}</PokemonName>
      <IconContainer>
        <IconWrapper>
          <FiPlusCircle size={24} color={"#A0C6FF"}/>
        </IconWrapper>
        <IconWrapper>
          <FiPlusCircle size={24} color={"#FFBDBD"}/>
        </IconWrapper>
      </IconContainer>
    </CardContainer>
  )
}

export default PokemonTeamCard;