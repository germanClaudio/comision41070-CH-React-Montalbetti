import React, { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, CardActionArea, CardHeader, CircularProgress, Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { Box } from '@mui/system';


const Cards = () => {

  const [heading, setHeading] = useState(<Box sx={{ display: 'flex',
                                                    margin: '12rem'
                                                 }}>
                                                   Loading Cards..... 
                                          <CircularProgress color="success"/>
                                        </Box>)
  
  
  const [cards, setCards] = useState([]);
  let url = './src/items.json';

  useEffect(() => {

     const timer = setTimeout(() => {

      setHeading('')
      
      fetch(url)
          .then((response) => response.json())
          .then((json) => setCards(json))
          .catch(error => console.log(error));

     }, 2000);

       return () => clearTimeout(timer);
  }, [])

      return (
        <div 
        style={{
                display: 'inline-flex',
                marginLeft: '10',
                marginRight: '10'
        }} >
          <br />
          
          <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexWrap= 'wrap'>
          <h1>{heading}</h1>
          {cards.map(card => (
            
            <Card key={card.id}
              sx={{
                maxWidth: 270,
                display: 'inline',
                flexDirection: 'row',
                m: 4,
                flexWrap: 'wrap',
              }}
              elevation={24}
            >
              <CardHeader
                title={card.title}
                subheader={'Capacity: ' + card.capacity}
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="330"
                  image={card.image}
                  alt="Perfume Img"
                />
                <hr />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <h6><strong>${card.price}</strong> {card.cuota}</h6>
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Stock Disponible: {card.stock}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <ItemCount titleProduct={card.title} stock={card.stock} price={card.price} />

              <CardActions>

              </CardActions>

              <Link to="../Items">
                Ver los medios de pago
              </Link>
            </Card>
          ))}
          </Grid>
        </div>
      )
}

export default Cards