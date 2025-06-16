import { useEffect, useState } from 'react';
import { fetchPokemons } from '../services/pokeApi';

function PokeAppScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemons()
      .then((res) => console.log(res))
      .catch(setError);
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!pokemons) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Pokémon</h1>
    </>
  );
}

export default PokeAppScreen;
