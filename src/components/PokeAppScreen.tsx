import { useEffect, useState } from 'react';
import { fetchPokemons } from '../services/pokeApi';
import PokeAppHeader from './PokeAppHeader';

function PokeAppScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemons()
      .then((res) => console.log(res))
      .catch(setError);
  }, []);

  return (
    <>
      <PokeAppHeader />
      {/* <PokeAppGallery /> */}
      {/* <PokeAppFooter /> */}
    </>
  );
}

export default PokeAppScreen;
