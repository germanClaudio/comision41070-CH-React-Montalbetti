import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ( ) => {

  const { productId } = useParams()

  const styleItemDetail = {
                      backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
                      fontSize: '1rem',
                      paddingTop: '5vh',
                      paddingBottom: '50%',
                      marginTop: '8vh',
  }
  
  return (
    <div style={styleItemDetail}>
        <h3>Product Details</h3>    
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
                <ItemDetail idProduct={productId}/>
            </div>

          </Box>
    </div>
  )
}

export default ItemDetailContainer