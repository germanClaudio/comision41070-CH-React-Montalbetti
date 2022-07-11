import React from 'react'
import ItemListContainer from '../ItemList/ItemListContainer'

const Items = (props) => {

  const styleItems = {
    backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
    fontSize: '1rem',
    paddingTop: '15vh',
    paddingBottom: '50%',
  }
  
  return (
    <div
      style={styleItems}
    >
      <h1><strong>{props.greeting}</strong></h1>
      <hr />
        <ItemListContainer />
      <br />

      <h4>Please, be patience our you can start coding with me... for free</h4>
    </div>
  )
}

export default Items