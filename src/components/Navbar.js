import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
        </li>
        </ul>
         <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
         <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
         <label className="form-check-label"  htmlFor="switchCheckDefault">enable dark mode</label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
         <input className="form-check-input" type="checkbox" onClick={props.toggleMode2} role="switch" id="switchCheckDefault"/>
         <label className="form-check-label"  htmlFor="switchCheckDefault">enable green dark mode</label>
      </div>
    
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string,
    about:PropTypes.string
}
Navbar.defaultProps = {
    title:'set title here',
    about:'about here'
}