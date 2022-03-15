import { CardContainer, IconContainer, PokemonName, PokemonImage, IconWrapper } from "./style";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FiPlusCircle } from 'react-icons/fi';

function PokemonCard({pokemonUrl, getPokemon}){

  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    axios.get(pokemonUrl).then((res) => {
      setPokemon(res.data);
    })
  }, [pokemonUrl])
  
  return(
    <CardContainer>
      <PokemonImage src={pokemon?.sprites?.front_default}></PokemonImage>
      <PokemonName>{pokemon?.name}</PokemonName>
      <IconContainer>
        <IconWrapper onClick={() => getPokemon(pokemon, true)}>
          <FiPlusCircle size={24} color={"#A0C6FF"}/>
        </IconWrapper>
        <IconWrapper onClick={() => getPokemon(pokemon, false)}>
          <FiPlusCircle size={24} color={"#FFBDBD"}/>
        </IconWrapper>
      </IconContainer>
    </CardContainer>
  )
}

export default PokemonCard;