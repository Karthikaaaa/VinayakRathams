import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Elephant from '../Assets/Elephant.jpeg';

export default function ActionAreaCard() {
  const handleElephantClick = () => {
    alert('Elephant')
  }
  return (
    <Card onClick={handleElephantClick} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={Elephant}
          alt="Elephant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Elephant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As elephants are the replica for lord, We are offering elephants for temple Kaja poojai.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}