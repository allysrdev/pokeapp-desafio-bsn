import { Favorite, Home } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PokeAppFooter() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
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
        <BottomNavigationAction
          onClick={() => navigate('/')}
          label='Home'
          icon={<Home />}
        />
        <BottomNavigationAction
          onClick={() => navigate('/favorites')}
          label='Favorites'
          icon={<Favorite />}
        />
      </BottomNavigation>
    </footer>
  );
}

export default PokeAppFooter;
