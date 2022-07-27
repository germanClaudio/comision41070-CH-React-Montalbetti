import { Box } from '@mui/system'
import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const { productId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const styleItemDetail = {
                      backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
                      fontSize: '1rem',
                      paddingTop: '5vh',
                      paddingBottom: '12vh',
                      marginTop: '8vh',
  }

  let url = `/src/items.json`;

  useEffect( () => {

    if (productId) {
      const timer = setTimeout(() => {
      
        fetch(url)
            .then((response) => response.json())
            // .then((json) => console.table(json))
            .then(json => setItem(json.find(item => item.id === Number(productId))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
  
      }, 1000);
       return () => clearTimeout(timer);
    }
 
}, [])
  
  return (
    <>
      <div style={styleItemDetail}>
          <h3><strong>Product Details</strong></h3>    
            <Box
                sx={{   flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center'
                }}
                style={{ width: '100%',
                        marginTop: '50px'}}>

              <div className="container my-5 mx-auto">
                  <ItemDetail item={item} loading={loading}/> 
              </div>

            </Box>
      </div>
    </>
  )
}

export default ItemDetailContainer
