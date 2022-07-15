import React from 'react'
import ItemListContainer from '../ItemList/ItemLIstContainer'

const Inicio = () => {

    const styleHome = { backgroundImage: "radial-gradient(circle, #857e7e99, #c9dfdd, #cad9c3)",
                        fontSize: '1rem',
                        paddingTop: '12vh',
                        paddingBottom: '5vh'
                    }

  return (
    <div
        style={ styleHome }
    >
        <img className="imgHomePage" src="./src/logoLaChauffer.png" alt="Logo Perfumes" width="250" height="170" title="La Chauffer"/>
        <h1>This is the <strong>Home</strong> Page</h1>
        <div>
            <hr />
              <ItemListContainer />
            <br />
          </div>
        
    </div>
  )
}

export default Inicio