import React, { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea, Badge, Chip, ButtonGroup, Fab, CardHeader } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'


const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect( () => {
      fetch('./src/items.json')
      .then((response) => response.json())
      .then((json) => setCards(json));
  },[])
  
  
  const [contador, setContador] = useState(1)
  const limite = 10;

  const btnClickPlus = () => {
    if (contador === limite) {
      Swal.fire({
        icon: 'warning',
        title: `Límite de Stock`,
        text: `El stock es: ${limite}, el contador volverá a uno (1).`,
        footer: '<h5>Keep buying!!</h5>'
      })
      setContador(1)
    }

    else if (contador >= 1) {
      setContador(contador + 1)
    }
  }

  const btnClickMinus = () => {
    contador === 1 ? setContador(contador) : setContador(contador - 1)
  }

  const btnAddToChart = () => {
    let text = ""
    contador === 1? text = "item was" : text= "items were"
    
    Swal.fire({
      icon: 'success',
      title: `${contador} Item added to Cart`,
      text: `Excelent! ${contador} ${text} added to your cart succesfully!!!`,
      footer: '<h5>Keep buying!!</h5>'
    })
    setContador(1)
  }

  return (

    <div style={{ display: 'inline-flex',
                  marginLeft: '10',
                  marginRight: '10'
                }} >
      <br/>

      {cards.map(card => (

      <Card key={card.id}

            sx={{ maxWidth: 280,
                  display: 'inline',
                  flexDirection: 'row',
                  mx: 4,
                  wrap: 'wrap',
                }}

            elevation={24}
      >
          <CardHeader
            title={card.title}
            subheader= {'Capacity: ' + card.capacity}
          />
          <CardActionArea>
            <CardMedia
              component="img"
              height="330"
              image={card.image}
              alt="Perfume Img"
            />
            <hr/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h6><strong>{card.price}</strong> {card.cuota}</h6>
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                Stock Disponible: {card.stock}
              </Typography>
            </CardContent>
          
          </CardActionArea>
              <ButtonGroup disableElevation variant="contained">
                    <Fab size="small" color="primary" aria-label="add" onClick={btnClickMinus}
                        sx={{
                            mx: 5,
                        }}
                        >
                            <RemoveIcon />
                    </Fab>    

                      <Chip label={ contador } color="warning"
                          sx={{
                            mx: 'auto',
                          }}
                      />
                    
                    <Fab size="small" color="success" aria-label="add" onClick={btnClickPlus}
                    sx={{
                        mx: 5,
                      }}
                      >
                        <AddIcon />
                    </Fab>
              </ButtonGroup>
              
              <CardActions>
                <Badge badgeContent={contador}  color="error" showZero
                  sx={{
                    mx: 'auto',
                    p: 1,    
                  }}
                  elevation={24}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  >
                  <Button size="small" variant="contained" color="secondary" onClick={btnAddToChart} >
                    Add to cart                  
                      <AddShoppingCartIcon />
                  </Button>
                </Badge>
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