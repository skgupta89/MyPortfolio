import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PortFo<span className='lio'>lio</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navlink" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <Link to='/'> */}
          <a className="nav-link active" rel="noreferrer" aria-current="page" href="/">Home</a>
          {/* </Link> */}
        </li>
        <li className="nav-item">
        {/* <Link to='/skills' > */}
          <a className="nav-link active" rel="noreferrer" aria-current="page" href="#skills">Skills</a>
          {/* </Link> */}
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" rel="noreferrer" aria-current="page" href="#work">Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" rel="noreferrer" aria-current="page" href="#contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar