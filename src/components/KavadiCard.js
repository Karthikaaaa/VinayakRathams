import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Kavadi from '../Assets/Kavadi.jpeg';

export default function ActionAreaCard() {
  const handleKavadiClick = () => {
    alert('Kavadi')
  }
  return (
    <Card onClick={handleKavadiClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Kavadi}
          alt="Kavadi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kavadi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are providing Kerala based Kavadi's for all kind of functions
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}