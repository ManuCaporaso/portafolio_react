import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        mt: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">© 2024 Mi Portfolio - Laboratorio FullStack II - ITS Cipolletti</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Acerca De
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contacto
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
