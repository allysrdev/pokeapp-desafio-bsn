import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { fetchPokemons, type Pokemon } from '../services/pokeApi';

export const PokemonContext = createContext({
  pokemons: [] as Pokemon[] | null,
  setPokemons: (() => {}) as Dispatch<SetStateAction<Pokemon[] | null>>,
  pokeError: null as string | null,
});

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [pokeError, setPokeError] = useState<string | null>(null);
  useEffect(() => {
    fetchPokemons()
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .catch((error) => {
        setPokeError(error.message);
      });
  });

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, pokeError }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon deve ser usando dentro do PokemonProvider.');
  }

  return context;
}
