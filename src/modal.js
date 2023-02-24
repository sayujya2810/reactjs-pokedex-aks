import React from "react";
import pokeball from "./download.png";

const Modal = ({ setShowModal, pokemonData }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal">
          <div className="modal-flex-container">
            <div className="column-flex-container">
              <h1>{pokemonData.name}</h1>
              {pokemonData.types.map((item, index) => {
                let pokemonType = item.type.name;
                return (
                  <p key={index} className="type">
                    {pokemonType}
                  </p>
                );
              })}
            </div>
            <div className="id">
              <p>#{pokemonData.id}</p>
            </div>
          </div>
          <hr />
          <div className="flex">
            <div className="pokemon-data">
              <div className="abilities">
                {pokemonData.abilities.map((item, index) => {
                  let pokemonType = item.ability.name;
                  return (
                    <p key={index} className="">
                      Ability {index + 1}: {pokemonType}
                    </p>
                  );
                })}
              </div>
              <div className="stats">
                <p>Hit Points: {pokemonData.stats[0].base_stat}</p>
                <p>Attack: {pokemonData.stats[1].base_stat}</p>
                <p>Defence: {pokemonData.stats[2].base_stat}</p>
                <p>Special Attack: {pokemonData.stats[3].base_stat}</p>
                <p>Special Defense: {pokemonData.stats[4].base_stat}</p>
                <p>Speed: {pokemonData.stats[5].base_stat}</p>
              </div>
            </div>
            <div className="pokeImg">
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </div>
          </div>
          <hr />
          <div className="btn-container">
            <button onClick={() => setShowModal(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
