import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material'
import Swal from 'sweetalert2';


const BtnAddToCart = (props) => {

    const contador = props.counter;
    const product = props.titleProduct;
    const price = props.price;
    
    let totalPrice = parseFloat(contador * price);
    
    const onAddToChart = () => {
        let text = ""
        contador === 1 ? text = "item was" : text = "items were"

        Swal.fire({
            icon: 'success',
            title: `${contador} Item ${product} added to Cart`,
            text: `Excelent! ${contador} ${text} added to your cart succesfully!!!`,
            footer: `Total price: $${totalPrice} - Keep buying!!`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to Cart!',
            cancelButtonText: 'Keep Buying!'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cart!',
                'Vamos al carrito!!',
                'success'
              )
            }
          })
    }

    return (
            <Button size="small" variant="contained" color="secondary" onClick={onAddToChart} 
            sx={{
                mx: 'auto',
                p: 1,
            }}
            elevation={24}
            >
                Add to cart
                <AddShoppingCartIcon />
            </Button>
    )
}

export default BtnAddToCart