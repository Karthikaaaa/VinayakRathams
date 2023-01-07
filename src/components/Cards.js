import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chariot from '../Assets/Chariot.jpeg';

export default function ActionAreaCard(value) {
  const handleChariotClick = () => {
    alert('Chariot')
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={value.image}
          alt="Chariot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}