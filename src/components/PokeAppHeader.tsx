import { Box, TextField } from '@mui/material';
import logo from '../assets/LogoPokeApp.png';
import { usePokemons } from '../contexts/usePokemons';

function PokeAppHeader() {
  const { filterPokemons } = usePokemons();
  return (
    <Box
      component={'div'}
      className='bg-zinc-200 w-full p-10 flex flex-col items-center justify-center gap-8'
    >
      <Box component='div' className='flex items-center gap-8'>
        <img
          src={logo}
          alt='Logo PokeApp'
          className='w-24 h-24 object-fit rounded-full border-2 border-zinc-700'
        />
        <h1 className='text-5xl sm:text-6xl text-shadow-2xs font-bold text-zinc-700'>
          PokeApp
        </h1>
      </Box>

      <form className='flex flex-col items-center justify-center gap-2 w-80 sm:w-96'>
        <div className='flex'>
          <div>
            <label htmlFor='pesquisar-pokemon'>
              Digite o nome de um pokemon
            </label>
            <TextField
              id='pesquisar-pokemon'
              variant='outlined'
              placeholder='ex: ditto'
              onChange={(e) => filterPokemons(e.target.value)}
              className='w-full'
            />
          </div>
        </div>
      </form>
    </Box>
  );
}

export default PokeAppHeader;
