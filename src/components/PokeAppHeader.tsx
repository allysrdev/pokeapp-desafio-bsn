import { Box } from '@mui/material';
import logo from '../assets/LogoPokeApp.png';

function PokeAppHeader() {
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
    </Box>
  );
}

export default PokeAppHeader;
