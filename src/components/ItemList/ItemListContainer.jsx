import React, { useState } from 'react'

// const warningMessage = () => {
//    alert("I've told you...This App is under construction!\nPlease, be patience....")
// }

const ItemListContainer = () => {

  const [contador, setContador] = useState(0)
  const limite = 10

  const btnClick = () => {
    if (contador === limite) {
      alert('El limite es: ' + limite + '\nEl contador volverá a cero (0).');
      setContador(0)
    }

    else if (contador >= 0) {
      setContador(contador + 1)
    }
  }

  return (
    <>
        <button className="btn btn-primary my-3"
                // onClick={ warningMessage }
                onClick={ btnClick }
        >
          Click me!
        </button>
        <br/>
        <div className="d-inline-flex alert alert-secondary" role="alert">
           Contador: { contador } / 10
        </div>
    </>
  )
}

export default ItemListContainer