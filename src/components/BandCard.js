import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Band from '../Assets/Band.jpeg';

export default function ActionAreaCard() {
  const handleBandClick = () => {
    alert('Band')
  }
  return (
    <Card onClick={handleBandClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Band}
          alt="Band"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Band and nashik dhol
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We offers band and nashik dhol for all types of functions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}