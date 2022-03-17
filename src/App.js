import Home from './pages/Home'
import Header from './components/Header';
import Modal from 'react-modal';
import { useState } from 'react';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  const storedTrades = JSON.parse(localStorage.getItem("trades"));

  return (
    <>
      <Header openModal={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button style={{backgroundColor: "#272955", borderRadius: "5px", color: "white"}} onClick={closeModal}>close</button>
        <h2>My trades</h2>
        {storedTrades?.map((trade) => (
          <>
            <div>{trade?.date}</div>
            <div>Blue Side Pokemons: {trade?.pokemonsBlue?.map((pokemon) => (<span style={{textTransform: "capitalize"}}>{pokemon.name+" "}</span>))}</div>
            <div>Red Side Pokemons: {trade?.pokemonsRed?.map((pokemon) => (<span style={{textTransform: "capitalize"}}>{pokemon.name+" "}</span>))}</div>
            <div>Fairness: {trade?.fairness}</div>
            <br></br>
          </>
        ))}
      </Modal>
      <Home />
    </>
  );
}

export default App;
