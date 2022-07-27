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

import { useCartContext } from '../../context/CartContext';


const ItemCount = ({ item, stock, initial}) => {

    // const initial = props.initial;
    const [contador, setContador] = useState(initial);
    // const limite = props.stock;
    // const productTitle = props.titleProduct;
    
    /* ----------------- */
    const price = item.price;
    let totalPrice = parseFloat(contador * price);
    const [add, setAdd ] = useState(false);
    
    const { addToCart, cartList } = useCartContext()

    const onAddToChart = () => {
        let text = ""
        contador === 1 ? text = "item was" : text = "items were"

        addToCart({ ...item, quantity: contador, totalPrice: totalPrice})
        
        Swal.fire({
            icon: 'success',
            title: `${contador} Item ${item.title} added to Cart`,
            text: `Excelent! ${contador} ${text} added to your cart succesfully!!!`,
            footer: `Total price: $${totalPrice} - Keep buying!!`,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Click on "Finalizar Compra"',
        })
        setAdd(!add)
    }

    /* ----------------- */

    const btnClickPlus = () => {
        
        if (contador === stock) {
            Swal.fire({
                icon: 'warning',
                title: `Límite de Stock de ${item.title}`,
                text: `El stock es: ${stock}, el contador volverá a uno (${initial}).`,
                footer: 'Keep buying!!'
            })
            setContador(initial)
        }

        else if (contador >= 1) {
            setContador(contador + 1)
        }
    }

    const btnClickMinus = () => {
        contador === initial ? setContador(contador) : setContador(contador - 1)
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