import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex',
           alignItems: 'center',
            marginRight: 3,
            bgcolor: 'grey',
            width: '100%'
             }}>
          <Avatar 
            alt="Logo" 
            src="/logo.png" 
            sx={{ 
              width: 200, 
              height: 200, 
              marginRight: 40,
             }} 
          />
          <Typography variant="h3">
            MI PORTAFOLIO - MANUEL ALEJANDRO CAPORASO
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
