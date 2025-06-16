import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPokemons, type Pokemon } from '../services/pokeApi';

export const FavoriteContext = createContext({
  favorites: [] as Pokemon[],
  addFavorite: (pokemon: Pokemon) => {},
  removeFavorite: (pokemon: Pokemon) => {},
  isFavorite: (pokeName: string) => false as boolean,
});

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(pokemon: Pokemon) {
    setFavorites([...favorites, pokemon]);
  }

  function removeFavorite(pokemon: Pokemon) {
    const newFavorites = favorites.filter((fav) => fav.name !== pokemon.name);
    setFavorites(newFavorites);
  }

  function isFavorite(pokeName: Pokemon['name']) {
    return !!favorites.some((fav) => fav.name === pokeName);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite deve ser usando dentro do FavoriteProvider.');
  }

  return context;
}
