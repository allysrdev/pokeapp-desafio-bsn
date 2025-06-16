export interface Pokemon {
  name: string;
  url: string;
}

export async function fetchPokemons(): Promise<Pokemon[]> {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );

  if (!res.ok) {
    throw new Error('Erro ao buscar pokemóns.');
  }

  const data = await res.json();
  return data.results;
}

export async function fetchPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error('Erro ao buscar pokemón.');
  }

  const data = await res.json();
  return data;
}
