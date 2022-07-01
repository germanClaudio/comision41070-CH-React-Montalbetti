//import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import About from './components/paginas/About';
import Items from './components/paginas/Items';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const styleApp = {backgroundColor: '#d2d4e899', fontSize: '1.25rem'}

  return (
    <div 
        className="App"
        style={ styleApp }
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/inicio" exact element={ <Inicio /> } />
          <Route path="/items" element={ <Items greeting="This is the Items Page"/> } />
          <Route path="/about" element={ <About greeting="This is the About Page"/> } />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App