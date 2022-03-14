import Container from '../../components/PageContainer';
import TradeBox from '../../components/TradeBox';
import PokemonPicker from '../../components/PokemonPicker';

function Home() {
  return (
    <Container>
      <TradeBox />
      <PokemonPicker />
    </Container>
  );
}

export default Home;