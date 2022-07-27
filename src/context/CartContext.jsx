import {React, createContext, useState, useContext} from 'react'

  
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)
  
const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (objProducto) => {
        setCartList([
                ...cartList,
                objProducto ])
    }

    const emptyCart = () => {
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider