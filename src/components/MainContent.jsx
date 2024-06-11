import React from 'react';
import { Container, Grid } from '@mui/material';
import PortfolioItem from './PortfolioItem';

const MainContent = () => {
  const items = [
    { title: 'Pagina fullstack Node - React', description: 'Proyecto presentado en Generacion T 2024' },
    { title: 'Pagina fullstack Node', description: 'Proyecto presentado en Codo a Codo 2024' },
    { title: 'Pagina fullstack PHP', description: 'Proyecto presentado en Codo a Codo 2024' },
    { title: 'Pagina fullstack Python', description: 'Proyecto presentado en Codo a Codo 2023' },
    { title: 'Argentina Programa Python', description: 'Proyecto presentado en Argentina Programa 2023' },
    { title: 'Argentina Programa Front End', description: 'Proyecto presentado en Argentina Programa 2023' }
    
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <PortfolioItem title={item.title} description={item.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainContent;
