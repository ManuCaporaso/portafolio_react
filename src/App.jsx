import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ marginTop: 2, marginBottom: 8 }}> {/* Ajusta el margen inferior para el espacio del footer */}
        <MainContent />
      </Container>
      <Footer />
    </>
  );
};

export default App;
