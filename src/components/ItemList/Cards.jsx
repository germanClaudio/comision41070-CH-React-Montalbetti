import React, { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, CardActionArea, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import BtnAddToCart from './BtnAddToCart'


const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('./src/items.json')
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, [])

  return (

    <div style={{
      display: 'inline-flex',
      marginLeft: '10',
      marginRight: '10'
    }} >
      <br />

      {cards.map(card => (

        <Card key={card.id}
          sx={{
            maxWidth: 280,
            display: 'inline',
            flexDirection: 'row',
            mx: 4,
            wrap: 'wrap',
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
                <h6><strong>{card.price}</strong> {card.cuota}</h6>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Stock Disponible: {card.stock}
              </Typography>
            </CardContent>
          </CardActionArea>

            <ItemCount titleProduct={card.title} stock={card.stock} />
            
          <CardActions>

          </CardActions>

          <Link to="../Items">
            Ver los medios de pago
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default Cards