import Container from '../../components/PageContainer';
import TradeBox from '../../components/TradeBox';
import TradeInfo from '../../components/TradeInfo';
import PokemonPicker from '../../components/PokemonPicker';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Home() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsRed, setPokemonsRed] = useState([]);
  const [pokemonsBlue, setPokemonsBlue] = useState([]);
  const [madeTrade, setMadeTrade] = useState(0);
  let fairness = useRef(0);
  let redExp = useRef(0);
  let blueExp = useRef(0);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons(res.data.results)
      })
  }, [])

  const getPokemon = (pokemon, isBlue) => {
    if(isBlue){
      setPokemonsBlue([...pokemonsBlue, pokemon])
    } else{
      setPokemonsRed([...pokemonsRed, pokemon]);
    } 
  }

  function pokemonListExperience(array){
    let experience = array.reduce((acc, pokemon ) => {
      return acc += pokemon.base_experience;
    }, 0);
    return experience;
  }

  const checkTrade = async () => {
    redExp.current = await pokemonListExperience(pokemonsRed);
    blueExp.current = await pokemonListExperience(pokemonsBlue)
    fairness.current = await Math.abs(blueExp.current - redExp.current);
    setMadeTrade(key => key + 1);
  }
  
  return (
    <Container>
      <TradeBox pokemonsBlue={pokemonsBlue} pokemonsRed={pokemonsRed} checkTrade={checkTrade}/>
      <PokemonPicker pokemons={pokemons} getPokemon={getPokemon}/>
      {madeTrade > 0 && <TradeInfo redExp={redExp.current} blueExp={blueExp.current} fairness={fairness.current}/>}
    </Container>
  );
}

export default Home;