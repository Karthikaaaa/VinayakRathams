import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Horse from '../Assets/Horse.jpeg';

export default function ActionAreaCard() {
  const handleHorseClick = () => {
    alert('Horse')
  }
  return (
    <Card onClick={handleHorseClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Horse}
          alt="Horse"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dancing Horses
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We do offer dancing horses for all your functions, We have practiced horses to dance
            based on the band/Chendamelam tune.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}