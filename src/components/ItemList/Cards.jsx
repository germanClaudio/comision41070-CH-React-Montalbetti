import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, CardActionArea, CardHeader, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Cards = ( props) => {

  const cards = props.cards;

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
                subheader={'Edition: ' + card.capacity}
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

              <ItemCount titleProduct={card.title}
                                stock={card.stock}
                                price={card.price}
                                image={card.image}
                                cuota={card.cuota}
                                capacity={card.capacity}
              />

              <CardActions>
              </CardActions>
                  
                  <Link to={`/ItemDetailContainer/${card.id}`} className="btn btn-secondary btn-sm my-3 "
                  >
                      See Product's Detail
                  </Link>
            
            </Card>
          ))}
          </Grid>
        </div>
      )
}

export default Cards