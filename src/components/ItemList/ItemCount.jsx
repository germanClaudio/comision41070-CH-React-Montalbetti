import { ButtonGroup, Chip, Fab } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from 'sweetalert2';
import BtnAddToCart from './BtnAddToCart';

const ItemCount = (props) => {

    const [contador, setContador] = useState(1)
    const limite = props.stock;
    const productTitle = props.titleProduct;
    // const price = props.price;

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
        <BtnAddToCart counter={contador} titleProduct={props.titleProduct} price={props.price}/>
    </> 
    )
}

export default ItemCount