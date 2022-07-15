import React from 'react'

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
      <h1><strong>About page</strong></h1>
      <hr />
        {/* <ItemListContainer /> */}
      <br />
    </div>
  )
}

export default About