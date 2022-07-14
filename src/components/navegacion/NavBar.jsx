import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light navBackground">
        <div className="container-fluid">
          <Link to="/Inicio">
            <img src="/src/logoLaChauffer.png" className="logoMarca" alt="Logo La Chuaffer" width="150" height="70" title="Logo La Chauffer"/>
          </Link>
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-nowrap" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-5">
                <NavLink className={({isActive})=>isActive ? 'nav-link-active' : 'nav-link' } to="/Inicio"><i className="fas fa-laptop-house me-1"></i> Home</NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink className={({isActive})=>isActive ? 'nav-link-active' : 'nav-link' } to="/Items/masculino"><i className="fas fa-air-freshener me-1"></i> Items Masculinos</NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink className={({isActive})=>isActive ? 'nav-link-active' : 'nav-link' } to="/Items/femenino"><i className="fas fa-air-freshener me-1"></i> Items Femeninos</NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <Link to="/Cart">
                <CartWidget />
              </Link>  
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar