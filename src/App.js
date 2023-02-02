import React, { useState } from "react";
import pokemonlogo from "./pokemon.png";
import PokeCard from "./PokeCard";
import Pagination from "./pagination";

function App() {
  const [id, setId] = useState({ startId: 1, endId: 10 });
  const [range, setRange] = useState(10);
  const [input, setInput] = useState(10);
  const pokeId = () => {
    let pokemon = [];
    for (let i = id.startId; i <= id.endId; i++) {
      pokemon.push(<PokeCard id={i} key={i} />);
    }
    return pokemon;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRange = parseInt(input);
    setRange(newRange);
    updateGen(1, newRange);
  };
  function updateGen(start, end) {
    setId({ startId: start, endId: end });
  }
  return (
    <>
      <div className="header-flex-container">
        <img src={pokemonlogo} alt="logo" className="logo-img" />
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className="search"
            value={input}
            min="1"
            max="100"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="filter-btn">
            Search
          </button>
        </form>
      </div>
      <div className="pokemonCards">{pokeId()}</div>
      <div className="flex-container">
        <div>
          <Pagination updateGen={updateGen} range={range}></Pagination>
        </div>
      </div>
    </>
  );
}
export default App;
