import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chandai from '../Assets/Chandai.jpeg';

export default function ActionAreaCard() {
  const handleChandaiClick = () => {
    alert('Chandai')
  }
  return (
    <Card onClick={handleChandaiClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Chandai}
          alt="Chandai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chendamelam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chendamelam is a musical instruments, The Chenda is used as a percussion instrument for almost all Kerala art forms like Kathakali, Kodiyattam, Theyyam etc.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}