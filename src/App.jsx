import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import About from './components/paginas/About';
import Items from './components/paginas/Items';
import Cart from './components/paginas/Cart';

const ItemDetailContainer = lazy(()=> import('./components/itemList/ItemDetailContainer'))

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
          <Route index path="/inicio" element={ <Inicio /> } />
          <Route path="/items" element={ <Items /> } />
          <Route path="/items/:categoryId" element={ <Items /> } />
          <Route path='/ItemDetailContainer/:productId'
              element={
                <Suspense fallback={ <div className="loading">Loading...</div>}>
                  <ItemDetailContainer />
                </Suspense>
              }
          />
          <Route path="/about" element={ <About /> } />
          <Route path="/cart" element={ <Cart /> } />

          <Route path="*" element={ <Navigate to="/inicio" /> } />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App