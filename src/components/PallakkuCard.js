import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pallaku from '../Assets/Pallaku.jpeg';

export default function ActionAreaCard() {
  const handlePallakkuClick = () => {
    alert('pallaku')
  }
  return (
    <Card onClick={handlePallakkuClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={pallaku}
          alt="Pallakku"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pallakku
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In ancient days, Pallakku was used to carry the queens.
            Now a days, we are using to carry the queen like brides on their memorable day.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}