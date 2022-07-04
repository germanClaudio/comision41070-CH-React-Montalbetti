import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea, Badge, Chip } from '@mui/material';

const ItemListContainer = () => {

  const [contador, setContador] = useState(0)
  const limite = 10

  const btnClickPlus = () => {
    if (contador === limite) {
      alert('El limite es: ' + limite + '\nEl contador volverá a cero (0).');
      setContador(0)
    }

    else if (contador >= 0) {
      setContador(contador + 1)
    }
  }

  const btnClickMinus = () => {
    contador === 0 ? setContador(contador) : setContador(contador - 1)
  }

  return (
    <>
        {/* <button className="btn btn-success my-3"
                onClick={ btnClickPlus }
        >
          Click me!
        </button> */}

        <Button size="small" variant="contained" color="error" onClick={btnClickPlus}
               sx={{
                m: 3,
                p: 1,    
                boxShadow: 3,            
              }}
              elevation={24}
            >
              Click me!
       </Button>

        <br/>
        <Card
              sx={{ maxWidth: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    mx: "auto",
              }}
              elevation={24}>

          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="./src/logoLaChauffer.png"
              alt="Logo"
            />
            <hr/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Badge badgeContent={contador} color="secondary" showZero>
                  <Chip label="Contador" color="warning" />
                </Badge>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Limite: { limite }
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" variant="contained" color="info" onClick={btnClickMinus}
               sx={{
                mx: 7.5,
              }}
            >
              Reduce counter!
            </Button>
          </CardActions>

        </Card>
    </>
  )
}

export default ItemListContainer