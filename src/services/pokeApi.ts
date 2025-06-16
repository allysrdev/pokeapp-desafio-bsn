export async function fetchPokemons() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );

  if (!res.ok) {
    throw new Error('Erro ao buscar pokemóns.');
  }

  const data = await res.json();
  return data.results;
}
