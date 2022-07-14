import React from 'react'
import ItemListContainer from '../itemList/ItemLIstContainer'

const About = (props) => {

    const styleAbout = {backgroundImage: "radial-gradient(circle, #74EBD5, #9FACE6, #b2fefa)",
                        fontSize: '1rem',
                        paddingTop: '12vh',
                        paddingBottom: '50%'
                    }

  return (
    <div
      style={styleAbout}
    >
      <h1><strong>Items Femeninos</strong></h1>
      <hr />
        <ItemListContainer />
      <br />
    </div>
  )
}

export default About