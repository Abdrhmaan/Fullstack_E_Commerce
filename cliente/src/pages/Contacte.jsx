
import React from 'react'

import Layout from '../components/Layout';
import {toast } from "react-toastify"

const Contacte = () => {
// src/components/Contact.js

  return (
    <Layout title={'Conatct-page'}>

<button onClick={() => toast.error("cde")}>toast</button>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Please use the form below to get in touch.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 d-flex align-items-center">
  <img
    src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/6/shutterstock_1710910393.jpg" // Adjust the image source and dimensions as needed
    alt="Contact Image"
    className="img-fluid mx-auto" // Use "mx-auto" to center the image horizontally
  />
</div>
      </div>
    </div>
    </Layout>
  );
};




export default Contacte