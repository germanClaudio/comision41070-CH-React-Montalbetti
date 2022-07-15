import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const ItemDetail = ( props ) => {

  const id = (props.idProduct);
  const [loading, setLoading] = useState(true); 
  const [item, setItem] = useState([]);
  
  let url = `/src/items.json`;   //./src/items.json

 useEffect( () => {
  if (id) {
    const timer = setTimeout(() => {
    
      fetch(url)
          .then((response) => response.json())
          // .then((json) => console.table(json))
          .then(json => setItem(json.find(item => item.id === Number(id))))
          .catch(error => console.log(error))
          .finally(() => setLoading(false));

    }, 1500);
     return () => clearTimeout(timer);
  }

}, [])

  return (
    
    <>
      <Card sx={{ display: 'flex',
                  margin: 15,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  padding: 5
                }}
                elevation={24}>
                  
        <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #2580AF', paddingRight: '3rem', paddingLeft: '2rem'}}>
          <CardHeader
                  title={item.title} 
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Item category {item.category} <br/>
              {'Edition: ' + item.capacity} <br/>
            <hr/> 
              <h6><strong>Precio ${item.price}</strong> o {item.cuota}</h6> <br/>
              Stock Disponible: {item.stock} 
            </Typography>

            <Typography variant="caption" color="text.secondary" component="div">
              Item id: {item.id} <br/>
            </Typography>

            <hr/>
          </CardContent>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: 1, pb: 1 }}>
            
            <ItemCount titleProduct={item.title} stock={item.stock} price={item.price} />

            <Link to={'/'} className="btn btn-secondary btn-sm mt-4">
                Go Back
            </Link>
        
          </Box>
            
        </Box>
        
        {loading ? 
          <Box sx={{  display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 'auto',
                      height: '100%',
                      width: '100%'
                  }}>
                    <h5>Loading Picture... </h5>
                    <CircularProgress color="secondary" thickness={5}/>
          </Box>
        :
        
          <CardMedia
            
            component="img"
            sx={{ width: 300,
                  margin: 'auto',
                  borderRadius: '.5rem', 
                  boxShadow: '#3d343a 2px 0px 8px'
                  
                }}
            image={item.image}
            alt="Perfume Img"
          />
        }

      </Card>
    </>

  )
}

export default ItemDetail