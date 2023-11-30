
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

import Layout from '../../components/Layout';
const Signup = () => {

 // src/components/SignupPage.js
 const [name, setNmae] = useState('');
 const [email, setEmail] = useState('');
 const [password , setPassword] = useState('');
 const [phone , setPhone] = useState('');
 const [adress , setAdress] = useState('');
  
 const [anser , setAnser] = useState('');
 
 const navigate = useNavigate();

 const handlesubmit = async (e) => {
  e.preventDefault()
 
  try {
    const res = await axios.post('http://localhost:9800/registar', {
      name,
      email,
      password,
      adress,
      phone
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }

  

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }

 }



  return (
    <Layout>
    <div className="container h-100">




  
       
      <div className="row h-100 justify-content-center align-items-start" style={{ marginTop: '180px' }}>
        <div className="col-md-6">
          <h1 className='text-center m-10'>Signup Page</h1>
          <form onSubmit={handlesubmit}>
            <div className="mb-3">
            
              <input type="text" defaultValue={name} className="form-control"id='name'  placeholder="Enter your name" 
              onChange={(e) => setNmae(e.target.value)}
              
              />
            </div>
            <div className="mb-3">
            
              <input type="text" defaultValue={email} className="form-control" id='email' placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
              
              />
            </div>
            
            <div className="mb-3">
            
            <input type="text" defaultValue={password} className="form-control" id='password' placeholder="Enter your password"
            
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="mb-3">
            
            <input type="text" defaultValue={anser} className="form-control" id='anser' placeholder="Enter your forvvite"
            
            onChange={(e) => setAnser(e.target.value)}/>
          </div>
          <div className="mb-3">
            
            <input type="text" defaultValue={phone} className="form-control" id='phone' placeholder="Enter your phone" 
            
            onChange={(e) => setPhone(e.target.value)}/>
          </div>
        
          <div className="mb-3">
            
            <input type="text" defaultValue={adress} className="form-control" id='adress' placeholder="Enter your adres" 
                onChange={(e) => setAdress(e.target.value)}/>
          </div>
        
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    
    </div>
    </Layout>
  );
};



export default Signup