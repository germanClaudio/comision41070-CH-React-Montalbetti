import React from 'react'

const About = () => {

    const styleAbout = {backgroundImage: "radial-gradient(circle, #74EBD5, #9FACE6, #b2fefa)",
                        fontSize: '1rem',
                        paddingTop: '25%',
                        paddingBottom: '50%'
                    }

  return (
    <div
    style={ styleAbout }
    >
        <h1>This is the <strong>About</strong> Page</h1>
        <hr/>
        <h2>Page under construction!</h2>
        <img src="./src/underConstruction.jpg" alt="Underconstruction" width="150" height="139" title="Under Construction"/>
        <h3>Please, be patience our you can start coding with me... for free</h3>
    </div>
  )
}

export default About