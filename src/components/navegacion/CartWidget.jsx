import React from "react";
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

  // const [counter, setCounter] = useState(0)
  
  const {getCartCount} = useCartContext();

  return (
    <div className="nav-item my-auto mx-3 px-3">
      
      <div className="badge rounded-pill bg-dark mx-auto position-relative">
      
        <i className="fas fa-cart-plus">
          <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {getCartCount()}
          </span>
         
        </i>
      
      </div>

    </div>
  )
}

export default CartWidget