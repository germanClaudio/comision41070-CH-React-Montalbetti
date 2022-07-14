import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ( ) => {

  const { productId } = useParams()
  
  return (
    <>    
          <Box
              sx={{   flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignContent: 'center'
              }}
              style={{ width: '100%',
                      marginTop: '100px'}}>

            <div className="container my-5 mx-auto">
                <ItemDetail idProduct={productId}/>
            </div>

          </Box>
    </>
  )
}

export default ItemDetailContainer