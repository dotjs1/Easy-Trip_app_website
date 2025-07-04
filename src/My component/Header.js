import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to='/'>Easy Trip</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" aria-current="page" to='/Aboutus'>About Us</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to='/blogs'>Our Blog</Link>
            </li>
          </ul>
          <button className="btn btn-outline-dark" type="button">Download App</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
