import React from 'react'
import ItemCount from './ItemCount';
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const ItemDetail = ( props ) => {

  const item = (props.item);
  const loading = (props.loading);
  
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
                Go Back <i className="fas fa-arrow-rotate-left"></i>
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
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
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