import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import Layout from '../../components/Layout';
import { useAuth } from '../../components/contex/Contex';



const Login = () => {
    const {auth,setAuth} = useAuth()
console.log(auth)

   
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');

    
    const navigate = useNavigate();
   
    const handlesubmit = async (e) => {
     e.preventDefault()
    
     try {
       const res = await axios.post('http://localhost:9800/login', {
    
         email,
         password,
         
       });
       console.log(res.data)
       if (res && res.data.success) {
         toast.success(res.data && res.data.message);
         setAuth({
            ...auth,
            user : res.data.user,
            token : res.data.token
         })
         localStorage.setItem("auth" ,JSON.stringify(res.data))
         navigate("/");
       } else {
         toast.error(res.data.message);
         return
       }
   
     
   
     } catch (error) {
       console.log(error);
       toast.error("Something went wrong");
     }
   
    }
    
  return (
    <Layout title={'login-page'}>
    <div className="container h-100">




  
       
      <div className="row h-100 justify-content-center align-items-start" style={{ marginTop: '180px' }}>
        <div className="col-md-6">
          <h1 className='text-center m-10'>login Page</h1>
          <form onSubmit={handlesubmit}>
          
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
            <button
              type="sumbit"
              className="btn btn-primary"
            
            >
           Login
            </button>
            </div>
       
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgetpssword");
              }}
            >
              Forgot Psword
            </button>
          </div>
          
  
       
     
   
         
           
            
          
          </form>
         
        </div>
      </div>
    
    </div>
    </Layout>
  )
}

export default Login