import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea, Badge, Chip, ButtonGroup, Fab } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'

const Cards = () => {

  const cards = [{   
                    id : 0,   
                    image : "./src/imgPerfumes/bossIntenseMas.png",
                    title : "Perfume Hombre Boos Intense 90ml",
                    price : "$3.990",
                    cuota : "en 12x $565.82",
                    stock : 10,
                 },
                //  {  
                //     id : 1, 
                //     image : "./src/imgPerfumes/bossBlackMas.png",
                //     title : "Perfume Hombre EDT Boos Black x 100 ml",
                //     price : "$3.543",
                //     cuota : "en 6x $590.50 (S/Int)",
                //     stock : 8,
                //  },
                //  {  
                //     id : 2, 
                //     image : "./src/imgPerfumes/bossBlackMas.png",
                //     title : "Perfume Hombre ??????? x 90 ml",
                //     price : "$6.243",
                //     cuota : "en 12x $902.44",
                //     stock : 10,
                //  }
                ];  

  const [contador, setContador] = useState(1)
  const limite = 10

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
      title: `${contador} Item added to Chart`,
      text: `Excelent! ${contador} ${text} added to your chart succesfully!!!`,
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
                }}

            elevation={24}
      >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={card.image}
              alt="Perfume Img"
            />
            <hr/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5>{card.title}</h5>
                <h6><strong>{card.price}</strong> {card.cuota}</h6>
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                Stock Disponible: {limite}
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
                    Add to chart                  
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