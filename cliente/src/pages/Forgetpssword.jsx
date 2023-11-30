
import React, { useState } from "react";
import Layout from '../components/Layout';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const Forgetpssword = () => {

    const [email, setEmail] = useState('');
    const [newpssword, setNewpssword] = useState("");
    const [anser, setAnser] = useState("");
  
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault()
       
        try {
          const res = await axios.post('http://localhost:9800/forgot', {
       
            email,
            newpssword,
            
          });
          console.log(res.data)
          if (res && res.data.success) {
            toast.success(res.data. message)
            navigate("/");
          
          } else {
            toast.success(res.data. message)
          
            return
          }
      
        
      
        } catch (error) {
          console.log(error);
         
        }
      
       }
  
    // form function
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
                
                <input type="text" defaultValue={newpssword} className="form-control" id='password' placeholder="Enter your password"
                
                onChange={(e) => setNewpssword(e.target.value)}/>
              </div>
           
            
             
                <button type="submit" className="btn btn-primary">forget pssword </button>
             
              
              </form>
            </div>
          </div>
        
        </div>
        </Layout>
    )

}

export default Forgetpssword