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
  nextPage: () => {},
  prevPage: () => {},
  currentPage: 0 as number,
});

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [pokeError, setPokeError] = useState<string | null>(null);
  const [loadingPokemons, setLoadingPokemons] = useState<boolean>(true);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[] | null>(
    pokemons
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const LIMIT = 30;

  useEffect(() => {
    fetchPokemons(LIMIT, currentPage * LIMIT)
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .catch((error) => {
        setPokeError(error.message);
      })
      .finally(() => {
        setLoadingPokemons(false);
      });
  }, [currentPage]);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons, currentPage]);

  function filterPokemons(name: string) {
    if (!pokemons) {
      return;
    }
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function prevPage() {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
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
        nextPage,
        prevPage,
        currentPage,
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
