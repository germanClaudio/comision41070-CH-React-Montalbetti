import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../itemList/ItemLIstContainer'

const Items = ( ) => {

  const styleItems = {
    backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
    fontSize: '1rem',
    paddingTop: '12vh',
    paddingBottom: '15%',
  }
  const {categoryId} = useParams()

  return (
    <div
      style={styleItems}
    >
      <h1><strong>Category Items {categoryId}</strong></h1>
      <hr />
        <ItemListContainer />
      <br />
    </div>
  )
}

export default Items