import {React, createContext, useState, useContext} from 'react'

  
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)
  
const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    
    const addToCart = (objProducto) => {
        const cartCopy = cartList.slice();
            const index = cartCopy.findIndex((item) => objProducto.id === item.id);
            
            if (index === -1) {
            cartCopy.push({ ...objProducto, quantity: objProducto.quantity });
            
            } else {
                const product = cartCopy[index];
                cartCopy[index] = { ...product, quantity: objProducto.quantity, totalPrice: objProducto.totalPrice };
            }
            setCartList(cartCopy);
    };
    
    const emptyCart = () => {

        setCartList([]);
    }

    const removeItem = (id) => {
        const newList = cartList.filter((item) => item.id !== id);
        setCartList(newList);
    }

    const getCartCount = () => {
        return cartList.length;
        // =======OR=========
        //return cart.reduce((total, product) => total + product.count, 0);
      };

    const getCartTotal = () => {
        return cartList.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
    };
    
    const getItemTotal = () => {
        return cartList.reduce(
          (total, item) => total + item.quantity,
          0
        );
    };  

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            removeItem,
            getCartCount,
            getCartTotal,
            getItemTotal,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider