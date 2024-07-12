// components/RickCharacter.jsx
import React from 'react';

const RickCharacter = ({ name, image }) => (
  <div>
    <h2>Personaje Rick and Morty</h2>
    <p>{name}</p>
    <img src={image} alt={name} />
  </div>
);

export default RickCharacter;
