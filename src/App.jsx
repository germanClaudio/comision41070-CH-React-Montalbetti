import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import About from './components/paginas/About';
import Items from './components/paginas/Items';

function App() {
  const styleApp = {backgroundColor: '#d2d4e899', fontSize: '1.25rem'}

  const warning = () => {
    alert('App under construction! Be patience....')
  }

  return (
    <div 
        className="App"
        style={ styleApp }
        //onClick={ warning }  
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/inicio" exact element={ <Inicio /> } />
          <Route path="/items" element={ <Items /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App