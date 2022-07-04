import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea } from '@mui/material';

const ItemListContainer = () => {

  const [contador, setContador] = useState(0)
  const limite = 10

  const btnClick = () => {
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
        <button className="btn btn-success my-3"
                onClick={ btnClick }
        >
          Click me!
        </button>
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
                Contador: { contador }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Limite: { limite }
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary" onClick={btnClickMinus}>
              Click me to reduce counter figure!
            </Button>
          </CardActions>

        </Card>
    </>
  )
}

export default ItemListContainer