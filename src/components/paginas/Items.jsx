import React from 'react'

const Items = () => {

    const styleItems = {backgroundImage: "radial-gradient(circle, #eeaeca, #94bbe9)",
                        fontSize: '1rem',
                        paddingTop: '25%',
                        paddingBottom: '50%'
                    }

  return (
    <div
    style={ styleItems }
    >
        <h1>This is the <strong>Items</strong> Page</h1>
        <hr/>
        <h2>Page under construction!</h2>
        <img src="./src/underConstruction.jpg" alt="Under Construction" width="150" height="139" title="Under Construction"/>
        <h3>Please, be patience our you can start coding with me... for free</h3>
    </div>
  )
}

export default Items