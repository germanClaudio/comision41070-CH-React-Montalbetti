import React from 'react'

const Inicio = () => {

    const styleHome = {backgroundColor: '#d2d4e899', fontSize: '1rem', paddingTop: '20%', paddingBottom: '50%'}

  return (
    <div
        style={ styleHome }
    >
        <img src="./src/logoFacu.jpeg" alt="Logo Perfumes" width="250" height="170" title="La Chauffer"/>
        <h1>This is the <strong>Home</strong> Page</h1>
        <hr/>
        <h2>Page under construction!</h2>
        <img src="./src/underConstruction.jpg" alt="Underconstruction" width="150" height="139" title="Under Construction"/>
        <h3>Please, be patience our you can start coding with me... for free</h3>
        
    </div>
  )
}

export default Inicio