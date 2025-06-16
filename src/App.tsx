import PokeAppScreen from './components/PokeAppScreen';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PokemonProvider } from './contexts/usePokemons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeDetails from './components/PokeDetails';
import { FavoriteProvider } from './contexts/useFavourites';
import PokeFavorites from './components/PokeFavorites';
import PokeAppFooter from './components/PokeAppFooter';

function App() {
  return (
    <PokemonProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PokeAppScreen />} />
            <Route path='/pokemon/:name' element={<PokeDetails />} />
            <Route path='/favorites' element={<PokeFavorites />} />
          </Routes>
          <PokeAppFooter />
        </BrowserRouter>
      </FavoriteProvider>
    </PokemonProvider>
  );
}

export default App;
