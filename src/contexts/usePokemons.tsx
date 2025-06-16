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
  loadingPokemons: true as boolean,
  filterPokemons: (() => {}) as (name: string) => void,
  filteredPokemons: null as Pokemon[] | null,
});

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [pokeError, setPokeError] = useState<string | null>(null);
  const [loadingPokemons, setLoadingPokemons] = useState<boolean>(true);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[] | null>(
    pokemons
  );

  useEffect(() => {
    fetchPokemons()
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .catch((error) => {
        setPokeError(error.message);
      })
      .finally(() => {
        setLoadingPokemons(false);
      });
  }, []);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  function filterPokemons(name: string) {
    if (!pokemons) {
      return;
    }
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        pokeError,
        loadingPokemons,
        filteredPokemons,
        filterPokemons,
      }}
    >
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
