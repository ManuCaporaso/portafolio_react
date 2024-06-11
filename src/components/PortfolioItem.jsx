import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PortfolioItem = ({ title, description }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography mt={2} variant="h4">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
