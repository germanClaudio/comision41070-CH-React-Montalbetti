import React, { useState } from "react";

const CartWidget = () => {

  const [counter, setCounter] = useState(0)
  
  return (
    <div className="nav-item my-auto mx-3 px-3">
      
      <div className="badge rounded-pill bg-dark mx-auto position-relative">
      
        <i className="fas fa-cart-plus">
          <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {counter}
          </span>
         
        </i>
      
      </div>

    </div>
  )
}

export default CartWidget