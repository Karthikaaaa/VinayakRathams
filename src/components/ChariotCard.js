import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chariot from '../Assets/Chariot.jpeg';

export default function ActionAreaCard() {
  const handleChariotClick = () => {
    alert('Chariot')
  }
  return (
    <Card onClick={handleChariotClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Chariot}
          alt="Chariot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chariot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We offers you many types of chariots like velvet, Bahubali, Titanic, Pushpa and so on., 
            with 2 and 4 horses.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}