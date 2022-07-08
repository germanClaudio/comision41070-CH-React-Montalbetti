import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';


const BtnAddToCart = (props) => {

    const contador = props.counter;
    const product = props.titleProduct

    const btnAddToChart = () => {
        let text = ""
        contador === 1 ? text = "item was" : text = "items were"

        Swal.fire({
            icon: 'success',
            title: `${contador} Item ${product} added to Cart`,
            text: `Excelent! ${contador} ${text} added to your cart succesfully!!!`,
            footer: 'Keep buying!!'
        })
    }

    return (
            <Button size="small" variant="contained" color="secondary" onClick={btnAddToChart} 
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