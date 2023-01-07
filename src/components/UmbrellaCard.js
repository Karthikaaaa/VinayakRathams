import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Umbrella from '../Assets/Umbrella.jpeg';

export default function ActionAreaCard() {
  const handleUmbrellaClick = () => {
    alert('Umbrella')
  }
  return (
    <Card onClick={handleUmbrellaClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Umbrella}
          alt="Umbrella"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lighting Umbrella
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lighting Umbrella's will gives you an worderful look when the bride and groom is 
            coming in chariot or pallakku
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}