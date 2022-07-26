import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from 'sweetalert2';
import { ButtonGroup, Chip, Fab } from '@mui/material'
// import BtnAddToCart from './BtnAddToCart';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ItemCount = (props) => {

    const [contador, setContador] = useState(1)
    const limite = props.stock;
    const productTitle = props.titleProduct;
    // const price = props.price;

    /* ----------------- */

    const product = props.titleProduct;
    const price = props.price;
    
    let totalPrice = parseFloat(contador * price);

    const [add, setAdd ] = useState(false);
    
    const onAddToChart = () => {
        let text = ""
        contador === 1 ? text = "item was" : text = "items were"

        Swal.fire({
            icon: 'success',
            title: `${contador} Item ${product} added to Cart`,
            text: `Excelent! ${contador} ${text} added to your cart succesfully!!!`,
            footer: `Total price: $${totalPrice} - Keep buying!!`,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Go to Cart!',
        })
        setAdd(!add)
    }

    /* ----------------- */

    const btnClickPlus = () => {
        
        if (contador === limite) {
            Swal.fire({
                icon: 'warning',
                title: `Límite de Stock de ${productTitle}`,
                text: `El stock es: ${limite}, el contador volverá a uno (1).`,
                footer: 'Keep buying!!'
            })
            setContador(1)
        }

        else if (contador >= 1) {
            setContador(contador + 1)
        }
    }

    const btnClickMinus = () => {
        contador === 1 ? setContador(contador) : setContador(contador - 1)
    }


    return (

        add ?
          <Link to="../Cart" className="btn btn-success mx-auto my-2">
            Finalizar Compra 
            <ShoppingCartCheckoutIcon />
          </Link>

        :

        <>
        <ButtonGroup disableElevation variant="contained">
            <Fab size="small" color="primary" aria-label="add" onClick={btnClickMinus}
                sx={{
                    mx: 5,
                }}
            >
                <RemoveIcon />
            </Fab>

            <Chip label={contador} color="warning"
                sx={{
                    mx: 'auto',
                }}
            />

            <Fab size="small" color="success" aria-label="add" onClick={btnClickPlus}
                sx={{
                    mx: 5,
                }}
            >
                <AddIcon />
            </Fab>
            
        </ButtonGroup>
        <hr />
        {/* <BtnAddToCart counter={contador} titleProduct={props.titleProduct} price={props.price}/> */}

        <Button size="small" variant="contained" color="secondary" onClick={onAddToChart}
            sx={{
                mx: 'auto',
                p: 1,
            }}
            elevation={24}
            >
                Add to Cart
                <AddShoppingCartIcon />
        </Button>       

    </> 
    )
}

export default ItemCount