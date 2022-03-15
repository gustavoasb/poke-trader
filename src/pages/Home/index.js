import Container from '../../components/PageContainer';
import TradeBox from '../../components/TradeBox';
import PokemonPicker from '../../components/PokemonPicker';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [pokemonsRed, setPokemonsRed] = useState([])
  const [pokemonsBlue, setPokemonsBlue] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons(res.data.results)
      })
  }, [])

  const getPokemon = (pokemon, isBlue) => {
    console.log(pokemon, isBlue)
    if(isBlue){
      setPokemonsBlue([...pokemonsBlue, pokemon])
    } else{
      setPokemonsRed([...pokemonsRed, pokemon]);
    } 
  }

  return (
    <Container>
      <TradeBox pokemonsBlue={pokemonsBlue} pokemonsRed={pokemonsRed} />
      <PokemonPicker pokemons={pokemons} getPokemon={getPokemon}/>
    </Container>
  );
}

export default Home;