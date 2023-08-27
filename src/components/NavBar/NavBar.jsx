import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 end-0 w-100 z-2">
  <div className="container">
    <Link className="navbar-brand text-info fs-2" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-info bg-info"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link text-info active"  to="" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info " to="about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info " to="contact" >Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
