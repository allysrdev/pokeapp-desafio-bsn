export function getPokemonImage(url: string) {
  const segments = url.split('/').filter(Boolean);
  const lastSegment = segments.pop();

  const id = lastSegment?.replace('.png', '');

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return imageUrl;
}
