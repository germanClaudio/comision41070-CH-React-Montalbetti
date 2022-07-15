import { Box, Grid } from '@mui/material';
import React from 'react'
import Cards from './Cards';

const ItemListContainer = () => {

  return (
    <Box sx={{  flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
    }} style={{ width: '100%' }}>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 8 }}
             direction="column"
             justifyContent="center"
             alignItems="center"
             flexWrap= 'wrap'
      >
          <Grid item xs={1} sm={4} md={4}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            flexWrap= 'wrap'
          > 
              <Cards />
              
          </Grid>
      </Grid>
    </Box>
        
  )
}

export default ItemListContainer