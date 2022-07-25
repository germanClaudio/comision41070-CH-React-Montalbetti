import {React, createContext, Children, useState} from 'react'

  
export const CartContext = createContext([]);
  
  
const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (objProducto) => {
        setCartList([ objProducto ])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider