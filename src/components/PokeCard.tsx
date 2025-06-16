import { Box, IconButton } from '@mui/material';
import { getPokemonImage } from '../utils/getPokemonImage';
import { Favorite, OpenInNew } from '@mui/icons-material';

interface PokeCardProps {
  name: string;
  image: string;
}
function PokeCard({ name, image }: PokeCardProps) {
  return (
    <Box
      component='div'
      className={`w-64 h-72 flex flex-col items-center justify-center p-8 bg-zinc-300 border border-zinc-700 rounded-md shadow-md`}
    >
      <img src={getPokemonImage(image)} alt={name} width={250} height={250} />
      <div className='flex justify-center items-center'>
        <h1 className='text-xl font-bold'>{name.toUpperCase()}</h1>

        <IconButton>
          <Favorite color='warning' />
        </IconButton>
        <IconButton>
          <OpenInNew color='warning' />
        </IconButton>
      </div>
    </Box>
  );
}

export default PokeCard;
