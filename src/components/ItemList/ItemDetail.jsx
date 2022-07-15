import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';


// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Divider from '@mui/material/Divider';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';



const ItemDetail = ( props ) => {
  
  const [item, setItem] = useState([]);
  const itemId = (props.idProduct-1)
  
  let url = `/src/items.json`;   //./src/items.json

 useEffect( () => {
  if (itemId) {
    const timer = setTimeout(() => {
      
      fetch(url)
          .then((response) => response.json())
          //.then((json) => console.table(json))
          .then(json => setItem(json[itemId]))
          .catch(error => console.log(error));

    }, 1500);
     return () => clearTimeout(timer);
  }

}, [])

  return (
/*
      <>
            <div className="container my-5"
               style={{ maxWidth: '45%',
                        maxHeight: '60%',
                        marginTop: '100px'
                        }}>
                          Item category {item.category}
            <Card >
                  <CardHeader
                    title={item.title} 
                    subheader={'Capacity: ' + item.capacity}
                  />
                  <CardActionArea>
                  
                    <CardMedia
                      component="img"
                      height="450"
                      image={item.image}
                      alt="Perfume Img"
                    />
                    <hr />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        <h6><strong>Precio ${item.price}</strong> o {item.cuota}</h6>
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Stock Disponible: {item.stock}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <ItemCount titleProduct={item.title} stock={item.stock} price={item.price} />

                </Card>
           
        </div>
        
    </>
   */ 
    
    <>
    <Card sx={{ display: 'flex',
                margin: 15,
                padding: 5
              }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #2580AF', paddingRight: '2rem'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Item category {item.category} <br/>
            {'Capacity: ' + item.capacity} <br/>
          <hr/>
            <h6><strong>Precio ${item.price}</strong> o {item.cuota}</h6> <br/>
            Stock Disponible: {item.stock} 
          </Typography>
          <br/>
        </CardContent>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: 1, pb: 1 }}>
          
          <ItemCount titleProduct={item.title} stock={item.stock} price={item.price} />
       
        </Box>
          
      </Box>
      
      <CardMedia
        component="img"
        sx={{ width: 300,
              margin: 'auto',
              borderRadius: '.25rem', 
              boxShadow: '#8d848a 2px 0px 8px'
              
             }}
        image={item.image}
        alt="Perfume Img"
      />
    </Card>


    </>
    
    
    
  )
}

export default ItemDetail