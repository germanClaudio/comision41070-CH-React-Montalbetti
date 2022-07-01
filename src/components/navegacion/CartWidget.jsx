// import React from 'react'
import React, { useState } from "react";

const CartWidget = () => {

  const [counter, setCounter] = useState(0)
  const stock = 10

  const handleClick1 = () => {

    if (counter === stock) {
      alert('No hay mas stock disponible. El limite es: ' + stock)
    }

    else if (counter >= 0) {
      setCounter(counter + 1)

    }
  }

  const handleClick2 = () => {
    counter === 0 ? setCounter(counter) : setCounter(counter - 1)
  }


  return (
    <div className="nav-item my-auto mx-3 px-3">
      <button className="btn btn-danger btn-sm me-2 btn-circle"
        onClick={handleClick2}
      >
        <i className="fas fa-minus"></i>
      </button>

      <div className="badge rounded-pill bg-dark mx-auto position-relative">
        <i className="fas fa-cart-plus">
          <span className="position-relative top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {counter}
          </span>
        </i>
      </div>

      <button className="btn btn-success btn-sm ms-2 btn-circle"
        onClick={handleClick1}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
}

export default CartWidget