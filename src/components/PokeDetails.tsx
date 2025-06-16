import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../services/pokeApi';
import { Box, IconButton } from '@mui/material';
import { KeyboardReturn } from '@mui/icons-material';

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string; // hp, attack, defense, etc.
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    other?: {
      ['official-artwork']?: {
        front_default: string;
      };
    };
  };
}

function PokeDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (name) {
      fetchPokemon(name).then((pokemon) => setPokemon(pokemon));
    }
  }, []);
  return (
    <Box
      component={'div'}
      className='p-8 w-full h-full flex flex-col items-center justify-center gap-8'
    >
      <div className='flex items-center justify-center gap-4'>
        <IconButton onClick={() => window.history.back()}>
          <KeyboardReturn color='warning' />
        </IconButton>
        <h1 className='text-3xl font-bold mb-4 text-shadow-2xs'>
          {pokemon?.name.toUpperCase()}
        </h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <img
          src={pokemon?.sprites.front_default}
          width={250}
          height={250}
          className='bg-zinc-300 border border-zinc-700 rounded-md'
        />
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <h2 className='text-xl font-bold mb-4 text-shadow-2xs'>TIPOS:</h2>
        <ul className='list-disc list-inside'>
          {pokemon?.types.map((type) => {
            return <li key={type.type.name}>{type.type.name}</li>;
          })}
        </ul>

        <h2 className='text-xl font-bold mb-4 text-shadow-2xs'>HABILIDADES:</h2>
        <ul className='list-disc list-inside'>
          {pokemon?.abilities.map((ability) => {
            return <li key={ability.ability.name}>{ability.ability.name}</li>;
          })}
        </ul>
        <h2 className='text-xl font-bold mb-4 text-shadow-2xs'>STATUS BASE:</h2>
        <ul className='list-disc list-inside'>
          {pokemon?.stats.map((stat) => {
            return <li key={stat.stat.name}>{stat.stat.name}</li>;
          })}
        </ul>
        <h2 className='text-xl font-bold mb-4 text-shadow-2xs'>
          ALTURA E PESO:
        </h2>
        <ul className='list-disc list-inside'>
          <li>{pokemon?.height}m</li>
          <li>{pokemon?.weight}kg</li>
        </ul>
      </div>
    </Box>
  );
}

export default PokeDetails;
