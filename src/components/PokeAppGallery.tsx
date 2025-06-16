import { Box, Button } from '@mui/material';
import PokeCard from './PokeCard';
import { usePokemons } from '../contexts/usePokemons';
import { getPokemonImage } from '../utils/getPokemonImage';
import { CircleLoader } from 'react-spinners';

function PokeAppGallery() {
  const {
    pokeError,
    loadingPokemons,
    filteredPokemons,
    nextPage,
    prevPage,
    currentPage,
  } = usePokemons();

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
    <Box
      component='div'
      className='p-8 pb-32 flex flex-wrap justify-center gap-4'
    >
      {filteredPokemons?.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}

      <div className='flex gap-4 mt-4 items-center justify-center'>
        <Button onClick={prevPage}>Página anterior</Button>
        <span>{currentPage + 1}</span>
        <Button onClick={nextPage}>Próxima página</Button>
      </div>
    </Box>
  );
}

export default PokeAppGallery;
