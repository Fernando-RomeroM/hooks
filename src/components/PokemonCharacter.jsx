// components/PokemonCharacter.jsx
import React from 'react';

const PokemonCharacter = ({ name, image }) => (
  <div>
    <h2>Personaje Pokemon</h2>
    <p>{name}</p>
    <img src={image} alt={name} />
  </div>
);

export default PokemonCharacter;
