import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Layout title={'about E commerce'}>

  

<div className="about-container">
  <div className="about-header">
    <h1 className="about-title">Welcome to Our E-Commerce Store</h1>
    <p className="about-description">
      We're dedicated to providing you with a seamless online shopping experience.
    </p>
  </div>
  <div className="about-content">
    <div className="about-image">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MkRLwNvFG70PZUtazufPAAHpZ3DrSw7N1w&usqp=CAU"
        alt="About Us"
        className="about-image"
      />
    </div>
    <div className="about-text">

    
    </div>
  </div>
  <div className="about-cta">
  <p>We're dedicated to providing you with a seamless online shopping experience. </p>
    <p>Ready to start shopping?</p>
   
       
    <Link to="/" className="about-shop-button">Explore Our Products</Link>
  </div>
</div>





    </Layout>
  )
}

export default About