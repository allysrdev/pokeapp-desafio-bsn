import PokeAppScreen from './components/PokeAppScreen';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PokemonProvider } from './contexts/usePokemons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeDetails from './components/PokeDetails';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokeAppScreen />} />
          <Route path='/pokemon/:name' element={<PokeDetails />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
