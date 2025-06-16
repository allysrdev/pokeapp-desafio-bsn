import { Box, IconButton } from '@mui/material';
import { getPokemonImage } from '../utils/getPokemonImage';
import { Favorite, OpenInNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../contexts/useFavourites';
import type { Pokemon } from '../services/pokeApi';

interface PokeCardProps {
  pokemon: Pokemon;
}
function PokeCard({ pokemon }: PokeCardProps) {
  const { name, url } = pokemon;
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // toggle add or remove favorite
  const toggleFavorite = () => {
    if (isFavorite(name)) {
      removeFavorite(pokemon);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <Box
      component='div'
      className={`w-64 h-72 flex flex-col items-center justify-center p-8 bg-zinc-300 border border-zinc-700 rounded-md shadow-md`}
    >
      <img src={getPokemonImage(url)} alt={name} width={250} height={250} />
      <div className='flex justify-center items-center'>
        <h1 className='text-xl font-bold'>{name.toUpperCase()}</h1>

        <IconButton onClick={toggleFavorite}>
          <Favorite
            className={isFavorite(name) ? 'border border-amber-300' : ''}
            color={isFavorite(name) ? 'success' : 'warning'}
          />
        </IconButton>
        <IconButton onClick={() => navigate(`/pokemon/${name}`)}>
          <OpenInNew color='warning' />
        </IconButton>
      </div>
    </Box>
  );
}

export default PokeCard;
