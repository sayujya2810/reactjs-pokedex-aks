import React, { useState, useEffect } from "react";
import Modal from "./modal";
import pokeball from "./download.png";

function PokeCard({ id }) {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getPokemon = async (id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const result = await fetch(url);
      const data = await result.json();
      setPokemonData(data);
      setLoading(false);
    };
    getPokemon(id);
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div
        className="pokecard"
        key={pokemonData.id}
        onClick={() => setShowModal(true)}
      >
        <div className="img-container">
          <img src={pokeball} alt={pokemonData.name} className="pokemon-img" />
        </div>
        <div className="poke-info">
          <h4 className="name">{pokemonData.name}</h4>
          <div className="pokemon-types">
            {pokemonData.types.map((item, index) => {
              let pokemonType = item.type.name;
              return <p key={index}>{pokemonType}</p>;
            })}
          </div>
        </div>
        <div className="id">
          <p>#{pokemonData.id}</p>
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} pokemonData={pokemonData} />
      )}
    </>
  );
}
export default PokeCard;
