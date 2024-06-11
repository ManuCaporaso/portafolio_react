import React from 'react';
import { Container, Grid } from '@mui/material';
import PortfolioItem from './PortfolioItem';

const MainContent = () => {
  const items = [
    { title: 'Pagina full stack Python', description: 'Description for project 1' },
    { title: 'Project 2', description: 'Description for project 2' },
    { title: 'Project 3', description: 'Description for project 3' }
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
