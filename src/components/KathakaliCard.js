import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Kathakali from '../Assets/Kathakali.jpeg';

export default function ActionAreaCard() {
  const handleKathakaliClick = () => {
    alert('Kathakali')
  }
  return (
    <Card onClick={handleKathakaliClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Kathakali}
          alt="Kathakali"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kathakali
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kathakali is a famous Kerala dance, It looks adorable when we have it in our functions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}