import { Box, CircularProgress, Grid } from '@mui/material';
import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';


const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const { categoryId } = useParams();

  let url = '/src/items.json';  // https://api.npoint.io/349bd201b61cd782fcad 
  
  useEffect(() => {

    if (categoryId) {
      const timer = setTimeout(() => {
        
        fetch(url)
            .then((response) => response.json())
            //.then((json) => console.table(json))
            .then(json => setCards(json.filter(card => card.category === categoryId)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
       }, 2000);
         return () => clearTimeout(timer);
      
    } else {
      const timer = setTimeout(() => {
        
        fetch(url)
            .then((response) => response.json())
            .then(json => setCards(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
       }, 1000);
         return () => clearTimeout(timer);
    }
  
  }, [categoryId])


  return (
    <Box sx={{  flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
    }} style={{ width: '100%' }}>

    { 
      loading ?
          <Box sx={{  display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: '12rem',
                      paddingBottom: '10%' 
                  }}>
                    <h2>Loading Items.....</h2> 
              <CircularProgress color="success" thickness={6} size="3rem"/>
          </Box>
        
      :

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
              <ItemList cards={cards} />
              
          </Grid>
      </Grid>
  }  
    </Box>
                    
  )
}

export default ItemListContainer