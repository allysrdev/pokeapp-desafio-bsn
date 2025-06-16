import { Box } from '@mui/material';
import PokeCard from './PokeCard';
import { usePokemons } from '../contexts/usePokemons';
import { getPokemonImage } from '../utils/getPokemonImage';

function PokeAppGallery() {
  const { pokemons, pokeError } = usePokemons();

  if (pokeError) {
    return <p>Erro ao buscar dados dos pokemons</p>;
  }
  return (
    <Box component='div' className='p-8 flex flex-wrap justify-center gap-4'>
      {pokemons?.map((pokemon) => (
        <PokeCard name={pokemon.name} image={getPokemonImage(pokemon.url)} />
      ))}
    </Box>
  );
}

export default PokeAppGallery;
