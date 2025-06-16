import { Box } from '@mui/material';
import React from 'react';
import type { Pokemon } from '../services/pokeApi';
import PokeCard from './PokeCard';

interface PokeFavoriteGalleryProps {
  favorites: Pokemon[];
}

function PokeFavoriteGallery(props: PokeFavoriteGalleryProps) {
  const { favorites } = props;
  return (
    <Box
      component='div'
      className='p-8 pb-32 flex flex-wrap justify-center gap-4'
    >
      {favorites.length > 0 ? (
        favorites.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))
      ) : (
        <p>Ainda não há pokemons favoritos</p>
      )}
    </Box>
  );
}

export default PokeFavoriteGallery;
