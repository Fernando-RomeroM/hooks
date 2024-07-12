// App.jsx
import React from 'react';
import useCustomHook from './hooks/useCustomHook';
import PokemonCharacter from './components/PokemonCharacter';
import RickCharacter from './components/RickCharacter';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

const App = () => {
  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useCustomHook(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useCustomHook(urlRick);

  if (pokemonLoading || rickLoading) return <p>Loading...</p>;
  if (pokemonError) return <p>Error loading Pokemon data: {pokemonError.message}</p>;
  if (rickError) return <p>Error loading Rick and Morty data: {rickError.message}</p>;

  return (
    <div>
      {pokemonData && <PokemonCharacter name={pokemonData.name} image={pokemonData.sprites.front_default} />}
      {rickData && <RickCharacter name={rickData.name} image={rickData.image} />}
    </div>
  );
};

export default App;
