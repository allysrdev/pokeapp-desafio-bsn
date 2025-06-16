import PokeAppGallery from './PokeAppGallery';
import PokeAppHeader from './PokeAppHeader';
import { useState } from 'react';
import PokeAppFooter from './PokeAppFooter';

function PokeAppScreen() {
  return (
    <>
      <PokeAppHeader />
      <PokeAppGallery />
      <PokeAppFooter />
    </>
  );
}

export default PokeAppScreen;
