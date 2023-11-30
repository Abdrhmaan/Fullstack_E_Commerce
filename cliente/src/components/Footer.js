import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
    <h1 className="text-center">All Right Reserved &copy; xaan</h1>
    <p className="text-center mt-3">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contacte</Link>
        <Link to="/policy" >Policy</Link>
   
    </p>
  </div>
  )
}

export default Footer