import PokeAppScreen from './components/PokeAppScreen';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PokemonProvider } from './contexts/usePokemons';

function App() {
  return (
    <PokemonProvider>
      <PokeAppScreen />
    </PokemonProvider>
  );
}

export default App;
