import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';


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

    }, 1000);
     return () => clearTimeout(timer);
  }

}, [])

  return (
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
  )
}

export default ItemDetail