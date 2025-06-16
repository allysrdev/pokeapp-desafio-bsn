import { Favorite, Home } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

function PokeAppFooter() {
  const [value, setValue] = useState(0);
  return (
    <footer className='fixed bottom-0 w-full'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: '#dedee1',
        }}
      >
        <BottomNavigationAction label='Home' icon={<Home />} />
        <BottomNavigationAction label='Favorites' icon={<Favorite />} />
      </BottomNavigation>
    </footer>
  );
}

export default PokeAppFooter;
