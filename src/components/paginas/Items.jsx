import React from 'react'
import ItemListContainer from '../ItemList/ItemListContainer'

const Items = (props) => {

    const styleItems = {backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
                        fontSize: '1rem',
                        paddingTop: '15vh',
                        paddingBottom: '50%',
                       }
    
  return (
    
    <div
    style={ styleItems }
    >
        <h1><strong>{props.greeting}</strong></h1>
        <hr/>
        {/* <h2>Page under construction!</h2> */}
        <ItemListContainer />
        <br/>
        {/* <img src="./src/underConstruction.jpg" alt="Under Construction" width="150" height="139" title="Under Construction"/> */}
        <h4>Please, be patience our you can start coding with me... for free</h4>
    </div>
  )
}

export default Items