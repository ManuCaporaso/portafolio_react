import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
          <Avatar 
            alt="Logo" 
            src="/logo.png" 
            sx={{ width: 180, height: 180, marginRight: 5 }} 
          />
          <Typography variant="h4">
            MI PORTAFOLIO - MANUEL ALEJANDRO CAPORASO
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
