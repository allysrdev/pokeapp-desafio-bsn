import { Box } from '@mui/material';
import PokeCard from './PokeCard';
import { usePokemons } from '../contexts/usePokemons';
import { getPokemonImage } from '../utils/getPokemonImage';
import { CircleLoader } from 'react-spinners';

function PokeAppGallery() {
  const { pokeError, loadingPokemons, filteredPokemons } = usePokemons();

  if (pokeError) {
    return <p>Erro ao buscar dados dos pokemons</p>;
  }
  if (loadingPokemons) {
    return (
      <div className='w-full h-1/2 flex items-center justify-center'>
        <CircleLoader />
      </div>
    );
  }
  return (
    <Box component='div' className='p-8 flex flex-wrap justify-center gap-4'>
      {filteredPokemons?.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Box>
  );
}

export default PokeAppGallery;
