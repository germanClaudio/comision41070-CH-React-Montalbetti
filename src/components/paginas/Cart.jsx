import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { Avatar, Button, Card, CardContent, Alert, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const Cart = () => {

  const { cartList, emptyCart, removeItem, getCartCount, getCartTotal } = useCartContext()
  console.log('Precio de todos los items: ' + getCartTotal);
  
  return (
    <div
      style={{
        backgroundImage: "radial-gradient(circle, #857e7e99, #c9dfdd, #cad9c3)",
        fontSize: '1rem',
        paddingTop: '12vh',
        paddingBottom: '100%',
        width: '100%',
      }}>

      { getCartCount() === 0 ?
        <Card sx={{ maxWidth: 950, margin: 'auto', padding: '10', bgcolor: '#ac9cac99' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Shopping Cart is <strong>EMPTY!</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chosse an Item and you will see it here!
            </Typography>
          </CardContent>
        </Card>
        
      :
      <>
        <Card sx={{ maxWidth: 950, margin: 'auto', padding: '10', bgcolor: '#ac9cac99' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Your Shopping Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is your Items List — <strong>Keep buying!</strong>
          </Typography>
        </CardContent>
      </Card>
    
      <div className="my-3">
        {cartList.map(item => (

          <List key={item.id}
            sx={{ width: '100%', maxWidth: 860, bgcolor: 'background.paper', margin: "auto", padding: "1rem" }}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Image Perfum" src={item.image} variant="rounded"
                  sx={{ width: 136, height: 136, margin: "auto 2rem" }}
                />
              </ListItemAvatar>
              <Divider orientation="vertical" flexItem role="presentation" />

              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      Quantity: {item.quantity} <br />
                      Item Price: ${item.price} <br />
                    </Typography>
                    Category: {item.category} <br />
                    Edition: {item.capacity} <br />
                    Id#: {item.id}
                  </React.Fragment>
                }
              />
              <Button size="small" variant="contained" color="error" onClick={() => removeItem(item.id)}
                sx={{
                  mx: 'auto',
                  my: 4,
                  p: 0.5,
                }}
                elevation={24}
              >
                <DeleteIcon />
              </Button>
            </ListItem>

            <Divider>
              Total Items Price: <strong>${item.totalPrice}</strong>
            </Divider>
          </List>

        ))}
      </div>

      <Alert variant="filled" severity="success"
        sx={{ maxWidth: 950, margin: 'auto', padding: '10' }}>
        <strong> Total Cart Price: $ {getCartTotal()} </strong>
      </Alert>

      <Button size="small" variant="contained" color="secondary" onClick={emptyCart}
        sx={{
          mx: 'auto',
          my: 3,
          p: 1,
        }}
        elevation={24}
      >
        Empty Cart
        <RemoveShoppingCartTwoToneIcon />
      </Button>
      </>
      }
      <br /> 
      <Link to={'/'} className="btn btn-secondary btn-sm my-1">
        Go Back <i className="fas fa-arrow-rotate-left"></i>
      </Link>
    </div>
  )
}

export default Cart