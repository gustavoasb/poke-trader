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
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=18");
  const [updateKey, setUpdateKey] = useState(0);
  let fairness = useRef(0);
  let redExp = useRef(0);
  let blueExp = useRef(0);
  let nextPage = useRef(null)
  let previousPage = useRef(null)

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setPokemons(res.data.results)
        nextPage.current = res.data.next
        previousPage.current = res.data.previous
      })
  }, [apiUrl])

  const getPokemon = (pokemon, isBlue) => {
    if(isBlue){
      if(pokemonsBlue.length < 6){
        setPokemonsBlue([...pokemonsBlue, pokemon])
      } else alert("Pokemon max limit exceeded");
    } else{
      if(pokemonsRed.length < 6){
        setPokemonsRed([...pokemonsRed, pokemon]);
      } else alert("Pokemon max limit exceeded");
    } 
  }

  const goToNext = () => {
    setApiUrl(nextPage.current) 
  }

  const goToPrevious = () => {
    setApiUrl(previousPage.current) 
  }

  function pokemonListExperience(array){
    let experience = array.reduce((acc, pokemon ) => {
      return acc += pokemon.base_experience;
    }, 0);
    return experience;
  }

  function saveTrade(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let trade = {
      date: date,
      pokemonsBlue,
      pokemonsRed,
      blueExp: blueExp.current,
      redExp: redExp.current,
      fairness: fairness.current,
    };
    let storedTrades = JSON.parse(localStorage.getItem("trades"));
    if(storedTrades){
      storedTrades.push(trade)
    } else{
      storedTrades = []
      storedTrades.push(trade)
    }
    try{
      localStorage.setItem("trades", JSON.stringify(storedTrades));
    }
    catch(e){
      storedTrades = []
      storedTrades.push(trade)
    }
  }

  const checkTrade = async () => {
    if(pokemonsRed.length < 1 || pokemonsBlue.length < 1){
      alert("Please, add at least 1 pokémon on each side of the trade");
      return
    }
    redExp.current = await pokemonListExperience(pokemonsRed);
    blueExp.current = await pokemonListExperience(pokemonsBlue)
    fairness.current = await Math.abs(blueExp.current - redExp.current);
    await setMadeTrade(key => key + 1);
    saveTrade();
    let tradeInfo = document.getElementById("trade-info");
    tradeInfo.scrollIntoView({
      behavior: "smooth",
    });
  }

  function removeElementFromState(array, idx){
    array.splice(idx, 1)
    return array
  }

  const removePokemon = (idx, isBlue) => {
    if(isBlue){
      setPokemonsBlue(removeElementFromState(pokemonsBlue, idx));
    } else{
      setPokemonsRed(removeElementFromState(pokemonsRed, idx));
    }
    setUpdateKey(key => key+1);
  }

  
  return (
    <Container>
      <TradeBox 
        pokemonsBlue={pokemonsBlue} pokemonsRed={pokemonsRed} checkTrade={checkTrade} removePokemon={removePokemon}/>
      <PokemonPicker pokemons={pokemons} getPokemon={getPokemon} previousPage={previousPage.current} nextPage={nextPage.current} goToNext={goToNext} goToPrevious={goToPrevious}/>
      {madeTrade > 0 && <TradeInfo redExp={redExp.current} blueExp={blueExp.current} fairness={fairness.current}/>}
    </Container>
  );
}

export default Home;